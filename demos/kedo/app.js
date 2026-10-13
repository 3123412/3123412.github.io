
/* KEDO_MESSAGES_CSS_BOOT_515 */
window.__KEDO_CLEAN_MESSAGES_CSS_514="/* KEDO MESSAGES CLEAN REBUILD 5.55.10 */\n.kedo-messages-root{\n  width:min(1100px,calc(100% - 40px));\n  height:min(690px,calc(100vh - 165px));\n  min-height:520px;\n  margin:10px auto 16px;\n  display:grid;\n  grid-template-columns:285px minmax(0,1fr);\n  overflow:hidden;\n  border:1px solid #d8e4e9;\n  border-radius:16px;\n  background:#fff;\n  box-shadow:0 12px 30px rgba(24,61,81,.06);\n  color:#24485b;\n  box-sizing:border-box;\n}\n.kmx-sidebar{\n  min-width:0;min-height:0;display:flex;flex-direction:column;\n  background:#f8fafb;border-right:1px solid #e2eaee;\n}\n.kmx-sidebar-head{\n  display:flex;align-items:flex-start;justify-content:space-between;\n  padding:17px 15px 10px;\n}\n.kmx-eyebrow{font-size:7px;letter-spacing:.14em;font-weight:800;color:#8a9da6}\n.kmx-sidebar-head h1{margin:4px 0 0;font-size:21px;line-height:1;color:#173f58;letter-spacing:-.02em}\n.kmx-new{\n  width:32px;height:32px;border:1px solid #d4e2e7;border-radius:9px;\n  background:#fff;color:#2d718b;font-size:17px;cursor:pointer;\n}\n.kmx-search{position:relative;padding:0 12px 9px}\n.kmx-search span{position:absolute;left:23px;top:9px;color:#8ea0a8;font-size:12px}\n.kmx-search input{\n  width:100%;height:38px;box-sizing:border-box;padding:0 10px 0 30px;\n  border:1px solid #d4e2e7;border-radius:10px;background:#fff;outline:none;\n  font-size:10px;color:#294c5e;\n}\n.kmx-search input:focus{border-color:#75a9bf;box-shadow:0 0 0 3px rgba(76,145,174,.08)}\n.kmx-filters{display:flex;gap:3px;padding:0 12px 8px}\n.kmx-filters button{\n  height:27px;padding:0 8px;border:1px solid transparent;border-radius:8px;\n  background:transparent;color:#7b9099;font-size:8px;font-weight:750;cursor:pointer;\n}\n.kmx-filters button.active{background:#e8f4f8;border-color:#cfe2e8;color:#2d718d}\n.kmx-section{\n  display:flex;justify-content:space-between;align-items:center;\n  padding:0 13px 6px;color:#8b9ba3;font-size:7px;letter-spacing:.11em;\n  font-weight:800;text-transform:uppercase;\n}\n.kmx-contacts{flex:1;min-height:0;overflow:auto;padding:0 8px 10px}\n.kmx-contact{\n  width:100%;display:flex;align-items:center;gap:8px;margin:2px 0;padding:8px;\n  border:1px solid transparent;border-radius:11px;background:transparent;text-align:left;cursor:pointer;\n}\n.kmx-contact:hover{background:#f0f7f9}\n.kmx-contact.active{background:#e9f4f8;border-color:#d0e2e8;box-shadow:inset 3px 0 #4d96b1}\n.kmx-avatar{\n  width:38px;height:38px;min-width:38px;border-radius:10px;display:grid;place-items:center;\n  background:#e8f2f5;border:1px solid #d7e6eb;color:#2d718c;font-size:9px;font-weight:800;\n}\n.kmx-contact-main{min-width:0;flex:1}\n.kmx-contact-top,.kmx-contact-bottom{display:flex;align-items:center;gap:6px;min-width:0}\n.kmx-contact-top strong{\n  flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;\n  color:#234a5e;font-size:10.5px;\n}\n.kmx-contact-top small{font-size:7px;color:#98a7ad}\n.kmx-contact-bottom{margin-top:3px}\n.kmx-contact-bottom span{\n  flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;\n  color:#8a9ca4;font-size:7.8px;\n}\n.kmx-contact-bottom i{font-style:normal;color:#5b8c9f;font-size:8px;letter-spacing:1px}\n.kmx-empty-side{padding:28px 14px;text-align:center;color:#8c9ca3;font-size:9px}\n\n.kmx-chat{\n  min-width:0;min-height:0;height:100%;display:flex;flex-direction:column;\n  background:#f4f8fa;\n}\n.kmx-chat-head{\n  flex:0 0 58px;height:58px;display:flex;align-items:center;justify-content:space-between;\n  padding:8px 12px;border-bottom:1px solid #dfe8ec;background:#fff;\n}\n.kmx-person{display:flex;align-items:center;gap:8px;min-width:0}\n.kmx-person .kmx-avatar{width:36px;height:36px;min-width:36px}\n.kmx-person strong{display:block;color:#173f58;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.kmx-person span{display:block;margin-top:2px;color:#8b9ba3;font-size:7.5px}\n.kmx-tools{display:flex;gap:4px}\n.kmx-tools button{\n  width:29px;height:29px;border:1px solid #d4e1e6;border-radius:8px;\n  background:#fbfdfe;color:#6c8490;font-size:10px;cursor:pointer;\n}\n.kmx-tools button:hover,.kmx-tools button.active{background:#edf6f8;color:#2d718d;border-color:#c7dce4}\n\n.kmx-find{\n  display:none;align-items:center;gap:6px;height:34px;padding:4px 9px;\n  border-bottom:1px solid #dfe8ec;background:#fff;\n}\n.kmx-find.open{display:flex}\n.kmx-find input{flex:1;border:0;outline:none;font-size:9px}\n.kmx-find button{border:0;background:transparent;color:#8999a1;font-size:15px;cursor:pointer}\n\n.kmx-history{\n  flex:1;min-height:0;overflow:auto;padding:16px 20px;\n  background:radial-gradient(circle at 10% 0%,rgba(207,231,239,.16),transparent 28%),linear-gradient(180deg,#fafcfd,#f3f7f9);\n}\n.kmx-history::-webkit-scrollbar{width:7px}\n.kmx-history::-webkit-scrollbar-thumb{background:#c9d8de;border:2px solid transparent;background-clip:padding-box;border-radius:999px}\n.kmx-day{display:flex;align-items:center;gap:7px;margin:9px 0 7px;color:#8d9ca3;font-size:6.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}\n.kmx-day:before,.kmx-day:after{content:\"\";height:1px;background:#dfe8ec;flex:1}\n.kmx-day span{padding:3px 8px;border:1px solid #dbe7eb;border-radius:999px;background:rgba(255,255,255,.72)}\n.kmx-row{display:flex;width:100%;margin:3px 0;position:relative}\n.kmx-row.other{justify-content:flex-start}.kmx-row.own{justify-content:flex-end}\n.kmx-bubble{\n  max-width:min(71%,610px);min-width:52px;padding:8px 10px 7px;\n  border:1px solid #d9e5ea;border-radius:14px;background:#fff;color:#294b5c;\n  box-shadow:0 2px 7px rgba(19,57,76,.025);\n}\n.kmx-row.own .kmx-bubble{\n  background:linear-gradient(180deg,#3a83b0,#3178a7);\n  border-color:#2f77a6;color:#fff;box-shadow:0 3px 10px rgba(39,103,145,.09);\n}\n.kmx-text{font-size:11px;line-height:1.48;word-break:break-word}\n.kmx-meta{display:flex;justify-content:flex-end;gap:3px;margin-top:4px;font-size:6.7px;color:#91a1a8}\n.kmx-row.own .kmx-meta{color:rgba(255,255,255,.7)}\n.kmx-meta em{font-style:normal;opacity:.72}\n.kmx-reply{\n  display:block;width:100%;box-sizing:border-box;margin:0 0 6px;padding:6px 7px;\n  border:0;border-left:2px solid #6ba5b8;border-radius:7px;background:#f1f7f9;\n  color:#486b7b;text-align:left;cursor:pointer;\n}\n.kmx-reply small,.kmx-reply span{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.kmx-reply small{font-size:6.5px}.kmx-reply span{margin-top:2px;font-size:8px}\n.kmx-row.own .kmx-reply{background:rgba(255,255,255,.12);border-left-color:rgba(255,255,255,.78);color:#fff}\n.kmx-rx-line{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:3px;margin-top:4px}\n.kmx-row.own .kmx-rx-line{justify-content:flex-end}\n.kmx-rx{\n  height:19px;min-width:23px;padding:0 5px;border:1px solid #d6e2e7;border-radius:999px;\n  background:#fff;color:#5b7884;font-size:8px;cursor:pointer;\n}\n.kmx-row.own .kmx-rx{background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.26);color:#fff}\n.kmx-pinned .kmx-bubble{box-shadow:0 0 0 2px rgba(73,145,173,.17),0 5px 14px rgba(19,57,76,.06)}\n.kmx-pinned .kmx-meta i{font-style:normal}\n\n.kmx-composer{\n  flex:0 0 auto;display:flex;align-items:flex-end;gap:7px;padding:8px 9px 9px;\n  background:#fff;border-top:1px solid #dce7eb;box-shadow:0 -4px 12px rgba(20,57,76,.03);\n}\n.kmx-attach{\n  width:36px;height:36px;min-width:36px;border:1px solid #d4e2e7;border-radius:9px;\n  background:#fbfdfe;color:#377d98;font-size:16px;cursor:pointer;\n}\n.kmx-compose-main{flex:1;min-width:0}\n.kmx-composer textarea{\n  width:100%;box-sizing:border-box;height:36px;min-height:36px;max-height:92px;resize:none;\n  padding:8px 10px;border:1px solid #cedee5;border-radius:9px;background:#fbfdfe;\n  outline:none;font:inherit;font-size:10.5px;color:#2a4b5b;\n}\n.kmx-composer textarea:focus{border-color:#74a8bf;box-shadow:0 0 0 3px rgba(67,138,169,.07);background:#fff}\n.kmx-send{\n  height:36px;min-width:76px;padding:0 13px;border:0;border-radius:9px;\n  background:#3179a7;color:#fff;font-weight:700;font-size:9px;cursor:pointer;\n}\n.kmx-send:disabled{opacity:.6}\n.kmx-hint{padding:2px 1px 0;color:#93a1a8;font-size:6.5px}\n\n.kmx-menu,.kmx-rx-menu{\n  position:fixed;z-index:2147483647;border:1px solid #d4e2e7;background:rgba(255,255,255,.98);\n  box-shadow:0 14px 32px rgba(19,57,76,.14);backdrop-filter:blur(10px);\n}\n.kmx-menu{width:178px;padding:5px;border-radius:11px}\n.kmx-menu button{width:100%;height:31px;border:0;border-radius:8px;background:transparent;color:#3e5f6e;text-align:left;padding:0 8px;font-size:9.5px;cursor:pointer}\n.kmx-menu button:hover{background:#edf6f8;color:#2d718d}\n.kmx-menu .danger{color:#a56767}\n.kmx-rx-menu{display:flex;gap:3px;padding:4px;border-radius:11px}\n.kmx-rx-menu button{width:30px;height:30px;border:0;border-radius:8px;background:transparent;font-size:15px;cursor:pointer}\n.kmx-rx-menu button:hover{background:#eef6f8}\n\n.kmx-file-preview{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:4px}\n.kmx-file{display:inline-flex;align-items:center;gap:5px;padding:3px 6px;border:1px solid #d7e3e8;border-radius:7px;background:#f4f9fa;color:#57727e;font-size:7px}\n.kmx-file button{border:0;background:transparent;color:#88989f;cursor:pointer}\n\n@media(max-width:900px){\n  .kedo-messages-root{width:calc(100% - 24px);grid-template-columns:255px minmax(0,1fr)}\n  .kmx-bubble{max-width:78%}\n}\n@media(max-width:680px){\n  .kedo-messages-root{width:100%;height:calc(100vh - 100px);min-height:0;margin:0;border-radius:0;grid-template-columns:1fr}\n  .kmx-sidebar{display:none}\n  .kmx-bubble{max-width:88%}\n}\n";
// Internal KEDO unified UX audit v5.33
const state={user:null,page:"dashboard",adminBranchId:null,csrfToken:null,directoryUsers:[],notifications:[],notificationUnread:0,notificationPollTimer:null,livePollTimer:null,liveVersion:null,notificationSnapshot:new Set(),notificationReady:false,chatPollTimer:null,chatTypingTimer:null,chatActiveUser:null,chatPinnedUser:null,soundEnabled:true,liveStream:null,knowledgeFolderId:null,knowledgeFolders:[],knowledgeDraftRules:[{principal_type:"ALL",principal_value:""}],knowledgeViewObserver:null,orderFolderId:null,orderFolders:[],orderFolderContext:false,orderFoldersOpen:false,profileOverview:null,profileViewedUser:null,profileRefreshAt:0,adminImpersonationCandidates:[]};
const fallbackBuildInfo={version:"5.53.73",commit:"dev",deployed_at:""};
const $=id=>document.getElementById(id);
const esc=v=>String(v??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
// One compact, monochrome icon language for working screens.  These are inline
// SVGs rather than emoji or a third-party icon bundle, so they work offline and
// inherit the surrounding KEDO colour without changing any button behaviour.
const kedoIconPaths=Object.freeze({
  search:'<circle cx="11" cy="11" r="6"></circle><path d="m16 16 4 4"></path>',
  bell:'<path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path><path d="M10 22h4"></path>',
  file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6M8 13h8M8 17h6"></path>',
  inbox:'<path d="M4 4h16v14H4z"></path><path d="M4 13h5l2 3h2l2-3h5"></path>',
  task:'<path d="m5 12 4 4L19 6"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
  order:'<path d="M5 4h14v16H5z"></path><path d="M8 8h8M8 12h8M8 16h5"></path>',
  book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22.5z"></path><path d="M4 5.5v17M8 7h8"></path>',
  user:'<circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path>',
  folder:'<path d="M3 6h7l2 2h9v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>',
  message:'<path d="M20 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4z"></path><path d="M7 9h9M7 13h6"></path>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M16 3v4M8 3v4M3 10h18M8 14h3"></path>',
  warning:'<path d="m12 3 10 18H2z"></path><path d="M12 9v4M12 17h.01"></path>',
  lock:'<rect x="4" y="10" width="16" height="11" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path>',
  settings:'<path d="M9.75 3.75h4.5l.6 2.1c.43.17.84.4 1.21.7l2.06-.54 2.25 3.9-1.47 1.56c.03.23.05.47.05.71s-.02.48-.05.71l1.47 1.56-2.25 3.9-2.06-.54c-.37.3-.78.53-1.21.7l-.6 2.1h-4.5l-.6-2.1a7.2 7.2 0 0 1-1.21-.7l-2.06.54-2.25-3.9 1.47-1.56a5.2 5.2 0 0 1 0-1.42L3.63 9.91l2.25-3.9 2.06.54c.37.3.78.53 1.21.7l.6-2.1Z"></path><circle cx="12" cy="12" r="2.7"></circle>',
  globe:'<circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"></path>',
  building:'<path d="M4 21V4h12v17M2 21h20M8 8h1M12 8h1M8 12h1M12 12h1M8 16h1M12 16h1M16 21v-6h4v6"></path>'
});
function kedoIcon(name,extraClass=""){
  return `<svg class="premium-icon ${extraClass}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${kedoIconPaths[name]||kedoIconPaths.file}</svg>`;
}
function ensureKedoDialogStyles(){
  if(document.getElementById("kedoDialogStyles"))return;
  const style=document.createElement("style");style.id="kedoDialogStyles";style.textContent=`
    body:has(.kedo-dialog-overlay),body:has(.kedo-file-preview-overlay),body:has(.folder-report-modal),body:has(.admin-edit-overlay),body.kedo-dialog-open,body.kedo-preview-open{overflow:hidden!important}
    .kedo-dialog-overlay{position:fixed;inset:0;z-index:2147483600;display:grid;place-items:center;padding:18px;background:rgba(9,27,42,.58);backdrop-filter:blur(3px);animation:kedoDialogFade .14s ease;overscroll-behavior:contain}
    .kedo-dialog{width:min(480px,96vw);max-height:min(720px,90vh);overflow:hidden;padding:21px;border:1px solid #d7e3eb;border-radius:15px;background:#fff;box-shadow:0 26px 80px rgba(10,35,53,.3);color:#243f54;animation:kedoDialogIn .17s ease;overscroll-behavior:contain}
    .kedo-dialog-icon{width:38px;height:38px;display:grid;place-items:center;margin-bottom:12px;border-radius:11px;background:#eaf4fa;color:#176fae;font-size:19px;font-weight:800}.kedo-dialog.danger .kedo-dialog-icon{background:#fff0ef;color:#b42318}
    .kedo-dialog h2{margin:0 0 7px;color:#183c59;font-size:18px}.kedo-dialog-message{max-height:min(34vh,300px);margin:0;color:#607789;font-size:12px;line-height:1.55;white-space:pre-wrap;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin}.kedo-dialog-field{display:grid;gap:6px;margin-top:15px}.kedo-dialog-field span{color:#496276;font-size:10px;font-weight:750}.kedo-dialog-field input,.kedo-dialog-field textarea{width:100%;box-sizing:border-box;padding:10px 11px;border:1px solid #cad8e2;border-radius:9px;background:#fbfdfe;color:#29465d;outline:0}.kedo-dialog-field textarea{min-height:88px;resize:vertical}.kedo-dialog-field input:focus,.kedo-dialog-field textarea:focus{border-color:#65a0c5;box-shadow:0 0 0 3px rgba(31,123,181,.1);background:#fff}
    .kedo-dialog-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:19px}.kedo-dialog-actions button{min-width:94px}.kedo-dialog-danger{background:#b42318!important;border-color:#b42318!important;color:#fff!important}
    .kedo-choice-search{position:sticky;top:0;z-index:1;margin:13px 0 8px;background:#fff}.kedo-choice-list{display:grid;gap:5px;max-height:min(48vh,380px);overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;touch-action:pan-y}.kedo-choice-item{width:100%;display:grid;grid-template-columns:32px minmax(0,1fr);gap:9px;align-items:center;padding:9px;border:1px solid #dce6ed;border-radius:9px;background:#fff;text-align:left;cursor:pointer}.kedo-choice-item:hover,.kedo-choice-item.active{border-color:#80b2d1;background:#f0f7fb}.kedo-choice-item-icon{width:30px;height:30px;display:grid;place-items:center;border-radius:8px;background:#eaf3f9;color:#176fae;font-size:13px}.kedo-choice-item strong{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#29465d;font-size:11px}.kedo-choice-item small{display:block;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#8394a1;font-size:9px}.kedo-choice-empty{padding:25px;text-align:center;color:#8394a1;font-size:11px}
    @keyframes kedoDialogFade{from{opacity:0}to{opacity:1}}@keyframes kedoDialogIn{from{opacity:0;transform:translateY(8px) scale(.985)}to{opacity:1;transform:none}}
  `;document.head.appendChild(style);
}
function kedoDialog({title="Сообщение",message="",mode="alert",defaultValue="",confirmText="Готово",cancelText="Отмена",inputType="text"}={}){
  ensureKedoDialogStyles();return new Promise(resolve=>{
    const danger=mode==="confirm"&&/удал|безвозврат|отозв|отмен|архив/i.test(message+title),overlay=document.createElement("div");overlay.className="kedo-dialog-overlay";
    const multiline=mode==="prompt"&&/описан|комментар|причин|примечан/i.test(message),password=mode==="prompt"&&/парол/i.test(message);
    overlay.innerHTML=`<section class="kedo-dialog ${danger?"danger":""}" role="dialog" aria-modal="true" aria-labelledby="kedoDialogTitle"><div class="kedo-dialog-icon">${danger?"!":mode==="alert"?"i":"?"}</div><h2 id="kedoDialogTitle">${esc(title)}</h2><p class="kedo-dialog-message"></p>${mode==="prompt"?`<label class="kedo-dialog-field"><span>Введите значение</span>${multiline?`<textarea maxlength="5000"></textarea>`:`<input type="${password?"password":esc(inputType)}" maxlength="5000">`}</label>`:""}<div class="kedo-dialog-actions">${mode!=="alert"?`<button type="button" class="secondary" data-dialog-cancel>${esc(cancelText)}</button>`:""}<button type="button" class="primary ${danger?"kedo-dialog-danger":""}" data-dialog-confirm>${esc(confirmText)}</button></div></section>`;
    overlay.querySelector(".kedo-dialog-message").textContent=message;document.body.appendChild(overlay);document.body.classList.add("kedo-dialog-open");const field=overlay.querySelector("input,textarea"),confirmButton=overlay.querySelector("[data-dialog-confirm]");if(field)field.value=defaultValue??"";
    let done=false;const close=value=>{if(done)return;done=true;overlay.remove();document.body.classList.remove("kedo-dialog-open");document.removeEventListener("keydown",onKey);resolve(value);};const onKey=event=>{if(event.key==="Escape")close(mode==="confirm"?false:null);if(event.key==="Enter"&&!event.shiftKey&&(!field||field.tagName!=="TEXTAREA")){event.preventDefault();confirmButton.click();}};document.addEventListener("keydown",onKey);
    overlay.addEventListener("click",event=>{if(event.target===overlay)close(mode==="confirm"?false:null);});overlay.querySelector("[data-dialog-cancel]")?.addEventListener("click",()=>close(mode==="confirm"?false:null));confirmButton.addEventListener("click",()=>close(mode==="prompt"?(field?.value??""):true));setTimeout(()=>field?.focus()||confirmButton.focus(),0);
  });
}
function kedoAlert(message,title="Внутренний КЭДО"){return kedoDialog({title,message:String(message??""),mode:"alert",confirmText:"Понятно"});}
function kedoConfirm(message,title="Подтвердите действие"){return kedoDialog({title,message:String(message??""),mode:"confirm",confirmText:/удал|безвозврат/i.test(message)?"Удалить":"Продолжить"});}
function kedoPrompt(message,defaultValue="",title="Введите данные"){return kedoDialog({title,message:String(message??""),mode:"prompt",defaultValue,confirmText:"Сохранить"});}
function kedoSelect({title="Выберите вариант",message="",options=[],searchPlaceholder="Поиск…",confirmText="Выбрать"}={}){
  ensureKedoDialogStyles();return new Promise(resolve=>{const overlay=document.createElement("div");overlay.className="kedo-dialog-overlay";overlay.innerHTML=`<section class="kedo-dialog" role="dialog" aria-modal="true"><div class="kedo-dialog-icon">⌕</div><h2>${esc(title)}</h2><p class="kedo-dialog-message"></p><div class="kedo-choice-search kedo-dialog-field"><input type="search" placeholder="${esc(searchPlaceholder)}"></div><div class="kedo-choice-list"></div><div class="kedo-dialog-actions"><button class="secondary" data-choice-cancel>Отмена</button><button class="primary" data-choice-confirm disabled>${esc(confirmText)}</button></div></section>`;overlay.querySelector(".kedo-dialog-message").textContent=message;document.body.appendChild(overlay);const search=overlay.querySelector("input"),list=overlay.querySelector(".kedo-choice-list"),confirmButton=overlay.querySelector("[data-choice-confirm]");let selected=null,done=false;
    const close=value=>{if(done)return;done=true;overlay.remove();document.body.classList.remove("kedo-dialog-open");document.removeEventListener("keydown",onKey);resolve(value);};const render=()=>{const query=search.value.trim().toLowerCase(),visible=options.filter(option=>`${option.label||""} ${option.meta||""}`.toLowerCase().includes(query));list.innerHTML=visible.length?visible.map(option=>`<button type="button" class="kedo-choice-item ${String(option.value)===String(selected)?"active":""}" data-choice-value="${esc(option.value)}"><span class="kedo-choice-item-icon">${esc(option.icon||"▤")}</span><span><strong>${esc(option.label)}</strong><small>${esc(option.meta||"")}</small></span></button>`).join(""):`<div class="kedo-choice-empty">Ничего не найдено</div>`;};const onKey=event=>{if(event.key==="Escape")close(null);if(event.key==="Enter"&&selected!==null){event.preventDefault();close(selected);}};document.addEventListener("keydown",onKey);search.oninput=render;list.onclick=event=>{const item=event.target.closest("[data-choice-value]");if(!item)return;selected=item.dataset.choiceValue;confirmButton.disabled=false;render();};list.ondblclick=event=>{const item=event.target.closest("[data-choice-value]");if(item)close(item.dataset.choiceValue);};confirmButton.onclick=()=>close(selected);overlay.querySelector("[data-choice-cancel]").onclick=()=>close(null);overlay.onclick=event=>{if(event.target===overlay)close(null);};document.body.classList.add("kedo-dialog-open");render();setTimeout(()=>search.focus(),0);
  });
}
function avatarUrl(userId,bust){
  const id=Number(userId||0);
  if(!id)return "";
  return `/api/avatars/${id}${bust?`?v=${encodeURIComponent(bust)}`:""}`;
}
function avatarMarkup({userId,name,hasAvatar,sizeClass="",bust="",fallbackStyle=""}){
  const letters=esc(String(name||"?").split(/\s+/).map(x=>x[0]).filter(Boolean).slice(0,2).join("").toUpperCase()||"?");
  if(hasAvatar&&userId){
    return `<span class="kedo-avatar ${sizeClass}" data-user-id="${Number(userId)}"><img src="${esc(avatarUrl(userId,bust))}" alt="" loading="lazy" decoding="async" onerror="this.remove();this.parentElement.classList.add('is-fallback');"><span class="kedo-avatar-fallback">${letters}</span></span>`;
  }
  const styleAttr=fallbackStyle?` style="${fallbackStyle}"`:"";
  return `<span class="kedo-avatar is-fallback ${sizeClass}" data-user-id="${Number(userId)||""}"${styleAttr}><span class="kedo-avatar-fallback">${letters}</span></span>`;
}
async function optimizeAvatarFile(file,{maxSide=1024,maxBytes=1800*1024,quality=0.82}={}){
  if(!file || !/^image\/(jpeg|png|webp)$/i.test(file.type)) return file;
  if(file.size<=maxBytes && file.size<=2*1024*1024){
    // still downscale huge dimensions even if under size limit
  }
  const bitmap=await createImageBitmap(file).catch(()=>null);
  if(!bitmap) return file;
  try{
    const scale=Math.min(1,maxSide/Math.max(bitmap.width,bitmap.height));
    const w=Math.max(1,Math.round(bitmap.width*scale));
    const h=Math.max(1,Math.round(bitmap.height*scale));
    const canvas=document.createElement("canvas");
    canvas.width=w;canvas.height=h;
    const ctx=canvas.getContext("2d");
    if(!ctx) return file;
    ctx.drawImage(bitmap,0,0,w,h);
    let q=quality;
    let blob=await new Promise(r=>canvas.toBlob(r,"image/jpeg",q));
    while(blob && blob.size>maxBytes && q>0.45){
      q-=0.1;
      blob=await new Promise(r=>canvas.toBlob(r,"image/jpeg",q));
    }
    if(!blob) return file;
    const base=(file.name||"avatar").replace(/\.[^.]+$/,"")||"avatar";
    return new File([blob],`${base}.jpg`,{type:"image/jpeg",lastModified:Date.now()});
  }finally{
    try{bitmap.close?.()}catch{}
  }
}
async function uploadMyAvatar(file){
  if(!file)return;
  const optimized=await optimizeAvatarFile(file);
  if(optimized.size>2*1024*1024) throw new Error("Файл слишком большой даже после сжатия. Выберите другое фото.");
  const fd=new FormData();
  fd.append("avatar",optimized,optimized.name||"avatar.jpg");
  const d=await api("/api/avatars/me",{method:"POST",body:fd});
  if(state.user){state.user.hasAvatar=true;state.user.avatarVersion=Date.now();}
  return d;
}
async function removeMyAvatar(){
  await api("/api/avatars/me",{method:"DELETE"});
  if(state.user){state.user.hasAvatar=false;state.user.avatarVersion="";}
}
function parseKedoDate(value){
  if(value===null || value===undefined || value==="") return null;
  if(value instanceof Date){
    return Number.isNaN(value.getTime()) ? null : value;
  }

  const raw=String(value).trim();
  if(!raw) return null;

  // PostgreSQL DATE: local calendar date, no time component.
  let m=raw.match(/^(\\d{4})-(\\d{2})-(\\d{2})$/);
  if(m){
    const y=Number(m[1]), mo=Number(m[2]), d=Number(m[3]);
    const dt=new Date(y,mo-1,d);
    if(dt.getFullYear()!==y || dt.getMonth()!==mo-1 || dt.getDate()!==d) return null;
    return dt;
  }

  // ISO timestamp: preserve the actual time and timezone.
  if(/^\\d{4}-\\d{2}-\\d{2}T/.test(raw)){
    const parsed=new Date(raw);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  // Legacy RU date/date-time.
  m=raw.match(/^(\\d{2})\\.(\\d{2})\\.(\\d{4})(?:[ ,T]+(\\d{2}):(\\d{2})(?::(\\d{2})(?:\\.(\\d{1,3}))?)?)?$/);
  if(m){
    const d=Number(m[1]), mo=Number(m[2]), y=Number(m[3]);
    const hh=Number(m[4]||0), mm=Number(m[5]||0), ss=Number(m[6]||0), ms=Number((m[7]||"0").padEnd(3,"0"));
    const dt=new Date(y,mo-1,d,hh,mm,ss,ms);
    if(dt.getFullYear()!==y || dt.getMonth()!==mo-1 || dt.getDate()!==d) return null;
    return dt;
  }

  const parsed=new Date(raw);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatKedoDate(value, withTime=false){
  const dt=parseKedoDate(value);
  if(!dt) return "—";
  if(withTime) return dt.toLocaleString("ru-RU");
  return dt.toLocaleDateString("ru-RU");
}

function formatKedoDateTime(value){
  const dt=parseKedoDate(value);
  return dt ? dt.toLocaleString("ru-RU") : "—";
}

function formatKedoTime(value){
  const dt=parseKedoDate(value);
  return dt ? dt.toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"}) : "—";
}

function kedoDateEnd(value){
  const dt=parseKedoDate(value);
  if(!dt) return NaN;
  dt.setHours(23,59,59,999);
  return dt.getTime();
}

const kedoSounds={
  send:"/assets/sounds/message-send.wav",
  message:"/assets/sounds/message-incoming.wav",
  notification:"/assets/sounds/message-incoming.wav",
  idle:"/tosty.mp3"
};
const kedoAudioCache={};

function synthKedoSound(kind="notification"){
  try{
    if(!state.soundEnabled||!window.__kedoAudioUnlocked)return;
    const AC=window.AudioContext||window.webkitAudioContext;
    if(!AC)return;
    if(!window.__kedoAudio)window.__kedoAudio=new AC();
    const ctx=window.__kedoAudio;
    if(ctx.state==="suspended")ctx.resume().catch(()=>{});
    const now=ctx.currentTime;
    const osc=ctx.createOscillator();
    const gain=ctx.createGain();
    osc.type="sine";
    const send=kind==="send";
    osc.frequency.setValueAtTime(send?760:590,now);
    osc.frequency.exponentialRampToValueAtTime(send?520:820,now+0.11);
    gain.gain.setValueAtTime(0.0001,now);
    gain.gain.exponentialRampToValueAtTime(send?0.075:0.065,now+0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001,now+0.15);
    osc.connect(gain);gain.connect(ctx.destination);
    osc.start(now);osc.stop(now+0.16);
  }catch{}
}

function playKedoNotifySound(kind="notification"){
  if(!state.soundEnabled)return;
  try{
    const src=kedoSounds[kind]||kedoSounds.notification;
    let audio=kedoAudioCache[kind];
    if(!audio){
      audio=new Audio(src);
      audio.preload="auto";
      audio.volume=kind==="send"?0.34:kind==="idle"?0.42:0.28;
      kedoAudioCache[kind]=audio;
    }
    audio.currentTime=0;
    const p=audio.play();
    if(p&&p.catch)p.catch(()=>synthKedoSound(kind));
  }catch{
    synthKedoSound(kind);
  }
}

function unlockKedoAudio(){
  try{
    // Do not create/resume AudioContext from a global page listener. Some
    // browsers do not consider that callback a trusted gesture and log a
    // warning. AudioContext is created lazily only when a sound is requested.
    window.__kedoAudioUnlocked=true;
    Object.entries(kedoSounds).forEach(([k,src])=>{
      if(!kedoAudioCache[k]){
        const a=new Audio(src);
        a.preload="auto";
        a.volume=k==="send"?0.34:0.28;
        kedoAudioCache[k]=a;
      }
      try{kedoAudioCache[k].load();}catch{}
    });
  }catch{}
}
document.addEventListener("pointerdown",unlockKedoAudio,{once:true,capture:true});
document.addEventListener("keydown",unlockKedoAudio,{once:true,capture:true});

// Play the supplied "tosty" sound once after a long period of inactivity.
// The timer is deliberately armed only after a real user gesture because
// browsers block autoplay on a fresh page. Any activity starts a new idle
// period, so the sound never loops while somebody is actively working.
const KEDO_IDLE_AFTER_MS=5*60*1000;
let kedoIdleTimeoutHandle=null;
let kedoIdlePlayed=false;
let kedoIdleLastActivity=Date.now();
let kedoIdleDeadline=Date.now()+KEDO_IDLE_AFTER_MS;
let kedoIdleDebug=false;
let kedoIdleDebugInterval=null;
let kedoIdleDebugNode=null;
function armKedoIdleSound(){
  clearTimeout(kedoIdleTimeoutHandle);
  kedoIdleDeadline=Date.now()+KEDO_IDLE_AFTER_MS;
  kedoIdleTimeoutHandle=setTimeout(()=>{
    if(!state.user||!state.soundEnabled||document.hidden||!window.__kedoAudioUnlocked){armKedoIdleSound();return;}
    if(!kedoIdlePlayed){kedoIdlePlayed=true;playKedoNotifySound("idle");}
  },KEDO_IDLE_AFTER_MS);
}
function noteKedoActivity(){
  const now=Date.now();
  if(now-kedoIdleLastActivity<1000)return;
  kedoIdleLastActivity=now;kedoIdlePlayed=false;armKedoIdleSound();
}
["pointerdown","pointermove","keydown","wheel","touchstart"].forEach(type=>window.addEventListener(type,noteKedoActivity,{passive:true,capture:true}));
document.addEventListener("visibilitychange",()=>{if(!document.hidden)noteKedoActivity();});
armKedoIdleSound();

function renderKedoIdleDebug(){
  if(!kedoIdleDebugNode)return;
  const seconds=Math.max(0,Math.ceil((kedoIdleDeadline-Date.now())/1000));
  const mins=String(Math.floor(seconds/60)).padStart(2,"0"),secs=String(seconds%60).padStart(2,"0");
  const stateLabel=document.hidden?"вкладка скрыта":!state.user?"нет сессии":!state.soundEnabled?"звук выключен":!window.__kedoAudioUnlocked?"нужно взаимодействие":kedoIdlePlayed?"звук уже сыграл":"ожидание";
  kedoIdleDebugNode.textContent=`KEDO idle: ${mins}:${secs} · ${stateLabel}`;
}
function setKedoIdleDebug(enabled=true){
  kedoIdleDebug=Boolean(enabled);
  clearInterval(kedoIdleDebugInterval);kedoIdleDebugInterval=null;
  if(!kedoIdleDebug){kedoIdleDebugNode?.remove();kedoIdleDebugNode=null;return {enabled:false};}
  if(!kedoIdleDebugNode){
    kedoIdleDebugNode=document.createElement("div");
    kedoIdleDebugNode.id="kedoIdleDebugTimer";
    Object.assign(kedoIdleDebugNode.style,{position:"fixed",right:"12px",bottom:"12px",zIndex:"2147483647",padding:"7px 10px",border:"1px solid #8fb5c8",borderRadius:"8px",background:"rgba(17,49,69,.94)",color:"#e8f7ff",font:"11px/1.2 monospace",boxShadow:"0 6px 18px rgba(0,0,0,.2)",pointerEvents:"none"});
    document.body.appendChild(kedoIdleDebugNode);
  }
  renderKedoIdleDebug();kedoIdleDebugInterval=setInterval(renderKedoIdleDebug,250);
  return {enabled:true,secondsRemaining:Math.max(0,Math.ceil((kedoIdleDeadline-Date.now())/1000)),played:kedoIdlePlayed};
}
window.kedoIdleTimer=function(command="show"){
  if(command==="hide"||command===false)return setKedoIdleDebug(false);
  if(command==="test"){
    playKedoNotifySound("idle");
    return {tested:true,unlocked:Boolean(window.__kedoAudioUnlocked),soundEnabled:Boolean(state.soundEnabled)};
  }
  return setKedoIdleDebug(true);
};
window.showKedoIdleTimer=()=>window.kedoIdleTimer("show");

async function ensureCsrfToken(){
  if(window.kedoDemo)return "demo-local";
  if(state.csrfToken)return state.csrfToken;
  let lastError=null;
  for(let attempt=0;attempt<3;attempt++){
    try{
      const r=await fetch("/api/auth/csrf",{credentials:"same-origin",cache:"no-store"});
      const data=await r.json().catch(()=>({}));
      if(r.status===401){const e=Error("Сессия истекла.");e.code="SESSION_EXPIRED";throw e;}
      if(!r.ok||!data.csrfToken){const e=Error(data.message||"Не удалось получить CSRF-токен.");e.code="CSRF_INIT_FAILED";throw e;}
      state.csrfToken=data.csrfToken;
      return state.csrfToken;
    }catch(e){
      lastError=e;
      if(e.code==="SESSION_EXPIRED")throw e;
      await new Promise(resolve=>setTimeout(resolve,250*(attempt+1)));
    }
  }
  throw lastError||Object.assign(Error("Не удалось получить CSRF-токен."),{code:"CSRF_INIT_FAILED"});
}
async function api(url,opt={}){
  if(window.kedoDemo)return window.kedoDemo.request(url,opt);
  const requestOpt={...opt};
  const csrfRetry=Boolean(requestOpt.__csrfRetry);
  delete requestOpt.__csrfRetry;
  const headers={...(requestOpt.headers||{})};
  const method=(requestOpt.method||"GET").toUpperCase();
  const mutating=!['GET','HEAD','OPTIONS'].includes(method);
  // Account requests are intentionally available before login. There is no
  // authenticated session (and therefore no session CSRF token) on this page.
  const publicMutation=method==="POST"&&/^\/api\/(?:v2\/)?account-requests\/?(?:\?.*)?$/.test(url);
  // Login creates the session and its CSRF token, so asking for a token
  // before login can only produce a false CSRF_INIT_FAILED on a clean page.
  if(mutating&&!publicMutation&&!state.csrfToken&&!url.endsWith("/auth/login"))await ensureCsrfToken();
  if(mutating&&!publicMutation&&state.csrfToken)headers["X-CSRF-Token"]=state.csrfToken;
  const r=await fetch(url,{...requestOpt,headers,credentials:"same-origin"});
  const data=await r.json().catch(()=>({}));
  if(r.status===401){
    if(url!=="/api/auth/login"){logout();const e=Error("Сессия истекла.");e.code="SESSION_EXPIRED";throw e;}
    const e=Error(data.message||"Неверный логин или пароль.");e.code=data.code||"INVALID_CREDENTIALS";throw e;
  }
  if(r.status===403&&mutating&&!publicMutation&&!csrfRetry){
    state.csrfToken=null;
    await ensureCsrfToken();
    return api(url,{...requestOpt,__csrfRetry:true});
  }
  if(!r.ok){const e=Error(data.message||"Ошибка запроса.");e.code=data.code||"HTTP_"+r.status;throw e;}
  return data;
}
const kedoFeatureModules={archive:"./archive-v2.js",reports:"./reports.js"};
const kedoFeatureLoads=new Map();
function loadKedoFeature(name){
  if(kedoFeatureLoads.has(name))return kedoFeatureLoads.get(name);
  const src=kedoFeatureModules[name];
  if(!src)return Promise.reject(Error(`Неизвестный модуль: ${name}`));
  const load=new Promise((resolve,reject)=>{
    const script=document.createElement("script");script.src=src;script.async=true;
    script.onload=resolve;script.onerror=()=>reject(Error("Не удалось загрузить раздел. Обновите страницу и повторите попытку."));
    document.head.appendChild(script);
  });
  kedoFeatureLoads.set(name,load);return load;
}
async function loadBuildInfo(){
  if(window.kedoDemo)return fallbackBuildInfo;
  try{
    const r=await fetch(`/build-info.json?ts=${Date.now()}`,{cache:"no-store",credentials:"same-origin"});
    if(!r.ok)throw new Error("BUILD_INFO_NOT_FOUND");
    const info=await r.json();
    return {...fallbackBuildInfo,...info};
  }catch{return fallbackBuildInfo;}
}
const listData=r=>Array.isArray(r)?r:(r?.items||[]);
const roleLabels={new_employee:"Учебный аккаунт",employee:"Сотрудник",document_uploader:"Загрузчик документов",department_head:"Руководитель подразделения",director:"Директор",moderator:"Модератор",admin:"Администратор"};
const roleLabel=r=>roleLabels[r]||r||"—";const roleLabelsList=rs=>Array.isArray(rs)&&rs.length?rs.map(roleLabel).join(" + "):roleLabel(state.user?.role);
const userRoles=()=>Array.isArray(state.user?.roles)&&state.user.roles.length?state.user.roles:[state.user?.role];
const isAdminUser=()=>userRoles().includes("admin");
const isKnowledgeOnlyUser=()=>userRoles().includes("new_employee");
function applyRoleNavigation(){
  const admin=isAdminUser();
  const limited=isKnowledgeOnlyUser()&&!admin;
  document.querySelectorAll(".nav button[data-page]").forEach(btn=>{
    const page=btn.dataset.page;
    btn.classList.toggle("hidden",limited&&page!=="knowledge");
  });
  // Keep privileged links hidden by default and reveal them only after the
  // authenticated role list has been loaded. This also handles users with
  // multiple roles consistently (the primary role is not authoritative).
  $("adminNav")?.classList.toggle("hidden",!admin);
  $("adminNavSeparator")?.classList.toggle("hidden",!admin);
  $("myBranchNav")?.classList.toggle("hidden",!state.managedBranch||admin);
  $("globalSearchButton")?.classList.toggle("hidden",limited);
  $("notificationButton")?.classList.toggle("hidden",limited);
  $("reportsNav")?.classList.toggle("hidden",limited||!Number(state.reportsLevel));
}
async function logout(){
  if(state.user?.isImpersonating){
    try{await returnProfile();}catch(e){await kedoAlert(e.message||"Не удалось вернуться в профиль администратора.");}
    return;
  }
  let exitPassword=null;
  if(isKnowledgeOnlyUser()){
    exitPassword=await kedoPrompt("Введите специальный пароль, чтобы выйти из учебного аккаунта.","","Выход из учебного режима");
    if(exitPassword===null)return;
  }
  try{
    if(state.user)await api("/api/auth/logout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(exitPassword===null?{}:{exitPassword})});
  }catch(e){if(isKnowledgeOnlyUser()){await kedoAlert(e.message||"Неверный специальный пароль.");return;}}
  state.page="dashboard";if(state.notificationPollTimer){clearInterval(state.notificationPollTimer);state.notificationPollTimer=null;}if(state.livePollTimer){clearInterval(state.livePollTimer);state.livePollTimer=null;}state.liveVersion=null;if(state.liveStream){state.liveStream.close();state.liveStream=null;}if(state.chatPollTimer){clearInterval(state.chatPollTimer);state.chatPollTimer=null;}if(state.chatTypingTimer){clearInterval(state.chatTypingTimer);state.chatTypingTimer=null;}state.chatActiveUser=null;state.user=null;state.profileOverview=null;state.notificationReady=false;state.notificationSnapshot=new Set();$("profileSessionBanner")?.remove();$("app").classList.add("hidden");$("loginPage").classList.remove("hidden");
}
let kedoHistoryReady=false;
let kedoHistoryBusy=false;
let kedoRenderGen=0;
let kedoRenderBusy=false;

// Each portal section has a stable address.  Keeping the selected page only
// in history.state made a browser refresh fall back to the dashboard.
const kedoPagePaths=Object.freeze({
  dashboard:"/", inbox:"/inbox", messages:"/messages", documents:"/documents",
  orders:"/orders", reports:"/reports", tasks:"/tasks", knowledge:"/knowledge",
  help:"/help", delegations:"/delegations", profile:"/profile", myBranch:"/my-branch",
  admin:"/admin", adminBranch:"/admin/branch"
});
const kedoPathPages=Object.freeze(Object.fromEntries(Object.entries(kedoPagePaths).map(([page,path])=>[path,page])));
function kedoPageFromLocation(){
  return new URLSearchParams(location.hash.slice(1)).get("page")||"inbox";
}
function kedoPageUrl(page){
  return `${location.pathname}${location.search}#page=${encodeURIComponent(page)}`;
}

function leaveMessagesPageIfNeeded(prev,next){
  if(prev!=="messages"||next==="messages")return;
  try{
    if(state.kedoMessagesPoll){clearInterval(state.kedoMessagesPoll);state.kedoMessagesPoll=null;}
    if(state.chatPollTimer){clearInterval(state.chatPollTimer);state.chatPollTimer=null;}
    if(state.chatTypingTimer){clearInterval(state.chatTypingTimer);state.chatTypingTimer=null;}
    window.__kedoCloseMsgOverlays?.();
    document.documentElement.classList.remove("kedoOnePage");
    document.body.classList.remove("kedoOnePage");
    document.documentElement.style.removeProperty("overflow");
    document.body.style.removeProperty("overflow");
    window.__kedoSyncMessagesScroll?.();
  }catch{}
}

function beginPageTransition(){
  const main=$("main");
  if(!main)return;
  main.classList.remove("kedo-page-in");
  main.classList.add("kedo-page-out");
  main.setAttribute("aria-busy","true");
}

function endPageTransition(gen){
  if(gen!==kedoRenderGen)return;
  const main=$("main");
  if(!main)return;
  main.classList.remove("kedo-page-out");
  main.classList.add("kedo-page-in");
  main.removeAttribute("aria-busy");
  window.setTimeout(()=>{
    if(gen===kedoRenderGen)main.classList.remove("kedo-page-in");
  },220);
}

function initKedoHistory(){
  if(kedoHistoryReady)return;
  history.scrollRestoration="auto";
  const page=kedoPageFromLocation();
  const current=history.state;
  history.replaceState({...current,kedo:true,page,root:true},"",kedoPageUrl(page));
  state.page=page;
  kedoHistoryReady=true;
}
async function setPage(p,opts={}){
  if(!p)return;
  if(isKnowledgeOnlyUser()&&p!=="knowledge") p="knowledge";
  if(p==="admin" && !isAdminUser()) p="dashboard";
  if(p==="adminBranch" && !isAdminUser()) p="dashboard";
  if(p==="myBranch" && (!state.managedBranch||isAdminUser())){
    p="dashboard";
  }
  if(p!=="profile" || !opts.viewedProfile)state.profileViewedUser=null;
  const prev=state.page;
  const changed=prev!==p;
  // Ignore duplicate clicks while same page is already rendering — unless stuck on loader
  if(!changed && kedoRenderBusy && !opts.force){
    const stuck=!!$("main")?.querySelector?.(".kedo-page-loading");
    if(!stuck)return;
    opts={...opts,force:true};
  }

  state.page=p;
  // Invalidate any in-flight page render immediately
  if(changed||opts.force){
    kedoRenderGen++;
  }
  const renderGen=kedoRenderGen;

  document.querySelectorAll(".nav button").forEach(b=>{
    const on=b.dataset.page===p;
    b.classList.toggle("active",on);
    if(on)b.setAttribute("aria-current","page");
    else b.removeAttribute("aria-current");
  });

  leaveMessagesPageIfNeeded(prev,p);

  if(kedoHistoryReady && changed && !opts.fromHistory && !kedoHistoryBusy){
    history.pushState({kedo:true,page:p},"",kedoPageUrl(p));
  }
  updateChatNavBadge();
  beginPageTransition();
  await render(renderGen);
}
window.addEventListener("popstate",e=>{
  if(e.state?.kedo===true){
    kedoHistoryBusy=true;
    Promise.resolve(setPage(e.state.page||kedoPageFromLocation(),{fromHistory:true})).finally(()=>{kedoHistoryBusy=false;});
    return;
  }
  // A Back from the first portal page should not throw the user onto the external site.
  if(state.user){
    history.pushState({kedo:true,page:state.page},"",location.href);
  }
});
function msg(id,text,ok=false){if($(id)){$(id).textContent=text;$(id).className=ok?"ok":"err";}}
$("loginForm").onsubmit=async e=>{
  e.preventDefault();

  try{
    const loginEl=$("login");
    const passwordEl=$("password");

    if(!loginEl || !passwordEl){
      throw Error("Форма авторизации повреждена.");
    }

    const d=await api("/api/auth/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        login:loginEl.value.trim(),
        password:passwordEl.value
      })
    });

    state.user=d.user;

    if(d.csrfToken){
      state.csrfToken=d.csrfToken;
    }

    showApp();

  }catch(e){

    msg("loginMsg",e.message);
  }
};

async function openAccountRequestModal(){
  document.querySelectorAll(".account-request-modal").forEach(x=>x.remove());
  let deps=[],groups=[];
  try{
    [deps,groups]=await Promise.all([
      api("/api/account-requests/departments"),
      api("/api/account-requests/groups")
    ]);
  }catch(e){kedoAlert("Не удалось получить справочник подразделений и филиалов.");return;}
  const overlay=document.createElement("div");
  overlay.className="account-request-modal";
  const groupField=groups.length
    ? `<label>Филиал <span class="muted" style="font-weight:400">(необязательно)</span>
         <select id="arGroup"><option value="">Основное здание / без филиала</option>${groups.map(g=>`<option value="${g.id}">${esc(g.name)}</option>`).join("")}</select>
       </label>`
    : `<div class="account-request-main-building"><strong>Филиал</strong><span>Филиалы пока не созданы — заявка будет оформлена для основного здания.</span></div>`;
  overlay.innerHTML=`<div class="account-request-card" role="dialog" aria-modal="true">
    <h2>Заявка на создание аккаунта</h2>
    <p class="sub">Заполните данные сотрудника. Заявка попадёт администраторам сайта, а учетную запись создаст администратор после проверки.</p>
    <label>ФИО<input id="arFullName" placeholder="Иванов Иван Иванович" autocomplete="name"></label>
    <label>Должность<input id="arPosition" placeholder="Например: бухгалтер"></label>
    ${groupField}
    <label>Подразделение <span class="muted" style="font-weight:400">(необязательно)</span>
      <select id="arDepartment"><option value="">Без подразделения</option>${deps.map(d=>`<option value="${d.id}">${esc(d.name)}</option>`).join("")}</select>
    </label>
    <label>Контакт для связи <span class="muted" style="font-weight:400">(необязательно)</span><input id="arContact" placeholder="Телефон, e-mail или внутренний контакт"></label>
    <label>Комментарий <span class="muted" style="font-weight:400">(необязательно)</span><textarea id="arComment" placeholder="Дополнительная информация для администратора"></textarea></label>
    <p id="arMsg" class="err"></p>
    <div class="account-request-actions"><button class="secondary" id="arCancel" type="button">Отмена</button><button class="primary" id="arSend" type="button">Отправить заявку</button></div>
  </div>`;
  document.body.appendChild(overlay);
  const close=()=>overlay.remove();
  overlay.querySelector("#arCancel").onclick=close;
  overlay.addEventListener("click",e=>{if(e.target===overlay)close();});
  overlay.querySelector("#arSend").onclick=async()=>{
    const btn=overlay.querySelector("#arSend"), msgEl=overlay.querySelector("#arMsg");
    try{
      btn.disabled=true;btn.textContent="Отправка...";
      const r=await api("/api/account-requests",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          fullName:overlay.querySelector("#arFullName").value.trim(),
          position:overlay.querySelector("#arPosition").value.trim(),
          orgGroupId:overlay.querySelector("#arGroup")?.value?Number(overlay.querySelector("#arGroup").value):null,
          departmentId:overlay.querySelector("#arDepartment").value?Number(overlay.querySelector("#arDepartment").value):null,
          contact:overlay.querySelector("#arContact").value.trim(),
          comment:overlay.querySelector("#arComment").value.trim()
        })
      });
      overlay.querySelector(".account-request-card").innerHTML=`<h2>Заявка подана</h2><div class="account-request-success">Заявка №<strong>${esc(r.request.id)}</strong> успешно подана. Администратор получит уведомление и рассмотрит её.</div><div class="account-request-actions"><button class="primary" id="arDone" type="button">Закрыть</button></div>`;
      overlay.querySelector("#arDone").onclick=close;
    }catch(e){
      msgEl.textContent=e.message||"Не удалось отправить заявку.";
      btn.disabled=false;btn.textContent="Отправить заявку";
    }
  };
}

$("accountRequestOpen")?.addEventListener("click",openAccountRequestModal);
$("logout").onclick=logout;document.querySelectorAll(".nav button").forEach(b=>b.onclick=()=>setPage(b.dataset.page));

// Маленькая пасхалка: 15 быстрых нажатий на логотип открывают Doom в новой
// вкладке. Счётчик сбрасывается, если между нажатиями прошло больше двух секунд.
(function installKedoDoomEasterEgg(){
  const logo=document.querySelector(".top-brand");
  if(!logo||logo.dataset.kedoDoomBound==="1")return;
  logo.dataset.kedoDoomBound="1";logo.style.cursor="pointer";
  let clicks=0,lastClick=0;
  logo.addEventListener("click",()=>{
    const now=Date.now();
    clicks=now-lastClick>2000?1:clicks+1;lastClick=now;
    if(clicks<15)return;
    clicks=0;lastClick=0;
    openKedoSnake();
  });
})();

/* KEDO_UI_ALIGNMENT_581 — keep compact controls readable at narrow widths. */
(function(){
  if(document.getElementById("kedoUiAlignment581"))return;
  const style=document.createElement("style");
  style.id="kedoUiAlignment581";
  style.textContent=`
    #homeCustomizeButton{
      min-width:174px!important;
      height:40px!important;
      padding:0 15px!important;
      display:inline-flex!important;
      align-items:center!important;
      justify-content:center!important;
      gap:8px!important;
      white-space:nowrap!important;
      line-height:1!important;
    }
    #homeCustomizeButton>.premium-icon{
      width:17px!important;
      height:17px!important;
      flex:0 0 17px!important;
      margin:0!important;
      padding:3px!important;
      box-sizing:content-box!important;
      border-radius:6px!important;
      background:#edf6fa!important;
      color:#2f789c!important;
      stroke:currentColor!important;
      fill:none!important;
    }
    #homeCustomizeButton>span:last-child{
      display:inline-block!important;
      white-space:nowrap!important;
      line-height:1!important;
    }
    .task-focus-toolbar{
      grid-template-areas:"copy search sort" "filters filters filters"!important;
    }
    .task-filter-list{
      justify-content:center!important;
      padding-top:10px!important;
    }
    @media(max-width:800px){
      .task-focus-toolbar{grid-template-areas:"copy" "search" "sort" "filters"!important}
      .task-filter-list{justify-content:flex-start!important}
    }
  `;
  document.head.appendChild(style);
})();

function openKedoSnake(){
  if(document.getElementById("kedoSnakeOverlay"))return;
  if(!document.getElementById("kedoSnakeStyles")){
    const style=document.createElement("style");style.id="kedoSnakeStyles";style.textContent=`
      .kedo-snake-overlay{position:fixed;inset:0;z-index:2147483600;display:grid;place-items:center;padding:18px;background:rgba(8,24,36,.7);backdrop-filter:blur(5px)}
      .kedo-snake-card{width:min(430px,94vw);padding:16px;border:1px solid #386477;border-radius:16px;background:#102d3c;color:#e8f7fb;box-shadow:0 24px 80px rgba(0,0,0,.35)}
      .kedo-snake-head{display:flex;align-items:center;gap:10px;margin-bottom:10px}.kedo-snake-head strong{font-size:16px}.kedo-snake-score{margin-left:auto;color:#9dd7e4;font:700 12px monospace}.kedo-snake-close{width:30px;height:30px;border:1px solid #466f7e;border-radius:8px;background:#173d4e;color:#d9f0f4;font-size:18px;cursor:pointer}.kedo-snake-canvas{display:block;width:min(360px,100%);height:auto;margin:auto;border:2px solid #4e9b75;border-radius:8px;background:#071b25;image-rendering:pixelated}.kedo-snake-status{min-height:18px;margin:9px 0 5px;text-align:center;color:#a8cbd2;font-size:11px}.kedo-snake-controls{display:grid;grid-template-columns:repeat(3,42px);justify-content:center;gap:5px;margin-top:8px}.kedo-snake-controls button{width:42px;height:34px;border:1px solid #477483;border-radius:8px;background:#173d4e;color:#d7f0f4;font-size:16px;cursor:pointer}.kedo-snake-controls button:hover{background:#20556a}.kedo-snake-controls button:nth-child(1){grid-column:2}.kedo-snake-controls button:nth-child(2){grid-column:1;grid-row:2}.kedo-snake-controls button:nth-child(3){grid-column:2;grid-row:2}.kedo-snake-controls button:nth-child(4){grid-column:3;grid-row:2}.kedo-snake-hint{margin:9px 0 0;text-align:center;color:#7fa8b3;font-size:9px}
    `;document.head.appendChild(style);
  }
  const overlay=document.createElement("div");overlay.id="kedoSnakeOverlay";overlay.className="kedo-snake-overlay";overlay.innerHTML=`<section class="kedo-snake-card" role="dialog" aria-modal="true" aria-label="Змейка"><div class="kedo-snake-head"><strong>Змейка KEDO</strong><span class="kedo-snake-score">Счёт: <b id="kedoSnakeScore">0</b></span><button class="kedo-snake-close" type="button" aria-label="Закрыть">×</button></div><canvas class="kedo-snake-canvas" id="kedoSnakeCanvas" width="360" height="360"></canvas><div class="kedo-snake-status" id="kedoSnakeStatus">Стрелки или WASD — управление</div><div class="kedo-snake-controls"><button type="button" data-dir="up">▲</button><button type="button" data-dir="left">◀</button><button type="button" data-dir="down">▼</button><button type="button" data-dir="right">▶</button></div><p class="kedo-snake-hint">Esc — закрыть игру</p></section>`;document.body.appendChild(overlay);document.body.classList.add("kedo-snake-open");
  const canvas=overlay.querySelector("#kedoSnakeCanvas"),ctx=canvas.getContext("2d"),scoreEl=overlay.querySelector("#kedoSnakeScore"),status=overlay.querySelector("#kedoSnakeStatus");
  const cells=18,size=canvas.width/cells;let snake,food,direction,nextDirection,score,gameTimer,over=false;
  const randomFood=()=>{let point;do{point={x:Math.floor(Math.random()*cells),y:Math.floor(Math.random()*cells)};}while(snake.some(part=>part.x===point.x&&part.y===point.y));return point;};
  const paint=()=>{ctx.fillStyle="#071b25";ctx.fillRect(0,0,canvas.width,canvas.height);ctx.strokeStyle="rgba(112,190,170,.08)";for(let i=1;i<cells;i++){ctx.beginPath();ctx.moveTo(i*size,0);ctx.lineTo(i*size,canvas.height);ctx.moveTo(0,i*size);ctx.lineTo(canvas.width,i*size);ctx.stroke();}ctx.fillStyle="#e5bd55";ctx.beginPath();ctx.arc((food.x+.5)*size,(food.y+.5)*size,size*.3,0,Math.PI*2);ctx.fill();snake.forEach((part,index)=>{ctx.fillStyle=index?"#46aa79":"#9ee3a3";ctx.fillRect(part.x*size+1,part.y*size+1,size-2,size-2);});};
  const finish=()=>{over=true;clearInterval(gameTimer);status.textContent=`Игра окончена · счёт ${score}. Нажмите Enter для новой игры.`;};
  const step=()=>{if(over)return;direction=nextDirection;const head={x:snake[0].x+direction.x,y:snake[0].y+direction.y};if(head.x<0||head.x>=cells||head.y<0||head.y>=cells||snake.some(part=>part.x===head.x&&part.y===head.y)){finish();return;}snake.unshift(head);if(head.x===food.x&&head.y===food.y){score++;scoreEl.textContent=score;food=randomFood();}else snake.pop();paint();};
  const start=()=>{clearInterval(gameTimer);snake=[{x:9,y:9},{x:8,y:9},{x:7,y:9}];food=randomFood();direction={x:1,y:0};nextDirection={x:1,y:0};score=0;over=false;scoreEl.textContent="0";status.textContent="Стрелки или WASD — управление";paint();gameTimer=setInterval(step,125);};
  const setDirection=dir=>{const map={up:{x:0,y:-1},down:{x:0,y:1},left:{x:-1,y:0},right:{x:1,y:0}}[dir];if(!map||map.x===-direction.x&&map.y===-direction.y)return;nextDirection=map;};
  const key=event=>{if(event.key==="Escape"){close();return;}if(over&&event.key==="Enter"){start();return;}const map={ArrowUp:"up",w:"up",W:"up",ArrowDown:"down",s:"down",S:"down",ArrowLeft:"left",a:"left",A:"left",ArrowRight:"right",d:"right",D:"right"};if(map[event.key]){event.preventDefault();setDirection(map[event.key]);}};
  const close=()=>{clearInterval(gameTimer);document.removeEventListener("keydown",key,true);overlay.remove();document.body.classList.remove("kedo-snake-open");};
  overlay.querySelector(".kedo-snake-close").onclick=close;overlay.addEventListener("click",event=>{if(event.target===overlay)close();});overlay.querySelectorAll("[data-dir]").forEach(button=>button.addEventListener("click",()=>setDirection(button.dataset.dir)));document.addEventListener("keydown",key,true);start();
}
document.addEventListener("keydown",e=>{if(e.key==="Escape"){document.querySelector(".command-palette-overlay")?.remove();}});


async function updateChatNavBadge(){
  const btn=document.querySelector('.nav button[data-page="messages"]');
  if(!btn||!state.user)return;
  try{
    const d=await api("/api/messages/unread-count");
    let badge=btn.querySelector(".nav-unread-badge");
    const n=Number(d.count||0);
    if(n>0){
      if(!badge){badge=document.createElement("span");badge.className="nav-unread-badge";btn.appendChild(badge);}
      badge.textContent=n>99?"99+":String(n);
    }else if(badge)badge.remove();
  }catch{}
}

async function loadNotifications({announce=true}={}){
  try{
    const d=await api("/api/notifications/?limit=50");
    const items=d.items||[];
    if(announce && state.notificationReady){
      const fresh=items.filter(n=>!state.notificationSnapshot.has(String(n.id)));
      for(const n of fresh.slice(0,3)){
        playKedoNotifySound("notification");
        showNotificationToast(n);
      }
    }
    // В актуальной ленте находятся только непрочитанные уведомления.
    state.notifications=items;
    state.notificationUnread=Number(d.unread||0);
    state.notificationSnapshot=new Set(items.map(n=>String(n.id)));
    state.notificationReady=true;
    updateNotificationBadge();
    updateChatNavBadge();
  }catch{}
}
async function loadNotificationArchive(){
  const d=await api("/api/notifications/archive?limit=100");
  return d.items||[];
}
function showNotificationToast(n){
  let host=document.getElementById("kedoNotificationToasts");
  if(!host){
    host=document.createElement("div");
    host.id="kedoNotificationToasts";
    host.className="kedo-notification-toasts";
    document.body.appendChild(host);
  }
  const el=document.createElement("div");
  el.className="kedo-notification-toast";
  el.innerHTML=`<div class="knt-icon">${n.task_id?"✓":"!"}</div><div class="knt-copy"><strong>${esc(n.title||"Новое уведомление")}</strong><span>${esc(n.body||"")}</span></div><button type="button" aria-label="Закрыть">×</button>`;
  el.querySelector("button").onclick=()=>el.remove();
  el.onclick=(e)=>{if(e.target.closest("button"))return;el.remove();if(n.task_id)setPage("tasks");else if(n.document_id)openDocument(Number(n.document_id));};
  host.appendChild(el);
  setTimeout(()=>el.remove(),7000);
}
async function checkLiveVersion(){
  try{
    const v=await api("/api/live/version");
    if(state.liveVersion===null){state.liveVersion=v.version;return;}
    if(v.version===state.liveVersion)return;
    state.liveVersion=v.version;
    if(state.page==="messages")return;
    const active=document.activeElement;
    const editing=active&&["INPUT","TEXTAREA","SELECT"].includes(active.tagName);
    const modal=document.querySelector(".admin-edit-overlay,.access-modal,#kedoPrivacyOverlay");
    if(kedoRenderBusy)return;
    if(!editing&&!modal)await render();
  }catch{}
}
function startNotificationPolling(){
  if(window.kedoDemo)return;
  if(state.notificationPollTimer)clearInterval(state.notificationPollTimer);
  if(state.livePollTimer)clearInterval(state.livePollTimer);
  if(state.liveStream){try{state.liveStream.close();}catch{}state.liveStream=null;}
  state.notificationPollTimer=setInterval(()=>loadNotifications({announce:true}),15000);
  // SSE is the primary transport. The 15-second poll is only a safety fallback.
  try{
    let reconnectTimer=null;
    let reconnectDelay=1000;
    const connect=()=>{
      if(state.liveStream||!state.user)return;
      const es=new EventSource("/api/live/stream",{withCredentials:true});
      state.liveStream=es;
      es.onopen=()=>{reconnectDelay=1000;};
      const handleLiveChange=async(ev)=>{
        try{
          const change=JSON.parse(ev.data||"{}");
          if(change.table==="connected")return;
          if(change.targetUserId && Number(change.targetUserId)===Number(state.user.id)){
            if(change.table==="internal_messages"){
              playKedoNotifySound("message");
              updateChatNavBadge();
              if(state.page!=="messages" || Number(state.chatActiveUser)!==Number(change.senderId)){
                showNotificationToast({title:"Новое сообщение",body:"Вам пришло новое сообщение в чате."});
              }
            }else if(change.table==="notifications"){
              // loadNotifications() handles the sound/toast for newly arrived notifications.
            }
          }
          if(change.table==="notifications"||change.table==="internal_messages")await loadNotifications({announce:true});
          if(state.page==="messages"){
            if(state.chatActiveUser&&change.table==="internal_messages"){
              // The rebuilt chat exposes its refresh hook as __kOneRefresh.
              // Keep live updates working even when the SSE event arrives
              // before the five-second polling fallback.
              if(window.__kOneRefresh)await window.__kOneRefresh(true);
            }
            return;
          }
          const active=document.activeElement;
          const editing=active&&["INPUT","TEXTAREA","SELECT"].includes(active.tagName);
          const modal=document.querySelector(".admin-edit-overlay,.access-modal,#kedoPrivacyOverlay");
          if(kedoRenderBusy)return;
          if(!editing&&!modal)await render();
        }catch{}
      };
      // /api/live/stream emits "event: change", so listen to the named SSE event.
      es.addEventListener("change",handleLiveChange);
      // Keep default-message compatibility for older deployments.
      es.onmessage=handleLiveChange;
      es.onerror=()=>{
        // A proxy/service restart can briefly interrupt SSE. Reconnect instead
        // of leaving the page permanently on the polling fallback.
        if(state.liveStream===es){
          es.close();
          state.liveStream=null;
          if(!reconnectTimer){
            reconnectTimer=setTimeout(()=>{
              reconnectTimer=null;
              reconnectDelay=Math.min(reconnectDelay*2,30000);
              connect();
            },reconnectDelay);
          }
        }
      };
    };
    connect();
  }catch{}
  // Keep this only as a compatibility fallback for browsers/proxies that do not keep SSE.
  state.livePollTimer=setInterval(checkLiveVersion,15000);
  checkLiveVersion();
}
function updateNotificationBadge(){
  const b=$("notificationBadge"); if(!b)return;
  b.textContent=String(state.notificationUnread);
  b.classList.toggle("hidden",state.notificationUnread<=0);
}
function closeNotificationPanel(){document.getElementById("notificationPanel")?.remove();}
function closeNotificationArchive(){document.getElementById("notificationArchivePanel")?.remove();}
function notificationRow(n,archive=false){
  return `<div class="notification-item ${archive?"archived":"unread"} ${n.task_id?"task-notification":""}" data-notification-id="${n.id}" data-document-id="${n.document_id||""}" data-task-id="${n.task_id||""}" data-request-id="${n.request_id||""}">
    <div class="np-icon">${n.task_id?"✓":"!"}</div><div class="np-content"><div class="np-title">${esc(n.title)}</div><div class="np-body">${esc(n.body||"")}</div>
    <div class="np-meta">${formatKedoDateTime(n.created_at)}${archive?" · в архиве":" · новое"}</div></div>
  </div>`;
}
async function openNotificationArchive(){
  closeNotificationPanel();
  closeNotificationArchive();
  try{
    const items=await loadNotificationArchive();
    const panel=document.createElement("div");
    panel.id="notificationArchivePanel";panel.className="notification-panel notification-archive-panel";
    panel.innerHTML=`<div class="np-head"><div><strong>Архив уведомлений</strong><div class="np-sub">Прочитанные сообщения за последние 7 дней</div></div><button class="secondary" id="closeNotificationArchive" style="min-height:32px;padding:6px 9px">Закрыть</button></div>
    ${items.length?items.map(n=>notificationRow(n,true)).join(""):'<div class="empty" style="padding:24px 20px">Архив пуст.</div>'}`;
    document.body.appendChild(panel);
    panel.querySelector("#closeNotificationArchive")?.addEventListener("click",closeNotificationArchive);
    panel.querySelectorAll(".notification-item").forEach(el=>el.addEventListener("click",async()=>{
      const did=Number(el.dataset.documentId||0),tid=Number(el.dataset.taskId||0),rid=Number(el.dataset.requestId||0);
      closeNotificationArchive();
      if(tid)return setPage("tasks");
      if(rid)return state.user?.role==="admin"?setPage("admin"):setPage("inbox");
      if(did)openDocument(did);
    }));
  }catch(e){kedoAlert(e.message);}
}
async function openNotificationPanel(){
  closeNotificationPanel();
  closeNotificationArchive();
  try{
    await loadNotifications();
    const panel=document.createElement("div");
    panel.id="notificationPanel";panel.className="notification-panel";
    const items=state.notifications||[];
    panel.innerHTML=`<div class="np-head"><div><strong>Уведомления</strong><div class="np-sub">Только новые и непрочитанные события</div></div><div class="np-head-actions"><button class="secondary" id="openNotificationArchive" style="min-height:32px;padding:6px 9px">Архив</button>${items.length?'<button class="secondary" id="readAllNotifications" style="min-height:32px;padding:6px 9px">Прочитать все</button>':''}</div></div>
    ${items.length?items.map(n=>notificationRow(n,false)).join(""):'<div class="empty" style="padding:20px">Новых уведомлений нет.</div>'}`;
    document.body.appendChild(panel);
    panel.querySelector("#openNotificationArchive")?.addEventListener("click",openNotificationArchive);
    panel.querySelector("#readAllNotifications")?.addEventListener("click",async()=>{
      try{await api("/api/notifications/read-all",{method:"POST"});await loadNotifications();openNotificationPanel();}catch(e){kedoAlert(e.message);}
    });
    panel.querySelectorAll(".notification-item").forEach(el=>el.addEventListener("click",async()=>{
      const nid=Number(el.dataset.notificationId),did=Number(el.dataset.documentId||0),tid=Number(el.dataset.taskId||0);
      try{await api("/api/notifications/"+nid+"/read",{method:"PATCH"});await loadNotifications();}catch{}
      closeNotificationPanel();
      if(tid)return setPage("tasks");
      const rid=Number(el.dataset.requestId||0); if(rid)return state.user?.role==="admin"?setPage("admin"):setPage("inbox");
      if(did)openDocument(did);
    }));
  }catch(e){kedoAlert(e.message);}
}
document.getElementById("notificationButton")?.addEventListener("click",e=>{e.stopPropagation();openNotificationPanel();});
document.addEventListener("click",e=>{
  const panel=document.getElementById("notificationPanel");
  const archive=document.getElementById("notificationArchivePanel");
  if(panel&&!panel.contains(e.target)&&!e.target.closest("#notificationButton"))closeNotificationPanel();
  if(archive&&!archive.contains(e.target)&&!e.target.closest("#notificationButton"))closeNotificationArchive();
});
function installUserCaptionScrollStyles(){
  let s=document.getElementById("kedoUserCaptionScrollFix");
  if(!s){
    s=document.createElement("style");
    s.id="kedoUserCaptionScrollFix";
    document.head.appendChild(s);
  }
  s.textContent=`
    header.top #userCaption.user-menu-button{text-overflow:clip!important;white-space:normal!important}
    #userCaption .kedo-user-text-viewport{
      -webkit-mask-image:none!important;mask-image:none!important;
      min-width:0!important;flex:1 1 0!important;overflow:hidden!important;
      display:block!important;position:relative!important;
    }
    #userCaption.kedo-user-scrolling .kedo-user-text-viewport{
      -webkit-mask-image:linear-gradient(90deg,transparent 0,#000 10px,#000 calc(100% - 10px),transparent 100%)!important;
      mask-image:linear-gradient(90deg,transparent 0,#000 10px,#000 calc(100% - 10px),transparent 100%)!important;
    }
    #userCaption .kedo-user-name{
      display:inline-block!important;width:max-content!important;max-width:none!important;
      white-space:nowrap!important;animation:none!important;transition:none!important;
      will-change:transform!important;
    }
    #userCaption.kedo-user-scrolling .kedo-user-name{
      animation:none!important;transition:none!important;
    }
    @media (prefers-reduced-motion:reduce){
      #userCaption.kedo-user-scrolling .kedo-user-name{animation:none!important}
    }
    html body button#userCaption:hover:not(:disabled){transform:none!important}
  `;
}
function measureUserChipTextWidth(text,sampleEl){
  const st=getComputedStyle(sampleEl);
  const canvas=measureUserChipTextWidth._c||(measureUserChipTextWidth._c=document.createElement("canvas"));
  const ctx=canvas.getContext("2d");
  if(!ctx)return String(text||"").length*7;
  ctx.font=st.font||`${st.fontWeight} ${st.fontSize} ${st.fontFamily}`;
  return ctx.measureText(String(text||"")).width;
}
function bindUserCaptionMarquee(userCaption,userTextViewport,userName){
  let rafId=0,paused=false,shift=0,durationMs=9000,startedAt=0;

  const stopLoop=()=>{if(rafId){cancelAnimationFrame(rafId);rafId=0;}};

  const tick=now=>{
    if(!userName.isConnected){stopLoop();return;}
    if(!startedAt)startedAt=now;
    if(!paused&&shift>0){
      const p=((now-startedAt)%durationMs)/durationMs;
      let x=0;
      if(p<0.15)x=0;
      else if(p<0.40)x=-shift*((p-0.15)/0.25);
      else if(p<0.60)x=-shift;
      else if(p<0.85)x=-shift*(1-(p-0.60)/0.25);
      userName.style.transform=`translate3d(${x.toFixed(2)}px,0,0)`;
    }
    rafId=requestAnimationFrame(tick);
  };

  const sync=()=>{
    if(!userCaption.isConnected)return;
    void userTextViewport.offsetWidth;
    const viewportW=userTextViewport.clientWidth||userTextViewport.getBoundingClientRect().width;
    const available=viewportW>1?viewportW:Math.max(0,userCaption.clientWidth-76);
    userName.style.transform="none";
    const domW=Math.ceil(userName.scrollWidth||userName.getBoundingClientRect().width);
    const canvasW=Math.ceil(measureUserChipTextWidth(userName.textContent,userName));
    const required=Math.max(domW,canvasW);
    const nextShift=Math.max(0,Math.ceil(required-available));

    if(nextShift<1){
      userCaption.classList.remove("kedo-user-scrolling");
      userName.style.transform="";
      shift=0;
      stopLoop();
      return;
    }

    userCaption.classList.add("kedo-user-scrolling");
    if(nextShift!==shift){
      shift=nextShift;
      durationMs=Math.max(6000,Math.min(16000,5000+shift*45));
      startedAt=performance.now();
    }
    if(!rafId)rafId=requestAnimationFrame(tick);
  };

  const stop=()=>{
    stopLoop();
    shift=0;
    paused=false;
    userName.style.transform="";
    userCaption.classList.remove("kedo-user-scrolling");
  };

  if(!userCaption.__kedoMarqueeHoverBound){
    userCaption.__kedoMarqueeHoverBound=true;
    userCaption.addEventListener("mouseenter",()=>{paused=true;});
    userCaption.addEventListener("mouseleave",()=>{paused=false;startedAt=performance.now();});
    userCaption.addEventListener("focusin",()=>{paused=true;});
    userCaption.addEventListener("focusout",()=>{paused=false;startedAt=performance.now();});
  }

  return {sync,stop};
}
async function showApp(userFromLogin=null){
  try{
    if(userFromLogin){
      state.user=userFromLogin;
    }else{
      state.user=await api("/api/auth/me");
    }

    if(!state.user){
      throw new Error("SESSION_NOT_FOUND");
    }
    state.profileRefreshAt=Date.now();

    $("loginPage").classList.add("hidden");
    $("app").classList.remove("hidden");

    document.documentElement.classList.remove("kedo-booting");

    initKedoHistory();
    installUserCaptionScrollStyles();

    const userCaption=$("userCaption");
    userCaption.__kedoMarqueeStop?.();
    userCaption.textContent="";
    userCaption.__kedoMarqueeHoverBound=false;

    const userStatus=document.createElement("span");
    userStatus.className="kedo-user-status";
    userStatus.dataset.state="online";
    userStatus.setAttribute("aria-label","В сети");

    const userAvatar=document.createElement("span");
    userAvatar.className="kedo-avatar kedo-avatar-sm"+(state.user.hasAvatar?"":" is-fallback");
    if(state.user.hasAvatar){
      userAvatar.innerHTML=`<img src="${esc(avatarUrl(state.user.id,state.user.avatarVersion||""))}" alt="" decoding="async" onerror="this.remove();this.parentElement.classList.add('is-fallback');"><span class="kedo-avatar-fallback">${esc((state.user.fullName||"?").split(/\s+/).map(x=>x[0]).slice(0,2).join("").toUpperCase())}</span>`;
    }else{
      userAvatar.innerHTML=`<span class="kedo-avatar-fallback">${esc((state.user.fullName||"?").split(/\s+/).map(x=>x[0]).slice(0,2).join("").toUpperCase())}</span>`;
    }

    const userTextViewport=document.createElement("span");
    userTextViewport.className="kedo-user-text-viewport";

    const userName=document.createElement("span");
    userName.className="kedo-user-name";
    userName.textContent=`${state.user.fullName} · ${state.user.position||state.user.role}`;
    userName.title=userName.textContent;

    userTextViewport.appendChild(userName);
    userCaption.appendChild(userAvatar);
    userCaption.appendChild(userStatus);
    userCaption.appendChild(userTextViewport);

    const userCaptionMarquee=bindUserCaptionMarquee(userCaption,userTextViewport,userName);
    userCaption.__kedoMarqueeStop=userCaptionMarquee.stop;
    const updateUserCaptionScroll=userCaptionMarquee.sync;

    const scheduleUserCaptionScroll=()=>{
      requestAnimationFrame(()=>requestAnimationFrame(updateUserCaptionScroll));
      if(document.fonts&&document.fonts.ready){
        document.fonts.ready.then(()=>requestAnimationFrame(updateUserCaptionScroll)).catch(()=>{});
      }
    };
    scheduleUserCaptionScroll();
    [80,250,800,1500,2500].forEach(ms=>setTimeout(scheduleUserCaptionScroll,ms));
    userAvatar.querySelector("img")?.addEventListener("load",scheduleUserCaptionScroll,{once:true});
    userAvatar.querySelector("img")?.addEventListener("error",scheduleUserCaptionScroll,{once:true});

    if(window.ResizeObserver){
      if(userCaption.__kedoResizeObserver){
        userCaption.__kedoResizeObserver.disconnect();
      }

      userCaption.__kedoResizeObserver=new ResizeObserver(
        updateUserCaptionScroll
      );

      userCaption.__kedoResizeObserver.observe(userCaption);
      userCaption.__kedoResizeObserver.observe(userTextViewport);
      userCaption.__kedoResizeObserver.observe(userName);
    }
    $("userCaption").onclick=()=>setPage("profile");
    $("userCaption").setAttribute("aria-label",`Открыть кабинет: ${state.user.fullName}`);
    updateProfileSessionBanner();

    let managedBranch=null;
    if(!isKnowledgeOnlyUser()){
      try{
        const branch=await api("/api/my-branch");
        if(branch&&branch.id) managedBranch=branch;
      }catch{}
    }

    state.managedBranch=managedBranch;
    if(!isKnowledgeOnlyUser()){
      try{state.reportsLevel=Number((await api("/api/reports/access")).level||0);}catch{state.reportsLevel=0;}
    }
    if(isKnowledgeOnlyUser()) state.page="knowledge";
    applyRoleNavigation();

    state.notificationReady=false;
    state.notificationSnapshot=new Set();

    if(!isKnowledgeOnlyUser()){
      await loadNotifications({announce:false});
      startNotificationPolling();
    }
    setPage(state.page);

  }catch(e){
    state.user=null;
    $("app").classList.add("hidden");
    $("loginPage").classList.remove("hidden");

    document.documentElement.classList.remove("kedo-booting");

    if(e?.message!=="SESSION_NOT_FOUND"){
      console.warn("[KEDO] Session check failed:",e);
    }
  }
}

function installFormPolish(){
  const requiredIds=new Set([
    "eName","eLogin","ePassword","eRole",
    "docTitle","docType","docFile",
    "orderTitle","orderFile",
    "kTitle","kContent",
    "taskAssigneeType","taskAssignee","taskTitle","taskDescription",
    "workflowApprover","workflowSigner"
  ]);
  const optionalIds=new Set([
    "ePosition","eGroup","eDep","docNumber","docDate","orderNumber","orderDate",
    "kCategory","kDocumentSelect","kDocumentFile","taskDueDate","taskDocument"
  ]);
  document.querySelectorAll("label").forEach(label=>{
    const field=label.querySelector("input,select,textarea");
    if(!field||label.querySelector(".required-mark,.optional-mark"))return;
    const id=field.id;
    if(requiredIds.has(id))label.insertAdjacentHTML("beforeend",' <span class="required-mark">обязательно</span>');
    else if(optionalIds.has(id))label.insertAdjacentHTML("beforeend",' <span class="optional-mark">необязательно</span>');
  });

  document.querySelectorAll("#main .kedo-form-panel").forEach(section=>{
    if(section.dataset.kedoPanelReady==="1")return;
    const head=section.querySelector(":scope > .kedo-form-panel-head");
    const body=section.querySelector(":scope > .kedo-form-panel-body");
    if(!head||!body)return;
    section.dataset.kedoPanelReady="1";
    if(!section.classList.contains("is-collapsed"))section.classList.add("is-collapsed");
    head.classList.add("kedo-collapsible-head");
    head.setAttribute("aria-expanded",String(!section.classList.contains("is-collapsed")));
    body.hidden=section.classList.contains("is-collapsed");
  });
  document.querySelectorAll("#main section.card").forEach(section=>{
    if(section.dataset.kedoSliding==="1")return;
    if(section.querySelector(":scope > .kedo-form-panel-head") && section.querySelector(":scope > .kedo-form-panel-body"))return;
    const h2=section.querySelector(":scope > h2");
    if(!h2)return;
    const title=(h2.textContent||"").trim();
    const isForm=/^(Загрузка документа|Загрузить приказ|Новый материал|Поставить задачу|Новый сотрудник)$/i.test(title);
    if(!isForm)return;
    section.dataset.kedoSliding="1";
    section.classList.add("kedo-form-panel");
    const body=document.createElement("div");
    body.className="kedo-form-panel-body";
    while(section.childNodes.length){
      const node=section.childNodes[0];
      if(node===h2){section.removeChild(node);continue;}
      body.appendChild(node);
    }
    const head=document.createElement("button");
    head.type="button";
    head.className="kedo-form-panel-head";
    head.innerHTML=`<span><span class="eyebrow">Форма</span><strong>${esc(title)}</strong><small>Нажмите, чтобы развернуть поля</small></span><span class="kedo-form-chevron">⌄</span>`;
    section.appendChild(head);
    section.appendChild(body);
    section.classList.add("is-collapsed");
    head.classList.add("kedo-collapsible-head");
    head.setAttribute("aria-expanded","false");
    body.hidden=true;
  });
}
function installKedoFormStyles(){
  if(document.getElementById("kedoFormPolishStyles"))return;
  const s=document.createElement("style");s.id="kedoFormPolishStyles";s.textContent=`
    .kedo-form-panel{overflow:hidden;border:1px solid #dce7f1;transition:box-shadow .28s ease,transform .28s ease,border-color .28s ease}
    .kedo-form-panel:hover{box-shadow:0 8px 26px rgba(28,67,104,.07)}
    .kedo-form-panel-head{width:100%;display:flex;align-items:center;justify-content:space-between;gap:18px;padding:18px 20px;border:0;background:transparent;text-align:left;cursor:pointer;color:#173b5f}
    .kedo-form-panel-head>span:first-child{display:flex;flex-direction:column;gap:3px}.kedo-form-panel-head:has(.kedo-form-icon)>span:first-child{flex-direction:row;align-items:center;gap:10px;min-width:0}.kedo-form-panel-head:has(.kedo-form-icon)>span:first-child>span:last-child{display:grid;gap:2px;min-width:0}
    .kedo-form-panel-head strong{font-size:19px}
    .kedo-form-panel-head small{font-size:12px;color:#74879a;font-weight:400}
    .kedo-form-chevron{font-size:22px;color:#2873aa;transition:transform .3s cubic-bezier(.2,.8,.2,1)}
    .kedo-form-panel-body{display:grid;grid-template-rows:1fr;padding:0 20px 20px;opacity:1;max-height:1600px;overflow:hidden;transition:max-height .42s cubic-bezier(.22,.8,.24,1),opacity .28s ease,padding .35s ease}
    .kedo-form-panel.is-collapsed .kedo-form-panel-body{max-height:0;opacity:0;padding-top:0;padding-bottom:0;pointer-events:none}
    .kedo-form-panel.is-collapsed .kedo-form-chevron{transform:rotate(-90deg)}
    .kedo-form-panel-body .row,.kedo-form-panel-body>label,.kedo-form-panel-body>.notice,.kedo-form-panel-body>.doc-recipient-builder,.kedo-form-panel-body>.order-recipient-box,.kedo-form-panel-body>.access-editor-box,.kedo-form-panel-body>.task-group-people-wrap,.kedo-form-panel-body>.task-create-footer{animation:kedoFieldIn .38s ease both}
    .kedo-form-panel-body>*:nth-child(2){animation-delay:.035s}.kedo-form-panel-body>*:nth-child(3){animation-delay:.07s}.kedo-form-panel-body>*:nth-child(4){animation-delay:.105s}.kedo-form-panel-body>*:nth-child(5){animation-delay:.14s}.kedo-form-panel-body>*:nth-child(6){animation-delay:.175s}
    .required-mark{display:inline-block;margin-left:6px;padding:2px 6px;border-radius:999px;background:#edf6ff;color:#1769a5;font-size:10px;font-weight:700;vertical-align:middle}
    .optional-mark{display:inline-block;margin-left:6px;padding:2px 6px;border-radius:999px;background:#f3f5f7;color:#778596;font-size:10px;font-weight:600;vertical-align:middle}
    @keyframes kedoFieldIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
    .kedo-form-panel input,.kedo-form-panel select,.kedo-form-panel textarea,.kedo-form-panel button{transition:border-color .2s ease,box-shadow .2s ease,transform .2s ease}
    .kedo-form-panel input:focus,.kedo-form-panel select:focus,.kedo-form-panel textarea:focus{box-shadow:0 0 0 3px rgba(36,113,169,.10);transform:translateY(-1px)}

    .chat-shell{
      display:grid;
      grid-template-columns:330px minmax(0,1fr);
      width:100%;
      height:calc(100vh - 155px);
      min-height:620px;
      background:#fff;
      border:1px solid #d9e5ef;
      border-radius:18px;
      overflow:hidden;
      box-shadow:0 12px 34px rgba(20,60,90,.07);
    }
    .chat-sidebar{
      background:#f7faff;
      border-right:1px solid #e1eaf2;
      display:flex;
      flex-direction:column;
      min-width:0;
      min-height:0;
    }
    .chat-sidebar-head{
      padding:20px 18px 14px;
      display:flex;
      align-items:center;
      justify-content:space-between;
    }
    .chat-sidebar-head h1{margin:3px 0 0;font-size:24px;color:#173b5f}
    .chat-live-dot{width:9px;height:9px;border-radius:50%;background:#35b879;box-shadow:0 0 0 5px rgba(53,184,121,.12);animation:chatPulse 2s ease-in-out infinite}
    .chat-search{padding:0 14px 12px}
    .chat-search input{
      width:100%;box-sizing:border-box;border:1px solid #d3e0ec;border-radius:13px;
      padding:12px 14px;background:#fff;outline:none;transition:border-color .18s,box-shadow .18s
    }
    .chat-search input:focus{border-color:#4d95c9;box-shadow:0 0 0 3px rgba(77,149,201,.12)}
    .chat-contacts{overflow:auto;padding:0 8px 12px;min-height:0}
    .chat-contact{
      width:100%;border:0;background:transparent;border-radius:13px;padding:11px 10px;
      display:flex;align-items:center;gap:11px;text-align:left;cursor:pointer;
      transition:background .18s ease,transform .18s ease
    }
    .chat-contact:hover{background:#edf5fb;transform:translateX(2px)}
    .chat-contact.active{background:#e1eef9}
    .chat-avatar{width:42px;height:42px;border-radius:50%;background:#dcecf8;color:#1769a5;display:grid;place-items:center;font-size:12px;font-weight:800;flex:none}
    .chat-avatar.large{width:44px;height:44px}
    .chat-contact-main{min-width:0;flex:1}
    .chat-contact-main strong,.chat-contact-main small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    .chat-contact-main strong{font-size:14px;color:#173b5f}
    .chat-contact-main small{font-size:12px;color:#7890a5;margin-top:3px}
    .chat-unread-dot{width:8px;height:8px;border-radius:50%;background:#1674b9;flex:none}
    .chat-window{
      display:flex;flex-direction:column;min-width:0;min-height:0;
      background:#f7fafd;overflow:hidden;
    }
    .chat-head{
      height:76px;min-height:76px;flex:0 0 76px;box-sizing:border-box;padding:12px 18px;
      border-bottom:1px solid #e0e8ef;display:flex;align-items:center;gap:12px;background:#fff;
      position:relative;z-index:3
    }
    .chat-head strong{font-size:15px;color:#173b5f}
    .chat-online-note{font-size:11px;color:#48a276}
    .chat-head-actions{margin-left:auto;display:flex;align-items:center;gap:10px}
    .chat-messages{
      flex:1 1 auto;min-height:0;overflow-y:auto;overflow-x:hidden;
      padding:24px 26px 18px;
      background:linear-gradient(180deg,#f9fbfd 0%,#f4f7fa 100%);
      display:flex;flex-direction:column;gap:8px;
      overscroll-behavior:contain;scroll-behavior:auto;
      scrollbar-gutter:stable;
    }
    .chat-row{display:flex;width:100%}
    .chat-row.own{justify-content:flex-end}
    .chat-bubble{
      max-width:min(68%,700px);
      padding:10px 13px 8px;border-radius:17px;
      background:#e8f0f7;color:#173b5f;
      box-shadow:0 1px 2px rgba(20,50,80,.035);
      transition:transform .15s ease
    }
    .chat-row.own .chat-bubble{
      background:#286fa8;color:#fff;border-bottom-right-radius:6px
    }
    .chat-row.other .chat-bubble{border-bottom-left-radius:6px}
    .chat-bubble:hover{transform:translateY(-1px)}
    .chat-text{font-size:14px;line-height:1.45;word-break:break-word}
    .chat-time{font-size:10px;opacity:.68;text-align:right;margin-top:4px;white-space:nowrap}
    .chat-no-messages,.chat-empty{text-align:center;color:#7890a5;margin:auto;max-width:380px}
    .chat-empty-icon{font-size:42px;margin-bottom:10px}
    .chat-empty h2{color:#173b5f;margin:0 0 7px}
    .chat-empty p{margin:0;line-height:1.5}
    .chat-composer{
      display:flex;flex:0 0 auto;gap:9px;padding:11px 13px;
      border-top:1px solid #dfe8ef;background:#fff;position:relative;z-index:4;
      align-items:flex-end
    }
    .chat-composer textarea{
      flex:1;resize:none;min-height:44px;max-height:140px;
      border:1px solid #d3e0ec;border-radius:14px;padding:11px 14px;
      font:inherit;line-height:1.35;outline:none;box-sizing:border-box;
      background:#fbfdff;transition:border-color .18s,box-shadow .18s,background .18s
    }
    .chat-composer textarea:focus{
      border-color:#4d95c9;box-shadow:0 0 0 3px rgba(77,149,201,.11);background:#fff
    }
    .chat-composer button{align-self:flex-end;height:44px;border-radius:12px;padding:0 18px}
    .chat-attach-wrap{display:flex;align-items:flex-end}.chat-attach-button{width:44px!important;padding:0!important;border:1px solid #d3e0ec!important;background:#f7fbff!important;color:#1769aa!important;font-size:24px!important;cursor:pointer}.chat-attach-button:hover{background:#edf6fd!important;transform:translateY(-1px)}
    .chat-compose-main{min-width:0;flex:1;display:flex;flex-direction:column;gap:5px}.chat-file-preview{display:flex;gap:6px;flex-wrap:wrap;max-width:100%;max-height:72px;overflow:auto}.chat-file-chip{display:inline-flex;align-items:center;gap:6px;max-width:260px;padding:5px 8px;border:1px solid #d8e5ef;border-radius:9px;background:#f5f9fc;color:#36536c;font-size:11px}.chat-file-chip span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chat-file-chip small{color:#8191a1;white-space:nowrap}.chat-file-chip button{border:0!important;background:transparent!important;color:#7b8b9b!important;width:auto!important;height:auto!important;padding:0 2px!important;cursor:pointer;font-size:16px!important}
    .chat-attachments{display:grid;gap:6px;margin-top:4px}.chat-image-attachment{display:flex;flex-direction:column;gap:4px;max-width:290px;color:inherit;text-decoration:none}.chat-image-attachment img{display:block;max-width:290px;max-height:230px;border-radius:11px;object-fit:cover;background:#dfe9f1}.chat-image-attachment span{display:flex;justify-content:space-between;gap:8px;font-size:11px}.chat-image-attachment small{opacity:.7}.chat-file-attachment{display:flex;align-items:center;gap:9px;min-width:220px;max-width:340px;padding:8px 10px;border-radius:10px;text-decoration:none;background:rgba(255,255,255,.65);color:inherit;border:1px solid rgba(80,120,150,.15)}.chat-row.own .chat-file-attachment{background:rgba(255,255,255,.13);border-color:rgba(255,255,255,.2)}.chat-file-icon{width:30px;height:30px;border-radius:8px;display:grid;place-items:center;background:#e5f0f8;color:#1769aa;flex:none}.chat-row.own .chat-file-icon{background:rgba(255,255,255,.18);color:#fff}.chat-file-name{min-width:0;display:flex;flex-direction:column;gap:2px}.chat-file-name strong{font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chat-file-name small{font-size:10px;opacity:.7}.chat-file-download{margin-left:auto;font-size:17px;opacity:.7}
    .chat-sound-button{
      width:36px;height:36px;border:1px solid #d8e4ef;border-radius:10px;
      background:#f7fbff;cursor:pointer;transition:transform .18s ease,background .18s ease
    }
    .chat-sound-button:hover{transform:translateY(-1px);background:#edf6fd}
    .chat-sound-button.muted{opacity:.55}
    @keyframes chatPulse{50%{opacity:.45;transform:scale(.8)}}
    @media(max-width:900px){
      .chat-shell{grid-template-columns:290px;height:calc(100vh - 135px);min-height:560px}
      .chat-bubble{max-width:78%}
    }
    @media(max-width:700px){
      .chat-shell{grid-template-columns:1fr;height:calc(100vh - 125px);min-height:0}
      .chat-sidebar{display:none}
      .chat-bubble{max-width:86%}
      .chat-head{height:64px;min-height:64px;flex-basis:64px}
      .chat-messages{padding:18px 12px 12px}
    }
    @keyframes chatPulse{50%{opacity:.45;transform:scale(.8)}} 
    @media(max-width:800px){.chat-shell{grid-template-columns:1fr;height:calc(100vh - 125px);min-height:0}.chat-sidebar{display:none}.chat-bubble{max-width:85%}.chat-head{height:64px}}

    .chat-head-actions{margin-left:auto;display:flex;align-items:center;gap:10px}.chat-sound-button{width:34px;height:34px;border:1px solid #d8e4ef;border-radius:10px;background:#f7fbff;cursor:pointer;transition:transform .18s ease,background .18s ease}.chat-sound-button:hover{transform:translateY(-1px);background:#edf6fd}.chat-sound-button.muted{opacity:.55}
    .admin-employees-card .employee-list{display:flex;flex-direction:column;gap:6px;max-height:500px;overflow:auto;padding:2px 3px 4px 0}
    .admin-employees-card .employee-row{border:1px solid #e2eaf2;border-radius:12px;background:#fbfdff;padding:9px 11px;display:grid;grid-template-columns:minmax(260px,1.4fr) minmax(180px,.8fr) auto;gap:10px;align-items:center;transition:box-shadow .18s ease,border-color .18s ease,transform .18s ease}
    .admin-employees-card .employee-row:hover{border-color:#cdddea;box-shadow:0 4px 14px rgba(28,68,103,.06);transform:translateY(-1px)}
    .admin-employees-card .employee-actions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:5px}.admin-employees-card .employee-actions button{min-height:30px;padding:5px 9px;font-size:12px}
    .admin-audit-card .audit-filter-bar{position:sticky;top:0;z-index:2;background:#fff;padding:2px 0 8px;overflow-x:auto;white-space:nowrap}
    .admin-audit-card .audit-list{height:520px;max-height:520px;overflow-y:auto;overflow-x:hidden;padding:2px 3px 6px 0;display:flex;flex-direction:column;gap:5px;align-items:stretch}
    .admin-audit-card .audit-row{flex:0 0 auto;box-sizing:border-box;width:100%;min-height:52px;padding:8px 11px;border:1px solid #e1e9f1;border-radius:10px;background:#fff;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:12px;align-items:center;line-height:1.25}
    .admin-audit-card .audit-row-main{min-width:0;overflow:hidden}
    .admin-audit-card .audit-row-top{display:flex;align-items:center;gap:7px;min-width:0;white-space:nowrap;overflow:hidden}
    .admin-audit-card .audit-row-top strong{overflow:hidden;text-overflow:ellipsis}
    .admin-audit-card .audit-row-meta{display:flex;align-items:center;gap:10px;flex-wrap:nowrap;margin-top:3px;font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .admin-audit-card .audit-details{flex:0 0 auto;min-width:70px}
    .admin-audit-card .audit-details summary{font-size:10px;white-space:nowrap}
    .admin-audit-card .audit-details pre{max-width:min(480px,70vw);max-height:180px;overflow:auto}
    .admin-audit-card .audit-row:hover{border-color:#cbdbe8;box-shadow:0 3px 12px rgba(28,68,103,.05)}
    @media(max-width:700px){.admin-audit-card .audit-list{height:460px;max-height:460px}.admin-audit-card .audit-row{grid-template-columns:1fr}.admin-audit-card .audit-details{justify-self:start}}
    @media(max-width:1050px){.admin-employees-card .employee-row{grid-template-columns:1fr}.admin-employees-card .employee-actions{justify-content:flex-start}}

    .kedo-form-panel .primary,.kedo-form-panel .secondary,.kedo-form-panel .danger,.kedo-form-panel .danger-outline{transition:transform .18s ease,box-shadow .18s ease,filter .18s ease}
    .kedo-form-panel .primary:hover,.kedo-form-panel .secondary:hover,.kedo-form-panel .danger:hover,.kedo-form-panel .danger-outline:hover{transform:translateY(-1px);box-shadow:0 5px 14px rgba(24,67,105,.12)}
  `;
  document.head.appendChild(s);
}
installKedoFormStyles();
applyProfileSettings();

async function render(renderGen){
  const gen=renderGen ?? ++kedoRenderGen;
  if(renderGen==null)kedoRenderGen=gen;
  kedoRenderBusy=true;
  $("main")?.classList.remove("document-detail-active");
  const captions={dashboard:"Главная",inbox:"Входящие",documents:"Архив документов",orders:"Приказы",reports:"Отчёты",tasks:"Мои задачи",profile:"Профиль",knowledge:"База знаний",help:"Помощь",delegations:"Замещения",myBranch:"Мой филиал",adminBranch:"Управление филиалом",admin:"Администрирование",messages:"Сообщения"};
  const pageAtStart=state.page;
  $("pageCaption").textContent=captions[pageAtStart]||"Главная";
  const alive=()=>gen===kedoRenderGen && state.page===pageAtStart;

  // Soft placeholder if API takes noticeable time — messages paints its own shell immediately
  const skipSlowLoader=pageAtStart==="messages";
  const slowTimer=skipSlowLoader?null:window.setTimeout(()=>{
    if(!alive())return;
    const main=$("main");
    if(!main)return;
    if(main.querySelector(".kedo-one-block,.knowledge-hero,.documents-page"))return;
    if(main.classList.contains("kedo-page-out") || !main.childElementCount){
      main.innerHTML=`<section class="kedo-page-loading" aria-live="polite" aria-label="Загрузка раздела"><div class="kedo-loading-title"></div><div class="kedo-loading-line kedo-loading-line-wide"></div><div class="kedo-loading-grid"><i></i><i></i><i></i></div><span class="kedo-loading-label">Загрузка раздела</span></section>`;
      main.classList.remove("kedo-page-out");
    }
  },120);

  try{
    if(pageAtStart==="dashboard")await renderDashboard();
    else if(pageAtStart==="inbox")await renderInbox();
    else if(pageAtStart==="help")await renderHelp();
    else if(pageAtStart==="delegations")await renderDelegations();
    else if(pageAtStart==="myBranch")await renderMyBranch();
    else if(pageAtStart==="adminBranch")await renderMyBranch(state.adminBranchId);
    else if(pageAtStart==="messages")await renderMessages(gen);
    else if(pageAtStart==="documents"){await loadKedoFeature("archive");await window.renderDocuments();}
    else if(pageAtStart==="orders"){await loadKedoFeature("archive");await renderOrders();}
    else if(pageAtStart==="reports"){await loadKedoFeature("reports");await window.renderReportsPage();}
    else if(pageAtStart==="knowledge")await renderKnowledge();
    else if(pageAtStart==="tasks")await renderTasks();
    else if(pageAtStart==="profile")await renderProfile();
    else if(pageAtStart==="admin")await renderAdmin();

    // Drop stale render if user already switched away
    if(!alive()){
      const main=$("main");
      if(main?.querySelector?.(".kedo-page-loading") && gen===kedoRenderGen){
        queueMicrotask(()=>setPage(state.page,{force:true}));
      }
      return;
    }
    installFormPolish();
    endPageTransition(gen);
  }catch(e){
    if(!alive())return;
    $("main").innerHTML=`<div class="card err"><h2>Не удалось открыть раздел</h2><p>${esc(e.message==="Not found."?"Этот раздел недоступен для вашей роли.":e.message)}</p><button class="secondary" data-action="setPage" data-page="dashboard">Вернуться на главную</button></div>`;
    endPageTransition(gen);
  }finally{
    if(slowTimer!=null)window.clearTimeout(slowTimer);
    if(gen===kedoRenderGen)kedoRenderBusy=false;
  }
}
function renderHomeTips(){
  const tips=[
    {icon:'search',title:'Быстрый поиск',text:'Используйте поиск в верхней панели вместо ручного поиска.'},
    {icon:'task',title:'Проверьте получателей',text:'Перед отправкой проверьте сотрудников и подразделения.'},
    {icon:'order',title:'Приказ',text:'Добавляйте получателей сразу при загрузке приказа.'},
    {icon:'user',title:'Замещение',text:'Передавайте рабочие действия на конкретный период.'},
    {icon:'book',title:'База знаний',text:'Храните инструкции и регламенты в одном месте.'},
    {icon:'search',title:'Помощь',text:'Откройте раздел «Помощь», если не знаете, где функция.'},
    {icon:'file',title:'Подписание',text:'Перед ЭП проверьте документ и получателей.'},
    {icon:'calendar',title:'Сроки',text:'Контролируйте сроки задач и документов.'},
    {icon:'bell',title:'Уведомления',text:'Проверяйте новые события после входа.'},
    {icon:'building',title:'Филиалы',text:'Уточняйте филиал, когда аудитория зависит от площадки.'},
    {icon:'building',title:'Подразделения',text:'Уточняйте подразделение, если сотрудников много.'},
    {icon:'user',title:'Роли',text:'Роли определяют доступ и полномочия сотрудника.'},
    {icon:'settings',title:'Права доступа',text:'После изменения роли проверьте фактический доступ.'},
    {icon:'file',title:'Версии',text:'Используйте версии, если документ изменяется.'},
    {icon:'folder',title:'Корзина',text:'Проверьте корзину перед окончательным удалением.'},
    {icon:'lock',title:'Безопасность',text:'Не передавайте пароль и ключи подписи.'},
    {icon:'task',title:'Задача',text:'Проверьте исполнителя и срок после создания.'},
    {icon:'message',title:'Сообщения',text:'Для короткого рабочего вопроса используйте сообщения.'}
  ];

  for(let i=tips.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [tips[i],tips[j]]=[tips[j],tips[i]];
  }

  const selected=tips.slice(0,4);

  return `<section class="home-tip home-tip-premium">
    <div class="home-tip-head">
      <div>
        <span class="eyebrow">ПОДСКАЗКИ</span>
        <h3>Быстрые советы</h3>
        <p>Новая подборка при каждом входе на главную.</p>
      </div>
      <span class="home-tip-count"><b>4</b> из ${tips.length}</span>
    </div>
    <div class="home-tip-grid">
      ${selected.map(t=>`<article class="home-tip-item">
        <span class="home-tip-icon">${kedoIcon(t.icon)}</span>
        <div class="home-tip-copy">
          <strong>${esc(t.title)}</strong>
          <small>${esc(t.text)}</small>
        </div>
      </article>`).join('')}
    </div>
  </section>`;
}
async function refreshCurrentUser(force=false){
  if(!force&&state.user&&Date.now()-state.profileRefreshAt<60_000)return state.user;
  try{
    const me=await api("/api/auth/me");
    if(me&&me.id){
      state.user={...(state.user||{}),...me};
      state.profileRefreshAt=Date.now();
    }
  }catch{}
  return state.user;
}
function installKedoUxEnhancements(){
  if(document.getElementById("kedoUxEnhancements"))return;
  const style=document.createElement("style");
  style.id="kedoUxEnhancements";
  style.textContent=`
    .home-metrics{grid-template-columns:repeat(5,minmax(0,1fr))}
    .home-metric-workforce{border-color:#cfe6dc;background:linear-gradient(145deg,#fff,#f5fcf8)}
    .home-metric-workforce strong{color:#188255}
    .home-metric-workforce strong small{display:inline;color:#8aa0ac;font-size:13px;font-weight:700}
    .leader-control-grid{grid-template-columns:repeat(5,minmax(0,1fr))!important}
    .leader-control-grid .is-online b{color:#188255}
    .task-sort-box{display:grid;gap:4px;min-width:145px}
    .task-sort-box span{font-size:10px;color:#8094a3;font-weight:700}
    .task-sort-box select{min-height:36px;padding:7px 28px 7px 10px;border:1px solid #d5e2ea;border-radius:9px;background:#fff;color:#38566b;font:inherit;font-size:11px;outline:0}
    .task-sort-box select:focus{border-color:#71a9c4;box-shadow:0 0 0 3px rgba(64,137,175,.1)}
    .audit-journal-head-actions{display:flex;align-items:center;gap:7px;flex-wrap:wrap}
    .doc-filter-toolbar{display:flex;align-items:end;gap:10px;margin:10px 0 14px;padding:10px 12px;border:1px solid #dce8ef;border-radius:12px;background:#f6fafc}
    .doc-filter-toolbar label,.audit-date-filters label{display:grid;gap:4px;color:#6e879a;font-size:10px;font-weight:700}
    .doc-filter-toolbar select,.audit-date-filters input{min-height:34px;padding:6px 10px;border:1px solid #cbdde8;border-radius:8px;background:#fff;color:#34536a;font:inherit;font-size:12px}
    .doc-filter-toolbar #docFilterCount{margin:0 0 9px auto;font-size:11px}
    .task-detail-overlay{position:fixed;inset:0;z-index:1000;display:grid;place-items:center;padding:22px;background:rgba(18,45,66,.54);backdrop-filter:blur(6px);animation:kedoFadeIn .18s ease-out}
    .task-detail-modal{width:min(760px,calc(100vw - 32px));max-height:min(850px,calc(100vh - 32px));overflow:hidden;border:1px solid #d4e3eb;border-radius:20px;background:#fff;box-shadow:0 24px 70px rgba(13,41,61,.28)}
    .task-detail-head{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;padding:24px 26px 18px;border-bottom:1px solid #e4edf2;background:linear-gradient(135deg,#f8fbfd,#fff)}
    .task-detail-head h2{margin:4px 0 5px;color:#173d5c;font-size:23px;line-height:1.15}.task-detail-head p{margin:0;color:#6d879a;font-size:12px}
    .task-detail-scroll{max-height:calc(100vh - 180px);overflow:auto;padding:18px 26px 26px}.task-detail-summary{display:grid;grid-template-columns:110px 1fr;gap:8px 16px;padding:14px 16px;margin-bottom:14px;border:1px solid #dbe8ef;border-radius:13px;background:#f7fbfd}.task-detail-summary span{color:#7b93a3;font-size:11px}.task-detail-summary strong{color:#35566d;font-size:12px;overflow-wrap:anywhere}
    .task-detail-section{padding:16px 0;border-top:1px solid #e6eef3}.task-detail-section-head{display:flex;align-items:center;justify-content:space-between;gap:10px}.task-detail-section h3{margin:0;color:#234968;font-size:15px}.task-detail-section-head>span{color:#7992a3;font-size:11px}.task-check-list,.task-file-list,.task-comments{display:grid;gap:7px;margin-top:10px}.task-check-row,.task-file-row,.task-comment{border:1px solid #dbe8ef;border-radius:11px;background:#fbfdfe}.task-check-row{display:flex;align-items:center;justify-content:space-between;padding:9px 11px}.task-check-row label{display:flex;align-items:center;gap:9px;min-width:0;color:#35566d;font-size:12px}.task-check-row.is-done span{text-decoration:line-through;color:#8aa0ae}.task-detail-delete{border:0;background:transparent;color:#b86a62;font-size:18px;cursor:pointer}.task-check-form,.task-comment-form{display:flex;gap:8px;margin-top:10px}.task-check-form input,.task-comment-form textarea{min-width:0;flex:1;border:1px solid #cbdde8;border-radius:9px;padding:9px 11px;background:#fff;font:inherit;font-size:12px}.task-comment-form textarea{min-height:64px;resize:vertical}.task-comment{padding:10px 12px}.task-comment-head{display:flex;justify-content:space-between;gap:10px}.task-comment-head strong{color:#31546c;font-size:12px}.task-comment-head time,.task-comment p,.task-file-row small{color:#7d94a4;font-size:10px}.task-comment p{margin:7px 0 0;color:#405d70;font-size:12px;white-space:pre-wrap}.task-file-row{display:flex;align-items:center;gap:9px;padding:10px 12px;text-decoration:none;color:#2c6a96}.task-file-row strong{font-size:12px}.task-file-row small{margin-left:auto}.task-file-upload{display:inline-flex;margin-top:10px;padding:8px 11px;border:1px dashed #a8c6d8;border-radius:9px;color:#31739e;font-size:11px;font-weight:700;cursor:pointer}.task-file-upload input{display:none}.task-history{display:grid;gap:9px;margin:10px 0 0;padding:0;list-style:none}.task-history li{display:grid;grid-template-columns:9px 1fr;gap:9px;align-items:start}.task-history-dot{width:8px;height:8px;margin-top:5px;border-radius:50%;background:#2d83b6;box-shadow:0 0 0 4px #e7f3f9}.task-history li div{display:flex;flex-wrap:wrap;gap:5px 8px;align-items:baseline;color:#547085;font-size:11px}.task-history li strong{color:#31546c}.task-history li time{color:#8aa0ae;font-size:10px}.task-detail-empty,.task-detail-loading,.task-detail-error{padding:16px;color:#7890a0;font-size:12px}.task-detail-error{color:#a0524e}.kOneTyping{display:block!important;margin-top:3px;color:#2d9c71!important;font-size:10px;font-style:normal}.kOneTyping[hidden]{display:none!important}
    .audit-date-filters{display:flex;align-items:end;gap:9px;margin:10px 0;padding:10px 12px;border:1px solid #dce8ef;border-radius:12px;background:#f6fafc}.audit-date-filters button{min-height:34px}.audit-date-filters label input{min-width:135px}
    @media(max-width:600px){.doc-filter-toolbar,.audit-date-filters{align-items:stretch;flex-wrap:wrap}.doc-filter-toolbar #docFilterCount{width:100%;margin:0}.task-detail-head,.task-detail-scroll{padding-left:17px;padding-right:17px}.task-detail-summary{grid-template-columns:1fr}.task-check-form,.task-comment-form{flex-direction:column}.task-file-row{flex-wrap:wrap}.task-file-row small{margin-left:0;width:100%}}
    @media(max-width:1100px){.home-metrics{grid-template-columns:repeat(3,minmax(0,1fr))}.leader-control-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important}}
    @media(max-width:700px){.home-metrics,.leader-control-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}.audit-journal-head-actions{width:100%;justify-content:flex-start}}
    @media(max-width:520px){.home-metrics,.leader-control-grid{grid-template-columns:1fr!important}}
  `;
  document.head.appendChild(style);
}
async function renderDashboard(){
  installKedoUxEnhancements();
  await refreshCurrentUser();
  const dashboard=await api('/api/inbox/dashboard');
  const inbox=dashboard.inbox||{};
  const workforce=dashboard.workforce||{employee_count:0,online_count:0};
  const tasks=inbox.tasks||[], docs=inbox.documents||[];
  const allActions=[...tasks.map(x=>({...x,__kind:'task'})),...docs.map(x=>({...x,__kind:'document'}))];
  const now=Date.now();
  const isOverdue=x=>x.__kind==='task' && x.due_date && kedoDateEnd(x.due_date)<now && !['DONE','COMPLETED','CONFIRMED'].includes(String(x.status).toUpperCase());
  const overdue=allActions.filter(isOverdue);
  const actionHtml=allActions.slice(0,6).map(x=>{
    const title=x.title||x.name||'Без названия';
    const kind=x.__kind==='task'?'Задача':'Документ';
    const status=x.__kind==='task'?(x.status==='OPEN'?'Новая':x.status==='IN_PROGRESS'?'В работе':'Требует внимания'):statusLabel(x.status);
    const urgent=isOverdue(x);
    return `<button class="home-action-row ${urgent?'urgent':''}" data-action="${x.__kind==='task'?'setPage':'openDocument'}" ${x.__kind==='task'?'data-page="tasks"':`data-id="${x.id}"`}>
      <span class="home-action-icon">${kedoIcon(x.__kind==='task'?'task':'file')}</span><span class="home-action-copy"><strong>${esc(title)}${x.document_number?` <span>№ ${esc(x.document_number)}</span>`:''}</strong><small>${kind} · ${esc(status)}${urgent?' · ПРОСРОЧЕНО':''}</small></span><span class="home-action-arrow">›</span>
    </button>`;
  }).join('') || `<div class="home-empty"><strong>Всё спокойно</strong><span>Сейчас нет действий, которые требуют вашего внимания.</span></div>`;
  const unread=Number(inbox.unread||state.notificationUnread||0);
  const role=roleLabelsList(state.user.roles);
  $("main").innerHTML=`<div class="home-page">
    <div class="home-welcome"><div><div class="eyebrow">ВНУТРЕННИЙ ПОРТАЛ</div><h1 class="page-title">Добрый день, ${esc((state.user.fullName||'').split(' ')[0]||'коллега')}</h1><p class="muted">Здесь собраны только вещи, которые действительно требуют вашего внимания.</p></div><button type="button" id="homeCustomizeButton">${kedoIcon('settings')}<span>Настроить главную</span></button></div>
    <section class="home-focus card"><div class="home-section-head"><div><span class="eyebrow">СЕГОДНЯ</span><h2>Что нужно сделать</h2></div><button class="secondary" data-action="setPage" data-page="inbox">Открыть все входящие</button></div>
      <div class="home-action-list">${actionHtml}</div>${allActions.length>6?`<button class="home-more" data-action="setPage" data-page="inbox">Показать ещё ${allActions.length-6}</button>`:''}
    </section>
    <div class="home-metrics">
      <button class="home-metric" data-action="setPage" data-page="inbox"><span>Требуют действия</span><strong>${allActions.length}</strong><small>документы и задачи</small></button>
      <button class="home-metric ${overdue.length?'danger':''}" data-action="setPage" data-page="inbox"><span>Просрочено</span><strong>${overdue.length}</strong><small>${overdue.length?'нужно проверить':'всё в срок'}</small></button>
      <button class="home-metric" data-action="openNotificationPanel"><span>Новые уведомления</span><strong>${unread}</strong><small>актуальные события</small></button>
      <button class="home-metric home-metric-workforce" data-action="setPage" data-page="messages"><span>Сотрудники онлайн</span><strong>${Number(workforce.online_count||0)} <small>/ ${Number(workforce.employee_count||0)}</small></strong><small>сейчас в системе</small></button>
      <button class="home-metric" data-action="setPage" data-page="profile"><span>Ваш профиль</span><strong>›</strong><small>Данные и настройки</small></button>
    </div>
    
    ${["admin","moderator","director","manager","head"].includes(String(state.user?.role||"").toLowerCase())?`<section class="card leader-control-card" style="margin-top:14px">
      <div class="home-section-head"><div><span class="eyebrow">КОНТРОЛЬ</span><h2>Рабочая картина</h2></div><button class="secondary" data-action="setPage" data-page="inbox">Открыть входящие</button></div>
      <div class="leader-control-grid">
        <div><span>Документы</span><b>${docs.length}</b><small>требуют действия</small></div>
        <div><span>Задачи</span><b>${tasks.length}</b><small>активных</small></div>
        <div class="${overdue.length?'danger':''}"><span>Просрочено</span><b>${overdue.length}</b><small>${overdue.length?'нужно проверить':'всё в срок'}</small></div>
        <div><span>Уведомления</span><b>${unread}</b><small>непрочитанных</small></div>
        <div class="is-online"><span>Сотрудники онлайн</span><b>${Number(workforce.online_count||0)} / ${Number(workforce.employee_count||0)}</b><small>активные сессии</small></div>
      </div>
    </section>`:""}
<div class="home-columns">
      <section class="card home-quick-card"><div class="home-section-head"><div><span class="eyebrow">БЫСТРЫЙ ДОСТУП</span><h2>Что хотите сделать?</h2></div><span class="home-quick-hint">Частые действия</span></div><div class="home-quick-grid">
        <button data-action="setPage" data-page="documents"><b>＋</b><span>Документ</span><small>Загрузить и отправить</small></button>
        <button data-action="setPage" data-page="orders"><b>＋</b><span>Приказ</span><small>Создать маршрут</small></button>
        <button data-action="setPage" data-page="tasks"><b>＋</b><span>Задачу</span><small>Поставить сотруднику</small></button>
        <button data-action="setPage" data-page="messages"><b>＋</b><span>Сообщение</span><small>Написать коллеге</small></button>
        <button data-action="setPage" data-page="delegations"><b>＋</b><span>Замещение</span><small>Назначить на время</small></button>
        <button data-action="setPage" data-page="help"><b>?</b><span>Помощь</span><small>Если не знаете, что нажать</small></button>
      </div></section>
      <section class="card home-profile-card" data-action="setPage" data-page="profile" title="Открыть профиль">
        <span class="eyebrow">ВАШ ПРОФИЛЬ</span>
        <div class="home-profile">
          ${avatarMarkup({userId:state.user.id,name:state.user.fullName,hasAvatar:!!state.user.hasAvatar,sizeClass:"home-profile-photo kedo-avatar-md",bust:state.user.avatarVersion||Date.now()})}
          <div>
            <h2>${esc(state.user.fullName||"Пользователь")}</h2>
            <p>${esc(state.user.position||"Должность не указана")}</p>
          </div>
        </div>
        <div class="home-profile-lines">
          <div><span>Подразделение</span><strong>${esc(state.user.departmentName||"Основное здание")}</strong></div>
          ${state.user.orgGroupName?`<div><span>Филиал</span><strong>${esc(state.user.orgGroupName)}</strong></div>`:""}
          <div><span>Роли</span><strong>${esc(role)}</strong></div>
        </div>
      </section>
    </div>
    ${renderHomeTips()}
  </div>`;
}
async function renderInbox(){
  const d=await api('/api/inbox');
  const tasks=d.tasks||[], docs=d.documents||[], drafts=d.drafts||[], counts=d.counts||{};
  const taskHtml=tasks.length?tasks.map(t=>{
    const overdue=Boolean(t.overdue);
    const status=t.status==='OPEN'?'Новая':'В работе';
    return `<button class="inbox-item ${overdue?'overdue':''}" data-action="setPage" data-page="tasks">
      <span class="inbox-item-icon">✓</span>
      <span class="inbox-item-copy"><strong>${esc(t.title)}</strong><small>Задача · ${esc(status)} · От: ${esc(t.creator_name||'')}${t.due_date?` · Срок ${formatKedoDate(t.due_date)}`:''}</small></span>
      <span class="inbox-item-action">${overdue?'Просрочено':'Открыть'} ›</span>
    </button>`;
  }).join(''):'<div class="inbox-empty"><b>Задач нет</b><span>Сейчас от вас ничего не требуется.</span></div>';

  const docHtml=docs.length?docs.map(x=>{
    const action=x.workflow_action==='SIGNATURE'?'Подписать':x.workflow_action==='APPROVAL'?'Согласовать':'Ознакомиться';
    return `<button class="inbox-item" data-action="openDocument" data-id="${x.id}">
      <span class="inbox-item-icon">▤</span>
      <span class="inbox-item-copy"><strong>${esc(x.title)}${x.document_number?` <span>№ ${esc(x.document_number)}</span>`:''}</strong><small>Документ · ${esc(action)} · От: ${esc(x.author_name||'')}</small></span>
      <span class="inbox-item-action">${esc(action)} ›</span>
    </button>`;
  }).join(''):'<div class="inbox-empty"><b>Документов нет</b><span>Документы, требующие вашего действия, появятся здесь.</span></div>';

  const draftHtml=drafts.length?drafts.map(x=>`<button class="inbox-draft" data-action="openDocument" data-id="${x.id}"><span>▱</span><div><strong>${esc(x.title)}</strong><small>Черновик · ${formatKedoDateTime(x.updated_at||x.created_at)}</small></div><b>›</b></button>`).join(''):'<div class="inbox-empty"><b>Черновиков нет</b><span>Создайте документ и сохраните его, чтобы продолжить позже.</span></div>';

  const actionTotal=Number(counts.actionable||0), overdue=Number(counts.overdue||0);
  $("main").innerHTML=`
    <div class="inbox-page">
      <div class="inbox-hero">
        <div><span class="eyebrow">РАБОЧИЙ ЦЕНТР</span><h1 class="page-title" style="margin:3px 0 5px">Входящие</h1><p class="muted">Здесь собраны только действия, которые действительно ждут вас.</p></div>
        <div class="inbox-hero-count ${overdue?'danger':''}"><strong>${actionTotal}</strong><span>требуют действия</span></div>
      </div>
      <div class="inbox-stats">
        <button class="inbox-stat ${overdue?'danger':''}"><span>Просрочено</span><b>${overdue}</b></button>
        <button class="inbox-stat"><span>Задачи</span><b>${counts.tasks||0}</b></button>
        <button class="inbox-stat"><span>Документы</span><b>${counts.documents||0}</b></button>
        <button class="inbox-stat"><span>Черновики</span><b>${counts.drafts||0}</b></button>
      </div>
      <section class="card inbox-section"><div class="inbox-section-head"><div><span class="eyebrow">СЕЙЧАС</span><h2>Требуют действия</h2></div><button class="secondary" data-action="openNotificationPanel">Уведомления</button></div>
        <div class="inbox-list">${taskHtml}${docHtml}</div>
      </section>
      <section class="card inbox-section"><div class="inbox-section-head"><div><span class="eyebrow">НЕ ЗАКОНЧЕНО</span><h2>Мои черновики</h2></div><button class="secondary" data-action="setPage" data-page="documents">Все документы</button></div>
        <div class="inbox-drafts">${draftHtml}</div>
      </section>
    </div>`;
}

function renderHelpLegacy(){
  const main=document.querySelector('main');
  if(!main){
    throw new Error('Основной контейнер страницы не найден.');
  }

  const escapeHtml=(value)=>String(value??'').replace(/[&<>"']/g,(m)=>({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[m]));

  const faqs=[
    ['Документы','Как найти документ?','Откройте поиск в верхней панели и введите название, номер, фамилию сотрудника или ключевое слово.','Документы → Поиск','Найти документ'],
    ['Документы','Как согласовать документ?','Откройте документ, проверьте содержимое и нажмите «Согласовать». При проблеме используйте «Отклонить» и укажите причину.','Документы → Карточка','Согласовать'],
    ['Документы','Как подписать документ?','Откройте карточку документа и нажмите «Подписать ЭП». После подписания создаётся отдельный подписанный экземпляр PDF, оригинал остаётся неизменным.','Документы → Карточка','Подписать ЭП'],
    ['Документы','Как подтвердить ознакомление?','Откройте документ из уведомления, прочитайте его и нажмите «Ознакомлен». Действие фиксируется в истории документа.','Документы → Карточка','Ознакомлен'],
    ['Документы','Почему я не вижу документ?','Доступ может быть ограничен филиалом, подразделением, ролью, должностью или конкретными сотрудниками. Попросите владельца документа проверить аудиторию.','Документы → Доступ','Проверить доступ'],
    ['Документы','Где подписанный экземпляр?','В карточке документа откройте блок файлов и выберите подписанный экземпляр. Он хранится отдельно от оригинала.','Документы → Файлы','Подписанный экземпляр'],

    ['Задачи','Мне пришла задача. Что делать?','Откройте задачу, прочитайте описание, выполните действие и отправьте результат. Статус будет виден постановщику.','Задачи → Входящие','Открыть задачу'],
    ['Задачи','Как подтвердить выполнение задачи?','Откройте задачу и отправьте результат. Постановщик сможет подтвердить его или вернуть задачу на доработку.','Задачи → Карточка','Отправить результат'],

    ['Приказы','Как загрузить приказ?','Откройте «Приказы», заполните название, дату, при необходимости номер, приложите PDF и укажите получателей ознакомления.','Приказы → Загрузить приказ','Загрузить приказ'],
    ['Приказы','Кому можно отправить приказ?','Можно выбрать филиалы/группы, подразделения и отдельных сотрудников. Допустим множественный выбор.','Приказы → Получатели','Настроить получателей'],
    ['Приказы','Как отследить ознакомление?','Откройте карточку приказа. В ней отображается состояние ознакомления каждого получателя.','Приказы → Карточка','Статусы ознакомления'],

    ['Уведомления','Где старые уведомления?','Открытые уведомления доступны в разделе уведомлений. Для связанных действий также можно перейти к документу или задаче.','Уведомления → Все','Открыть уведомления'],
    ['Уведомления','Почему уведомление снова появилось?','Новые действия по связанному документу или задаче могут создать новое уведомление. Откройте его и проверьте источник.','Уведомления → Карточка','Открыть уведомление'],

    ['База знаний','Как создать материал?','Откройте «Базу знаний» и нажмите плашку «Новый материал». Заполните инструкцию, настройте аудиторию и при необходимости приложите PDF.','База знаний → Новый материал','Создать материал'],
    ['База знаний','Как настроить доступ к материалу?','В «Настроить аудиторию» можно выбрать всех сотрудников, филиалы, подразделения, сотрудников, роли и должности.','База знаний → Доступ','Настроить аудиторию'],
    ['База знаний','Можно ли добавить PDF?','Да. Выберите существующий документ или прикрепите новый PDF прямо из формы материала.','База знаний → Документ','Прикрепить PDF'],

    ['Замещения','Как создать замещение?','Откройте «Замещения», выберите сотрудника, период и необходимые параметры передачи полномочий.','Замещения → Новое','Создать замещение'],
    ['Замещения','Как завершить замещение раньше срока?','Откройте активное замещение и завершите его досрочно. После завершения полномочия возвращаются владельцу.','Замещения → Активные','Завершить'],

    ['Учётная запись','Как подать заявку на аккаунт?','На странице входа нажмите «Подать заявку на создание аккаунта» и заполните необходимые данные. После проверки аккаунт создаёт администратор.','Вход → Заявка','Подать заявку'],
    ['Учётная запись','Что делать, если аккаунт заблокирован?','Обратитесь к администратору. В разделе учётных записей можно проверить состояние аккаунта и выполнить разблокировку при наличии прав.','Администрирование → Учётные записи','Разблокировать'],

    ['Администрирование','Как изменить уровни доступа ролей?','Откройте блок «Уровни доступа ролей». Для каждого раздела выберите «Нет доступа», «Просмотр» или «Управление».','Администрирование → Роли','Настроить уровни'],
    ['Администрирование','Как назначить несколько ролей?','Откройте сотрудника, нажмите «Роли» и выберите нужный набор ролей.','Администрирование → Сотрудники','Назначить роли'],
    ['Администрирование','Где журнал аудита?','Откройте «Журнал аудита» в администрировании. Можно фильтровать категории и искать события по пользователю, действию и объекту.','Администрирование → Журнал аудита','Открыть журнал'],

    ['Безопасность','Что делать при подозрительной активности?','Не передавайте пароль и ключ ЭП другим людям. Запишите время и действие и сообщите администратору.','Помощь → Безопасность','Сообщить'],
    ['Безопасность','Что делать, если появляется другой ключ ЭП?','Откройте «Моя ЭП» и явно подтвердите замену ключа только в том случае, если это ваш новый ключ.','Профиль → Моя ЭП','Проверить ЭП']
  ];

  const categories=['ALL',...Array.from(new Set(faqs.map(row=>row[0])))];
  const icons={'Документы':kedoIcon('file'),'Задачи':kedoIcon('task'),'Приказы':kedoIcon('order'),'Уведомления':kedoIcon('bell'),'База знаний':kedoIcon('book'),'Замещения':kedoIcon('user'),'Учётная запись':kedoIcon('user'),'Администрирование':kedoIcon('settings'),'Безопасность':kedoIcon('lock')};
  const label=(cat)=>cat==='ALL'?'Все разделы':cat;

  main.innerHTML=`
    <div class="help35-page">
      <section class="help35-hero">
        <div>
          <span class="help35-eyebrow">ЦЕНТР ПОДДЕРЖКИ</span>
          <h1 class="page-title">Помощь</h1>
          <p>Пошаговые инструкции по документам, задачам, приказам, базе знаний и администрированию.</p>
        </div>
        <div class="help35-stat"><strong>${faqs.length}</strong><span>инструкций</span></div>
      </section>
      <section class="help35-toolbar">
        <div class="help35-search">
          <span>⌕</span>
          <input id="help35Search" type="search" autocomplete="off" placeholder="Поиск по вопросам, действиям и разделам...">
          <button id="help35Clear" type="button">Очистить</button>
        </div>
        <div class="help35-cats">${categories.map(cat=>`
          <button type="button" class="help35-cat ${cat==='ALL'?'active':''}" data-help35-cat="${escapeHtml(cat)}">
            <span>${cat==='ALL'?'⌘':icons[cat]||'•'}</span>${escapeHtml(label(cat))}
          </button>`).join('')}</div>
      </section>
      <section class="help35-grid">
        <aside class="help35-side">
          <div class="help35-side-title">Быстрый доступ</div>
          <button type="button" class="help35-nav" data-page="documents"><span>${kedoIcon('file')}</span><b>Документы</b><small>Поиск и подписание</small><i>→</i></button>
          <button type="button" class="help35-nav" data-page="orders"><span>${kedoIcon('order')}</span><b>Приказы</b><small>Ознакомление</small><i>→</i></button>
          <button type="button" class="help35-nav" data-page="tasks"><span>${kedoIcon('task')}</span><b>Задачи</b><small>Назначенные и выданные</small><i>→</i></button>
          <button type="button" class="help35-nav" data-page="knowledge"><span>${kedoIcon('book')}</span><b>База знаний</b><small>Инструкции и материалы</small><i>→</i></button>
          <div class="help35-contact"><span>НЕ НАШЛИ ОТВЕТ?</span><b>Обратитесь к администратору</b><p>Укажите страницу, действие и время ошибки.</p></div>
        </aside>
        <div class="help35-content">
          <div class="help35-head"><div><span class="help35-eyebrow">ИНСТРУКЦИИ</span><h2 id="help35Title">Все разделы</h2></div><span id="help35Count">${faqs.length} инструкций</span></div>
          <div class="help35-list" id="help35List">
            ${faqs.map((row,i)=>`
              <article class="help35-card" data-help35-card data-cat="${escapeHtml(row[0])}" data-search="${escapeHtml(row.join(' ').toLowerCase())}">
                <button type="button" class="help35-q" aria-expanded="false">
                  <span class="help35-icon">${icons[row[0]]||'•'}</span>
                  <span><small>${escapeHtml(row[0])}</small><b>${escapeHtml(row[1])}</b></span>
                  <em>+</em>
                </button>
                <div class="help35-a" hidden>
                  <p>${escapeHtml(row[2])}</p>
                  <div class="help35-meta"><span>${escapeHtml(row[3])}</span><strong>${escapeHtml(row[4])}</strong></div>
                </div>
              </article>`).join('')}
          </div>
          <div class="help35-empty" id="help35Empty" hidden><div>⌕</div><b>Ничего не нашли</b><span>Попробуйте «подписать», «доступ», «приказ» или «задача».</span></div>
        </div>
      </section>
    </div>`;

  if(!document.getElementById('help35Style')){
    const style=document.createElement('style');
    style.id='help35Style';
    style.textContent=`
      .help35-page{display:grid;gap:18px}.help35-hero{display:flex;justify-content:space-between;align-items:center;gap:22px;padding:28px 30px;border:1px solid #d6e4ec;border-radius:22px;background:linear-gradient(135deg,#fff,#edf7fc);box-shadow:0 12px 34px rgba(28,69,93,.07)}.help35-hero p{margin:8px 0 0;color:#728797;max-width:780px}.help35-eyebrow{font-size:10px;font-weight:900;letter-spacing:.12em;color:#8296a5;text-transform:uppercase}.help35-stat{min-width:108px;text-align:center;padding:15px 18px;border-radius:17px;background:#e5f3fa;color:#176f9e}.help35-stat strong{display:block;font-size:28px;line-height:1}.help35-stat span{font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:.08em}.help35-toolbar{position:sticky;top:8px;z-index:5;padding:4px 0 8px;background:linear-gradient(#eef5f8 78%,rgba(238,245,248,0))}.help35-search{display:flex;align-items:center;gap:9px;padding:0 13px;border:1px solid #c8dbe6;border-radius:15px;background:#fff;box-shadow:0 10px 26px rgba(30,68,89,.06)}.help35-search>span{font-size:21px;color:#6c8799}.help35-search input{flex:1;border:0!important;outline:0!important;background:transparent!important;box-shadow:none!important;padding:14px 0!important}.help35-search button{border:0;background:transparent;color:#71899a;font-weight:800;cursor:pointer}.help35-cats{display:flex;gap:8px;overflow:auto;padding:10px 0 3px}.help35-cat{white-space:nowrap;display:flex;align-items:center;gap:6px;border:1px solid #cddde7;background:#fff;color:#3c5b71;border-radius:999px;padding:9px 12px;font-weight:800;cursor:pointer}.help35-cat.active{background:#1776af;border-color:#1776af;color:#fff;box-shadow:0 7px 18px rgba(23,118,175,.2)}.help35-grid{display:grid;grid-template-columns:260px minmax(0,1fr);gap:18px}.help35-side{display:grid;gap:8px;align-content:start;position:sticky;top:120px}.help35-side-title{font-size:11px;font-weight:900;color:#8395a3;letter-spacing:.08em;text-transform:uppercase}.help35-nav{display:grid;grid-template-columns:34px 1fr auto;gap:9px;align-items:center;padding:11px;border:1px solid #d5e3eb;border-radius:14px;background:#fff;text-align:left;color:#254760;cursor:pointer}.help35-nav>span{width:32px;height:32px;border-radius:9px;display:grid;place-items:center;background:#eef7fb}.help35-nav b{font-size:13px}.help35-nav small{font-size:10px;color:#8b9ca8}.help35-nav i{font-style:normal;color:#91a2ad}.help35-nav:hover{border-color:#a9c9dc;transform:translateY(-1px)}.help35-contact{padding:15px;border-radius:16px;color:#fff;background:linear-gradient(135deg,#143c5e,#1d72a2);box-shadow:0 12px 28px rgba(24,75,105,.14)}.help35-contact span{font-size:9px;font-weight:900;letter-spacing:.1em;opacity:.72}.help35-contact b{display:block;margin-top:6px}.help35-contact p{font-size:11px;line-height:1.45;opacity:.84}.help35-head{display:flex;justify-content:space-between;align-items:end;margin:1px 2px 10px}.help35-head h2{margin:3px 0 0;color:#173f60}.help35-head>#help35Count{font-size:12px;color:#7e909f;font-weight:800}.help35-list{display:grid;gap:9px}.help35-card{border:1px solid #d5e3eb;background:#fff;border-radius:15px;overflow:hidden;transition:.18s}.help35-card:hover{border-color:#afccdc;box-shadow:0 10px 25px rgba(28,68,91,.06)}.help35-card.open{border-color:#8dbbd5;box-shadow:0 12px 30px rgba(24,86,121,.08)}.help35-q{width:100%;display:grid;grid-template-columns:36px 1fr 30px;gap:11px;align-items:center;padding:13px 14px;border:0;background:transparent;text-align:left;cursor:pointer}.help35-icon{width:34px;height:34px;display:grid;place-items:center;border-radius:10px;background:#edf7fb;color:#176f9f}.help35-q small{display:block;font-size:10px;font-weight:900;color:#8295a4;letter-spacing:.06em;text-transform:uppercase;margin-bottom:3px}.help35-q b{display:block;color:#244862;font-size:13px}.help35-q em{font-style:normal;width:28px;height:28px;display:grid;place-items:center;background:#eef7fb;color:#1675ad;border-radius:9px;font-size:19px;transition:.2s}.help35-card.open .help35-q em{transform:rotate(45deg);background:#1675ad;color:#fff}.help35-a{padding:0 18px 15px 61px;color:#6d7f8c}.help35-a p{line-height:1.55;margin:0 0 10px}.help35-meta{display:flex;flex-wrap:wrap;gap:7px}.help35-meta span,.help35-meta strong{padding:7px 9px;border-radius:8px;font-size:10px}.help35-meta span{background:#f0f6f9;color:#607785}.help35-meta strong{background:#e6f4fb;color:#186f9e}.help35-empty{display:grid;place-items:center;text-align:center;padding:45px;border:1px dashed #cbdce5;border-radius:16px;background:#fbfdfe;color:#7b8f9e}.help35-empty>div{width:46px;height:46px;border-radius:14px;background:#edf7fb;display:grid;place-items:center;color:#1971a2;font-size:22px}.help35-empty b{margin-top:8px;color:#294b63}.help35-empty span{margin-top:4px;font-size:12px}@media(max-width:900px){.help35-grid{grid-template-columns:1fr}.help35-side{position:static;grid-template-columns:repeat(2,minmax(0,1fr))}.help35-contact{grid-column:1/-1}}@media(max-width:620px){.help35-hero{flex-direction:column;align-items:flex-start}.help35-stat{align-self:stretch}.help35-toolbar{position:static}.help35-side{grid-template-columns:1fr}.help35-a{padding-left:14px}}
    `;
    document.head.appendChild(style);
  }

  const input=document.getElementById('help35Search');
  const clear=document.getElementById('help35Clear');
  const count=document.getElementById('help35Count');
  const title=document.getElementById('help35Title');
  const empty=document.getElementById('help35Empty');
  const cards=[...document.querySelectorAll('[data-help35-card]')];

  if(!input||!clear||!count||!title||!empty) return;

  let active='ALL';
  const plural=n=>n===1?'инструкция':(n>=2&&n<=4?'инструкции':'инструкций');

  const apply=()=>{
    const q=input.value.trim().toLowerCase();
    let visible=0;
    for(const card of cards){
      const ok=(active==='ALL'||card.dataset.cat===active) && (!q||card.dataset.search.includes(q));
      card.hidden=!ok;
      if(ok) visible++;
    }
    count.textContent=`${visible} ${plural(visible)}`;
    title.textContent=active==='ALL'?'Все разделы':active;
    empty.hidden=visible!==0;
  };

  input.addEventListener('input',apply);
  clear.addEventListener('click',()=>{input.value='';apply();input.focus()});
  document.querySelectorAll('[data-help35-cat]').forEach(btn=>btn.addEventListener('click',()=>{
    active=btn.dataset.help35Cat;
    document.querySelectorAll('[data-help35-cat]').forEach(x=>x.classList.toggle('active',x===btn));
    apply();
  }));
  document.querySelectorAll('.help35-q').forEach(btn=>btn.addEventListener('click',()=>{
    const card=btn.closest('.help35-card');
    const answer=card.querySelector('.help35-a');
    const open=!card.classList.contains('open');
    card.classList.toggle('open',open);
    btn.setAttribute('aria-expanded',String(open));
    answer.hidden=!open;
  }));
  document.querySelectorAll('.help35-nav').forEach(btn=>btn.addEventListener('click',()=>{
    const page=btn.dataset.page;
    if(typeof setPage==='function') setPage(page);
  }));

  apply();
}

function renderHelp(){
  const main=document.querySelector("main");
  if(!main)throw new Error("Основной контейнер страницы не найден.");
  const escHelp=value=>String(value??"").replace(/[&<>"']/g,match=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[match]));
  const isAdmin=(state.user?.roles||[state.user?.role]).includes("admin");
  const faqs=[
    {cat:"Начало",icon:"🚀",q:"Я только вошёл. Что делать сначала?",answer:"Начните с раздела «Входящие». Там появляются документы и задачи, где от вас требуется действие.",steps:["Откройте «Входящие» в верхнем меню.","Нажмите на первую карточку в списке.","Прочитайте, что нужно сделать, и нажмите большую кнопку действия."]},
    {cat:"Начало",icon:"🧭",q:"Что означают разделы сверху?",answer:"Каждый раздел отвечает за одну простую задачу.",steps:["Входящие — то, что сейчас ждёт именно вас.","Документы — общий список документов и загрузка новых.","Приказы — приказы организации и ознакомление с ними.","Задачи — поручения и результаты работы.","База знаний — инструкции, правила и полезные материалы."]},
    {cat:"Документы",icon:"📄",q:"Мне пришёл документ. Что нажать?",answer:"Не ищите кнопку заранее: откройте карточку документа — нужное действие будет показано внутри.",steps:["Откройте «Входящие».","Нажмите на документ.","Прочитайте файл через «Открыть» или «Предпросмотр».","Нажмите «Согласовать», «Подписать ЭП» или «Ознакомлен» — в зависимости от задания."]},
    {cat:"Документы",icon:"✓",q:"Как согласовать документ?",answer:"Согласование означает: вы проверили документ и разрешаете двигаться дальше.",steps:["Откройте документ.","Проверьте название, файл и получателей.","Нажмите «Согласовать».","Если есть ошибка — нажмите «Отклонить» и напишите понятную причину."]},
    {cat:"Документы",icon:"✍",q:"Как подписать документ электронной подписью?",answer:"Подписывайте только после проверки текста и получателей. Оригинал после этого не изменяется.",steps:["Откройте документ из «Входящих».","Нажмите «Подписать ЭП».","Подтвердите действие своей внутренней ЭП.","После этого скачайте подписанный экземпляр в карточке документа."]},
    {cat:"Документы",icon:"👀",q:"Как подтвердить ознакомление?",answer:"Эта кнопка означает, что вы прочитали документ и зафиксировали это в системе.",steps:["Откройте приказ или документ.","Прочитайте файл полностью.","Нажмите «Ознакомлен».","Проверьте, что в карточке появилась отметка о подтверждении."]},
    {cat:"Документы",icon:"📤",q:"Как отправить свой документ?",answer:"Создайте документ в разделе «Документы». Если нужен маршрут, выберите его сразу при загрузке.",steps:["Откройте «Документы» и раскройте «Загрузить документы».","Укажите название, тип и дату.","Выберите файл и при необходимости добавьте этап маршрута.","Нажмите «Загрузить в архив»."]},
    {cat:"Документы",icon:"🔎",q:"Почему я не вижу нужный документ?",answer:"Документ может быть доступен только определённым людям, подразделениям или филиалам.",steps:["Проверьте поиск по названию, номеру и имени файла.","Посмотрите «Входящие», если документ ждёт именно вашего действия.","Если документа всё равно нет — попросите автора или администратора проверить доступ."]},
    {cat:"Приказы",icon:"▤",q:"Как работать с приказом?",answer:"Приказ обычно нужно открыть, прочитать и подтвердить ознакомление.",steps:["Откройте «Приказы» или «Входящие».","Выберите нужный приказ.","Откройте файл и прочитайте его.","Нажмите «Ознакомлен», если согласны подтвердить прочтение."]},
    {cat:"Задачи",icon:"✓",q:"Мне назначили задачу. Что делать?",answer:"В задаче всегда есть описание, срок и кнопка для отправки результата.",steps:["Откройте «Задачи» или «Входящие».","Прочитайте описание и срок.","Сделайте работу и нажмите «Отправить результат».","Напишите коротко, что сделано, и приложите файл при необходимости."]},
    {cat:"Задачи",icon:"⏱",q:"Как понять, что задача выполнена?",answer:"После отправки результата задача уходит постановщику на проверку.",steps:["Откройте карточку задачи.","Проверьте статус: «На проверке», «Выполнена» или «На доработке».","Если задачу вернули — прочитайте комментарий и отправьте исправленный результат."]},
    {cat:"Поиск",icon:"⌕",q:"Как быстро найти документ, задачу или сотрудника?",answer:"Используйте кнопку «Поиск» в верхней части сайта — она ищет сразу по нескольким разделам.",steps:["Нажмите «Поиск» сверху.","Введите хотя бы два понятных слова.","Выберите найденную запись из списка.","Если результатов много, добавьте номер или фамилию."]},
    {cat:"Уведомления",icon:"🔔",q:"Где посмотреть новые события?",answer:"Колокольчик показывает новые действия: документы, задачи и сообщения.",steps:["Нажмите на колокольчик сверху.","Выберите уведомление.","Откройте связанную карточку и выполните действие.","После проверки вернитесь во «Входящие». "]},
    {cat:"База знаний",icon:"📚",q:"Где найти инструкцию или правило?",answer:"В базе знаний хранятся материалы, которые помогают выполнить работу.",steps:["Откройте «Базу знаний».","Введите ключевое слово в поиск.","Откройте подходящий материал.","Если материала нет — попросите администратора добавить инструкцию."]},
    {cat:"Профиль",icon:"👤",q:"Что делать, если я забыл пароль?",answer:"Самостоятельного восстановления может не быть — обратитесь к администратору организации.",steps:["Не передавайте свой пароль другим сотрудникам.","Сообщите администратору свой логин и ФИО.","После смены пароля войдите заново и проверьте «Входящие»."]},
    {cat:"Профиль",icon:"🛡",q:"Что делать, если сайт показывает ошибку?",answer:"Чаще всего помогает повторить действие и проверить файл или обязательные поля.",steps:["Прочитайте красное сообщение — там указана причина.","Проверьте, заполнены ли поля со звёздочкой и выбран ли файл.","Обновите страницу через Ctrl+F5 и повторите действие.","Если ошибка осталась, отправьте администратору скриншот, страницу и время ошибки."]}
  ];
  if(isAdmin)faqs.push({cat:"Администратор",icon:"⚙",q:"Где находятся настройки для администратора?",answer:"Административные инструменты доступны только пользователям с ролью администратора.",steps:["Откройте «Администрирование».","Для шаблонов, корзины и замещения откройте «Сервисный центр».","Изменяйте права только после проверки результата."]});
  const guides=[
    {icon:"📥",title:"Мне пришёл документ",text:"Открыть, прочитать и выполнить действие",page:"inbox"},
    {icon:"📤",title:"Хочу отправить документ",text:"Загрузить файл и выбрать маршрут",page:"documents"},
    {icon:"▤",title:"Нужно посмотреть приказ",text:"Найти приказ и подтвердить ознакомление",page:"orders"},
    {icon:"✓",title:"Мне дали задачу",text:"Понять срок и отправить результат",page:"tasks"},
    {icon:"📚",title:"Нужна инструкция",text:"Найти правило в базе знаний",page:"knowledge"}
  ];
  const categories=["Все",...Array.from(new Set(faqs.map(item=>item.cat)))];
  const guideHtml=guides.map(item=>`<button type="button" class="help40-guide" data-help40-go="${item.page}"><span class="help40-guide-icon">${kedoIcon(item.icon)}</span><span><b>${item.title}</b><small>${item.text}</small></span><i>→</i></button>`).join("");
  const faqHtml=faqs.map(item=>`<details class="help40-faq" data-help40-faq data-cat="${escHelp(item.cat)}" data-search="${escHelp(`${item.cat} ${item.q} ${item.answer} ${item.steps.join(" ")}`.toLowerCase())}"><summary><span class="help40-faq-icon">${kedoIcon(item.icon)}</span><span><small>${escHelp(item.cat)}</small><b>${escHelp(item.q)}</b></span><em>+</em></summary><div class="help40-answer"><p>${escHelp(item.answer)}</p><ol>${item.steps.map(step=>`<li>${escHelp(step)}</li>`).join("")}</ol></div></details>`).join("");
  main.innerHTML=`<div class="help40-page"><section class="help40-hero"><div class="help40-hero-copy"><span class="help40-eyebrow">ПОМОЩЬ ДЛЯ ПОЛЬЗОВАТЕЛЯ</span><h1>Не знаете, что нажать?</h1><p>Выберите свою ситуацию — сайт покажет, куда зайти и что сделать по шагам.</p><div class="help40-search"><span>⌕</span><input id="help40Search" type="search" autocomplete="off" placeholder="Например: подписать, приказ, задача"><button id="help40Clear" type="button">Очистить</button></div></div><div class="help40-hero-tip"><span>💡</span><b>Простое правило</b><p>Сначала откройте карточку, прочитайте текст, затем нажмите кнопку действия.</p></div></section><section class="help40-start"><div class="help40-section-heading"><div><span class="help40-eyebrow">ЕСЛИ ВЫ ЗДЕСЬ ВПЕРВЫЕ</span><h2>Всего три шага</h2></div><span class="help40-progress">1 → 2 → 3</span></div><div class="help40-steps"><article><b>1</b><strong>Откройте «Входящие»</strong><p>Там система показывает, что требует вашего внимания.</p></article><article><b>2</b><strong>Откройте карточку</strong><p>Внутри есть файл, описание и история действий.</p></article><article><b>3</b><strong>Нажмите нужную кнопку</strong><p>Например: «Согласовать», «Подписать» или «Ознакомлен».</p></article></div></section><section class="help40-guides"><div class="help40-section-heading"><div><span class="help40-eyebrow">ЧТО ВЫ ХОТИТЕ СДЕЛАТЬ?</span><h2>Выберите задачу</h2></div></div><div class="help40-guide-grid">${guideHtml}</div></section><section class="help40-content"><aside class="help40-side"><div class="help40-side-card"><span class="help40-eyebrow">БЫСТРЫЙ ПЕРЕХОД</span><button data-help40-go="inbox"><b>Входящие</b><small>Мои новые действия</small><i>→</i></button><button data-help40-go="documents"><b>Документы</b><small>Общий список файлов</small><i>→</i></button><button data-help40-go="tasks"><b>Задачи</b><small>Поручения и сроки</small><i>→</i></button><button data-help40-go="knowledge"><b>База знаний</b><small>Инструкции и правила</small><i>→</i></button></div><div class="help40-support"><span>НЕ ПОЛУЧИЛОСЬ?</span><b>Попросите администратора</b><p>Отправьте ему название страницы, текст ошибки и время.</p></div></aside><div class="help40-faq-area"><div class="help40-faq-head"><div><span class="help40-eyebrow">ПОДСКАЗКИ</span><h2 id="help40Title">Все инструкции</h2></div><strong id="help40Count">${faqs.length}</strong></div><div class="help40-categories">${categories.map(cat=>`<button type="button" class="help40-category ${cat==="Все"?"active":""}" data-help40-category="${escHelp(cat)}">${escHelp(cat)}</button>`).join("")}</div><div class="help40-faq-list" id="help40List">${faqHtml}</div><div class="help40-empty" id="help40Empty" hidden><span>⌕</span><b>Пока ничего не нашли</b><p>Попробуйте слово «документ», «подписать» или «задача».</p></div></div></section></div>`;
  document.querySelector(".help40-guides")?.insertAdjacentHTML("afterend",`<section class="help40-points"><div class="help40-section-heading"><div><span class="help40-eyebrow">ПОЛЕЗНО ПОМНИТЬ</span><h2>Работа с документами</h2></div></div><div class="help40-point-grid"><div><span>📥</span><b>Ищите во «Входящих»</b><small>Новые документы, которые требуют вашего внимания, появляются именно там.</small></div><div><span>🔎</span><b>Откройте карточку</b><small>В карточке собраны файл, описание, ответственные и доступные действия.</small></div><div><span>✅</span><b>Проверьте перед действием</b><small>Посмотрите автора, дату и содержание документа перед согласованием или подписанием.</small></div><div><span>🕘</span><b>Смотрите историю</b><small>Во вкладке истории видно, кто уже работал с документом и что произошло.</small></div></div></section>`);
  if(!document.getElementById("help40Style")){const style=document.createElement("style");style.id="help40Style";style.textContent=`body:has(.help40-page){background:#eef5f8}.help40-page{display:grid;gap:18px;padding-bottom:20px}.help40-hero{display:grid;grid-template-columns:minmax(0,1fr) 275px;gap:18px;padding:28px;border:1px solid #d2e4ec;border-radius:22px;background:linear-gradient(135deg,#fff,#eaf7fb);box-shadow:0 14px 34px rgba(28,73,96,.08)}.help40-eyebrow{display:block;color:#7894a2;font-size:9px;font-weight:900;letter-spacing:.13em;text-transform:uppercase}.help40-hero h1{margin:6px 0 7px;color:#163f59;font-size:30px;letter-spacing:-.03em}.help40-hero p{margin:0;color:#65808e;font-size:13px;line-height:1.5}.help40-search{display:flex;align-items:center;gap:9px;margin-top:19px;padding:0 13px;border:1px solid #c4dbe5;border-radius:13px;background:#fff;box-shadow:0 8px 20px rgba(27,78,103,.06)}.help40-search>span{font-size:21px;color:#4e8aa5}.help40-search input{flex:1;min-width:0;border:0!important;outline:0!important;box-shadow:none!important;background:transparent!important;padding:13px 0!important;color:#294c5e}.help40-search button{border:0;background:transparent;color:#64818e;font-size:10px;font-weight:800;cursor:pointer}.help40-hero-tip{align-self:stretch;display:flex;flex-direction:column;justify-content:center;padding:20px;border-radius:16px;background:#176f9e;color:#fff;box-shadow:0 12px 26px rgba(24,98,137,.15)}.help40-hero-tip span{font-size:24px}.help40-hero-tip b{margin-top:8px;font-size:15px}.help40-hero-tip p{margin-top:6px;color:rgba(255,255,255,.8);font-size:11px}.help40-start,.help40-guides,.help40-points{padding:20px;border:1px solid #d9e6ec;border-radius:17px;background:#fff}.help40-section-heading,.help40-faq-head{display:flex;justify-content:space-between;align-items:flex-end;gap:12px;margin-bottom:13px}.help40-section-heading h2,.help40-faq-head h2{margin:4px 0 0;color:#204a60;font-size:19px}.help40-progress{color:#9aadb6;font-size:12px;font-weight:900;letter-spacing:.08em}.help40-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.help40-steps article{position:relative;padding:15px 15px 14px 50px;border:1px solid #dce9ee;border-radius:13px;background:#f8fbfc}.help40-steps article>b{position:absolute;left:14px;top:15px;width:25px;height:25px;display:grid;place-items:center;border-radius:8px;background:#dff1f6;color:#197398}.help40-steps strong{display:block;color:#2a5266;font-size:12px}.help40-steps p{margin:5px 0 0;color:#78909d;font-size:10px;line-height:1.45}.help40-guide-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}.help40-guide{min-width:0;display:grid;grid-template-columns:32px minmax(0,1fr) 14px;gap:8px;align-items:center;padding:10px;border:1px solid #d9e6ec;border-radius:12px;background:#fff;text-align:left;cursor:pointer}.help40-guide:hover{border-color:#94bfd0;background:#f7fcfd;transform:translateY(-1px)}.help40-guide-icon{width:30px;height:30px;display:grid;place-items:center;border-radius:9px;background:#eaf5f8;font-size:15px}.help40-guide b,.help40-guide small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.help40-guide b{color:#2c5367;font-size:10px}.help40-guide small{margin-top:3px;color:#879aa4;font-size:8px}.help40-guide i{font-style:normal;color:#87a1ad}.help40-point-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:9px}.help40-point-grid>div{padding:12px;border:1px solid #e1ebef;border-radius:12px;background:#f9fcfd}.help40-point-grid span{display:block;font-size:18px}.help40-point-grid b{display:block;margin-top:6px;color:#31576a;font-size:11px}.help40-point-grid small{display:block;margin-top:4px;color:#81959f;font-size:9px;line-height:1.4}.help40-content{display:grid;grid-template-columns:225px minmax(0,1fr);gap:18px;align-items:start}.help40-side{display:grid;gap:10px;position:sticky;top:14px}.help40-side-card{padding:14px;border:1px solid #d9e6ec;border-radius:15px;background:#fff}.help40-side-card>span{margin-bottom:8px}.help40-side-card button{width:100%;display:grid;grid-template-columns:minmax(0,1fr) 15px;gap:4px;padding:9px 2px;border:0;border-top:1px solid #edf2f4;background:transparent;text-align:left;cursor:pointer}.help40-side-card b,.help40-side-card small{display:block}.help40-side-card b{color:#31566a;font-size:11px}.help40-side-card small{margin-top:2px;color:#8a9ca5;font-size:9px}.help40-side-card i{grid-column:2;grid-row:1/3;align-self:center;color:#8ba1ab;font-style:normal}.help40-side-card button:hover b{color:#18749b}.help40-support{padding:16px;border-radius:15px;background:linear-gradient(145deg,#174363,#236f94);color:#fff}.help40-support span{font-size:8px;font-weight:900;letter-spacing:.1em;opacity:.7}.help40-support b{display:block;margin-top:7px;font-size:12px}.help40-support p{margin:6px 0 0;color:rgba(255,255,255,.77);font-size:10px;line-height:1.45}.help40-faq-area{min-width:0}.help40-faq-head>#help40Count{min-width:28px;height:28px;display:grid;place-items:center;border-radius:999px;background:#dff1f6;color:#267491;font-size:11px}.help40-categories{display:flex;gap:6px;overflow:auto;padding:0 0 10px}.help40-category{white-space:nowrap;padding:7px 10px;border:1px solid #cddfe6;border-radius:999px;background:#fff;color:#5b7784;font-size:9px;font-weight:800;cursor:pointer}.help40-category.active{border-color:#1876a0;background:#1876a0;color:#fff}.help40-faq-list{display:grid;gap:8px}.help40-faq{border:1px solid #d7e5eb;border-radius:13px;background:#fff;overflow:hidden;transition:border-color .25s ease,box-shadow .25s ease,transform .25s ease}.help40-faq:hover{transform:translateY(-1px)}.help40-faq[open]{border-color:#8bbbd0;box-shadow:0 8px 22px rgba(26,91,119,.07)}.help40-faq summary{display:grid;grid-template-columns:32px minmax(0,1fr) 25px;gap:10px;align-items:center;padding:12px 13px;list-style:none;cursor:pointer}.help40-faq summary::-webkit-details-marker{display:none}.help40-faq-icon{width:30px;height:30px;display:grid;place-items:center;border-radius:9px;background:#edf7fa;font-size:14px}.help40-faq summary small{display:block;margin-bottom:3px;color:#8499a4;font-size:8px;font-weight:900;letter-spacing:.08em;text-transform:uppercase}.help40-faq summary b{display:block;color:#2b5064;font-size:12px}.help40-faq summary em{width:24px;height:24px;display:grid;place-items:center;border-radius:7px;background:#edf6f8;color:#207394;font-size:17px;font-style:normal;transition:transform .28s ease,background .28s ease,color .28s ease}.help40-faq[open] summary em{transform:rotate(45deg);background:#207394;color:#fff}.help40-answer{max-height:0;padding:0 15px 0 55px;border-top:1px solid transparent;color:#627c88;opacity:0;overflow:hidden;transform:translateY(-5px);transition:max-height .32s ease,padding .32s ease,opacity .24s ease,transform .32s ease,border-color .24s ease}.help40-faq[open] .help40-answer{max-height:500px;padding:0 15px 15px 55px;border-top-color:#edf2f4;opacity:1;transform:translateY(0)}.help40-answer p{margin:11px 0 7px;font-size:11px;line-height:1.5}.help40-answer ol{margin:0;padding-left:19px}.help40-answer li{padding:3px 0;font-size:11px;line-height:1.45}.help40-empty{padding:35px;border:1px dashed #c8dce4;border-radius:14px;background:#fbfdfe;text-align:center;color:#8198a3}.help40-empty span{display:grid;place-items:center;width:40px;height:40px;margin:0 auto 8px;border-radius:12px;background:#edf7fa;color:#217596;font-size:20px}.help40-empty b{display:block;color:#31576b}.help40-empty p{margin:5px 0 0;font-size:10px}@media(max-width:980px){.help40-guide-grid{grid-template-columns:repeat(3,1fr)}.help40-point-grid{grid-template-columns:repeat(2,1fr)}.help40-content{grid-template-columns:190px minmax(0,1fr)}}@media(max-width:760px){.help40-hero{grid-template-columns:1fr;padding:21px}.help40-hero h1{font-size:25px}.help40-steps,.help40-content{grid-template-columns:1fr}.help40-guide-grid{grid-template-columns:repeat(2,1fr)}.help40-side{position:static}.help40-start,.help40-guides,.help40-points{padding:15px}}@media(max-width:480px){.help40-guide-grid,.help40-point-grid{grid-template-columns:1fr}.help40-search button{font-size:0}.help40-search button:after{content:"×";font-size:18px}.help40-faq summary{grid-template-columns:29px minmax(0,1fr) 23px}.help40-answer,.help40-faq[open] .help40-answer{padding-left:14px;padding-right:14px}}
  `;document.head.appendChild(style);}
  const input=document.getElementById("help40Search"),clear=document.getElementById("help40Clear"),count=document.getElementById("help40Count"),title=document.getElementById("help40Title"),empty=document.getElementById("help40Empty"),cards=[...document.querySelectorAll("[data-help40-faq]")];let active="Все";
  const apply=()=>{const query=input.value.trim().toLowerCase();let visible=0;cards.forEach(card=>{const shown=(active==="Все"||card.dataset.cat===active)&&(!query||card.dataset.search.includes(query));card.hidden=!shown;if(shown)visible++;});count.textContent=visible;title.textContent=active==="Все"?"Все инструкции":active;empty.hidden=visible>0;};
  input.addEventListener("input",apply);clear.addEventListener("click",()=>{input.value="";apply();input.focus();});document.querySelectorAll("[data-help40-category]").forEach(button=>button.addEventListener("click",()=>{active=button.dataset.help40Category;document.querySelectorAll("[data-help40-category]").forEach(item=>item.classList.toggle("active",item===button));apply();}));document.querySelectorAll("[data-help40-go]").forEach(button=>button.addEventListener("click",()=>setPage(button.dataset.help40Go)));cards.forEach(card=>card.addEventListener("toggle",()=>{if(!card.open)return;cards.forEach(other=>{if(other!==card)other.open=false;});}));apply();cards[0]?.setAttribute("open","");
}

async function openGlobalSearch(){
  document.querySelectorAll('.search-overlay').forEach(x=>x.remove());
  const o=document.createElement('div');o.className='search-overlay';o.innerHTML=`<div class="search-box" role="dialog" aria-modal="true"><div class="search-top"><input id="globalSearchInput" placeholder="Найти документ, задачу или сотрудника..." autocomplete="off"><button class="secondary" id="searchClose">Закрыть</button></div><div class="search-results" id="globalSearchResults"><div class="empty" style="padding:20px">Введите хотя бы 2 символа.</div></div></div>`;document.body.appendChild(o);
  const input=o.querySelector('#globalSearchInput');const close=()=>o.remove();o.querySelector('#searchClose').onclick=close;o.onclick=e=>{if(e.target===o)close()};input.focus();let timer=null;input.oninput=()=>{clearTimeout(timer);timer=setTimeout(async()=>{const q=input.value.trim();if(q.length<2){o.querySelector('#globalSearchResults').innerHTML='<div class="empty" style="padding:20px">Введите хотя бы 2 символа.</div>';return;}try{const d=await api('/api/search?q='+encodeURIComponent(q));const icon={DOCUMENT:'file',TASK:'task',KNOWLEDGE:'book',USER:'user'};o.querySelector('#globalSearchResults').innerHTML=d.results.length?d.results.map(r=>`<div class="search-result" data-type="${r.type}" data-id="${r.id}"><div class="search-result-icon">${kedoIcon(icon[r.type]||'search')}</div><div class="search-result-copy"><strong>${esc(r.title||r.full_name||r.document_number||'Результат')}</strong><small>${esc(r.type==='USER'?(r.position||r.department_name||'Сотрудник'):r.document_number||r.status||r.category||'')}</small></div></div>`).join(''):'<div class="empty" style="padding:20px">Ничего не найдено.</div>';}catch(e){o.querySelector('#globalSearchResults').innerHTML=`<div class="err" style="padding:20px">${esc(e.message)}</div>`;}},220)};o.addEventListener('click',e=>{const row=e.target.closest('.search-result');if(!row)return;const id=Number(row.dataset.id),type=row.dataset.type;close();if(type==='DOCUMENT')return openDocument(id);if(type==='USER')return openProfileCard(id);if(type==='TASK')return setPage('tasks');if(type==='KNOWLEDGE')return setPage('knowledge');});
}

function openCommandPalette(){
  document.querySelectorAll('.command-palette-overlay').forEach(x=>x.remove());
  const o=document.createElement('div');o.className='command-palette-overlay';
  o.innerHTML=`<div class="command-palette" role="dialog" aria-modal="true"><div class="command-head"><span class="command-search-icon">${kedoIcon('search')}</span><input id="commandInput" autocomplete="off" placeholder="Поиск или команда…"><button type="button" class="secondary" id="commandClose">Esc</button></div><div class="command-hint">Поиск по системе или быстрый переход</div><div id="commandResults" class="command-results"></div></div>`;
  document.body.appendChild(o);
  const input=o.querySelector('#commandInput'),results=o.querySelector('#commandResults');
  const actions=[['inbox','Входящие','Документы и задачи, требующие действия','inbox'],['file','Документы','Реестр и загрузка документов','documents'],['order','Приказы','Приказы и ознакомление','orders'],['task','Задачи','Назначенные и выданные задачи','tasks'],['message','Сообщения','Чат с сотрудниками','messages'],['user','Замещения','Временные замещения','delegations'],['book','База знаний','Инструкции и материалы','knowledge'],['search','Помощь','FAQ и инструкции','help']];
  const renderActions=q=>{const n=(q||'').trim().toLowerCase();const a=actions.filter(x=>!n||(x[1]+' '+x[2]).toLowerCase().includes(n));results.innerHTML=a.map(x=>`<button class="command-row" data-command-page="${x[3]}"><span class="command-icon">${kedoIcon(x[0])}</span><span><strong>${esc(x[1])}</strong><small>${esc(x[2])}</small></span><span class="command-arrow">›</span></button>`).join('')||'<div class="empty">Ничего не найдено.</div>';};
  const close=()=>o.remove();o.querySelector('#commandClose').onclick=close;o.onclick=e=>{if(e.target===o)close()};
  results.onclick=e=>{const b=e.target.closest('[data-command-page]');if(b){close();setPage(b.dataset.commandPage);return;}const r=e.target.closest('[data-search-type]');if(r){const id=Number(r.dataset.searchId),type=r.dataset.searchType;close();if(type==='DOCUMENT')openDocument(id);else if(type==='USER')openProfileCard(id);else if(type==='TASK')setPage('tasks');else if(type==='KNOWLEDGE')setPage('knowledge');}};
  let timer=null;input.oninput=()=>{clearTimeout(timer);timer=setTimeout(async()=>{const q=input.value.trim();if(q.length<2){renderActions(q);return;}try{const d=await api('/api/search?q='+encodeURIComponent(q));const icon={DOCUMENT:'file',TASK:'task',KNOWLEDGE:'book',USER:'user'};const rows=(d.results||[]).slice(0,10).map(r=>`<button class="command-row" data-search-type="${r.type}" data-search-id="${r.id}"><span class="command-icon">${kedoIcon(icon[r.type]||'search')}</span><span><strong>${esc(r.title||r.full_name||r.document_number||'Результат')}</strong><small>${esc(r.type==='USER'?(r.position||r.department_name||'Сотрудник'):r.document_number||r.status||r.category||'')}</small></span><span class="command-arrow">›</span></button>`).join('');results.innerHTML=rows||'<div class="empty">Ничего не найдено.</div>';}catch{renderActions(q)}},180)};renderActions();input.focus();
}

function ensureAccountRequestStyles(){
  if(document.getElementById("kedoAccountRequestStyles"))return;
  const s=document.createElement("style");s.id="kedoAccountRequestStyles";s.textContent=`
  .account-request-main-building{display:flex;flex-direction:column;gap:4px;padding:11px 13px;margin:8px 0;border:1px solid #dbe5ee;border-radius:9px;background:#f7fafc;color:#50667d}
  .account-request-main-building strong{color:#243f5c;font-size:13px}
  .account-request-main-building span{font-size:12px;line-height:1.4}
  `;
  document.head.appendChild(s);
}
ensureAccountRequestStyles();
function ensureNotificationStyles(){
if(document.getElementById("kedoNotificationStyles"))return;
const s=document.createElement("style");s.id="kedoNotificationStyles";s.textContent=`
.kedo-notification-toasts{position:fixed;right:22px;bottom:22px;z-index:10000;display:flex;flex-direction:column;gap:8px;width:min(390px,calc(100vw - 30px))}
.kedo-notification-toast{display:flex;align-items:flex-start;gap:10px;padding:12px 13px;border:1px solid #d7e3ec;border-radius:12px;background:#fff;box-shadow:0 12px 35px rgba(20,45,70,.18);cursor:pointer;animation:kedoNoticeIn .22s ease-out}
@keyframes kedoNoticeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.knt-icon{width:30px;height:30px;border-radius:9px;background:#eaf3fa;color:#1f6d9f;display:grid;place-items:center;font-weight:800;flex:0 0 auto}
.knt-copy{min-width:0;display:flex;flex-direction:column;gap:3px;flex:1}
.knt-copy strong{font-size:12px;color:#26425d;line-height:1.3}
.knt-copy span{font-size:10px;color:#708296;line-height:1.4}
.kedo-notification-toast button{border:0;background:#f3f6f8;color:#738495;width:24px;height:24px;border-radius:7px;cursor:pointer;flex:0 0 auto}
.notification-panel{animation:kedoPanelIn .18s ease-out}
@keyframes kedoPanelIn{from{opacity:0;transform:translateY(-6px) scale(.99)}to{opacity:1;transform:none}}
.notification-panel .np-head-actions{display:flex;gap:7px;align-items:center}
.notification-panel .notification-item.archived{background:#fff}
.notification-panel .notification-item.archived:hover{background:#f7f9fc}
`;
document.head.appendChild(s);
}
ensureNotificationStyles();
function ensureKnowledgeStyles(){
if(document.getElementById("kedoKnowledgeStyles"))return;
const s=document.createElement("style");s.id="kedoKnowledgeStyles";s.textContent=`
.knowledge-item{display:inline-block;width:100%;margin:0 0 12px;break-inside:avoid;height:auto!important;transition:background .15s}
.knowledge-item:hover{background:#fafcff}
.knowledge-material-grid{display:block!important;column-count:2;column-gap:12px}
.training-progress-card{display:flex;justify-content:space-between;align-items:center;gap:24px;padding:20px;border:1px solid #cfe3ef;border-radius:16px;background:linear-gradient(135deg,#f5fbff,#eaf5fb);box-shadow:0 10px 26px rgba(35,91,125,.07)}
.training-progress-card h2{margin:5px 0 5px;color:#174b70;font-size:19px}.training-progress-card p{margin:0;color:#6d8495;font-size:12px;line-height:1.45}.training-progress-value{min-width:220px}.training-progress-value strong,.training-progress-value span{display:block;text-align:right}.training-progress-value strong{color:#176b9e;font-size:15px}.training-progress-value span{margin-top:3px;color:#7d94a1;font-size:10px}.training-progress-track{height:8px;margin-top:10px;border-radius:999px;background:#d9e9f1;overflow:hidden}.training-progress-track i{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,#48a6d5,#1b6d9f);transition:width .35s ease}.training-card-footer{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:15px;padding-top:12px;border-top:1px solid #e5eef3}.training-card-status{color:#8197a3;font-size:10px}.training-card-status.is-done{color:#25805a;font-weight:700}.training-card-footer button{min-height:32px;padding:7px 11px;font-size:10px}.training-card-footer button.is-done{border-color:#b9dfca;background:#eefaf2;color:#26744e}.training-card-footer button:disabled{opacity:1;cursor:default}
@media(max-width:900px){.knowledge-material-grid{column-count:1!important}}
@media(max-width:640px){.training-progress-card{display:block}.training-progress-value{min-width:0;margin-top:16px}.training-progress-value strong,.training-progress-value span{text-align:left}}
`;document.head.appendChild(s);
}
ensureKnowledgeStyles();
function ensureDocumentStyles(){
if(document.getElementById("internalKedoDocumentStyles"))return;
const s=document.createElement("style");
s.id="internalKedoDocumentStyles";
s.textContent=`
.doc-status-line{display:flex;align-items:center;gap:0;margin:14px 0 10px;flex-wrap:wrap}
.doc-status{position:relative;display:inline-flex;align-items:center;justify-content:center;
  min-height:32px;padding:6px 14px;border:1px solid #dbe4ef;background:#f7f9fc;color:#718096;
  font-size:12px;font-weight:600;line-height:1.2;white-space:nowrap}
.doc-status:first-child{border-radius:8px 0 0 8px}
.doc-status:last-child{border-radius:0 8px 8px 0}
.doc-status:not(:first-child){border-left:0}
.doc-status.done{background:#eef7ff;color:#2b6cb0}
.doc-status.active{background:#1769aa;color:#fff;border-color:#1769aa;box-shadow:0 2px 6px rgba(23,105,170,.18)}
.doc-status.active~.doc-status{background:#f7f9fc;color:#718096}
.doc-status-arrow{padding:0 5px;color:#a0aec0;font-size:13px;font-weight:700}
.signature-plaque{margin-top:12px;padding:12px 14px;border:1px solid #b9d5f2;border-left:4px solid #1769aa;
  border-radius:8px;background:#eff6ff;color:#1a365d;box-sizing:border-box}
.signature-plaque .title{font-weight:700;color:#1769aa;margin-bottom:7px}
.signature-plaque .line{margin:3px 0}
.signature-plaque .fingerprint{margin-top:7px;font:11px/1.4 ui-monospace,SFMono-Regular,Consolas,monospace;
  color:#4a5568;word-break:break-all}
.approval-plaque{margin-top:12px;padding:12px 14px;border:1px solid #b9dfc7;border-left:4px solid #2f8a57;
  border-radius:8px;background:#effaf2;color:#24553a;box-sizing:border-box}
.approval-plaque .title{font-weight:700;color:#267344;margin-bottom:5px}
.approval-plaque .line{margin:3px 0;color:#557564}
.document-detail-card{overflow:hidden}
.access-summary-card{padding:16px!important}
.access-summary-card .detail-section-head{margin-bottom:12px}
.access-summary-card .detail-section-head h2{font-size:17px!important}
.access-summary-list{display:grid;gap:8px}
.access-summary-item{display:flex;align-items:center;gap:10px;min-width:0;padding:10px 12px;border:1px solid #e1e9ef;border-radius:10px;background:#f8fbfd}
.access-summary-item>.rule-type-icon{width:30px;height:30px;min-width:30px;display:grid;place-items:center;border-radius:9px;background:#e7f2fa;color:#236d9c;font-size:11px;font-weight:800}
.access-summary-item>div{min-width:0}
.access-summary-item strong{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#2e4b63;font-size:12px}
.access-summary-item .muted{margin-top:2px;color:#8193a2;font-size:10px}
.history-row{display:flex;align-items:flex-start;gap:10px;flex-wrap:wrap;padding:11px 0;border-bottom:1px solid #edf2f5}
.history-row:last-child{border-bottom:0}
.history-row>b{color:#294861;font-size:12px}
.history-row>span{color:#8293a2;font-size:10px}
.history-row>.muted,.history-row>div{color:#637a8c;font-size:11px;line-height:1.45}
.comment-row{justify-content:space-between;flex-wrap:nowrap}
.comment-main{min-width:0;flex:1}
.comment-head{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.comment-head>b{color:#294861;font-size:12px}
.comment-head>span{color:#8293a2;font-size:10px}
.comment-body{margin-top:5px;color:#526b7d;font-size:12px;line-height:1.45;overflow-wrap:anywhere}
.comment-delete{flex:none;min-height:28px!important;padding:5px 8px!important;font-size:10px!important}
.detail-empty{display:flex;align-items:center;gap:10px;min-height:48px;box-sizing:border-box;padding:11px 12px;border:1px dashed #d5e2ea;border-radius:10px;background:#f8fbfd;color:#7a8d9c;font-size:11px;line-height:1.4}
.detail-empty-icon{display:grid;place-items:center;flex:0 0 28px;width:28px;height:28px;border-radius:8px;background:#eaf4f8;color:#317c9d;font-size:16px;font-weight:700}
 .document-detail-lower{align-items:start}
 .document-detail-columns{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;align-items:start}
 .document-detail-column{display:grid;gap:18px;align-content:start;min-width:0}
 .document-detail-active{max-width:1260px!important}
 .document-detail-active>.document-detail-topbar{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:0 0 8px;color:#8a9aaa;font-size:11px}
 .document-detail-active>.document-detail-topbar span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
 .document-detail-active>.document-detail-head{align-items:center;margin:0 0 14px;padding:22px 24px;border:1px solid #d6e3ec;border-radius:16px;background:linear-gradient(135deg,#fff 0%,#f3f9fc 100%);box-shadow:0 7px 22px rgba(27,70,96,.055)}
 .document-detail-active>.document-detail-head .page-title{margin:4px 0 0!important;font-size:27px!important;line-height:1.2!important}
 .document-detail-active>.document-detail-head .doc-status-line{margin:0}
 .document-detail-active>.ack-box{margin:0 0 14px!important;padding:14px 16px!important;border-radius:12px!important;box-shadow:none!important}
 .document-detail-active>.document-detail-card{margin-bottom:14px!important;border-color:#d6e3ec!important;border-radius:14px!important;box-shadow:0 5px 16px rgba(27,70,96,.035)!important}
 .document-detail-active>.document-detail-card>.detail-section-head{padding-bottom:11px;margin-bottom:14px;border-bottom:1px solid #e7eef3}
 .document-detail-active>.document-detail-card>.detail-section-head h2{font-size:17px!important}
 .document-detail-active>.document-detail-card>.detail-section-head>.muted{font-size:10px;color:#8b9caa;text-align:right}
 .document-detail-active>.document-detail-card:first-of-type .detail-grid{grid-template-columns:repeat(4,minmax(0,1fr));border:0;gap:8px;background:transparent;overflow:visible}
 .document-detail-active>.document-detail-card:first-of-type .detail-grid>div{padding:12px 13px;border:1px solid #e2ebf0;border-radius:10px;background:#f9fcfd}
 .document-detail-active>.document-detail-card:first-of-type .detail-grid strong{font-size:12px}
 .document-detail-active>.document-detail-card:nth-of-type(2) .file-copy-list{grid-template-columns:repeat(3,minmax(0,1fr));align-items:stretch}
 .document-detail-active>.document-detail-card:nth-of-type(2) .file-copy{height:100%;box-sizing:border-box;align-items:flex-start;flex-wrap:wrap;padding:13px;background:#fbfdfe}
 .document-detail-active>.document-detail-card:nth-of-type(2) .file-copy-main{min-width:calc(100% - 49px)}
 .document-detail-active>.document-detail-card:nth-of-type(2) .file-copy-actions{width:100%;justify-content:flex-start;margin-top:auto;padding-top:8px}
 .document-detail-active>.document-detail-card:nth-of-type(2) .file-copy-actions button{min-height:29px!important;font-size:10px!important}
 .document-detail-active>.document-detail-card:nth-of-type(2) .file-copy-name{font-size:11px}
 .document-detail-active>.document-detail-card:nth-of-type(2) .file-copy-meta{font-size:9px}
 .document-detail-active>.document-actions-card{padding:15px 18px!important;background:#f8fbfd}
 .document-detail-active>.document-actions-card>.detail-section-head{margin-bottom:10px;padding-bottom:10px}
 .document-detail-active>.document-actions-card>.document-detail-actions{justify-content:flex-start;gap:7px;padding:0}
 .document-detail-active>.document-actions-card>.document-detail-actions button{min-height:34px!important}
 .document-detail-active>.document-detail-columns{gap:14px;margin-top:0}
 .document-detail-active>.document-detail-columns .document-detail-card{margin-bottom:0!important;padding:16px!important;border-radius:13px!important;border-color:#dbe7ee!important;box-shadow:0 4px 13px rgba(27,70,96,.03)!important}
 .document-detail-active>.document-detail-columns .detail-section-head{margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #e7eef3}
 .document-detail-active .short-link-block{align-items:stretch;gap:7px}
 .document-detail-active .short-link-block input{min-height:36px;box-sizing:border-box;border-radius:9px}
 .document-detail-active .short-link-block button{min-height:36px!important}
 .document-detail-active .signature-info-box{background:#f8fbfd;border-color:#d6e4eb}
 .document-detail-active .document-detail-columns .doc-actions{display:flex;align-items:stretch;gap:7px}
 .document-detail-active .document-detail-columns .doc-actions input{min-width:0;flex:1;border-radius:9px}
 @media(max-width:1040px){.document-detail-active>.document-detail-card:first-of-type .detail-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.document-detail-active>.document-detail-card:nth-of-type(2) .file-copy-list{grid-template-columns:repeat(2,minmax(0,1fr))}}
 @media(max-width:760px){.document-detail-active>.document-detail-topbar{align-items:flex-start;flex-direction:column}.document-detail-active>.document-detail-head{align-items:flex-start;flex-direction:column;padding:17px}.document-detail-active>.document-detail-head .page-title{font-size:23px!important}.document-detail-active>.document-detail-card:first-of-type .detail-grid{grid-template-columns:1fr}.document-detail-active>.document-detail-card:nth-of-type(2) .file-copy-list{grid-template-columns:1fr}.document-detail-active>.document-detail-card>.detail-section-head{align-items:flex-start;flex-direction:column}.document-detail-active>.document-detail-card>.detail-section-head>.muted{text-align:left}.document-detail-active .document-detail-columns .doc-actions{align-items:stretch;flex-direction:column}.document-detail-active .short-link-block input{min-width:100%}}
 @media(max-width:760px){.document-detail-columns{grid-template-columns:1fr}}
@media(max-width:760px){.comment-row{align-items:flex-start;flex-direction:column}.comment-delete{align-self:flex-start}}
`;
document.head.appendChild(s);
}

function empAvatarHue(seed){
  let h=0; for(const c of String(seed||"?")) h=(h*31+c.charCodeAt(0))>>>0;
  return h%360;
}
function empRoleChipClass(role){
  return ({admin:"emp-chip-admin",moderator:"emp-chip-moderator",director:"emp-chip-director",department_head:"emp-chip-head",new_employee:"emp-chip-new-employee",employee:"emp-chip-employee"})[role]||"emp-chip-employee";
}
function empAvatarHtml(e){
  const hasAvatar=!!(e.has_avatar||e.avatar_file);
  const hue=empAvatarHue(e.full_name||e.login);
  const hue2=(hue+24)%360;
  const fallbackStyle=`background:linear-gradient(135deg,hsl(${hue},58%,48%),hsl(${hue2},62%,38%));box-shadow:0 6px 16px hsla(${hue},55%,38%,.28);border-color:transparent;color:#fff`;
  return avatarMarkup({
    userId:e.id,
    name:e.full_name,
    hasAvatar,
    sizeClass:"emp-avatar kedo-avatar-md",
    bust:e.id,
    fallbackStyle
  });
}
function employeeAdminRowHtml(e){
  const roleList=Array.isArray(e.roles)&&e.roles.length?e.roles:[e.role];
  const roles=roleList.map(r=>`<span class="emp-role-chip ${empRoleChipClass(r)}">${esc(roleLabel(r))}</span>`).join("");
  const canDelete=e.id!==state.user.id;
  const isAdmin=roleList.includes("admin");
  const isModerator=!isAdmin&&roleList.includes("moderator");
  const moreItems=[
    `<button type="button" class="emp-menu-item" data-action="resetEmployeePassword" data-id="${e.id}">Сменить пароль</button>`,
    roleList.includes("new_employee")?`<button type="button" class="emp-menu-item" data-action="setTrainingExitPassword" data-id="${e.id}">Пароль выхода из обучения</button>`:"",
    e.is_active
      ? `<button type="button" class="emp-menu-item danger-text" data-action="toggleEmployee" data-id="${e.id}" data-active="false">Заблокировать</button>`
      : `<button type="button" class="emp-menu-item" data-action="toggleEmployee" data-id="${e.id}" data-active="true">Вернуть из карантина</button>`,
    canDelete?`<button type="button" class="emp-menu-item danger-text" data-action="deleteEmployee" data-id="${e.id}">Удалить профиль</button>`:""
  ].filter(Boolean).join("");
  return `<tr class="emp-tr${isAdmin?" emp-tr-admin":""}${e.is_active?"":" emp-tr-blocked"}">
    <td class="emp-td-user">
      ${empAvatarHtml(e)}
      <div class="emp-row-copy">
        <div class="emp-row-title"><span class="emp-name">${esc(e.full_name)}</span>${isAdmin?'<span class="emp-admin-mark">ADMIN</span>':isModerator?'<span class="emp-admin-mark emp-moderator-mark">МОДЕРАТОР</span>':""}</div>
        <div class="emp-row-sub">${esc(e.position||"Без должности")}</div>
        <div class="emp-row-meta">
          <span class="emp-login-pill">@${esc(e.login)}</span>
          <span>${esc(e.org_group_name||"Основное здание")}${e.department_name?` · ${esc(e.department_name)}`:""}${e.supervisor_name?` · руководитель: ${esc(e.supervisor_name)}`:""}</span>
        </div>
      </div>
    </td>
    <td class="emp-td-roles">${roles}</td>
    <td class="emp-td-status"><span class="emp-status-dot ${e.is_active?"on":"off"}"></span>${e.is_active?"Активен":"Карантин"}</td>
    <td class="emp-td-actions">
      <div class="emp-actions">
        <button type="button" class="primary emp-btn" data-action="editEmployee" data-id="${e.id}">Изменить</button>
        <button type="button" class="secondary emp-btn" data-action="editEmployeeRoles" data-id="${e.id}">Роли</button>
        <details class="emp-more">
          <summary class="secondary emp-btn">Ещё</summary>
          <div class="emp-menu">${moreItems}</div>
        </details>
      </div>
    </td>
  </tr>`;
}
function installPortalNavigation(){}
installPortalNavigation();
ensureDocumentStyles();
function statusLabel(s){return({DRAFT:"Загружен",ON_APPROVAL:"Ждёт согласования",APPROVED:"Согласовано",WAITING_SIGNATURE:"Ждёт подписи",SIGNED:"Подписан",REGISTERED:"Зарегистрирован",PUBLISHED:"Опубликован",ARCHIVED:"В архиве",WAITING_ACKNOWLEDGEMENT:"Ждёт ознакомления",ACKNOWLEDGED:"Ознакомление подтверждено"})[s]||s}
function statusFlow(current,action){const a=String(action||"").toUpperCase();const flow=a==="ACKNOWLEDGE"?["DRAFT","WAITING_ACKNOWLEDGEMENT","ACKNOWLEDGED"]:a==="SIGNATURE"?["DRAFT","WAITING_SIGNATURE","SIGNED"]:["DRAFT","ON_APPROVAL","APPROVED"];const idx=flow.indexOf(current);return `<div class="doc-status-line" aria-label="Статус документа">${flow.map((x,i)=>`${i>0?`<span class="doc-status-arrow" aria-hidden="true">→</span>`:""}<span class="doc-status ${i<idx?"done":""} ${x===current?"active":""}">${esc(statusLabel(x))}</span>`).join("")}</div>${current==="APPROVED"?`<div class="approval-plaque"><div class="title">✓ СОГЛАСОВАНО</div><div class="line">Документ прошёл согласование</div></div>`:""}`;}
function docsHtml(docs){
  if(!docs.length)return'<div class="empty">Документы не найдены.</div>';
  const canManageAccess=(state.user?.roles||[state.user?.role]).some(r=>["admin","moderator","director","document_uploader"].includes(r));
  const currentRoles=state.user?.roles||[state.user?.role];
  const canManageAll=currentRoles.some(r=>["admin","moderator","director","document_uploader"].includes(r));
  return docs.map(d=>{
    const action=String(d.workflow_action||((d.document_type==="ORDER")?"ACKNOWLEDGE":"APPROVAL")).toUpperCase();
    const canAck=action==="ACKNOWLEDGE"&&["WAITING_ACKNOWLEDGEMENT","PUBLISHED","DRAFT"].includes(d.status)&&!d.acknowledged_at&&Number(d.author_id)!==Number(state.user.id);
    const canManageWorkflow=canManageAll||(currentRoles.includes("department_head")&&(Number(d.author_id)===Number(state.user.id)||Number(d.department_id)===Number(state.user.departmentId)));
    const canArchiveOrder=canManageWorkflow;
    const canDelete=canManageWorkflow;
    return `<div class="document"><div><strong>${esc(d.title)}</strong>${d.document_number?` <span class="muted">№ ${esc(d.document_number)}</span>`:""}<br><span class="muted">${esc(d.filename)} · ${esc(d.department_name||"Общие")} · ${esc(d.author_name||"")}${d.recipient_name?` · Получатель: ${esc(d.recipient_name)}`:""}${d.approver_name?` · Согласующий: ${esc(d.approver_name)}`:""}</span>${(d.folders||[]).length?`<div class="archive-folder-tags order-list-folder-tags">${d.folders.map(f=>`<span class="archive-folder-tag">${esc(f.name)}</span>`).join("")}</div>`:""}${statusFlow(d.status,action)}${d.last_signer_name?`<div class="signature-plaque"><div class="title">✓ Подписан · ${esc(d.last_signer_name)}</div><div class="line">${formatKedoDateTime(d.last_signed_at)}</div></div>`:""}</div><div class="doc-actions"><button class="secondary" data-action="openDocument" data-id="${d.id}">Карточка</button><button class="secondary" data-action="previewDoc" data-id="${d.id}">Оригинал</button>${d.approved_file_path?`<button class="secondary" data-action="previewApproved" data-id="${d.id}">Согласованный</button>`:""}${d.signed_file_path?`<button class="secondary" data-action="previewSigned" data-id="${d.id}">Подписанный</button>`:""}<button class="secondary" data-action="downloadDoc" data-id="${d.id}">PDF</button>${canAck?`<button class="primary" data-action="acknowledgeOrder" data-id="${d.id}">Ознакомлен</button>`:""}${state.orderFolderContext&&canManageAccess?`<button class="secondary" data-action="addOrderFolder" data-id="${d.id}">В папку</button>${state.orderFolderId?`<button class="secondary" data-action="removeOrderFolder" data-id="${d.id}" data-folder-id="${state.orderFolderId}">Убрать из папки</button>`:""}`:""}${d.document_type==="ORDER"&&d.status!=="ARCHIVED"&&canArchiveOrder?`<button class="secondary" data-action="archiveOrder" data-id="${d.id}">В архив</button>`:""}${canManageWorkflow&&d.status==="DRAFT"?`<button class="primary" data-action="submitApproval" data-id="${d.id}">Настроить маршрут</button>`:""}${action==="APPROVAL"&&d.status==="ON_APPROVAL"&&Number(d.approver_id)===Number(state.user.id)?`<button class="primary" data-action="approveDocument" data-id="${d.id}">Согласовать</button><button class="danger" data-action="rejectDocument" data-id="${d.id}">Отклонить</button>`:""}${action==="SIGNATURE"&&d.status==="WAITING_SIGNATURE"&&Number(d.signer_id)===Number(state.user.id)?`<button class="primary" data-action="signDocument" data-id="${d.id}">Подписать ЭП</button>`:""}${canManageAccess?`<button class="secondary" data-action="editDocumentAccess" data-id="${d.id}">Настроить доступ</button>`:""}${canDelete?`<button class="danger" data-action="deleteDocument" data-id="${d.id}">Удалить</button>`:""}</div></div>`;
  }).join("");
}
async function renderDocuments(){
  state.orderFolderContext=false;
  const canManageDocs=(state.user?.roles||[state.user?.role]).some(r=>["admin","moderator","director","department_head","document_uploader"].includes(r));
  const [docsRaw,users,deps,groups,signerDirectory]=await Promise.all([
    api("/api/documents/?scope=archive&limit=25"),
    api("/api/directory/users"),
    api("/api/directory/departments"),
    api("/api/directory/org-groups"),
    api("/api/documents/signers")
  ]);
  const docs=listData(docsRaw);
  state.directoryUsers=users;
  const depOptions=deps.map(d=>`<label class="recipient-option"><input type="checkbox" value="${d.id}" data-label="${esc(d.name)}"><span>${esc(d.name)}</span></label>`).join("");
  const groupOptions=groups.map(g=>`<label class="recipient-option"><input type="checkbox" value="${g.id}" data-label="${esc(g.name)}"><span><strong>${esc(g.name)}</strong></span></label>`).join("");
  const userOptions=users.map(u=>`<label class="recipient-option"><input type="checkbox" value="${u.id}" data-label="${esc(u.full_name)}"><span>${esc(u.full_name)}${u.position?` — ${esc(u.position)}`:""}${u.department_name?` · ${esc(u.department_name)}`:""}</span></label>`).join("");
  const approverOptions=users.map(u=>`<option value="${u.id}">${esc(u.full_name)}${u.position?` — ${esc(u.position)}`:""}${u.department_name?` · ${esc(u.department_name)}`:""}</option>`).join("");
  const signers=(signerDirectory||[]).filter(u=>u.has_key).map(u=>`<option value="${u.id}">${esc(u.full_name)}${u.position?` — ${esc(u.position)}`:""}${u.department_name?` · ${esc(u.department_name)}`:""}</option>`).join("");

  $("main").innerHTML=`<h1 class="page-title">Архив документов</h1>
  ${canManageDocs?`<section class="card kedo-upload-card kedo-form-panel is-collapsed" id="documentUploadPanel">
    <button type="button" class="kedo-form-panel-head kedo-collapsible-head" id="documentUploadHead" aria-expanded="false"><span><span class="kedo-form-icon">↑</span><span><span class="eyebrow">ФОРМА</span><strong>Загрузить документ</strong><small>Маршрут выбирается сразу — после загрузки документ уже у нужного получателя.</small></span></span><span class="kedo-form-chevron">⌄</span></button>
    <div class="kedo-form-panel-body">
    <div class="notice">Сначала заполните карточку и маршрут, затем выберите PDF. Отдельная кнопка «Настроить маршрут» после загрузки больше не нужна.</div>

    <div class="row">
      <div><label>Название</label><input id="docTitle" placeholder="Название документа"></div>
      <div><label>Тип</label><select id="docType"><option value="LETTER">Письмо</option><option value="MEMO">Служебная записка</option><option value="CONTRACT">Договор</option><option value="ACT">Акт</option><option value="OTHER">Другой документ</option></select></div>
    </div>
    <div class="row">
      <div><label>Номер</label><input id="docNumber" placeholder="Номер документа"></div>
      <div><label>Дата</label><input id="docDate" type="date"></div>
    </div>

    <div class="upload-section-title"><span>1</span><div><strong>Маршрут документа</strong><small>Что должен сделать получатель после открытия?</small></div></div>
    <div class="workflow-choice-grid">
      <button type="button" class="workflow-choice active" data-workflow-choice="ACKNOWLEDGE"><span class="workflow-choice-icon">✓</span><span><b>Ознакомиться</b><small>Получатели должны открыть документ и подтвердить ознакомление.</small></span></button>
      <button type="button" class="workflow-choice" data-workflow-choice="APPROVAL"><span class="workflow-choice-icon">↗</span><span><b>Согласовать</b><small>Документ уйдёт выбранному согласующему.</small></span></button>
      <button type="button" class="workflow-choice" data-workflow-choice="SIGNATURE"><span class="workflow-choice-icon">ЭП</span><span><b>Подписать ЭП</b><small>Документ уйдёт сотруднику с зарегистрированной внутренней ЭП.</small></span></button>
    </div>
    <input type="hidden" id="docWorkflowAction" value="ACKNOWLEDGE">
    <div id="docWorkflowTarget"></div>

    <div class="upload-section-title"><span>2</span><div><strong>Файл документа</strong><small>Поддерживается PDF до 50 МБ.</small></div></div>
    <label class="file-drop-zone" for="docFile"><span class="file-drop-icon">↑</span><span><b>Выберите PDF-файл</b><small id="docFileLabel">Файл ещё не выбран</small></span><input id="docFile" type="file" accept="application/pdf"></label>

    <div class="doc-actions" style="margin-top:16px"><button class="primary" data-action="uploadDocument">Загрузить документ</button><button class="secondary" data-action="prepareSigningKey">Моя ЭП</button></div>
    <p id="docMsg"></p>
    </div>
  </section>`:`<section class="card"><div class="notice">Сотрудники могут просматривать документы своего подразделения и те, что выданы по ролям. Создавать документы могут руководитель, директор и администратор.</div></section>`}
  <section class="card"><div class="search"><input id="docSearch" placeholder="Поиск по названию, номеру или файлу"><button class="secondary" data-action="searchDocs">Найти</button></div><div class="doc-filter-toolbar"><label>Статус<select id="docStatusFilter"><option value="">Все статусы</option><option value="Загружен">Загружен</option><option value="Ждёт согласования">Ждёт согласования</option><option value="Согласовано">Согласовано</option><option value="Ждёт подписи">Ждёт подписи</option><option value="Подписан">Подписан</option><option value="Ждёт ознакомления">Ждёт ознакомления</option><option value="Ознакомление подтверждено">Ознакомление подтверждено</option><option value="В архиве">В архиве</option></select></label><span id="docFilterCount" class="muted"></span></div><div id="docList">${docsHtml(docs)}</div></section>`;

  const applyDocumentFilters=()=>{
    const value=String($("docStatusFilter")?.value||"");
    const cards=[...document.querySelectorAll("#docList .document")];
    let visible=0;
    cards.forEach(card=>{const show=!value||String(card.textContent||"").includes(value);card.hidden=!show;if(show)visible++;});
    const count=$("docFilterCount");if(count)count.textContent=value?`${visible} ${visible===1?"документ":"документов"}`:"";
  };
  window.__kedoApplyDocumentFilters=applyDocumentFilters;
  $("docStatusFilter")?.addEventListener("change",applyDocumentFilters);
  applyDocumentFilters();

  const renderWorkflowTarget=()=>{
    const action=$("docWorkflowAction")?.value||"ACKNOWLEDGE";
    const target=$("docWorkflowTarget");
    if(!target)return;
    if(action==="APPROVAL"){
      target.innerHTML=`<div class="workflow-target-card"><label>Согласующий <span class="required-mark">обязательно</span><select id="docApprover"><option value="">Выберите сотрудника</option>${approverOptions}</select></label><div class="workflow-target-note">После загрузки статус сразу станет «Ждёт согласования».</div></div>`;
      return;
    }
    if(action==="SIGNATURE"){
      target.innerHTML=`<div class="workflow-target-card"><label>Подписант <span class="required-mark">обязательно</span><select id="docSigner"><option value="">Выберите сотрудника с зарегистрированной ЭП</option>${signers}</select></label><div class="workflow-target-note">После загрузки статус сразу станет «Ждёт подписи».</div></div>`;
      if(!signers)target.innerHTML+=`<div class="workflow-warning">Нет сотрудников с зарегистрированной внутренней ЭП.</div>`;
      return;
    }
    target.innerHTML=`<div class="workflow-target-card">
      <div class="workflow-target-head"><div><strong>Кому отправить на ознакомление</strong><small>Маршрут обязателен и сохраняется вместе с документом.</small></div><span class="workflow-required-badge">Обязательно</span></div>
      <div class="doc-recipient-builder">
        <div><label>Филиалы / группы</label><div class="recipient-dropdown" id="docRecipientGroups"><button type="button" class="recipient-dropdown-toggle"><span class="recipient-dropdown-label">Выберите филиалы</span><span>⌄</span></button><div class="recipient-dropdown-menu"><div class="recipient-dropdown-tools"><span>Выбор филиалов</span><button type="button" class="recipient-dropdown-clear">Сбросить</button></div>${groupOptions||'<div class="recipient-empty">Филиалов пока нет</div>'}</div></div></div>
        <div><label>Подразделения</label><div class="recipient-dropdown" id="docRecipientDepartments"><button type="button" class="recipient-dropdown-toggle"><span class="recipient-dropdown-label">Выберите подразделения</span><span>⌄</span></button><div class="recipient-dropdown-menu"><div class="recipient-dropdown-tools"><span>Выбор подразделений</span><button type="button" class="recipient-dropdown-clear">Сбросить</button></div>${depOptions||'<div class="recipient-empty">Подразделений нет</div>'}</div></div></div>
        <div><label>Сотрудники</label><div class="recipient-dropdown" id="docRecipientUsers"><button type="button" class="recipient-dropdown-toggle"><span class="recipient-dropdown-label">Выберите сотрудников</span><span>⌄</span></button><div class="recipient-dropdown-menu"><div class="recipient-dropdown-tools"><span>Выбор сотрудников</span><button type="button" class="recipient-dropdown-clear">Сбросить</button></div>${userOptions||'<div class="recipient-empty">Сотрудников нет</div>'}</div></div></div>
      </div>
      <div id="docRouteSummary" class="route-summary">Маршрут пока не выбран</div>
    </div>`;
    setupRecipientDropdown("docRecipientGroups","Выберите филиалы");
    setupRecipientDropdown("docRecipientDepartments","Выберите подразделения");
    setupRecipientDropdown("docRecipientUsers","Выберите сотрудников");
    const updateSummary=()=>{
      const parts=[];
      const g=getRecipientDropdownValues("docRecipientGroups").length;
      const d=getRecipientDropdownValues("docRecipientDepartments").length;
      const u=getRecipientDropdownValues("docRecipientUsers").length;
      if(g)parts.push(`филиалов: ${g}`);if(d)parts.push(`подразделений: ${d}`);if(u)parts.push(`сотрудников: ${u}`);
      $("docRouteSummary").textContent=parts.length?`Выбрано — ${parts.join(" · ")}`:"Маршрут пока не выбран";
    };
    ["docRecipientGroups","docRecipientDepartments","docRecipientUsers"].forEach(id=>$(id)?.querySelector(".recipient-dropdown-menu")?.addEventListener("change",updateSummary));
  };
  document.querySelectorAll("[data-workflow-choice]").forEach(btn=>btn.addEventListener("click",()=>{
    document.querySelectorAll("[data-workflow-choice]").forEach(x=>x.classList.remove("active"));
    btn.classList.add("active");
    $("docWorkflowAction").value=btn.dataset.workflowChoice;
    renderWorkflowTarget();
  }));
  $("docFile")?.addEventListener("change",()=>{
    const f=$("docFile").files?.[0];
    $("docFileLabel").textContent=f?`${f.name} · ${(f.size/1024/1024).toFixed(2)} МБ`:"Файл ещё не выбран";
  });
  if(canManageDocs)renderWorkflowTarget();
}


function installRecipientDropdownStyles(){
  if(document.getElementById("kedoRecipientDropdownStyles"))return;
  const s=document.createElement("style");s.id="kedoRecipientDropdownStyles";s.textContent=`
    .recipient-dropdown{position:relative;width:100%}
    .recipient-dropdown-toggle{width:100%;min-height:42px;padding:10px 12px;border:1px solid #ccd6e2;border-radius:9px;background:#fff;color:#344054;display:flex;align-items:center;justify-content:space-between;gap:10px;cursor:pointer;text-align:left}
    .recipient-dropdown-toggle:hover,.recipient-dropdown.open .recipient-dropdown-toggle{border-color:#7aa7c9;box-shadow:0 0 0 3px rgba(23,111,176,.08)}
    .recipient-dropdown-toggle.has-selection{color:#173b62;font-weight:600}
    .recipient-dropdown-menu{display:none;position:absolute;z-index:3000;left:0;right:0;top:calc(100% + 6px);max-height:300px;overflow:auto;background:#fff;border:1px solid #ccd8e4;border-radius:10px;box-shadow:0 16px 40px rgba(20,48,75,.16);padding:7px}
    .recipient-dropdown.open .recipient-dropdown-menu{display:block}
    .recipient-dropdown-tools{display:flex;justify-content:space-between;align-items:center;padding:5px 7px 8px;border-bottom:1px solid #e7edf3;margin-bottom:4px;color:#6b7c8e;font-size:11px}
    .recipient-dropdown-clear{border:0;background:none;color:#176aa8;cursor:pointer;font-size:11px}
    .recipient-option{display:flex!important;align-items:center;gap:9px;padding:9px 8px;margin:0!important;border-radius:7px;font-weight:400!important;cursor:pointer}
    .recipient-option:hover{background:#f3f7fb}
    .recipient-option input{width:auto!important;margin:0!important}
    .recipient-option span{font-size:13px;color:#344054;line-height:1.35}
    .recipient-empty{padding:12px;color:#8a97a6;font-size:12px;text-align:center}
    .order-recipient-box{position:relative;z-index:10}
    .order-recipient-box>div{min-width:0}
  `;
  document.head.appendChild(s);
}
function installUploadFormStyles(){
  if(document.getElementById("kedoUploadFormStyles"))return;
  const s=document.createElement("style");s.id="kedoUploadFormStyles";s.textContent=`
    .kedo-upload-card{overflow:visible}
    .kedo-upload-head{display:flex;justify-content:space-between;gap:20px;align-items:flex-start}
    .kedo-upload-head h2{margin:3px 0 4px}
    .kedo-upload-head p{margin:0;max-width:820px}
    .upload-section-title{display:flex;align-items:center;gap:10px;margin:20px 0 10px;color:#173b62}
    .upload-section-title>span{width:28px;height:28px;border-radius:50%;background:#eaf3fa;color:#176aa8;display:grid;place-items:center;font-weight:800;font-size:12px}
    .upload-section-title strong{display:block;font-size:14px}.upload-section-title small{display:block;color:#7a8b9d;font-size:11px;margin-top:1px}
    .workflow-choice-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
    .workflow-choice{appearance:none;border:1px solid #d3dfeb;background:#fff;color:#233b55;border-radius:12px;padding:13px;text-align:left;display:flex;gap:10px;align-items:flex-start;cursor:pointer;min-height:90px;transition:.15s}
    .workflow-choice:hover{border-color:#7aa7c9;background:#f8fbfe}
    .workflow-choice.active{border-color:#176fb0;background:#f3f8fc;box-shadow:0 0 0 2px rgba(23,111,176,.08)}
    .workflow-choice-icon{width:30px;height:30px;flex:0 0 30px;border-radius:9px;background:#eaf3fa;color:#176aa8;display:grid;place-items:center;font-size:12px;font-weight:800}
    .workflow-choice b{display:block;font-size:13px}.workflow-choice small{display:block;color:#73869a;font-size:11px;line-height:1.35;margin-top:4px}
    .workflow-target-card{margin-top:10px;padding:14px;border:1px solid #d8e4ee;border-radius:12px;background:#fbfdff}
    .workflow-target-card select{margin-top:6px}
    .workflow-target-head{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:10px}.workflow-target-head strong{display:block;font-size:13px}.workflow-target-head small{display:block;color:#7a8b9d;font-size:11px;margin-top:2px}
    .workflow-required-badge{font-size:10px;padding:5px 8px;border-radius:999px;background:#fff5e8;color:#a86312;white-space:nowrap}
    .workflow-target-note{margin-top:9px;color:#6f8193;font-size:11px}
    .workflow-warning{margin-top:10px;padding:10px 12px;border-radius:9px;background:#fff6f6;color:#a33b3b;border:1px solid #f0d2d2;font-size:12px}
    .route-summary{margin-top:10px;padding:9px 11px;border-radius:8px;background:#f4f8fb;color:#5f7489;font-size:11px}
    .file-drop-zone{min-height:74px;border:1px dashed #b9ccdd;border-radius:12px;background:#f9fbfd;display:flex!important;align-items:center;gap:12px;padding:13px;cursor:pointer}
    .file-drop-zone:hover{border-color:#6d9fc5;background:#f4f9fd}.file-drop-zone input{display:none!important}
    .file-drop-icon{width:34px;height:34px;border-radius:9px;background:#eaf3fa;color:#176aa8;display:grid;place-items:center;font-size:18px;font-weight:700}
    .file-drop-zone b{display:block;font-size:13px;color:#24415e}.file-drop-zone small{display:block;color:#7b8d9f;font-size:11px;margin-top:2px}
    @media(max-width:800px){.workflow-choice-grid{grid-template-columns:1fr}.kedo-upload-head{display:block}}
  `;document.head.appendChild(s);
}
installRecipientDropdownStyles();installUploadFormStyles();
function setupRecipientDropdown(id,emptyText){
  const wrap=$(id); if(!wrap)return;
  const toggle=wrap.querySelector(".recipient-dropdown-toggle");
  const menu=wrap.querySelector(".recipient-dropdown-menu");
  if(!toggle||!menu)return;
  const update=()=>{
    const checked=[...wrap.querySelectorAll("input[type=checkbox]:checked")];
    const labels=checked.map(x=>x.dataset.label||"");
    const label=labels.length?`Выбрано: ${labels.length}`:emptyText;
    toggle.querySelector(".recipient-dropdown-label").textContent=label;
    toggle.classList.toggle("has-selection",checked.length>0);
  };
  toggle.onclick=e=>{
    e.stopPropagation();
    document.querySelectorAll(".recipient-dropdown.open").forEach(x=>{if(x!==wrap)x.classList.remove("open");});
    wrap.classList.toggle("open");
  };
  menu.addEventListener("click",e=>e.stopPropagation());
  menu.addEventListener("change",update);
  wrap.querySelector(".recipient-dropdown-clear")?.addEventListener("click",()=>{
    wrap.querySelectorAll("input[type=checkbox]").forEach(x=>x.checked=false);update();
  });
  update();
}
function getRecipientDropdownValues(id){
  return [...($(id)?.querySelectorAll("input[type=checkbox]:checked")||[])].map(x=>Number(x.value)).filter(Boolean);
}
document.addEventListener("click",e=>{
  if(!e.target.closest(".recipient-dropdown"))
    document.querySelectorAll(".recipient-dropdown.open").forEach(x=>x.classList.remove("open"));
});

function orderFolderPath(folders,id){
  const result=[],seen=new Set();
  let current=folders.find(x=>Number(x.id)===Number(id));
  while(current&&!seen.has(Number(current.id))){
    seen.add(Number(current.id));result.unshift(current);
    current=folders.find(x=>Number(x.id)===Number(current.parent_id||0));
  }
  return result;
}
function orderFolderOptionsHtml(folders,selectedId=null){
  return folders.map(folder=>{
    const depth=orderFolderPath(folders,folder.id).length-1;
    return `<option value="${folder.id}" ${Number(selectedId)===Number(folder.id)?"selected":""}>${esc(`${"— ".repeat(Math.max(0,depth))}${folder.name}`)}</option>`;
  }).join("");
}
function installOrderFolderStyles(){
  if(document.getElementById("kedoOrderFolderStyles"))return;
  const s=document.createElement("style");s.id="kedoOrderFolderStyles";s.textContent=`
    .order-folders-card{overflow:hidden;margin-bottom:14px;border:1px solid #d7e5ee;background:linear-gradient(135deg,#fff 0%,#f8fbfd 100%)}
    .order-folders-card .kedo-form-panel-head{padding:14px 16px;border-radius:inherit}
    .order-folders-card .kedo-form-panel-head:hover{background:rgba(237,247,251,.72)}
    .order-folders-card .kedo-form-panel-head>span:first-child{min-width:0}
    .order-folders-card .kedo-form-icon{display:grid;place-items:center;width:36px;height:36px;border-radius:11px;background:linear-gradient(135deg,#e4f3f8,#dcecff);color:#176fa8;font-size:17px;box-shadow:inset 0 0 0 1px rgba(31,117,157,.08)}
    .order-folders-card .kedo-form-panel-head strong{font-size:16px;line-height:1.2}
    .order-folders-card .kedo-form-panel-head small{display:block;max-width:760px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    .order-folders-card .kedo-form-panel-body{padding:0 16px 16px}
    .order-folders-card .order-folder-body{padding-top:13px;border-top:1px solid #e7eff4}
    .order-folder-toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:11px}
    .order-folder-toolbar-copy{display:grid;gap:2px;min-width:0}
    .order-folder-toolbar-copy strong{font-size:12px;color:#31566d}
    .order-folder-toolbar-copy small{font-size:11px;color:#8192a2}
    .order-folders-card .folder-crumbs{margin:0 0 11px;padding:6px 8px;border:1px solid #e3edf2;border-radius:9px;background:rgba(255,255,255,.74)}
    .order-folders-card .folder-grid{margin:0;gap:10px}
    .order-folders-card .folder-card{min-height:70px;padding:12px;border-radius:11px;transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease}
    .order-folders-card .folder-card:hover{transform:translateY(-2px);border-color:#9dbdd3;box-shadow:0 9px 22px rgba(24,68,99,.10)}
    .order-folders-card .folder-card .folder-edit{z-index:2}
    .order-folders-card .order-folder-actions{display:flex;flex-wrap:wrap;gap:7px;margin-top:11px;padding-top:11px;border-top:1px solid #e7eff4}
    @media (max-width:700px){.order-folder-toolbar{align-items:flex-start;flex-direction:column}.order-folders-card .kedo-form-panel-head small{white-space:normal}.order-folders-card .folder-grid{grid-template-columns:1fr}}
  `;document.head.appendChild(s);
}
function orderFoldersPanelHtml(folders,currentId,canManage){
  installOrderFolderStyles();
  const current=folders.find(x=>Number(x.id)===Number(currentId||0));
  const children=folders.filter(x=>Number(x.parent_id||0)===Number(currentId||0));
  const path=orderFolderPath(folders,currentId);
  const crumbs=`<button type="button" data-action="openOrderFolder" data-id="0">Все приказы</button>${path.map(folder=>`<span class="muted">/</span><button type="button" data-action="openOrderFolder" data-id="${folder.id}">${esc(folder.name)}</button>`).join("")}`;
  const folderCount=folders.length,totalOrders=folders.reduce((sum,folder)=>sum+Number(folder.order_count||0),0),isOpen=Boolean(state.orderFoldersOpen);
  const folderLabel=folderCount===1?"папка":"папок",orderLabel=totalOrders===1?"приказ":"приказов";
  const summary=folderCount?`${folderCount} ${folderLabel} · ${totalOrders} ${orderLabel}${current?` · раздел «${esc(current.name)}»`:""}`:"Папок пока нет · нажмите, чтобы создать структуру";
  return `<section class="card kedo-form-panel order-folders-card ${isOpen?"":"is-collapsed"}" id="orderFoldersPanel"><button type="button" class="kedo-form-panel-head kedo-collapsible-head" id="orderFoldersHead" aria-expanded="${isOpen}"><span><span class="kedo-form-icon">▰</span><span><span class="eyebrow">СТРУКТУРА ПРИКАЗОВ</span><strong>Папки приказов</strong><small>${summary}</small></span></span><span class="kedo-form-chevron">⌄</span></button><div class="kedo-form-panel-body"><div class="order-folder-body"><div class="order-folder-toolbar"><div class="order-folder-toolbar-copy"><strong>${current?`Открыт раздел «${esc(current.name)}»`:"Все приказы"}</strong><small>Отдельная структура только для приказов</small></div>${canManage?`<button class="primary" type="button" data-action="createOrderFolder">＋ Новая папка</button>`:""}</div><div class="folder-crumbs">${crumbs}</div><div class="folder-grid">${children.map(folder=>`<div class="folder-card order-folder-card" data-action="openOrderFolder" data-id="${folder.id}"><span class="folder-icon">▰</span><span><strong>${esc(folder.name)}</strong><small>${Number(folder.order_count||0)} ${Number(folder.order_count||0)===1?"приказ":"приказов"}${Number(folder.child_count||0)?` · ${folder.child_count} вложенных папок`:""}</small></span>${canManage?`<span class="folder-edit" data-action="renameOrderFolder" data-id="${folder.id}" title="Переименовать">✎</span><button type="button" class="folder-edit" style="right:8px;top:42px" data-action="orderFolderAccess" data-id="${folder.id}" title="Доступ">⌾</button><button type="button" class="folder-edit" style="right:8px;top:76px" data-action="deleteOrderFolder" data-id="${folder.id}" title="Удалить">×</button>`:""}</div>`).join("")||`<div class="archive-empty" style="grid-column:1/-1">${current?"В этой папке пока нет вложенных папок.":"Папок приказов пока нет."}</div>`}</div>${current&&canManage?`<div class="order-folder-actions"><button type="button" class="secondary" data-action="createOrderFolder">＋ Подпапка в «${esc(current.name)}»</button><button type="button" class="secondary" data-action="renameOrderFolder" data-id="${current.id}">Переименовать папку</button><button type="button" class="secondary" data-action="orderFolderAccess" data-id="${current.id}">Доступ</button><button type="button" class="danger-outline" data-action="deleteOrderFolder" data-id="${current.id}">Удалить папку</button></div>`:""}</div></div></section>`;
}
async function chooseOrderFolder(orderId){
  const folders=state.orderFolders||[];
  if(!folders.length)return kedoAlert("Сначала создайте папку.");
  const overlay=document.createElement("div");overlay.className="archive-modal";
  overlay.innerHTML=`<div class="archive-modal-card"><div class="detail-section-head"><div><div class="eyebrow">ПАПКИ ПРИКАЗОВ</div><h2>Добавить приказ в папку</h2></div><button type="button" class="secondary" data-action="closeOrderFolderModal">Закрыть</button></div><div class="archive-picker-list">${folders.map(folder=>`<label class="archive-picker-item"><input type="radio" name="orderTargetFolder" value="${folder.id}"><span class="folder-icon">▰</span><span><strong>${esc(folder.name)}</strong><small>${Number(folder.order_count||0)} приказов</small></span></label>`).join("")}</div><div class="archive-picker-footer"><button type="button" class="secondary" data-action="closeOrderFolderModal">Отмена</button><button type="button" class="primary" data-action="saveOrderFolder" data-id="${orderId}">Добавить</button></div></div>`;
  document.body.appendChild(overlay);
}
async function saveOrderFolder(orderId,button){
  const overlay=button.closest(".archive-modal"),folderId=Number(overlay.querySelector('input[name="orderTargetFolder"]:checked')?.value||0);
  if(!folderId)return kedoAlert("Выберите папку.");
  await api(`/api/documents/order-folders/${folderId}/orders/${orderId}`,{method:"POST"});
  overlay.remove();await renderOrders();
}
async function removeOrderFolder(orderId,folderId){
  if(!await kedoConfirm("Убрать приказ из этой папки? Сам приказ не будет удалён."))return;
  await api(`/api/documents/order-folders/${folderId}/orders/${orderId}`,{method:"DELETE"});
  await renderOrders();
}
async function orderFolderAccess(id){
  const [rules,deps,groups,users]=await Promise.all([api(`/api/documents/order-folders/${id}/access`),api("/api/directory/departments"),api("/api/directory/org-groups"),api("/api/directory/users")]);
  const current=new Set(rules.map(rule=>`${rule.principal_type}:${rule.principal_value}`));
  const overlay=document.createElement("div");overlay.className="archive-modal";
  overlay.innerHTML=`<div class="archive-modal-card"><div class="detail-section-head"><div><div class="eyebrow">ДОСТУП К ПАПКЕ</div><h2>Кому доступны приказы</h2></div><button type="button" class="secondary" data-action="closeOrderFolderModal">Закрыть</button></div><p class="muted">Настройка общая с папками документов. Ограничение применяется к приказам в этой папке и её подпапках.</p><div class="archive-modal-grid"><label><input type="checkbox" value="ALL:" ${current.has("ALL:")?"checked":""}> Все сотрудники</label>${groups.map(item=>`<label><input type="checkbox" value="GROUP:${item.id}" ${current.has(`GROUP:${item.id}`)?"checked":""}> Филиал: ${esc(item.name)}</label>`).join("")}${deps.map(item=>`<label><input type="checkbox" value="DEPARTMENT:${item.id}" ${current.has(`DEPARTMENT:${item.id}`)?"checked":""}> ${esc(item.name)}</label>`).join("")}${users.map(item=>`<label><input type="checkbox" value="USER:${item.id}" ${current.has(`USER:${item.id}`)?"checked":""}> ${esc(item.full_name)}</label>`).join("")}</div><div class="doc-actions" style="margin-top:14px"><button type="button" class="primary" data-action="saveOrderFolderAccess" data-id="${id}">Сохранить</button><button type="button" class="secondary" data-action="closeOrderFolderModal">Отмена</button></div></div>`;
  document.body.appendChild(overlay);
}
async function saveOrderFolderAccess(id,button){
  const overlay=button.closest(".archive-modal"),rules=[...overlay.querySelectorAll("input:checked")].map(input=>{const [principalType,principalValue]=input.value.split(":");return {principalType,principalValue};});
  await api(`/api/documents/order-folders/${id}/access`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({rules})});
  overlay.remove();await renderOrders();
}

async function renderOrders(){
  state.orderFolderContext=true;
  const orderFolderId=Number(state.orderFolderId||0)||null;
  const [ordersRaw,users,deps,groups,signers,orderFolderResponse]=await Promise.all([
    api(`/api/documents/?scope=orders&limit=25${orderFolderId?`&folderId=${orderFolderId}`:""}`),
    api("/api/directory/users"),
    api("/api/directory/departments"),
    api("/api/directory/org-groups"),
    api("/api/documents/signers").catch(()=>[]),
    api("/api/documents/order-folders?tree=true").catch(()=>({items:[],canManage:false}))
  ]);
  const orders=listData(ordersRaw);
  const orderFolders=Array.isArray(orderFolderResponse)?orderFolderResponse:(orderFolderResponse?.items||[]);
  state.orderFolders=orderFolders;
  if(orderFolderId&&!orderFolders.some(folder=>Number(folder.id)===orderFolderId))state.orderFolderId=null;
  state.directoryUsers=users;
  const canManageOrders=["admin","moderator","director","department_head","document_uploader"].includes(state.user.role);
  const orderFolderOptions=orderFolderOptionsHtml(orderFolders,state.orderFolderId);
  const canManageOrderFolders=Boolean(orderFolderResponse?.canManage);
  const orderFoldersPanel=orderFoldersPanelHtml(orderFolders,state.orderFolderId,canManageOrderFolders);
  const depOptions=deps.map(d=>`<label class="recipient-option"><input type="checkbox" value="${d.id}" data-label="${esc(d.name)}"><span>${esc(d.name)}</span></label>`).join("");
  const groupOptions=groups.map(g=>`<label class="recipient-option"><input type="checkbox" value="${g.id}" data-label="${esc(g.name)}"><span><strong>${esc(g.name)}</strong>${Array.isArray(g.departments)&&g.departments.length?`<small class="recipient-sub">${esc(g.departments.map(d=>d.name).join(", "))}</small>`:""}</span></label>`).join("");
  const userOptions=users.map(u=>{
    const label=`${u.full_name}${u.position?` — ${u.position}`:""}${u.department_name?` · ${u.department_name}`:""}`;
    return `<label class="recipient-option"><input type="checkbox" value="${u.id}" data-label="${esc(label)}"><span>${esc(label)}</span></label>`;
  }).join("");

  $("main").innerHTML=`<h1 class="page-title">Приказы</h1>${orderFoldersPanel}
  ${canManageOrders?`<section class="card kedo-form-panel kedo-order-panel is-collapsed" id="orderCreatePanel">
  <button type="button" class="kedo-form-panel-head kedo-collapsible-head" id="orderCreateHead" aria-expanded="false"><span><span class="kedo-form-icon">＋</span><span><span class="eyebrow">ФОРМА</span><strong>Загрузить приказ</strong><small>Нажмите, чтобы развернуть поля</small></span></span><span class="kedo-form-chevron">⌄</span></button>
  <div class="kedo-form-panel-body">
  <p class="muted kedo-form-intro">Выберите маршрут приказа: без маршрута, только ознакомление или последовательные этапы согласования, подписи и ознакомления.</p>
  <div class="row"><div><label>Название приказа</label><input id="orderTitle" placeholder="Например: О режиме рабочего времени"></div>
  <div><label>Номер</label><input id="orderNumber" placeholder="Необязательно — присвоится автоматически"></div></div>
  <div class="row order-meta-row"><div><label>Дата приказа</label><div class="order-field order-date-field"><span class="order-field-icon">◷</span><input id="orderDate" type="date"></div></div><div><label>PDF приказа</label><label class="order-file-picker"><span class="order-file-icon">PDF</span><span class="order-file-copy"><strong>Выберите PDF-файл</strong><small>Только PDF · файл будет загружен как оригинал</small></span><span class="order-file-name" id="orderFileName">Файл не выбран</span><input id="orderFile" type="file" accept="application/pdf"></label></div></div>
  <div class="row"><div><label>Папка приказа <span class="optional-mark">необязательно</span></label><select id="orderFolder"><option value="">Без папки</option>${orderFolderOptions}</select><small class="muted">Приказ можно добавить в другие папки после загрузки.</small></div><div></div></div>
  <div class="order-workflow-box">
    <div><label>Маршрут приказа</label><select id="orderRouteMode"><option value="NONE">Без маршрута</option><option value="ACKNOWLEDGE" selected>Только ознакомление</option><option value="SEQUENTIAL">Последовательный маршрут</option></select></div>
    <p class="muted" id="orderRouteHint">После загрузки приказ будет отправлен выбранным получателям на ознакомление.</p>
    <div id="orderSequentialRoute" hidden><div id="orderRouteSteps" class="archive-route-list"></div><button type="button" class="secondary" id="orderAddRouteStep">＋ Добавить этап</button></div>
  </div>
  <div class="order-recipient-box" id="orderAcknowledgementRecipients">
    <div><label>Филиал / группа</label>
      <div class="recipient-dropdown" id="orderRecipientGroups">
        <button type="button" class="recipient-dropdown-toggle"><span class="recipient-dropdown-label">Выберите филиалы / группы</span><span>⌄</span></button>
        <div class="recipient-dropdown-menu"><div class="recipient-dropdown-tools"><span>Выбор групп</span><button type="button" class="recipient-dropdown-clear">Сбросить</button></div>${groupOptions||'<div class="recipient-empty">Групп пока нет</div>'}</div>
      </div>
    </div><div id="orderGroupScopes" class="order-group-scopes"></div>
    <div><label>Подразделения</label>
      <div class="recipient-dropdown" id="orderRecipientDepartments">
        <button type="button" class="recipient-dropdown-toggle"><span class="recipient-dropdown-label">Выберите подразделения</span><span>⌄</span></button>
        <div class="recipient-dropdown-menu"><div class="recipient-dropdown-tools"><span>Выбор получателей</span><button type="button" class="recipient-dropdown-clear">Сбросить</button></div>${depOptions||'<div class="recipient-empty">Подразделений нет</div>'}</div>
      </div>
    </div>
    <div><label>Отдельные сотрудники</label>
      <div class="recipient-dropdown" id="orderRecipientUsers">
        <button type="button" class="recipient-dropdown-toggle"><span class="recipient-dropdown-label">Выберите сотрудников</span><span>⌄</span></button>
        <div class="recipient-dropdown-menu"><div class="recipient-dropdown-tools"><span>Выбор получателей</span><button type="button" class="recipient-dropdown-clear">Сбросить</button></div>${userOptions||'<div class="recipient-empty">Сотрудников нет</div>'}</div>
      </div>
    </div>
  </div>
  <div class="order-submit-bar"><div class="order-submit-copy"><strong>Готовы загрузить приказ?</strong><span>Проверьте дату, PDF и маршрут. После загрузки приказ появится в реестре.</span></div><div class="doc-actions"><button class="primary order-submit-button" data-action="uploadOrder"><span>↑</span> Загрузить приказ</button></div></div>
  <p id="orderMsg"></p></div></section>`:""}
  <section class="card"><div class="search"><input id="orderSearch" placeholder="Поиск действующего приказа"><button class="secondary" data-action="searchOrders">Найти</button></div><div id="orderList">${docsHtml(orders)}</div></section>`;

  const orderFoldersHead=$("orderFoldersHead");
  orderFoldersHead?.addEventListener("click",()=>{state.orderFoldersOpen=!orderFoldersPanel.classList.contains("is-collapsed");});
  const orderFileEl=$("orderFile");
  orderFileEl?.addEventListener("change",()=>{
    const name=orderFileEl.files?.[0]?.name||"Файл не выбран";
    const nameEl=$("orderFileName");
    if(nameEl){ nameEl.textContent=name; nameEl.classList.toggle("is-selected",!!orderFileEl.files?.length); }
  });
  setupRecipientDropdown("orderRecipientGroups","Выберите филиалы / группы");
  if(!canManageOrders) return;
  const renderOrderGroupScopes=()=>{
    const wrap=$("orderGroupScopes");
    const selected=getRecipientDropdownValues("orderRecipientGroups");
    const chosen=(groups||[]).filter(g=>selected.includes(Number(g.id)));
    wrap.innerHTML=chosen.map(g=>`<div class="order-group-scope-card" data-group-id="${g.id}">
      <strong>${esc(g.name)}</strong><span class="muted"> — при необходимости ограничьте получателей внутри филиала</span>
      <div class="group-scope-grid">
        <div><label>Подразделения</label><div class="recipient-dropdown" id="orderGroupScope${g.id}Deps"><button type="button" class="recipient-dropdown-toggle"><span class="recipient-dropdown-label">Все подразделения</span><span>⌄</span></button><div class="recipient-dropdown-menu"><div class="recipient-dropdown-tools"><span>Выберите подразделения</span><button type="button" class="recipient-dropdown-clear">Сбросить</button></div>${(g.departments||[]).map(d=>`<label class="recipient-option"><input type="checkbox" value="${d.id}" data-label="${esc(d.name)}"><span>${esc(d.name)}</span></label>`).join("")||'<div class="recipient-empty">Нет подразделений</div>'}</div></div></div>
        <div><label>Люди</label><div class="recipient-dropdown" id="orderGroupScope${g.id}Users"><button type="button" class="recipient-dropdown-toggle"><span class="recipient-dropdown-label">Все сотрудники</span><span>⌄</span></button><div class="recipient-dropdown-menu"><div class="recipient-dropdown-tools"><span>Выберите сотрудников</span><button type="button" class="recipient-dropdown-clear">Сбросить</button></div><div id="orderGroupScope${g.id}UserOptions"></div></div></div></div>
      </div>
    </div>`).join("");
    chosen.forEach(g=>{
      setupRecipientDropdown("orderGroupScope"+g.id+"Deps","Все подразделения");
      const depIds=(g.departments||[]).map(d=>String(d.id));
      const members=users.filter(u=>depIds.includes(String(u.department_id)));
      const renderUsers=()=>{
        const ds=getRecipientDropdownValues("orderGroupScope"+g.id+"Deps").map(String);
        const allowed=new Set(ds.length?ds:depIds);
        const list=members.filter(u=>allowed.has(String(u.department_id)));
        $("orderGroupScope"+g.id+"UserOptions").innerHTML=list.map(u=>`<label class="recipient-option"><input type="checkbox" value="${u.id}" data-label="${esc(u.full_name)}"><span>${esc(u.full_name)}${u.position?` — ${esc(u.position)}`:""}${u.department_name?` · ${esc(u.department_name)}`:""}</span></label>`).join("")||'<div class="recipient-empty">Нет сотрудников</div>';
        setupRecipientDropdown("orderGroupScope"+g.id+"Users","Все сотрудники");
      };
      $( "orderGroupScope"+g.id+"Deps")?.querySelector(".recipient-dropdown-menu")?.addEventListener("change",renderUsers);
      renderUsers();
    });
  };
  $("orderRecipientGroups")?.querySelector(".recipient-dropdown-menu")?.addEventListener("change",renderOrderGroupScopes);
  setupRecipientDropdown("orderRecipientDepartments","Выберите подразделения");
  setupRecipientDropdown("orderRecipientUsers","Выберите сотрудников");

  const routeMode=$("orderRouteMode"),routeSteps=$("orderRouteSteps");
  const selectOptions=list=>list.map(x=>`<option value="${x.id}">${esc(x.full_name||x.name)}</option>`).join("");
  const orderCheckPicker=(cls,label,list)=>`<details class="archive-check-picker ${cls}"><summary>${label}</summary><div class="archive-check-options">${list.map(x=>`<label><input type="checkbox" value="${x.id}"><span>${esc(x.full_name||x.name)}</span></label>`).join("")||'<span class="muted">Нет доступных вариантов</span>'}</div></details>`;
  const addRouteStep=()=>{
    const row=document.createElement("div");
    row.className="archive-route-row order-route-row";
    row.dataset.orderRouteRow="1";
    row.innerHTML=`<label>Этап<select class="order-route-type"><option value="APPROVAL">Согласование</option><option value="SIGNATURE">Подписание ЭП</option><option value="ACKNOWLEDGEMENT">Ознакомление</option></select></label><label class="order-route-actor">Исполнитель<select class="order-route-user"></select></label><button type="button" class="danger-outline order-route-remove">Удалить</button><div class="archive-route-ack" hidden>${orderCheckPicker("order-route-groups","Выбрать филиалы",groups)}${orderCheckPicker("order-route-departments","Выбрать подразделения",deps)}${orderCheckPicker("order-route-users","Выбрать сотрудников",users)}</div>`;
    const draw=()=>{const type=row.querySelector(".order-route-type").value,isAck=type==="ACKNOWLEDGEMENT";row.querySelector(".archive-route-ack").hidden=!isAck;row.querySelector(".order-route-actor").hidden=isAck;const people=type==="SIGNATURE"?signers:users;row.querySelector(".order-route-user").innerHTML=`<option value="">Выберите сотрудника</option>${selectOptions(people)}`;};
    row.querySelector(".order-route-type").onchange=draw;
    row.querySelector(".order-route-remove").onclick=()=>row.remove();
    routeSteps.appendChild(row);draw();
  };
  const syncRouteMode=()=>{
    const mode=routeMode.value;
    $("orderAcknowledgementRecipients").hidden=mode!=="ACKNOWLEDGE";
    $("orderSequentialRoute").hidden=mode!=="SEQUENTIAL";
    $("orderRouteHint").textContent=mode==="NONE"?"Приказ будет сохранён в реестре без назначения исполнителей.":mode==="SEQUENTIAL"?"Этапы выполняются сверху вниз. Ознакомление, если оно есть, должно быть последним.":"После загрузки приказ будет отправлен выбранным получателям на ознакомление.";
    if(mode==="SEQUENTIAL"&&!routeSteps.children.length)addRouteStep();
  };
  routeMode.onchange=syncRouteMode;
  $("orderAddRouteStep").onclick=addRouteStep;
  syncRouteMode();
}
async function searchDocs(){const q=$("docSearch").value.trim();state.orderFolderContext=false;$("docList").innerHTML=docsHtml(listData(await api("/api/documents/?scope=archive&limit=25&q="+encodeURIComponent(q))));window.__kedoApplyDocumentFilters?.();}
async function searchOrders(){const q=$("orderSearch").value.trim(),folder=Number(state.orderFolderId||0);state.orderFolderContext=true;$("orderList").innerHTML=docsHtml(listData(await api(`/api/documents/?scope=orders&limit=25&q=${encodeURIComponent(q)}${folder?`&folderId=${folder}`:""}`)));}
async function uploadOrder(){
  const f=$("orderFile")?.files?.[0];
  if(!f)return msg("orderMsg","Выберите PDF приказа.");
  const routeMode=$("orderRouteMode")?.value||"ACKNOWLEDGE";
  const form=new FormData();
  form.append("title",$("orderTitle").value||f.name);
  form.append("documentType","ORDER");
  form.append("documentNumber",$("orderNumber").value);
  form.append("documentDate",$("orderDate").value);
  const selectedOrderFolder=Number($("orderFolder")?.value||0);
  if(selectedOrderFolder)form.append("folderIds",JSON.stringify([selectedOrderFolder]));
  if(routeMode==="ACKNOWLEDGE"){
    const selectedGroupIds=getRecipientDropdownValues("orderRecipientGroups"),groupIds=[];
    const deptSet=new Set(getRecipientDropdownValues("orderRecipientDepartments")),userSet=new Set(getRecipientDropdownValues("orderRecipientUsers"));
    for(const gid of selectedGroupIds){
      const scopedDeps=getRecipientDropdownValues("orderGroupScope"+gid+"Deps"),scopedUsers=getRecipientDropdownValues("orderGroupScope"+gid+"Users");
      if(scopedDeps.length||scopedUsers.length){scopedDeps.forEach(x=>deptSet.add(x));scopedUsers.forEach(x=>userSet.add(x));}else groupIds.push(gid);
    }
    const deptIds=[...deptSet],userIds=[...userSet];
    if(!groupIds.length&&!deptIds.length&&!userIds.length)return msg("orderMsg","Выберите хотя бы одну группу, подразделение или сотрудника.");
    form.append("workflowAction","ACKNOWLEDGE");
    form.append("recipientGroupIds",JSON.stringify(groupIds));
    form.append("recipientDepartmentIds",JSON.stringify(deptIds));
    form.append("recipientUserIds",JSON.stringify(userIds));
  }else if(routeMode==="SEQUENTIAL"){
    const selectedValues=(row,cls)=>[...row.querySelectorAll(`.${cls} input:checked`)].map(x=>Number(x.value)).filter(Boolean);
    const rows=[...document.querySelectorAll("[data-order-route-row]")];
    if(!rows.length)return msg("orderMsg","Добавьте хотя бы один этап маршрута.");
    const steps=[];
    for(let index=0;index<rows.length;index++){
      const row=rows[index],type=row.querySelector(".order-route-type").value;
      if(type==="ACKNOWLEDGEMENT"){
        if(index!==rows.length-1)return msg("orderMsg","Ознакомление должно быть последним этапом маршрута.");
        const step={type,groupIds:selectedValues(row,"order-route-groups"),departmentIds:selectedValues(row,"order-route-departments"),userIds:selectedValues(row,"order-route-users")};
        if(!step.groupIds.length&&!step.departmentIds.length&&!step.userIds.length)return msg("orderMsg","Выберите получателей для этапа ознакомления.");
        steps.push(step);
      }else{
        const userId=Number(row.querySelector(".order-route-user").value);
        if(!userId)return msg("orderMsg","Выберите сотрудника для каждого этапа маршрута.");
        steps.push({type,userId});
      }
    }
    form.append("workflow",JSON.stringify({steps,attachmentIds:[],linkIds:[]}));
  }else form.append("workflowAction","NONE");
  form.append("file",f);
  try{await api("/api/documents/",{method:"POST",body:form});msg("orderMsg",routeMode==="NONE"?"Приказ сохранён без маршрута.":"Приказ загружен, маршрут запущен.",true);await loadNotifications();renderOrders();}
  catch(e){msg("orderMsg",e.message);}
}
async function uploadDocument(){
  if(!(state.user?.roles||[state.user?.role]).some(r=>["admin","moderator","director","department_head","document_uploader"].includes(r))){
    return msg("docMsg","У этой роли нет права загрузки документов.");
  }
  const f=$("docFile")?.files?.[0];
  if(!f)return msg("docMsg","Выберите PDF.");
  const workflowAction=$("docWorkflowAction")?.value||"ACKNOWLEDGE";
  const form=new FormData();
  form.append("title",$("docTitle").value||f.name);
  form.append("documentType",$("docType").value);
  form.append("documentNumber",$("docNumber").value);
  form.append("documentDate",$("docDate").value);
  form.append("workflowAction",workflowAction);
  if(workflowAction==="ACKNOWLEDGE"){
    const groupIds=getRecipientDropdownValues("docRecipientGroups");
    const deptIds=getRecipientDropdownValues("docRecipientDepartments");
    const userIds=getRecipientDropdownValues("docRecipientUsers");
    if(!groupIds.length&&!deptIds.length&&!userIds.length)return msg("docMsg","Выберите хотя бы один филиал, отдел или сотрудника для ознакомления.");
    form.append("recipientGroupIds",JSON.stringify(groupIds));
    form.append("recipientDepartmentIds",JSON.stringify(deptIds));
    form.append("recipientUserIds",JSON.stringify(userIds));
  }else if(workflowAction==="APPROVAL"){
    const approverId=Number($("docApprover")?.value||0);
    if(!approverId)return msg("docMsg","Выберите сотрудника, который должен согласовать документ.");
    form.append("approverId",String(approverId));
  }else if(workflowAction==="SIGNATURE"){
    const signerId=Number($("docSigner")?.value||0);
    if(!signerId)return msg("docMsg","Выберите сотрудника, который должен подписать документ.");
    form.append("signerId",String(signerId));
  }
  form.append("file",f);
  try{
    await api("/api/documents/",{method:"POST",body:form});
    msg("docMsg","Документ загружен. Маршрут сохранён и отправлен.",true);
    await loadNotifications();
    await renderDocuments();
  }catch(e){msg("docMsg",e.detail?`${e.message} ${e.detail}`:e.message);}
}

function previewDoc(id, signed=false, approved=false){
  document.querySelectorAll(".kedo-file-preview-overlay").forEach(x=>x.remove());
  document.body.classList.add("kedo-preview-open");
  const overlay=document.createElement("div");
  overlay.className="kedo-file-preview-overlay";
  const query=signed?"?preview=1&signed=1":approved?"?preview=1&approved=1":"?preview=1";
  overlay.innerHTML=`<div class="kedo-file-preview-modal" role="dialog" aria-modal="true" aria-label="Предпросмотр файла">
    <div class="kedo-file-preview-head"><div><div class="eyebrow">ПРЕДПРОСМОТР</div><strong>${signed?"Подписанный экземпляр":approved?"Согласованный экземпляр":"Оригинал документа"}</strong></div><div class="kedo-file-preview-actions"><button type="button" class="secondary" id="kedoPreviewDownload">Скачать</button><button type="button" class="secondary" id="kedoPreviewClose">Закрыть</button></div></div>
    <div class="kedo-file-preview-body" id="kedoPreviewBody"><div class="kedo-preview-loading"><span class="kedo-preview-spinner"></span><p>Загрузка документа…</p></div></div>
  </div>`;
  document.body.appendChild(overlay);
  let revokeUrl="";
  const close=()=>{if(revokeUrl)try{URL.revokeObjectURL(revokeUrl);}catch{}overlay.remove();document.body.classList.remove("kedo-preview-open");};
  overlay.querySelector("#kedoPreviewClose").onclick=close;
  overlay.querySelector("#kedoPreviewDownload").onclick=()=>downloadDoc(id,signed,approved);
  overlay.addEventListener("click",e=>{if(e.target===overlay)close();});
  const keyHandler=e=>{if(e.key==="Escape"){close();document.removeEventListener("keydown",keyHandler);}};
  document.addEventListener("keydown",keyHandler);
  const bodyEl=overlay.querySelector("#kedoPreviewBody");
  (async()=>{
    try{
      const r=await fetch(`/api/documents/${id}/download${query}`,{credentials:"same-origin"});
      if(!r.ok){
        const data=await r.json().catch(()=>({}));
        const title=r.status===403?"Нет доступа к документу":r.status===404?"Файл не найден":"Не удалось открыть";
        const hint=r.status===403
          ?"Документ не входит в вашу зону видимости. Это нормально — права доступа работают."
          :(data.message||"Попробуйте скачать файл или обратитесь к автору документа.");
        bodyEl.innerHTML=`<div class="kedo-preview-error"><div class="kedo-preview-error-icon">${kedoIcon(r.status===403?"lock":"file","premium-icon--xl")}</div><strong>${esc(title)}</strong><p>${esc(hint)}</p></div>`;
        return;
      }
      const ct=(r.headers.get("content-type")||"").toLowerCase();
      if(ct.includes("json")){
        const data=await r.json().catch(()=>({}));
        bodyEl.innerHTML=`<div class="kedo-preview-error"><div class="kedo-preview-error-icon">${kedoIcon("warning","premium-icon--xl")}</div><strong>Не удалось открыть</strong><p>${esc(data.message||"Сервер вернул не PDF.")}</p></div>`;
        return;
      }
      const blob=await r.blob();
      if(!blob.size){
        bodyEl.innerHTML=`<div class="kedo-preview-error"><div class="kedo-preview-error-icon">${kedoIcon("file","premium-icon--xl")}</div><strong>Файл пуст</strong><p>На сервере нет содержимого для предпросмотра.</p></div>`;
        return;
      }
      revokeUrl=URL.createObjectURL(blob);
      bodyEl.innerHTML=`<iframe title="Предпросмотр PDF" src="${revokeUrl}"></iframe>`;
    }catch(err){
      bodyEl.innerHTML=`<div class="kedo-preview-error"><div class="kedo-preview-error-icon">${kedoIcon("warning","premium-icon--xl")}</div><strong>Ошибка загрузки</strong><p>${esc(err.message||"Не удалось загрузить документ.")}</p></div>`;
    }
  })();
}

function previewApproved(id){return previewDoc(id,false,true);}
function downloadDoc(id, signed=false, approved=false){window.kedoDemo.download(id);}

function previewKnowledgePdf(articleId,documentId,title="PDF"){
  document.querySelectorAll(".kedo-file-preview-overlay").forEach(x=>x.remove());
  document.body.classList.add("kedo-preview-open");
  const overlay=document.createElement("div");
  overlay.className="kedo-file-preview-overlay";
  overlay.innerHTML=`<div class="kedo-file-preview-modal" role="dialog" aria-modal="true" aria-label="Предпросмотр PDF">
    <div class="kedo-file-preview-head"><div><div class="eyebrow">БАЗА ЗНАНИЙ</div><strong>${esc(title||"PDF")}</strong></div><div class="kedo-file-preview-actions"><button type="button" class="secondary" id="kedoPreviewDownload">Скачать</button><button type="button" class="secondary" id="kedoPreviewClose">Закрыть</button></div></div>
    <div class="kedo-file-preview-body" id="kedoPreviewBody"><div class="kedo-preview-loading"><span class="kedo-preview-spinner"></span><p>Загрузка PDF…</p></div></div>
  </div>`;
  document.body.appendChild(overlay);
  let revokeUrl="";
  const close=()=>{if(revokeUrl)try{URL.revokeObjectURL(revokeUrl);}catch{}overlay.remove();document.body.classList.remove("kedo-preview-open");};
  overlay.querySelector("#kedoPreviewClose").onclick=close;
  overlay.querySelector("#kedoPreviewDownload").onclick=()=>window.open(`/api/knowledge/${articleId}/attachments/${documentId}/download`,"_blank");
  overlay.addEventListener("click",e=>{if(e.target===overlay)close();});
  const keyHandler=e=>{if(e.key==="Escape"){close();document.removeEventListener("keydown",keyHandler);}};
  document.addEventListener("keydown",keyHandler);
  const bodyEl=overlay.querySelector("#kedoPreviewBody");
  (async()=>{
    try{
      const r=await fetch(`/api/knowledge/${articleId}/attachments/${documentId}/download?preview=1`,{credentials:"same-origin"});
      if(!r.ok){
        const data=await r.json().catch(()=>({}));
        const errTitle=r.status===403?"Нет доступа":r.status===404?"Файл не найден":"Не удалось открыть";
        bodyEl.innerHTML=`<div class="kedo-preview-error"><div class="kedo-preview-error-icon">${kedoIcon(r.status===403?"lock":"file","premium-icon--xl")}</div><strong>${esc(errTitle)}</strong><p>${esc(data.message||"Попробуйте скачать файл.")}</p></div>`;
        return;
      }
      const ct=(r.headers.get("content-type")||"").toLowerCase();
      if(ct.includes("json")){
        const data=await r.json().catch(()=>({}));
        bodyEl.innerHTML=`<div class="kedo-preview-error"><div class="kedo-preview-error-icon">${kedoIcon("warning","premium-icon--xl")}</div><strong>Не удалось открыть</strong><p>${esc(data.message||"Сервер вернул не PDF.")}</p></div>`;
        return;
      }
      const blob=await r.blob();
      if(!blob.size){
        bodyEl.innerHTML=`<div class="kedo-preview-error"><div class="kedo-preview-error-icon">${kedoIcon("file","premium-icon--xl")}</div><strong>Файл пуст</strong><p>На сервере нет содержимого для предпросмотра.</p></div>`;
        return;
      }
      revokeUrl=URL.createObjectURL(blob);
      bodyEl.innerHTML=`<iframe title="Предпросмотр PDF" src="${revokeUrl}"></iframe>`;
    }catch(err){
      bodyEl.innerHTML=`<div class="kedo-preview-error"><div class="kedo-preview-error-icon">${kedoIcon("warning","premium-icon--xl")}</div><strong>Ошибка загрузки</strong><p>${esc(err.message||"Не удалось загрузить PDF.")}</p></div>`;
    }
  })();
}
async function submitApproval(id){
  try{
    const [users,signers,deps,groups]=await Promise.all([
      api("/api/documents/"+id+"/approvers"),
      api("/api/documents/signers"),
      api("/api/directory/departments"),
      api("/api/directory/org-groups")
    ]);
    const availableSigners=signers.filter(x=>x.has_key);
    const d=await api("/api/documents/"+id);
    const defaultAction=String(d.workflow_action||((d.document_type==="ORDER")?"ACKNOWLEDGE":d.document_type==="MEMO"?"SIGNATURE":["LETTER","ACT"].includes(d.document_type)?"ACKNOWLEDGE":"APPROVAL")).toUpperCase();
    const overlay=document.createElement("div");overlay.className="admin-edit-overlay kedo-workflow-overlay";
    overlay.innerHTML=`<div class="admin-edit-modal workflow-modal kedo-workflow-modal">
      <div class="workflow-modal-icon">↗</div><div class="workflow-modal-head"><div><div class="eyebrow">Маршрут документа</div><h2>Что должен сделать получатель?</h2><p class="muted">Выберите одно действие. Система покажет сотруднику только соответствующую кнопку.</p></div><button type="button" class="workflow-close" id="wfClose" aria-label="Закрыть">×</button></div>
      <label>Действие <span class="required-mark">обязательно</span><select id="workflowAction"><option value="APPROVAL">Согласовать</option><option value="SIGNATURE">Подписать ЭП</option><option value="ACKNOWLEDGE">Ознакомиться</option></select></label>
      <div id="workflowTarget"></div>
      <div class="workflow-info" id="workflowInfo"></div>
      <div class="admin-edit-actions"><button class="secondary" id="wfCancel">Отмена</button><button class="primary" id="wfSave">Отправить маршрут</button></div>
    </div>`;
    document.body.appendChild(overlay);
    const modal=overlay.querySelector(".kedo-workflow-modal");
    overlay.style.cssText="position:fixed;inset:0;width:100vw;height:100vh;margin:0;padding:20px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;background:rgba(10,27,45,.58);backdrop-filter:blur(3px);z-index:2147483000;";
    modal.style.cssText="display:block;width:min(620px,calc(100vw - 32px));max-height:calc(100vh - 32px);overflow:auto;box-sizing:border-box;margin:0;padding:24px;background:#fff;color:#172033;border-radius:18px;box-shadow:0 25px 70px rgba(0,0,0,.38);";
    const action=overlay.querySelector("#workflowAction"),target=overlay.querySelector("#workflowTarget"),info=overlay.querySelector("#workflowInfo");
    action.value=defaultAction;
    const close=()=>overlay.remove();
    overlay.querySelector("#wfCancel").onclick=close;overlay.querySelector("#wfClose").onclick=close;overlay.addEventListener("click",e=>{if(e.target===overlay)close();});
    const renderTarget=()=>{
      if(action.value==="APPROVAL"){
        target.innerHTML=`<label>Кто согласовывает <span class="required-mark">обязательно</span><select id="workflowApprover"><option value="">Выберите сотрудника</option>${users.map(u=>`<option value="${u.id}">${esc(u.full_name)}${u.position?` — ${esc(u.position)}`:""}${u.department_name?` · ${esc(u.department_name)}`:""}</option>`).join("")}</select></label>`;
        info.textContent="После отправки документ попадёт именно выбранному согласующему. Только он сможет согласовать или отклонить документ.";
      }else if(action.value==="SIGNATURE"){
        target.innerHTML=`<label>Кто подписывает <span class="required-mark">обязательно</span><select id="workflowSigner"><option value="">Выберите сотрудника</option>${availableSigners.map(u=>`<option value="${u.id}">${esc(u.full_name)}${u.position?` — ${esc(u.position)}`:""}${u.department_name?` · ${esc(u.department_name)}`:""}</option>`).join("")}</select></label>`;
        info.textContent=availableSigners.length?"Документ сразу уйдёт выбранному подписанту. Только он сможет выполнить внутреннюю ЭП.":"Нет сотрудников с зарегистрированной внутренней ЭП.";
      }else{
        target.innerHTML=`
          <div class="workflow-recipient-summary">
            <span class="workflow-summary-icon">✓</span>
            <div><strong>Кому нужно ознакомиться?</strong><div class="muted">Если ничего не выбирать, ознакомление получат все сотрудники, которым открыт доступ к документу.</div></div>
          </div>
          <label>Получатели ознакомления <span class="required-mark">необязательно</span>
            <select id="ackRecipientMode">
              <option value="ALL">Все получатели документа</option>
              <option value="CUSTOM">Выбрать конкретных</option>
            </select>
          </label>
          <div id="ackRecipientPicker" style="display:none;margin-top:12px">
            <div class="workflow-recipient-grid">
              <div><label>Подразделения</label><select id="ackDepartments" multiple size="5">${deps.map(d=>`<option value="${d.id}">${esc(d.name)}</option>`).join("")}</select></div>
              <div><label>Филиалы</label><select id="ackGroups" multiple size="5">${groups.map(g=>`<option value="${g.id}">${esc(g.name)}</option>`).join("")}</select></div>
              <div class="workflow-recipient-users"><label>Сотрудники</label><select id="ackUsers" multiple size="7">${users.map(u=>`<option value="${u.id}">${esc(u.full_name)}${u.position?` — ${esc(u.position)}`:""}${u.department_name?` · ${esc(u.department_name)}`:""}</option>`).join("")}</select></div>
            </div>
            <div class="muted" style="margin-top:8px">Можно выбрать несколько подразделений, филиалов и сотрудников одновременно.</div>
          </div>`;
        const mode=target.querySelector("#ackRecipientMode"),picker=target.querySelector("#ackRecipientPicker");
        mode.onchange=()=>{picker.style.display=mode.value==="CUSTOM"?"block":"none";};
        info.textContent="По умолчанию уведомление получают все доступные получатели. При выборе конкретных — только указанные сотрудники.";
      }
    };
    action.onchange=renderTarget;renderTarget();
    overlay.querySelector("#wfSave").onclick=async()=>{
      try{
        const body={workflowAction:action.value};
        if(action.value==="APPROVAL"){const v=overlay.querySelector("#workflowApprover")?.value;if(!v)throw Error("Выберите сотрудника, который должен согласовать документ.");body.approverId=Number(v);}
        if(action.value==="SIGNATURE"){const v=overlay.querySelector("#workflowSigner")?.value;if(!v)throw Error("Выберите сотрудника, который должен подписать документ.");body.signerId=Number(v);}
        if(action.value==="ACKNOWLEDGE" && overlay.querySelector("#ackRecipientMode")?.value==="CUSTOM"){
          body.ackDepartmentIds=[...overlay.querySelector("#ackDepartments").selectedOptions].map(o=>Number(o.value));
          body.ackGroupIds=[...overlay.querySelector("#ackGroups").selectedOptions].map(o=>Number(o.value));
          body.ackUserIds=[...overlay.querySelector("#ackUsers").selectedOptions].map(o=>Number(o.value));
          if(!body.ackDepartmentIds.length&&!body.ackGroupIds.length&&!body.ackUserIds.length)throw Error("Выберите хотя бы одного получателя или оставьте «Все получатели документа». ");
        }
        await api("/api/documents/"+id+"/submit-approval",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
        close();await loadNotifications();openDocument(id);
      }catch(e){kedoAlert(e.detail?`${e.message}\n\nТехническая причина: ${e.detail}`:e.message);}
    };
  }catch(e){kedoAlert(e.message);}
}
async function approveDocument(id){const comment=await kedoPrompt("Комментарий к согласованию (необязательно):")||"";try{await api("/api/documents/"+id+"/approve",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment})});openDocument(id);}catch(e){kedoAlert(e.message);}}
async function rejectDocument(id){const comment=await kedoPrompt("Причина отклонения:")||"";if(!comment)return;try{await api("/api/documents/"+id+"/reject",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment})});openDocument(id);}catch(e){kedoAlert(e.message);}}
async function sendSignature(id){
  try{
    const signers=await api("/api/documents/"+id+"/signers");
    const available=signers.filter(x=>x.has_key);
    if(!available.length)throw Error("Нет сотрудников с зарегистрированной внутренней ЭП.");
    const overlay=document.createElement("div");overlay.className="admin-edit-overlay";
    overlay.innerHTML=`<div class="admin-edit-modal workflow-modal"><h2>Кто подписывает документ?</h2><p class="muted">Выберите конкретного сотрудника. Только назначенный подписант сможет выполнить внутреннюю ЭП.</p><label>Подписант<select id="workflowSigner">${available.map(x=>`<option value="${x.id}">${esc(x.full_name)}${x.position?` — ${esc(x.position)}`:""}${x.department_name?` · ${esc(x.department_name)}`:""}</option>`).join("")}</select></label><div class="admin-edit-actions"><button class="secondary" id="sigCancel">Отмена</button><button class="primary" id="sigSave">Назначить подписанта</button></div></div>`;
    document.body.appendChild(overlay);
    const close=()=>overlay.remove();
    overlay.querySelector("#sigCancel").onclick=close;overlay.addEventListener("click",e=>{if(e.target===overlay)close();});
    overlay.querySelector("#sigSave").onclick=async()=>{
      try{
        await api("/api/documents/"+id+"/send-signature",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({signerId:Number(overlay.querySelector("#workflowSigner").value)})});
        close();openDocument(id);
      }catch(e){kedoAlert(e.message);}
    };
  }catch(e){kedoAlert(e.message);}
}
const b64=b=>{const a=new Uint8Array(b);let s="";for(const x of a)s+=String.fromCharCode(x);return btoa(s)};
async function openSigningDB(){return new Promise((ok,no)=>{const r=indexedDB.open("InternalKEDOSigning",1);r.onupgradeneeded=()=>{if(!r.result.objectStoreNames.contains("keys"))r.result.createObjectStore("keys")};r.onsuccess=()=>ok(r.result);r.onerror=()=>no(r.error);});}
async function getSigningKey(){if(!crypto?.subtle)throw Error("Браузер не поддерживает WebCrypto.");const db=await openSigningDB(),id=String(state.user.id);const read=()=>new Promise((ok,no)=>{const q=db.transaction("keys","readonly").objectStore("keys").get(id);q.onsuccess=()=>ok(q.result);q.onerror=()=>no(q.error);});let k=await read();if(k)return k;const pair=await crypto.subtle.generateKey({name:"ECDSA",namedCurve:"P-256"},false,["sign","verify"]);const pub=await crypto.subtle.exportKey("spki",pair.publicKey);k={privateKey:pair.privateKey,publicKey:pair.publicKey,publicKeyB64:b64(pub),createdAt:new Date().toISOString()};await new Promise((ok,no)=>{const tx=db.transaction("keys","readwrite");tx.objectStore("keys").put(k,id);tx.oncomplete=ok;tx.onerror=()=>no(tx.error);});return k;}
async function signingKeyFingerprint(publicKeyB64){const raw=atob(publicKeyB64);const bytes=Uint8Array.from(raw,c=>c.charCodeAt(0));const hash=await crypto.subtle.digest("SHA-256",bytes);return [...new Uint8Array(hash)].map(x=>x.toString(16).padStart(2,"0")).join("");}
async function ensureSigningKeyRegistered(k){const existing=await api("/api/documents/signing-key");const fp=await signingKeyFingerprint(k.publicKeyB64);if(existing.registered&&String(existing.keyFingerprint||"").toLowerCase()===fp.toLowerCase())return existing;const currentPassword=await kedoPrompt(existing.registered?"Ключ ЭП в браузере изменился. Введите текущий пароль для безопасной ротации ключа:":"Введите текущий пароль для регистрации внутренней ЭП:");if(!currentPassword)throw Error("Регистрация ключа ЭП отменена.");return await api(existing.registered?"/api/documents/signing-key/rotate":"/api/documents/signing-key",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({publicKey:k.publicKeyB64,algorithm:"ECDSA-P256-SHA256",currentPassword})});}
async function prepareSigningKey(){try{const k=await getSigningKey();const r=await ensureSigningKeyRegistered(k);kedoAlert("Внутренняя ЭП готова и зарегистрирована.\n\nОтпечаток: "+r.keyFingerprint+"\nДата: "+formatKedoDateTime(r.createdAt));}catch(e){kedoAlert(e.message);}}
async function signDocument(id){try{const d=await api("/api/documents/"+id);if(d.status!=="WAITING_SIGNATURE")throw Error("Документ не ожидает подписи.");if(Number(d.signer_id)!==Number(state.user.id))throw Error("Вы не назначены подписантом.");const k=await getSigningKey();await ensureSigningKeyRegistered(k);const sig=await crypto.subtle.sign({name:"ECDSA",hash:"SHA-256"},k.privateKey,new TextEncoder().encode(d.file_hash));await api("/api/documents/"+id+"/sign",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({publicKey:k.publicKeyB64,signature:b64(sig),documentHash:d.file_hash,algorithm:"ECDSA-P256-SHA256"})});showNotificationToast({title:"Документ подписан",body:"Созданы оригинальный и подписанный экземпляры PDF."});await openDocument(id);}catch(e){kedoAlert(e.message);}}
async function acknowledgeOrder(id){
  try{
    const r=await api("/api/documents/"+id+"/acknowledge",{method:"POST"});
    await loadNotifications().catch(()=>{});
    if(state.page==="orders") await renderOrders();
    else await openDocument(id);
    if(r?.acknowledged) showNotificationToast({title:"Ознакомление подтверждено",body:"Документ успешно отмечен как ознакомленный."});
  }catch(e){
    // Защита от ситуации, когда сервер успел записать подтверждение,
    // но ошибка произошла уже на второстепенном шаге (уведомление/аудит).
    try{
      const check=await api("/api/documents/"+id+"/acknowledgement");
      if(check?.acknowledged){
        await loadNotifications().catch(()=>{});
        if(state.page==="orders") await renderOrders();
        else await openDocument(id);
        showNotificationToast({title:"Ознакомление подтверждено",body:"Подтверждение сохранено."});
        return;
      }
    }catch{}
    kedoAlert(e.message||"Не удалось подтвердить ознакомление с документом.");
  }
}
async function archiveOrder(id){
if(!["admin","moderator","director","department_head","document_uploader"].includes(state.user?.role))return kedoAlert("Переводить приказы в архив могут только пользователи с правом управления приказами.");
const comment=await kedoPrompt("Комментарий к архивированию (необязательно):")||"Приказ выведен из действующих.";
try{await api("/api/documents/"+id+"/archive",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment})});renderOrders();}
catch(e){kedoAlert(e.message);}
}
async function toggleFavorite(id){try{await api("/api/documents/"+id+"/favorite",{method:"POST"});kedoAlert("Документ добавлен в избранное.");}catch(e){kedoAlert(e.message);}}
async function addComment(id){const body=$("documentComment")?.value.trim();if(!body)return;try{await api("/api/documents/"+id+"/comments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({body})});openDocument(id);}catch(e){kedoAlert(e.message);}}
async function deleteComment(documentId,commentId){
  if(!Number.isInteger(Number(documentId))||!Number.isInteger(Number(commentId)))return;
  if(!await kedoConfirm("Удалить этот комментарий? Действие нельзя отменить."))return;
  try{await api(`/api/documents/${documentId}/comments/${commentId}`,{method:"DELETE"});await openDocument(documentId);}
  catch(e){kedoAlert(e.message||"Не удалось удалить комментарий.");}
}
async function deleteDocument(id){const canDelete=(state.user?.roles||[state.user?.role]).some(r=>["admin","moderator","director","department_head","document_uploader"].includes(r));if(!canDelete)return kedoAlert("Недостаточно прав для удаления документа.");if(!await kedoConfirm("Удалить документ? Запись останется в журнале аудита и корзине."))return;try{await api("/api/documents/"+id,{method:"DELETE"});render();}catch(e){kedoAlert(e.message);}}
async function openDocument(id){
  ensureDocumentStyles();
  const d=await api("/api/documents/"+id);
  const [versions,comments,ack,access,publicLink]=await Promise.all([
    api("/api/documents/"+id+"/versions"),
    api("/api/documents/"+id+"/comments"),
    api("/api/documents/"+id+"/acknowledgement").catch(()=>({required:false,acknowledged:false})),
    (state.user?.roles||[state.user?.role]).some(r=>["admin","moderator","director","document_uploader"].includes(r))?api("/api/documents/"+id+"/access").catch(()=>[]):Promise.resolve([]),
    api("/api/public-links/documents/"+id).catch(()=>null)
  ]);
  const sigs=d.signatures||[];
  const latestSig=sigs.length?sigs[sigs.length-1]:null;
  const signed=Boolean(d.signed_file_path);
  const approved=Boolean(d.approved_file_path);
  const plaques=sigs.map(x=>`<div class="signature-record"><div class="signature-record-title">✓ Подписано внутренней ЭП</div><div class="signature-record-grid"><span>Подписант</span><strong>${esc(x.signer_name)}</strong><span>Должность</span><strong>${esc(x.position||"Должность не указана")}</strong><span>Дата и время</span><strong>${formatKedoDateTime(x.signed_at)}</strong></div><div class="fingerprint">Отпечаток: ${esc(x.key_fingerprint||"")}</div></div>`).join("");
  const hist=(d.history||[]).map(h=>`<div class="history-row"><b>${esc(statusLabel(h.to_status))}</b><span>${formatKedoDateTime(h.created_at)}</span><span>${esc(h.changed_by_name||"Система")}</span>${h.comment?`<div class="muted">${esc(h.comment)}</div>`:""}</div>`).join("");
  const versionsHtml=(versions||[]).map(v=>`<div class="history-row"><b>Версия ${esc(v.version)}</b><span>${formatKedoDateTime(v.created_at)}</span><span>${esc(v.created_by_name||"Система")}</span><div class="muted">${esc(v.filename)} · SHA-256 ${esc(v.file_hash)}</div></div>`).join("");
  const currentRoles=Array.isArray(state.user?.roles)&&state.user.roles.length?state.user.roles:[state.user?.role];
  const canDeleteAnyComment=currentRoles.some(r=>["admin","moderator","director"].includes(r));
  const commentsHtml=(comments||[]).map(c=>{const canDelete=canDeleteAnyComment||Number(c.author_id)===Number(state.user?.id);return `<div class="history-row comment-row"><div class="comment-main"><div class="comment-head"><b>${esc(c.author_name)}</b><span>${formatKedoDateTime(c.created_at)}</span></div><div class="comment-body">${esc(c.body)}</div></div>${canDelete?`<button type="button" class="danger-outline comment-delete" data-action="deleteComment" data-id="${d.id}" data-comment-id="${c.id}">Удалить</button>`:""}</div>`;}).join("");
  const approvals=(d.approvals||[]).map(a=>`<div class="history-row"><b>${esc(a.decision==="APPROVED"?"Согласовано":"Отклонено")}</b><span>${formatKedoDateTime(a.created_at)}</span><span>${esc(a.approver_name)}</span>${a.comment?`<div class="muted">${esc(a.comment)}</div>`:""}</div>`).join("");
  const approvalDetailPlaque=d.status==="APPROVED"?`<div class="approval-plaque"><div class="title">✓ СОГЛАСОВАНО</div><div class="line">Документ прошёл согласование</div>${d.approver_name?`<div class="line">Согласовал: ${esc(d.approver_name)}</div>`:""}</div>`:"";
  const detailEmpty=(icon,text)=>`<div class="detail-empty" role="status"><span class="detail-empty-icon" aria-hidden="true">${icon}</span><span>${text}</span></div>`;
  const accessLabels={ALL:"Все сотрудники",ROLE:"Роль",DEPARTMENT:"Подразделение",GROUP:"Филиал / группа",POSITION:"Должность",USER:"Сотрудник"};
  const detailRoles=state.user?.roles||[state.user?.role];
  const canManageWorkflow=detailRoles.some(r=>["admin","moderator","director","document_uploader"].includes(r))||(detailRoles.includes("department_head")&&(Number(d.author_id)===Number(state.user.id)||Number(d.department_id)===Number(state.user.departmentId)));
  const canManageDetailAccess=detailRoles.some(r=>["admin","moderator","director","document_uploader"].includes(r));
  const accessHtml=canManageDetailAccess?`<section class="card access-summary-card document-detail-card"><div class="detail-section-head"><div><div class="eyebrow">ДОСТУП</div><h2>Кто может открыть</h2></div><button class="secondary" data-action="editDocumentAccess" data-id="${d.id}">Настроить</button></div><div class="access-summary-list">${access.length?access.map(r=>`<div class="access-summary-item"><span class="rule-type-icon">${r.principal_type==="ALL"?"✓":r.principal_type==="ROLE"?"R":r.principal_type==="DEPARTMENT"?"П":r.principal_type==="GROUP"?"Ф":r.principal_type==="POSITION"?"Д":"С"}</span><div><strong>${esc(r.principal_label||r.principal_value||"—")}</strong><div class="muted">${esc(accessLabels[r.principal_type]||r.principal_type)}</div></div></div>`).join(""):`<div class="empty">Документ доступен всем сотрудникам.</div>`}</div></section>`:"";

  const actionButtons=`<div class="document-detail-actions"><button class="primary" data-action="previewDoc" data-id="${d.id}">Предпросмотр оригинала</button>${approved?`<button class="secondary" data-action="previewApproved" data-id="${d.id}">Предпросмотр согласованного</button>`:""}${signed?`<button class="secondary" data-action="previewSigned" data-id="${d.id}">Предпросмотр подписи</button>`:""}<button class="secondary" data-action="downloadDoc" data-id="${d.id}">Скачать оригинал</button>${approved?`<button class="secondary" data-action="downloadApproved" data-id="${d.id}">Скачать согласованный</button>`:""}${signed?`<button class="secondary" data-action="downloadSigned" data-id="${d.id}">Скачать подписанный</button>`:""}<button class="secondary" data-action="toggleFavorite" data-id="${d.id}">☆ В избранное</button>${canManageWorkflow&&d.status==="DRAFT"?`<button class="primary" data-action="submitApproval" data-id="${d.id}">Настроить маршрут</button>`:""}${d.workflow_action==="APPROVAL"&&d.status==="ON_APPROVAL"&&Number(d.approver_id)===Number(state.user.id)?`<button class="primary" data-action="approveDocument" data-id="${d.id}">Согласовать</button><button class="danger" data-action="rejectDocument" data-id="${d.id}">Отклонить</button>`:""}${d.workflow_action==="SIGNATURE"&&d.status==="WAITING_SIGNATURE"&&Number(d.signer_id)===Number(state.user.id)?`<button class="primary" data-action="signDocument" data-id="${d.id}">Подписать ЭП</button>`:""}${canManageDetailAccess?`<button class="secondary" data-action="editDocumentAccess" data-id="${d.id}">Настроить доступ</button>`:""}${canManageWorkflow?`<button class="danger" data-action="deleteDocument" data-id="${d.id}">Удалить</button>`:""}</div>`;

  const approvedHtml=approved?`<div class="file-copy file-copy-approved"><div class="file-copy-icon">✓</div><div class="file-copy-main"><div class="file-copy-title">Согласованный экземпляр</div><div class="file-copy-name">${esc(d.approved_filename||"approved.pdf")}</div><div class="file-copy-meta">${esc(d.approver_name||"Согласовано")} · ${formatKedoDateTime(d.approved_at)}</div></div><div class="file-copy-actions"><button class="secondary" data-action="previewApproved" data-id="${d.id}">Открыть</button><button class="secondary" data-action="downloadApproved" data-id="${d.id}">Скачать</button></div></div>`:"";
  const signedHtml=signed?`<div class="file-copy file-copy-signed"><div class="file-copy-icon">✓</div><div class="file-copy-main"><div class="file-copy-title">Подписанный экземпляр</div><div class="file-copy-name">${esc(d.signed_filename||"signed.pdf")}</div><div class="file-copy-meta">${esc(d.signed_by_name||latestSig?.signer_name||"Подписант")} · ${formatKedoDateTime(d.signed_at||latestSig?.signed_at)}</div></div><div class="file-copy-actions"><button class="secondary" data-action="previewSigned" data-id="${d.id}">Открыть</button><button class="secondary" data-action="downloadSigned" data-id="${d.id}">Скачать</button></div></div>`:`<div class="file-copy file-copy-pending"><div class="file-copy-icon">—</div><div class="file-copy-main"><div class="file-copy-title">Подписанный экземпляр</div><div class="file-copy-name">Появится после подписания</div><div class="file-copy-meta">Оригинальный файл останется неизменным.</div></div></div>`;
  const originalFileType=String(d.filename||"").split(".").pop().toUpperCase()||"FILE";
  const originalHtml=`<div class="file-copy"><div class="file-copy-icon">${esc(originalFileType)}</div><div class="file-copy-main"><div class="file-copy-title">Оригинал документа</div><div class="file-copy-name">${esc(d.filename)}</div><div class="file-copy-meta">SHA-256: <code>${esc(d.file_hash||"—")}</code></div></div><div class="file-copy-actions"><button class="secondary" data-action="previewDoc" data-id="${d.id}">Открыть</button><button class="secondary" data-action="downloadDoc" data-id="${d.id}">Скачать</button></div></div>`;

  $("main").classList.add("document-detail-active");
  $("main").innerHTML=`<div class="document-detail-topbar"><button class="secondary" data-action="setPage" data-page="${d.document_type==="ORDER"?"orders":"documents"}">← К реестру</button><span>Карточка документа · ${esc(d.filename||"Файл")}</span></div><div class="document-detail-head"><div><div class="eyebrow">КАРТОЧКА ДОКУМЕНТА</div><h1 class="page-title">${esc(d.title)}</h1><div class="document-detail-subtitle">${d.document_number?`№ ${esc(d.document_number)} · `:""}${esc(d.document_type)} · ${esc(formatKedoDate(d.document_date))}</div></div><div>${statusFlow(d.status,d.workflow_action)}</div></div>${ack.required?`<div class="ack-box ${ack.acknowledged?"done":"required"}"><strong>${ack.acknowledged?"✓ Вы ознакомились с документом":"Требуется ознакомление"}</strong><div class="muted">${ack.acknowledged?`Ознакомлено: ${formatKedoDateTime(ack.acknowledgedAt)}`:"Откройте документ, ознакомьтесь с ним и подтвердите действие кнопкой ниже."}</div>${!ack.acknowledged?`<button class="primary" style="margin-top:10px" data-action="acknowledgeOrder" data-id="${d.id}">Ознакомлен</button>`:""}</div>`:""}
  <section class="card document-detail-card"><div class="detail-section-head"><div><div class="eyebrow">ОСНОВНАЯ ИНФОРМАЦИЯ</div><h2>Документ</h2></div><span class="document-status-chip">${esc(statusLabel(d.status)||d.status)}</span></div><div class="detail-grid"><div><span>Тип</span><strong>${esc(d.document_type)}</strong></div><div><span>Номер</span><strong>${esc(d.document_number||"Не указан")}</strong></div><div><span>Дата документа</span><strong>${esc(formatKedoDate(d.document_date))}</strong></div><div><span>Автор</span><strong>${esc(d.author_name||"—")}</strong></div><div><span>Подразделение</span><strong>${esc(d.department_name||"Общее")}</strong></div><div><span>Действие получателя</span><strong>${d.workflow_action==="SIGNATURE"?"Подписать ЭП":d.workflow_action==="ACKNOWLEDGE"?"Ознакомиться":"Согласовать"}</strong></div><div><span>Согласующий</span><strong>${esc(d.approver_name||"Не назначен")}</strong></div><div><span>Подписант</span><strong>${esc(d.signer_name||"Не назначен")}</strong></div></div>${approvalDetailPlaque}</section>
  <section class="card document-detail-card"><div class="detail-section-head"><div><div class="eyebrow">ФАЙЛЫ</div><h2>Копии документа</h2></div><span class="document-file-count">${1+Number(approved)+Number(signed)} экземпляр${1+Number(approved)+Number(signed)===1?"":"а"}</span></div><div class="file-copy-list">${originalHtml}${approvedHtml}${signedHtml}</div></section>
  <section class="card document-detail-card"><div class="detail-section-head"><div><div class="eyebrow">ПУБЛИЧНЫЙ ДОСТУП</div><h2>Короткая ссылка</h2></div></div>${publicLink?`<div class="short-link-block"><input value="${esc(publicLink.url)}" readonly aria-label="Короткая ссылка"><button class="secondary" data-action="copyPublicLink" data-url="${esc(publicLink.url)}">Копировать</button><button class="secondary" data-action="insertPublicLinkReport" data-id="${d.id}" data-url="${esc(publicLink.url)}" data-title="${esc(d.title)}">Вставить в отчёт</button>${publicLink.canManage?`<button class="danger-outline" data-action="revokePublicLink" data-id="${d.id}">Отозвать</button><button class="secondary" data-action="reissuePublicLink" data-id="${d.id}">Перевыпустить</button>`:""}</div>`:`<div class="muted">Публичная ссылка отозвана.${canManageWorkflow?` <button class="secondary" data-action="reissuePublicLink" data-id="${d.id}">Выпустить новую</button>`:""}</div>`}</section>
   <section class="card document-detail-card document-actions-card"><div class="detail-section-head"><div><div class="eyebrow">ДЕЙСТВИЯ</div><h2>Работа с документом</h2></div><span class="muted">Открытие, скачивание и управление</span></div>${actionButtons}</section>
  <section class="card document-detail-card"><div class="detail-section-head"><div><div class="eyebrow">ЭЛЕКТРОННАЯ ПОДПИСЬ</div><h2>Сведения о подписи</h2></div></div><div class="signature-info-box">${signed?`<div class="signature-info-ok">✓ Подписанный экземпляр сформирован</div><div class="detail-grid signature-detail-grid"><div><span>Подписант</span><strong>${esc(d.signed_by_name||latestSig?.signer_name||"—")}</strong></div><div><span>Должность</span><strong>${esc(latestSig?.position||d.signer_position||"—")}</strong></div><div><span>Дата и время</span><strong>${formatKedoDateTime(d.signed_at||latestSig?.signed_at)}</strong></div><div><span>SHA-256 подписанного PDF</span><strong class="break-code">${esc(d.signed_file_hash||"—")}</strong></div></div>`:`<div class="muted">Подписанный экземпляр ещё не создан. Оригинал будет сохранён без изменений.</div>`}</div>${plaques?`<div class="signature-history">${plaques}</div>`:""}<button class="secondary" style="margin-top:12px" data-action="prepareSigningKey">Сгенерировать / проверить мою ЭП</button></section>
  ${accessHtml}
  <div class="document-detail-columns"><div class="document-detail-column"><section class="card document-detail-card"><div class="detail-section-head"><div><div class="eyebrow">ИСТОРИЯ</div><h2>Версии и изменения</h2></div></div>${versionsHtml||detailEmpty("◷","История версий пока пуста.")}</section><section class="card document-detail-card"><div class="detail-section-head"><div><div class="eyebrow">КОНТРОЛЬ</div><h2>История статусов</h2></div></div>${hist||detailEmpty("✓","История статусов пока пуста.")}</section></div><div class="document-detail-column"><section class="card document-detail-card"><div class="detail-section-head"><div><div class="eyebrow">ОБСУЖДЕНИЕ</div><h2>Комментарии</h2></div></div><div id="documentComments">${commentsHtml||detailEmpty("…","Комментариев пока нет.")}</div><div class="doc-actions" style="margin-top:12px"><input id="documentComment" placeholder="Добавить комментарий"><button class="primary" data-action="addComment" data-id="${d.id}">Отправить</button></div></section><section class="card document-detail-card"><div class="detail-section-head"><div><div class="eyebrow">СОГЛАСОВАНИЕ</div><h2>Решения</h2></div></div>${approvals||detailEmpty("✓","Согласований пока нет.")}</section></div></div>`;
}

function renderKnowledgeGroupPeople(selectId,peopleWrapId,optionsSource){
  const groupSelect=$(selectId),wrap=$(peopleWrapId);
  if(!groupSelect||!wrap)return;
  const gId=groupSelect.value;
  if(!gId){wrap.innerHTML="";wrap.style.display="none";return;}
  const g=(optionsSource.groups||[]).find(x=>String(x.value)===String(gId));
  const depIds=(g?.departments||[]).map(d=>String(d.id));
  const members=(optionsSource.users||[]).filter(u=>depIds.includes(String(u.department_id)));
  wrap.style.display="";
  wrap.innerHTML=`<div class="group-scope-grid">
    <div><label>Подразделения внутри филиала</label><div class="recipient-dropdown" id="${peopleWrapId}Deps"><button type="button" class="recipient-dropdown-toggle"><span class="recipient-dropdown-label">Все подразделения</span><span>⌄</span></button><div class="recipient-dropdown-menu"><div class="recipient-dropdown-tools"><span>Выберите подразделения</span><button type="button" class="recipient-dropdown-clear">Сбросить</button></div>${(g?.departments||[]).map(d=>`<label class="recipient-option"><input type="checkbox" value="${d.id}" data-label="${esc(d.name)}"><span>${esc(d.name)}</span></label>`).join("")||'<div class="recipient-empty">Подразделений нет</div>'}</div></div></div>
    <div><label>Конкретные сотрудники</label><div class="recipient-dropdown" id="${peopleWrapId}People"><button type="button" class="recipient-dropdown-toggle"><span class="recipient-dropdown-label">Все сотрудники</span><span>⌄</span></button><div class="recipient-dropdown-menu"><div class="recipient-dropdown-tools"><span>Выберите сотрудников</span><button type="button" class="recipient-dropdown-clear">Сбросить</button></div><div id="${peopleWrapId}PeopleOptions"></div></div></div></div>
  </div>`;
  setupRecipientDropdown(peopleWrapId+"Deps","Все подразделения");
  const renderPeople=()=>{
    const selected=getRecipientDropdownValues(peopleWrapId+"Deps").map(String);
    const allowed=new Set(selected.length?selected:depIds);
    const list=members.filter(u=>allowed.has(String(u.department_id)));
    $(peopleWrapId+"PeopleOptions").innerHTML=list.length?list.map(u=>`<label class="recipient-option"><input type="checkbox" value="${u.value}" data-label="${esc(u.name)}"><span>${esc(u.name)}${u.position?` — ${esc(u.position)}`:""}${u.department_name?` · ${esc(u.department_name)}`:""}</span></label>`).join(""):'<div class="recipient-empty">Нет сотрудников в выбранных подразделениях</div>';
    setupRecipientDropdown(peopleWrapId+"People","Все сотрудники");
  };
  $(peopleWrapId+"Deps")?.querySelector(".recipient-dropdown-menu")?.addEventListener("change",renderPeople);
  renderPeople();
}
function getKnowledgeGroupScope(id){return {departments:getRecipientDropdownValues(id+"Deps"),users:getRecipientDropdownValues(id+"People")};}
function knowledgeOptionLabel(type,value,options){
  if(type==="ALL")return "Все сотрудники";
  if(type==="ROLE")return "Роль: "+roleLabel(value);
  if(type==="POSITION")return "Должность: "+value;
  if(type==="DEPARTMENT"){const x=(options.departments||[]).find(v=>String(v.value)===String(value));return "Подразделение: "+(x?.name||value);}
  if(type==="GROUP"){const x=(options.groups||[]).find(v=>String(v.value)===String(value));return "Филиал: "+(x?.name||value);}
  if(type==="USER"){const x=(options.users||[]).find(v=>String(v.value)===String(value));return "Сотрудник: "+(x?.name||value);}
  return type+": "+value;
}
function renderKnowledgeDraftRules(){
  const box=$("kKnowledgeRuleSummary"); if(!box)return;
  const rules=state.knowledgeDraftRules||[];
  box.innerHTML=rules.length?rules.map((r,i)=>`<div class="kb-rule-chip"><span>${esc(knowledgeOptionLabel(r.principal_type,r.principal_value,window.__kedoKnowledgeOptions||{}))}</span><button type="button" data-kb-rule-remove="${i}" aria-label="Удалить">×</button></div>`).join(""):'<span class="muted">Доступ не настроен</span>';
}
function isAllowedKnowledgeEmbedUrl(src){
  const s=String(src||"").trim();
  return /^https:\/\/(www\.)?youtube(?:-nocookie)?\.com\/embed\//i.test(s)
    ||/^https:\/\/rutube\.ru\/play\/embed\//i.test(s)
    ||/^https:\/\/vk\.com\/video_ext\.php/i.test(s);
}
function isAllowedKnowledgeFileSrc(src){
  return /^\/api\/knowledge\/media\/\d+$/.test(String(src||"").trim());
}
function knowledgeEmbedProvider(src){
  const s=String(src||"");
  if(/youtube/i.test(s))return "youtube";
  if(/rutube/i.test(s))return "rutube";
  if(/vk\.com/i.test(s))return "vk";
  return "youtube";
}
function parseKnowledgeVideoUrl(url){
  const u=String(url||"").trim();
  if(!u)return null;
  const ytEmbed=u.match(/youtube(?:-nocookie)?\.com\/embed\/([\w-]{6,})/i);
  if(ytEmbed)return {kind:"embed",provider:"youtube",src:`https://www.youtube-nocookie.com/embed/${ytEmbed[1]}`};
  const yt=u.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{6,})/i);
  if(yt)return {kind:"embed",provider:"youtube",src:`https://www.youtube-nocookie.com/embed/${yt[1]}`};
  const rtEmbed=u.match(/rutube\.ru\/play\/embed\/([a-f0-9]+)/i);
  if(rtEmbed)return {kind:"embed",provider:"rutube",src:`https://rutube.ru/play/embed/${rtEmbed[1]}`};
  const rt=u.match(/rutube\.ru\/(?:video|shorts)\/([a-f0-9]+)/i);
  if(rt)return {kind:"embed",provider:"rutube",src:`https://rutube.ru/play/embed/${rt[1]}`};
  const vkExt=u.match(/vk\.com\/video_ext\.php\?([^#]+)/i);
  if(vkExt)return {kind:"embed",provider:"vk",src:`https://vk.com/video_ext.php?${vkExt[1]}`};
  const vk=u.match(/vk\.com\/(?:video|clip)(-?\d+_\d+)/i);
  if(vk){
    const [oid,id]=vk[1].split("_");
    return {kind:"embed",provider:"vk",src:`https://vk.com/video_ext.php?oid=${oid}&id=${id}&hd=2`};
  }
  return null;
}
function knowledgePlayerMarkup(parsed){
  if(!parsed||!parsed.src)return "";
  return `<div class="kb-player" data-kind="${esc(parsed.kind)}" data-src="${esc(parsed.src)}" data-provider="${esc(parsed.provider||"youtube")}" contenteditable="false"></div><p><br></p>`;
}
function knowledgePlayerPoster(src){
  const m=String(src||"").match(/youtube(?:-nocookie)?\.com\/embed\/([\w-]{6,})/i);
  return m?`https://i.ytimg.com/vi/${m[1]}/hqdefault.jpg`:"";
}
function knowledgePlayerLabel(provider){
  return provider==="rutube"?"Rutube":provider==="vk"?"VK":provider==="file"?"Видео":"YouTube";
}
function kbFmtTime(s){
  s=Math.max(0,Math.floor(Number(s)||0));
  return `${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`;
}
function mountKnowledgePlayers(root){
  const host=root||document;
  host.querySelectorAll(".kb-video-wrap").forEach(wrap=>{
    const iframe=wrap.querySelector("iframe");
    const parsed=parseKnowledgeVideoUrl(iframe?.getAttribute("src")||"");
    if(!parsed){wrap.remove();return;}
    const player=document.createElement("div");
    player.className="kb-player";
    player.dataset.kind="embed";
    player.dataset.src=parsed.src;
    player.dataset.provider=parsed.provider;
    player.setAttribute("contenteditable","false");
    wrap.replaceWith(player);
  });
  host.querySelectorAll(".kb-player").forEach(el=>{
    if(el.dataset.mounted==="1")return;
    const kind=el.dataset.kind==="file"?"file":"embed";
    const src=String(el.dataset.src||"").trim();
    const provider=kind==="file"?"file":knowledgeEmbedProvider(el.dataset.provider||src);
    if(kind==="file"?!isAllowedKnowledgeFileSrc(src):!isAllowedKnowledgeEmbedUrl(src)){el.remove();return;}
    el.dataset.mounted="1";
    el.dataset.kind=kind;
    el.dataset.src=src;
    el.dataset.provider=provider;
    el.setAttribute("contenteditable","false");
    el.classList.add("kb-player");
    el.replaceChildren();
    const stage=document.createElement("div");
    stage.className="kb-player-stage";
    const overlay=document.createElement("button");
    overlay.type="button";
    overlay.className="kb-player-bigplay";
    overlay.setAttribute("aria-label","Смотреть");
    overlay.innerHTML=`<span class="kb-player-playicon"></span><span class="kb-player-playlabel">${esc(knowledgePlayerLabel(provider))}</span>`;
    stage.appendChild(overlay);
    el.appendChild(stage);
    if(kind==="embed"){
      const poster=knowledgePlayerPoster(src);
      if(poster){
        const img=document.createElement("img");
        img.className="kb-player-poster";
        img.alt="";
        img.src=poster;
        stage.prepend(img);
      }
      const shade=document.createElement("div");
      shade.className="kb-player-shade";
      stage.insertBefore(shade,overlay);
      overlay.onclick=()=>{
        const playSrc=src+(src.includes("?")?"&":"?")+"autoplay=1"+(provider==="youtube"?"&rel=0":"");
        stage.innerHTML=`<iframe src="${esc(playSrc)}" title="Видео" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
        el.classList.add("is-playing");
      };
      return;
    }
    const video=document.createElement("video");
    video.playsInline=true;
    video.preload="metadata";
    video.src=src;
    const savedVol=Number(localStorage.getItem("kedoKbVolume"));
    const savedRate=Number(localStorage.getItem("kedoKbRate"));
    video.volume=Number.isFinite(savedVol)?Math.min(1,Math.max(0,savedVol)):0.85;
    if(Number.isFinite(savedRate)&&savedRate>0)video.playbackRate=savedRate;
    stage.prepend(video);
    const bar=document.createElement("div");
    bar.className="kb-player-bar";
    bar.innerHTML=`<button type="button" class="kb-player-ctrl kb-player-toggle" aria-label="Воспроизвести"></button><span class="kb-player-time">0:00</span><div class="kb-player-seek" role="slider" aria-label="Прогресс"><div class="kb-player-seek-buf"></div><div class="kb-player-seek-fill"></div><div class="kb-player-seek-thumb"></div><span class="kb-player-seek-tip">0:00</span></div><span class="kb-player-time kb-player-dur">0:00</span><div class="kb-player-volwrap"><button type="button" class="kb-player-ctrl kb-player-mute" aria-label="Звук"></button><input class="kb-player-vol" type="range" min="0" max="1" step="0.01" aria-label="Громкость"></div><div class="kb-player-speed"><button type="button" class="kb-player-speed-btn" aria-label="Скорость">1×</button><div class="kb-player-speed-menu" hidden>${[0.5,0.75,1,1.25,1.5,1.75,2].map(r=>`<button type="button" data-rate="${r}">${r===1?"Обычная":r+"×"}</button>`).join("")}</div></div><button type="button" class="kb-player-ctrl kb-player-fs" aria-label="На весь экран"></button>`;
    el.appendChild(bar);
    const toggle=bar.querySelector(".kb-player-toggle");
    const mute=bar.querySelector(".kb-player-mute");
    const vol=bar.querySelector(".kb-player-vol");
    const fs=bar.querySelector(".kb-player-fs");
    const seek=bar.querySelector(".kb-player-seek");
    const fill=bar.querySelector(".kb-player-seek-fill");
    const buf=bar.querySelector(".kb-player-seek-buf");
    const thumb=bar.querySelector(".kb-player-seek-thumb");
    const tip=bar.querySelector(".kb-player-seek-tip");
    const timeEl=bar.querySelector(".kb-player-time");
    const durEl=bar.querySelector(".kb-player-dur");
    const speedBtn=bar.querySelector(".kb-player-speed-btn");
    const speedMenu=bar.querySelector(".kb-player-speed-menu");
    let seeking=false;
    const setBar=(ratio)=>{
      const pct=`${Math.min(100,Math.max(0,ratio*100))}%`;
      fill.style.width=pct;
      thumb.style.left=pct;
    };
    const syncVol=()=>{
      vol.value=String(video.muted?0:video.volume);
      el.classList.toggle("is-muted",video.muted||video.volume===0);
      mute.setAttribute("aria-label",el.classList.contains("is-muted")?"Включить звук":"Звук");
    };
    const syncSpeed=()=>{
      const r=video.playbackRate||1;
      speedBtn.textContent=r===1?"1×":`${r}×`;
      speedMenu.querySelectorAll("button").forEach(b=>b.classList.toggle("is-active",Number(b.dataset.rate)===r));
    };
    const syncBuf=()=>{
      const d=video.duration||0;
      if(!d||!video.buffered.length){buf.style.width="0%";return;}
      buf.style.width=`${Math.min(100,(video.buffered.end(video.buffered.length-1)/d)*100)}%`;
    };
    const sync=()=>{
      const d=video.duration||0;
      const cur=video.currentTime||0;
      if(!seeking){
        setBar(d?cur/d:0);
        timeEl.textContent=kbFmtTime(cur);
      }
      durEl.textContent=kbFmtTime(d);
      el.classList.toggle("is-playing",!video.paused);
      toggle.setAttribute("aria-label",video.paused?"Воспроизвести":"Пауза");
      syncBuf();
    };
    const ratioFromEvent=(ev)=>{
      const rect=seek.getBoundingClientRect();
      return Math.min(1,Math.max(0,(ev.clientX-rect.left)/Math.max(1,rect.width)));
    };
    const previewSeek=(ratio)=>{
      setBar(ratio);
      const t=ratio*(video.duration||0);
      timeEl.textContent=kbFmtTime(t);
      tip.textContent=kbFmtTime(t);
      tip.style.left=`${ratio*100}%`;
    };
    const commitSeek=(ratio)=>{
      const d=video.duration||0;
      if(!d)return;
      const t=ratio*d;
      if(typeof video.fastSeek==="function"){
        try{video.fastSeek(t);}catch{video.currentTime=t;}
      }else video.currentTime=t;
    };
    const play=()=>{video.play().catch(()=>{});};
    overlay.onclick=()=>{if(video.paused)play();else video.pause();};
    video.onclick=()=>{if(video.paused)play();else video.pause();};
    toggle.onclick=e=>{e.stopPropagation();if(video.paused)play();else video.pause();};
    mute.onclick=e=>{
      e.stopPropagation();
      if(video.muted||video.volume===0){
        video.muted=false;
        if(video.volume===0)video.volume=0.7;
      }else video.muted=true;
      syncVol();
    };
    vol.onpointerdown=e=>e.stopPropagation();
    vol.oninput=()=>{
      video.volume=Number(vol.value);
      video.muted=video.volume===0;
      try{localStorage.setItem("kedoKbVolume",String(video.volume));}catch{}
      syncVol();
    };
    speedBtn.onclick=e=>{
      e.stopPropagation();
      speedMenu.hidden=!speedMenu.hidden;
    };
    speedMenu.onclick=e=>{
      e.stopPropagation();
      const btn=e.target.closest("[data-rate]");
      if(!btn)return;
      video.playbackRate=Number(btn.dataset.rate)||1;
      try{localStorage.setItem("kedoKbRate",String(video.playbackRate));}catch{}
      speedMenu.hidden=true;
      syncSpeed();
    };
    fs.onclick=e=>{
      e.stopPropagation();
      if(document.fullscreenElement===el)document.exitFullscreen?.();
      else el.requestFullscreen?.();
    };
    const onSeekMove=(ev)=>{
      previewSeek(ratioFromEvent(ev));
    };
    const onSeekUp=(ev)=>{
      seeking=false;
      el.classList.remove("is-seeking");
      window.removeEventListener("pointermove",onSeekMove);
      window.removeEventListener("pointerup",onSeekUp);
      commitSeek(ratioFromEvent(ev));
    };
    seek.onpointerdown=e=>{
      e.preventDefault();
      e.stopPropagation();
      seeking=true;
      el.classList.add("is-seeking");
      seek.setPointerCapture?.(e.pointerId);
      previewSeek(ratioFromEvent(e));
      window.addEventListener("pointermove",onSeekMove);
      window.addEventListener("pointerup",onSeekUp);
    };
    seek.onpointermove=e=>{
      if(seeking)return;
      const ratio=ratioFromEvent(e);
      tip.textContent=kbFmtTime(ratio*(video.duration||0));
      tip.style.left=`${ratio*100}%`;
    };
    document.addEventListener("pointerdown",function onDoc(e){
      if(!document.body.contains(el)){document.removeEventListener("pointerdown",onDoc);return;}
      if(!el.contains(e.target))speedMenu.hidden=true;
    });
    vol.value=String(video.volume);
    syncVol();
    syncSpeed();
    video.addEventListener("timeupdate",sync);
    video.addEventListener("progress",syncBuf);
    video.addEventListener("loadedmetadata",sync);
    video.addEventListener("play",sync);
    video.addEventListener("pause",sync);
    video.addEventListener("volumechange",syncVol);
    video.addEventListener("ratechange",syncSpeed);
    video.addEventListener("ended",()=>{video.pause();sync();});
  });
}
function sanitizeKnowledgeHtml(html){
  const tpl=document.createElement("template");
  tpl.innerHTML=String(html||"");
  const allowed=new Set(["P","BR","STRONG","B","EM","I","U","A","UL","OL","LI","H2","H3","BLOCKQUOTE","DIV","IFRAME","SPAN"]);
  const walk=(node)=>{
    [...node.childNodes].forEach(child=>{
      if(child.nodeType!==1)return walk(child);
      const tag=child.tagName;
      if(!allowed.has(tag)){child.replaceWith(...child.childNodes);return walk(node);}
      if(tag==="DIV"&&child.classList.contains("kb-video-wrap")){
        const parsed=parseKnowledgeVideoUrl(child.querySelector("iframe")?.getAttribute("src")||"");
        if(!parsed){child.remove();return;}
        const player=document.createElement("div");
        player.className="kb-player";
        player.dataset.kind="embed";
        player.dataset.src=parsed.src;
        player.dataset.provider=parsed.provider;
        player.setAttribute("contenteditable","false");
        child.replaceWith(player);
        return;
      }
      if(tag==="DIV"&&child.classList.contains("kb-player")){
        const kind=child.dataset.kind==="file"?"file":"embed";
        const src=kind==="file"?String(child.dataset.src||"").trim():(parseKnowledgeVideoUrl(child.dataset.src||"")?.src||"");
        const provider=kind==="file"?"file":knowledgeEmbedProvider(child.dataset.provider||src);
        if(kind==="file"?!isAllowedKnowledgeFileSrc(src):!isAllowedKnowledgeEmbedUrl(src)){child.remove();return;}
        [...child.attributes].forEach(attr=>child.removeAttribute(attr.name));
        child.className="kb-player";
        child.dataset.kind=kind;
        child.dataset.src=src;
        child.dataset.provider=provider;
        child.setAttribute("contenteditable","false");
        child.replaceChildren();
        return;
      }
      [...child.attributes].forEach(attr=>{
        const n=attr.name.toLowerCase();
        if(tag==="A"&&n==="href")return;
        if(tag==="IFRAME"&&["src","allow","allowfullscreen","frameborder","title","loading"].includes(n))return;
        child.removeAttribute(attr.name);
      });
      if(tag==="A"){
        const href=child.getAttribute("href")||"";
        if(!/^https?:\/\//i.test(href))child.removeAttribute("href");
        else{child.setAttribute("target","_blank");child.setAttribute("rel","noopener noreferrer");}
      }
      if(tag==="IFRAME"&&!isAllowedKnowledgeEmbedUrl(child.getAttribute("src")))child.remove();
      walk(child);
    });
  };
  walk(tpl.content);
  return tpl.innerHTML.trim();
}
function renderKnowledgeArticleHtml(raw){
  return sanitizeKnowledgeHtml(raw);
}
function knowledgeContentPreview(raw){
  const div=document.createElement("div");
  div.innerHTML=renderKnowledgeArticleHtml(raw);
  const text=(div.textContent||"").replace(/\s+/g," ").trim();
  return text.length>220?text.slice(0,220)+"…":text;
}
function bindKnowledgeEditorToolbar(toolbarId,editorId){
  const toolbar=$(toolbarId),editor=$(editorId);
  if(!toolbar||!editor)return;
  toolbar.querySelectorAll("[data-kb-cmd]").forEach(btn=>{
    btn.onclick=e=>{
      e.preventDefault();
      editor.focus();
      const cmd=btn.dataset.kbCmd;
      if(cmd==="link"){
        openKnowledgeLinkDialog(editor);
      }else if(cmd==="video"){
        openKnowledgeVideoDialog(editor);
      }else if(cmd==="h2")document.execCommand("formatBlock",false,"h2");
      else if(cmd==="quote")document.execCommand("formatBlock",false,"blockquote");
      else document.execCommand(cmd,false,null);
    };
  });
}
function getKnowledgeEditorHtml(editorId){
  const el=$(editorId);
  if(!el)return "";
  const clone=el.cloneNode(true);
  clone.querySelectorAll(".kb-player").forEach(p=>{
    p.replaceChildren();
    p.removeAttribute("data-mounted");
    p.setAttribute("contenteditable","false");
  });
  return sanitizeKnowledgeHtml(clone.innerHTML||"");
}
function setKnowledgeEditorHtml(editorId,html){
  const el=$(editorId);
  if(!el)return;
  el.innerHTML=renderKnowledgeArticleHtml(html||"");
  mountKnowledgePlayers(el);
}
function openKnowledgeVideoDialog(editor){
  if(!editor)return;
  editor.focus();
  installAdminEditStyles();
  installKnowledgeAccessStyles();
  document.querySelectorAll(".kb-video-dialog-overlay").forEach(x=>x.remove());
  const overlay=document.createElement("div");
  overlay.className="admin-edit-overlay kb-video-dialog-overlay";
  overlay.innerHTML=`<div class="admin-edit-modal kb-video-dialog" role="dialog" aria-modal="true" aria-label="Вставить видео">
    <h2>Вставить видео</h2>
    <p class="muted kb-link-dialog-hint">Ссылка на YouTube, Rutube или VK — либо файл MP4/WebM до 80 МБ.</p>
    <div class="kb-video-tabs"><button type="button" class="is-active" data-kb-video-tab="url">Ссылка</button><button type="button" data-kb-video-tab="file">Файл</button></div>
    <div data-kb-video-pane="url"><label class="kb-link-field"><span>Адрес ролика</span><input id="kbVideoUrl" type="url" placeholder="https://www.youtube.com/watch?v=…"></label></div>
    <div data-kb-video-pane="file" hidden><label class="kb-link-field"><span>Видеофайл</span><input id="kbVideoFile" type="file" accept="video/mp4,video/webm,.mp4,.webm"></label><small class="kb-editor-hint">Только MP4 или WebM. После загрузки ролик появится в материале.</small></div>
    <p id="kbVideoMsg" class="err"></p>
    <div class="admin-edit-actions"><button type="button" class="secondary" id="kbVideoCancel">Отмена</button><button type="button" class="primary" id="kbVideoSave">Вставить</button></div>
  </div>`;
  document.body.appendChild(overlay);
  const urlInput=overlay.querySelector("#kbVideoUrl");
  const fileInput=overlay.querySelector("#kbVideoFile");
  const msgEl=overlay.querySelector("#kbVideoMsg");
  const saveBtn=overlay.querySelector("#kbVideoSave");
  let tab="url";
  const close=()=>overlay.remove();
  overlay.querySelector("#kbVideoCancel").onclick=close;
  overlay.onclick=e=>{if(e.target===overlay)close();};
  overlay.querySelectorAll("[data-kb-video-tab]").forEach(btn=>{
    btn.onclick=()=>{
      tab=btn.dataset.kbVideoTab;
      overlay.querySelectorAll("[data-kb-video-tab]").forEach(b=>b.classList.toggle("is-active",b===btn));
      overlay.querySelectorAll("[data-kb-video-pane]").forEach(p=>p.hidden=p.dataset.kbVideoPane!==tab);
      msgEl.textContent="";
    };
  });
  const insert=html=>{
    editor.focus();
    document.execCommand("insertHTML",false,html);
    mountKnowledgePlayers(editor);
    close();
  };
  const save=async()=>{
    msgEl.textContent="";
    if(tab==="url"){
      const parsed=parseKnowledgeVideoUrl(urlInput.value);
      if(!parsed){msgEl.textContent="Вставьте ссылку YouTube, Rutube или VK.";urlInput.focus();return;}
      insert(knowledgePlayerMarkup(parsed));
      return;
    }
    const file=fileInput.files?.[0];
    if(!file){msgEl.textContent="Выберите файл MP4 или WebM.";return;}
    if(file.size>80*1024*1024){msgEl.textContent="Файл больше 80 МБ.";return;}
    saveBtn.disabled=true;
    saveBtn.textContent="Загрузка…";
    try{
      const form=new FormData();
      form.append("title",file.name);
      form.append("file",file);
      const uploaded=await api("/api/knowledge/upload-video",{method:"POST",body:form});
      insert(knowledgePlayerMarkup({kind:"file",src:uploaded.src,provider:"file"}));
    }catch(e){
      msgEl.textContent=e.message||"Не удалось загрузить видео.";
      saveBtn.disabled=false;
      saveBtn.textContent="Вставить";
    }
  };
  overlay.querySelector("#kbVideoSave").onclick=save;
  overlay.addEventListener("keydown",e=>{
    if(e.key==="Escape")close();
    if(e.key==="Enter"&&e.target===urlInput){e.preventDefault();save();}
  });
  urlInput.focus();
}
function getKnowledgeEditorSelectionLink(editor){
  const sel=window.getSelection();
  if(!sel||!sel.rangeCount)return null;
  let node=sel.anchorNode;
  if(node&&node.nodeType===3)node=node.parentElement;
  if(!node||!editor.contains(node))return null;
  return node.closest?.("a")||null;
}
function openKnowledgeLinkDialog(editor){
  if(!editor)return;
  editor.focus();
  installAdminEditStyles();
  installKnowledgeAccessStyles();
  const sel=window.getSelection();
  const selectedText=sel&&sel.rangeCount?String(sel.toString()||"").trim():"";
  const existingLink=getKnowledgeEditorSelectionLink(editor);
  const initialTitle=existingLink?(existingLink.textContent||"").trim():selectedText;
  const initialUrl=existingLink?(existingLink.getAttribute("href")||"").trim():"";
  document.querySelectorAll(".kb-link-dialog-overlay").forEach(x=>x.remove());
  const overlay=document.createElement("div");
  overlay.className="admin-edit-overlay kb-link-dialog-overlay";
  overlay.innerHTML=`<div class="admin-edit-modal kb-link-dialog" role="dialog" aria-modal="true" aria-label="Вставить ссылку">
    <h2>${existingLink?"Изменить ссылку":"Вставить ссылку"}</h2>
    <p class="muted kb-link-dialog-hint">Укажите текст, который увидят сотрудники, и адрес страницы.</p>
    <label class="kb-link-field"><span>Название ссылки</span><input id="kbLinkTitle" type="text" placeholder="Например: Открыть инструкцию" value="${esc(initialTitle)}"></label>
    <label class="kb-link-field"><span>Адрес (URL)</span><input id="kbLinkUrl" type="url" placeholder="https://example.ru/page" value="${esc(initialUrl)}"></label>
    <p id="kbLinkMsg" class="err"></p>
    <div class="admin-edit-actions"><button type="button" class="secondary" id="kbLinkCancel">Отмена</button><button type="button" class="primary" id="kbLinkSave">${existingLink?"Сохранить":"Вставить"}</button></div>
  </div>`;
  document.body.appendChild(overlay);
  const titleInput=overlay.querySelector("#kbLinkTitle");
  const urlInput=overlay.querySelector("#kbLinkUrl");
  const msgEl=overlay.querySelector("#kbLinkMsg");
  const close=()=>overlay.remove();
  overlay.querySelector("#kbLinkCancel").onclick=close;
  overlay.onclick=e=>{if(e.target===overlay)close();};
  const save=()=>{
    const title=String(titleInput.value||"").trim();
    const url=String(urlInput.value||"").trim();
    if(!/^https?:\/\//i.test(url)){
      msgEl.textContent="Укажите корректный адрес, начиная с https:// или http://";
      urlInput.focus();
      return;
    }
    const label=title||url;
    if(existingLink){
      existingLink.href=url;
      existingLink.target="_blank";
      existingLink.rel="noopener noreferrer";
      existingLink.textContent=label;
      close();
      return;
    }
    const html=`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`;
    document.execCommand("insertHTML",false,html);
    close();
  };
  overlay.querySelector("#kbLinkSave").onclick=save;
  overlay.addEventListener("keydown",e=>{
    if(e.key==="Escape")close();
    if(e.key==="Enter"&&(e.target===titleInput||e.target===urlInput)){e.preventDefault();save();}
  });
  (titleInput.value?urlInput:titleInput).focus();
}
function openKnowledgeAccessBuilder(initialRules, options, onSave){
  installAdminEditStyles();
  installKnowledgeAccessStyles();
  const overlay=document.createElement("div");overlay.className="admin-edit-overlay kb-access-builder-overlay";
  overlay.innerHTML=`<div class="admin-edit-modal kb-access-builder-modal"><div class="kb-builder-head"><div><div class="eyebrow">ДОСТУП К МАТЕРИАЛУ</div><h2>Настройка аудитории</h2><p class="muted">Выберите подразделение, роль или филиал — доступ получат все подходящие сотрудники без ручного выбора каждого человека.</p></div><button type="button" class="secondary kb-builder-close">Закрыть</button></div><div class="kb-builder-body"><aside class="kb-builder-side"><button type="button" class="kb-scope-tab active" data-kb-scope="ALL"><span>🌐</span><span><b>Все сотрудники</b><small>Вся организация</small></span></button><button type="button" class="kb-scope-tab" data-kb-scope="GROUP"><span>🏢</span><span><b>Филиалы</b><small>Все сотрудники филиала</small></span></button><button type="button" class="kb-scope-tab" data-kb-scope="DEPARTMENT"><span>▦</span><span><b>Подразделения</b><small>Все сотрудники отдела</small></span></button><button type="button" class="kb-scope-tab" data-kb-scope="ROLE"><span>R</span><span><b>Роли</b><small>Все с этой ролью</small></span></button><button type="button" class="kb-scope-tab" data-kb-scope="POSITION"><span>Д</span><span><b>Должности</b><small>По должности</small></span></button><button type="button" class="kb-scope-tab" data-kb-scope="USER"><span>👤</span><span><b>Конкретные люди</b><small>Только выбранные</small></span></button></aside><section class="kb-builder-main"><div class="kb-builder-current" id="kbBuilderCurrent"></div><div id="kbBuilderControls"></div></section></div><div class="kb-builder-footer"><span class="muted">Достаточно совпадения с одним правилом.</span><div><button type="button" class="secondary kb-builder-cancel">Отмена</button><button type="button" class="primary kb-builder-save">Сохранить аудиторию</button></div></div></div>`;
  document.body.appendChild(overlay);
  let working=(initialRules||[]).map(r=>({principal_type:r.principal_type||r.principalType,principal_value:String(r.principal_value??r.principalValue??"")}));
  if(!working.length)working=[{principal_type:"ALL",principal_value:""}];
  const current=overlay.querySelector("#kbBuilderCurrent"),controls=overlay.querySelector("#kbBuilderControls");
  const renderCurrent=()=>{current.innerHTML=working.length?`<div class="kb-builder-current-title">Выбранная аудитория</div><div class="kb-rule-list">${working.map((r,i)=>`<div class="kb-rule-row"><span class="kb-rule-icon">${r.principal_type==="ALL"?'✓':r.principal_type==="GROUP"?'Ф':r.principal_type==="DEPARTMENT"?'П':r.principal_type==="USER"?'С':r.principal_type==="ROLE"?'R':'Д'}</span><div><strong>${esc(knowledgeOptionLabel(r.principal_type,r.principal_value,options))}</strong><small>${r.principal_type==="ALL"?'Доступ открыт всей организации':'Разрешено этой аудитории'}</small></div><button type="button" class="danger-outline" data-rm="${i}">Удалить</button></div>`).join("")}</div>`:'<div class="kb-builder-current-empty">Выберите аудиторию слева.</div>';};
  const getOptions=(scope)=>{
    if(scope==="ROLE")return (options.roles||[]).map(v=>({value:v,label:roleLabel(v),sub:"Роль сотрудника"}));
    if(scope==="POSITION")return (options.positions||[]).map(v=>({value:v,label:v,sub:"Должность"}));
    if(scope==="DEPARTMENT")return (options.departments||[]).map(v=>({value:v.value,label:v.name,sub:"Подразделение"}));
    if(scope==="GROUP")return (options.groups||[]).map(v=>({value:v.value,label:v.name,sub:(v.departments||[]).length?`${v.departments.length} подразделений`:"Филиал"}));
    if(scope==="USER")return (options.users||[]).map(v=>({value:v.value,label:v.name,sub:[v.position,v.department_name].filter(Boolean).join(" · ")}));
    return [];
  };
  const renderControls=(scope)=>{
    overlay.querySelectorAll(".kb-scope-tab").forEach(b=>b.classList.toggle("active",b.dataset.kbScope===scope));
    if(scope==="ALL"){
      controls.innerHTML=`<div class="kb-builder-wide-empty"><div class="kb-big-icon">🌐</div><h3>Вся организация</h3><p>Материал будет доступен каждому сотруднику. Это самый простой и понятный режим.</p><button type="button" class="primary" id="kbChooseAll">Открыть всем</button></div>`;
      controls.querySelector("#kbChooseAll").onclick=()=>{working=[{principal_type:"ALL",principal_value:""}];renderCurrent();};
      return;
    }
    const arr=getOptions(scope);
    const scopeHints={GROUP:"Все сотрудники выбранных филиалов получат доступ автоматически.",DEPARTMENT:"Все сотрудники выбранных подразделений получат доступ автоматически.",ROLE:"Все сотрудники с выбранной ролью получат доступ автоматически.",POSITION:"Все сотрудники с выбранной должностью получат доступ автоматически.",USER:"Используйте только если нужен точный список людей."};
    const scopeTitles={GROUP:"Филиалы",DEPARTMENT:"Подразделения",USER:"Конкретные сотрудники",ROLE:"Роли",POSITION:"Должности"};
    controls.innerHTML=`<div class="kb-builder-control-head"><div><b>${scopeTitles[scope]||scope}</b><small>${scopeHints[scope]||"Отметьте один или несколько вариантов"}</small></div><span class="kb-selection-count">0 выбрано</span></div><div class="kb-builder-search"><span>⌕</span><input id="kbBuilderSearch" placeholder="Поиск по списку..."></div><div class="kb-option-list" id="kbOptionList">${arr.length?arr.map(x=>`<label class="kb-option"><input type="checkbox" value="${esc(x.value)}" ${working.some(r=>r.principal_type===scope&&String(r.principal_value)===String(x.value))?'checked':''}><span class="kb-option-check"></span><span class="kb-option-copy"><b>${esc(x.label)}</b><small>${esc(x.sub||"")}</small></span></label>`).join(""):'<div class="kb-builder-wide-empty"><h3>Ничего не найдено</h3><p>Для этого типа аудитории пока нет элементов.</p></div>'}</div>`;
    const list=controls.querySelector("#kbOptionList"),search=controls.querySelector("#kbBuilderSearch"),count=controls.querySelector(".kb-selection-count");
    const sync=()=>{const vals=[...list.querySelectorAll("input:checked")].map(x=>String(x.value));working=working.filter(r=>r.principal_type!==scope&&r.principal_type!=="ALL");vals.forEach(v=>working.push({principal_type:scope,principal_value:v}));count.textContent=`${vals.length} выбрано`;renderCurrent();};
    list.addEventListener("change",sync);search.oninput=()=>{const q=search.value.trim().toLowerCase();list.querySelectorAll(".kb-option").forEach(row=>row.style.display=row.innerText.toLowerCase().includes(q)?"":"none")};sync();
  };
  overlay.querySelectorAll(".kb-scope-tab").forEach(b=>b.onclick=()=>renderControls(b.dataset.kbScope));
  current.onclick=e=>{const b=e.target.closest("[data-rm]");if(!b)return;working.splice(Number(b.dataset.rm),1);renderCurrent();};
  const close=()=>overlay.remove();overlay.querySelector(".kb-builder-close").onclick=close;overlay.querySelector(".kb-builder-cancel").onclick=close;overlay.querySelector(".kb-builder-save").onclick=()=>{onSave(working.length?working:[{principal_type:"ALL",principal_value:""}]);close();};overlay.onclick=e=>{if(e.target===overlay)close();};
  renderCurrent();renderControls(working[0]?.principal_type||"ALL");
}
function renderKnowledgeAttachments(articleId,attachments){
  if(!attachments?.length)return "";

  if(!document.getElementById("knowledge-materials-clean-ui")){
    const style=document.createElement("style");
    style.id="knowledge-materials-clean-ui";
    style.textContent=`
      .knowledge-attachments{
        margin-top:14px!important;
        padding-top:13px!important;
        border-top:1px solid #e5edf4!important;
        display:flex!important;
        flex-direction:column!important;
        gap:8px!important;
      }

      .knowledge-attachments-label{
        display:none!important;
      }

      .knowledge-attachment-row{
        display:flex;
        align-items:center;
        gap:12px;
        width:100%;
        min-height:58px;
        padding:10px 12px;
        background:#f8fbfd;
        border:1px solid #dce8f1;
        border-radius:12px;
        transition:
          border-color .15s ease,
          background .15s ease,
          box-shadow .15s ease;
      }

      .knowledge-attachment-row:hover{
        background:#f5f9fc;
        border-color:#c9dce9;
        box-shadow:0 3px 12px rgba(35,79,110,.06);
      }

      .knowledge-attachment-icon{
        width:38px;
        height:38px;
        flex:0 0 38px;
        display:grid;
        place-items:center;
        border-radius:10px;
        background:#eaf4fb;
        color:#1671ad;
        font-size:11px;
        font-weight:800;
        letter-spacing:.2px;
      }

      .knowledge-attachment-info{
        min-width:0;
        flex:1;
        display:flex;
        flex-direction:column;
        gap:3px;
      }

      .knowledge-attachment-name{
        display:block;
        min-width:0;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        color:#214b6d;
        font-size:12px;
        font-weight:650;
        line-height:1.35;
      }

      .knowledge-attachment-meta{
        color:#8a9dad;
        font-size:10px;
        line-height:1.2;
      }

      .knowledge-attachment-actions{
        display:flex;
        align-items:center;
        gap:7px;
        flex:0 0 auto;
      }

      .knowledge-attachment-actions button,
      .knowledge-attachment-actions a{
        height:34px!important;
        padding:0 11px!important;
        display:inline-flex!important;
        align-items:center!important;
        justify-content:center!important;
        white-space:nowrap!important;
        border-radius:8px!important;
        font-size:11px!important;
        text-decoration:none!important;
      }

      .knowledge-attachment-actions .kb-preview-btn{
        background:#fff;
        border:1px solid #cddfea;
        color:#245878;
      }

      .knowledge-attachment-actions .kb-preview-btn:hover{
        background:#edf6fb;
        border-color:#9fc4db;
      }

      .knowledge-attachment-actions .kb-download-btn{
        background:#edf7fc;
        border:1px solid #c7e0ef;
        color:#176da4;
      }

      .knowledge-attachment-actions .kb-download-btn:hover{
        background:#e1f1fa;
        border-color:#a9cfe5;
      }

      @media(max-width:760px){
        .knowledge-attachment-row{
          align-items:flex-start;
          flex-wrap:wrap;
        }

        .knowledge-attachment-info{
          width:calc(100% - 54px);
        }

        .knowledge-attachment-actions{
          width:100%;
          margin-left:50px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  return `<div class="kb-attachments knowledge-attachments">
    ${attachments.map(d=>{
      const id=Number(d.id);
      const name=esc(d.filename||d.title||"Документ");
      const type=String(d.document_type||"KNOWLEDGE").toUpperCase();
      const meta=type==="KNOWLEDGE"?"PDF-документ":"Документ";

      return `<div class="knowledge-attachment-row">
        <div class="knowledge-attachment-icon">PDF</div>

        <div class="knowledge-attachment-info">
          <span class="knowledge-attachment-name" title="${name}">${name}</span>
          <span class="knowledge-attachment-meta">${meta}</span>
        </div>

        <div class="knowledge-attachment-actions">
          <button
            type="button"
            class="kb-preview-btn"
            data-action="previewKnowledgePdf"
            data-article-id="${articleId}"
            data-id="${id}"
            data-title="${name}">
            Предпросмотр
          </button>

          <a
            class="kb-download-btn"
            href="/api/knowledge/${articleId}/attachments/${id}/download"
            target="_blank"
            rel="noopener">
            Скачать
          </a>
        </div>
      </div>`;
    }).join("")}
  </div>`;
}
function knowledgeFolderOptions(folders){
  const byParent=new Map();(folders||[]).forEach(folder=>{const key=folder.parent_id==null?"root":String(folder.parent_id);if(!byParent.has(key))byParent.set(key,[]);byParent.get(key).push(folder);});
  const out=[];const walk=(parent,depth)=>{(byParent.get(parent)||[]).forEach(folder=>{out.push({folder,depth});walk(String(folder.id),depth+1);});};walk("root",0);return out;
}
function knowledgeFolderPath(folders,id){const path=[],seen=new Set();let current=(folders||[]).find(folder=>String(folder.id)===String(id));while(current&&!seen.has(String(current.id))){seen.add(String(current.id));path.unshift(current);current=(folders||[]).find(folder=>String(folder.id)===String(current.parent_id));}return path;}
async function manageKnowledgeFolder(action,id,name){
  try{
    if(action==="create"){
      const value=await kedoPrompt("Название новой папки:","","Новая папка");if(!value?.trim())return;
      const parentOptions=[{value:"",label:"Корень базы знаний",meta:"Без родительской папки",icon:"⌂"},...knowledgeFolderOptions(state.knowledgeFolders).filter(({folder})=>!folder.archived_at).map(({folder,depth})=>({value:String(folder.id),label:folder.name,meta:`${"› ".repeat(depth)}Вложенная папка`,icon:"📁"}))];
      const parent=await kedoSelect({title:"Расположение папки",message:"Можно создать вложенную папку.",options:parentOptions,confirmText:"Создать"});
      if(parent===null)return;
      await api("/api/knowledge/folders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:value.trim(),parentId:parent?Number(parent):null})});
    }else if(action==="rename"){
      const value=await kedoPrompt("Новое название папки:",name||"","Переименовать папку");if(!value?.trim())return;
      await api(`/api/knowledge/folders/${id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:value.trim()})});
    }else if(action==="archive"){
      if(!await kedoConfirm("Архивировать папку? Материалы останутся доступными администраторам."))return;
      await api(`/api/knowledge/folders/${id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({archived:true})});
    }else if(action==="restore"){
      await api(`/api/knowledge/folders/${id}/restore`,{method:"POST"});
    }
    await renderKnowledge();
  }catch(e){kedoAlert(e.message);}
}
function updateTrainingProgress(){
  if(!isKnowledgeOnlyUser())return;
  const cards=[...document.querySelectorAll("[data-kb-training-card]")],viewed=cards.filter(card=>card.dataset.kbTrainingViewed==="true").length,total=cards.length;
  const count=$("trainingProgressCount");if(count)count.textContent=`${viewed} из ${total}`;
  const bar=$("trainingProgressBar");if(bar)bar.style.width=`${total?Math.round(viewed/total*100):0}%`;
  const badge=$("kbVisibleCount");if(badge)badge.textContent=`${viewed} из ${total} просмотрено`;
}
async function markKnowledgeViewed(id,button){
  if(!isKnowledgeOnlyUser()||button?.dataset.busy==="1")return;
  const card=document.querySelector(`[data-kb-training-card="${Number(id)}"]`);if(card?.dataset.kbTrainingViewed==="true")return;
  if(button)button.dataset.busy="1";
  try{
    await api(`/api/knowledge/${Number(id)}/view`,{method:"POST"});
    if(card)card.dataset.kbTrainingViewed="true";
    if(button){button.disabled=true;button.textContent="✓ Просмотрено";button.classList.add("is-done");}
    updateTrainingProgress();
  }catch(e){if(button)button.dataset.busy="";kedoAlert(e.message||"Не удалось сохранить просмотр.");}
}
function installTrainingViewTracking(){
  state.knowledgeViewObserver?.disconnect();state.knowledgeViewObserver=null;
  if(!isKnowledgeOnlyUser())return;
  const cards=[...document.querySelectorAll("[data-kb-training-card]")];
  if(!cards.length){updateTrainingProgress();return;}
  if("IntersectionObserver" in window){
    state.knowledgeViewObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(!entry.isIntersecting||entry.intersectionRatio<.55)return;
      const card=entry.target,button=card.querySelector("[data-action=markKnowledgeViewed]");
      if(card.dataset.kbTrainingViewed==="true"||card.__kbViewTimer)return;
      card.__kbViewTimer=setTimeout(()=>{card.__kbViewTimer=null;markKnowledgeViewed(Number(card.dataset.kbTrainingCard),button);},900);
    }),{threshold:[.55]});
    cards.forEach(card=>state.knowledgeViewObserver.observe(card));
  }
  updateTrainingProgress();
}
async function renderKnowledge(){
let list=[],folders=[];
try{
  const raw=await api(`/api/knowledge/${state.knowledgeFolderId?`?folderId=${encodeURIComponent(state.knowledgeFolderId)}`:""}`);
  list=Array.isArray(raw)?raw:[];
  try{const rawFolders=await api("/api/knowledge/folders?includeArchived=true");folders=Array.isArray(rawFolders)?rawFolders:[];}catch{}
}catch(e){
  $("main").innerHTML=`<section class="knowledge-hero"><div class="knowledge-hero-copy"><div class="eyebrow">ЗНАНИЯ И ИНСТРУКЦИИ</div><h1 class="page-title">База знаний</h1><p>Единое место для инструкций, регламентов и полезных материалов для сотрудников.</p></div></section><section class="card"><div class="empty knowledge-empty"><div class="knowledge-empty-icon">${kedoIcon('book','premium-icon--xl')}</div><b>Не удалось загрузить материалы</b><span>${esc(e.message==="Not found."?"Нет доступа к этому разделу.":e.message)}</span></div></section>`;
  return;
}
const trainingMode=isKnowledgeOnlyUser();
if(trainingMode&&folders[0]&&Number(state.knowledgeFolderId)!==Number(folders[0].id)){state.knowledgeFolderId=Number(folders[0].id);return renderKnowledge();}
const admin=["admin","moderator","director"].includes(state.user.role);
let docs=[], options={roles:[],positions:[],departments:[],users:[]};
if(admin){try{const [docsRaw,accessOptions]=await Promise.all([api("/api/documents/?limit=100&type=KNOWLEDGE"),api("/api/knowledge/access/options")]);docs=listData(docsRaw);options=accessOptions;}catch{}}
if(!state.knowledgeDraftRules?.length)state.knowledgeDraftRules=[{principal_type:"ALL",principal_value:""}];
const knowledgeDraftRules=state.knowledgeDraftRules;
const folderEntries=knowledgeFolderOptions(folders);
state.knowledgeFolders=folders;
const folderOptions=folderEntries.map(({folder,depth})=>`<option value="${folder.id}" ${String(state.knowledgeFolderId)===String(folder.id)?"selected":""}>${"  ".repeat(depth)}${folder.archived_at?"🗄️ ":""}${esc(folder.name)}</option>`).join("");
const activeFolderOptions=folderEntries.filter(({folder})=>!folder.archived_at).map(({folder,depth})=>`<option value="${folder.id}" ${String(state.knowledgeFolderId)===String(folder.id)?"selected":""}>${"  ".repeat(depth)}${esc(folder.name)}</option>`).join("");
const currentFolder=folders.find(folder=>String(folder.id)===String(state.knowledgeFolderId));
const folderPath=knowledgeFolderPath(folders,state.knowledgeFolderId),childFolders=folders.filter(folder=>String(folder.parent_id??"")===String(state.knowledgeFolderId??"")&&!folder.archived_at);
const kbCategories=[...new Set(list.map(k=>String(k.category||"").trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"ru"));
const viewedCount=list.filter(k=>k.training_viewed).length;
const trainingProgress=trainingMode?`<section class="training-progress-card"><div><span class="eyebrow">ПРОГРЕСС ОБУЧЕНИЯ</span><h2>Папка «Для новых сотрудников»</h2><p>Открывайте материалы по очереди. Сайт сам отметит просмотренные карточки.</p></div><div class="training-progress-value"><strong id="trainingProgressCount">${viewedCount} из ${list.length}</strong><span>материалов просмотрено</span><div class="training-progress-track"><i id="trainingProgressBar" style="width:${list.length?Math.round(viewedCount/list.length*100):0}%"></i></div></div></section>`:"";
$("main").innerHTML=`<section class="knowledge-hero"><div class="knowledge-hero-copy"><div class="eyebrow">ЗНАНИЯ И ИНСТРУКЦИИ</div><h1 class="page-title">База знаний</h1><p>Единое место для инструкций, регламентов и полезных материалов для сотрудников.</p></div><div class="knowledge-hero-stats"><span class="knowledge-hero-count">${list.length}</span><span class="knowledge-hero-label">${list.length===1?'материал':'материалов'}</span></div></section>
${admin?`<section class="card knowledge-compose-card kb-compose-collapsed" id="kbNewMaterialCard"><button type="button" class="knowledge-compose-head" id="kbNewMaterialToggle" aria-expanded="false"><div><span class="knowledge-new-badge">✦ НОВЫЙ МАТЕРИАЛ</span><h2>Создайте новый материал</h2><p>Инструкция, правила или регламент — соберите и настройте доступ в одном месте.</p></div><span class="knowledge-compose-toggle" aria-hidden="true">＋</span></button><div class="knowledge-compose-body" id="kbNewMaterialBody" hidden>
<div class="knowledge-form-grid"><label><span>Название</span><input id="kTitle" placeholder="Например: Оформление отпуска"></label><label><span>Категория</span><input id="kCategory" list="kCategoryList" placeholder="Например: Кадры"><datalist id="kCategoryList">${kbCategories.map(c=>`<option value="${esc(c)}">`).join("")}</datalist></label><label><span>Папка</span><select id="kFolderSelect"><option value="">Без папки</option>${activeFolderOptions}</select></label></div>
<label class="knowledge-form-full"><span>Текст инструкции</span><div class="kb-article-shell"><div class="kb-article-toolbar" id="kContentToolbar"><button type="button" data-kb-cmd="bold" title="Жирный"><b>B</b></button><button type="button" data-kb-cmd="italic" title="Курсив"><i>I</i></button><button type="button" data-kb-cmd="insertUnorderedList" title="Список">•</button><button type="button" data-kb-cmd="h2" title="Подзаголовок">H2</button><button type="button" data-kb-cmd="quote" title="Цитата">“</button><button type="button" data-kb-cmd="link" title="Ссылка">🔗</button><button type="button" data-kb-cmd="video" title="Видео">▶</button></div><div id="kContentEditor" class="kb-article-editor" contenteditable="true" data-placeholder="Кратко и понятно опишите порядок действий. Можно вставить ссылку или видео, если PDF не нужен…"></div></div><small class="kb-editor-hint">Можно оформить как статью: текст, гиперссылки, видео по ссылке или файлом MP4/WebM. PDF ниже — необязателен.</small></label>
<div class="knowledge-form-section kb-access-section"><div class="knowledge-section-head"><div><b>Доступ к материалу</b><span>Соберите точную аудиторию — от всей организации до конкретных сотрудников.</span></div><span class="knowledge-step">01</span></div><div class="kb-access-preview" id="kKnowledgeRuleSummary"></div><button type="button" class="kb-access-builder-trigger" id="kbOpenBuilder"><span class="kb-trigger-icon">⌘</span><span><b>Настроить аудиторию</b><small>Филиалы, подразделения, сотрудники, роли и должности</small></span><span class="kb-trigger-arrow">→</span></button></div>
<div class="knowledge-form-section"><div class="knowledge-section-head"><div><b>Документ</b><span>Можно прикрепить PDF к материалу. Файл останется только в базе знаний и не попадёт в архив документов.</span></div><span class="knowledge-step">02</span></div><div class="knowledge-file-grid">${docs.length?`<label><span>Из ранее прикреплённых PDF</span><select id="kDocumentSelect"><option value="">Без документа</option>${docs.map(d=>`<option value="${d.id}">${esc(d.filename||d.title)}</option>`).join("")}</select></label>`:""}<label class="knowledge-file-input"><span>Новый PDF</span><input id="kDocumentFile" type="file" accept="application/pdf"></label></div></div>
<div class="knowledge-compose-footer"><p id="kMsg"></p><button class="primary knowledge-publish-btn" data-action="addKnowledge">Опубликовать материал <span>→</span></button></div></div></section>`:""}
<section class="card knowledge-library-card"><div class="knowledge-library-head"><div><div class="eyebrow">КОЛЛЕКЦИЯ</div><h2>Материалы</h2><p>Готовые инструкции и документы для работы.</p></div><div class="knowledge-library-badge" id="kbVisibleCount">${list.length} ${list.length===1?'материал':'материалов'}</div></div>
<div class="knowledge-filter-bar"><div class="knowledge-filter-search"><span>⌕</span><input id="kbLibrarySearch" type="search" placeholder="Поиск по названию или тексту…" autocomplete="off"></div><select id="kbLibraryFolder"><option value="">Все папки</option>${folderOptions}</select><select id="kbLibraryCategory"><option value="">Все категории</option>${kbCategories.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join("")}</select></div>
<div class="kb-folder-navigation"><div class="kb-folder-crumbs"><button type="button" data-kb-folder="">База знаний</button>${folderPath.map(folder=>`<span>›</span><button type="button" data-kb-folder="${folder.id}">${esc(folder.name)}</button>`).join("")}</div>${admin?`<div class="kb-folder-actions"><button type="button" class="primary" id="kbNewFolder">＋ Создать папку</button>${currentFolder?`<button type="button" class="secondary" data-kb-folder-action="rename" data-kb-folder-id="${currentFolder.id}" data-kb-folder-name="${esc(currentFolder.name)}">✎ Переименовать</button><button type="button" class="${currentFolder.archived_at?"secondary":"danger-outline"}" data-kb-folder-action="${currentFolder.archived_at?"restore":"archive"}" data-kb-folder-id="${currentFolder.id}" data-kb-folder-name="${esc(currentFolder.name)}">${currentFolder.archived_at?"Восстановить":"Архивировать"}</button>`:""}</div>`:""}<div class="kb-folder-grid">${childFolders.map(folder=>`<button type="button" class="kb-folder-card" data-kb-folder="${folder.id}"><span class="kb-folder-icon">▰</span><span><strong>${esc(folder.name)}</strong><small>${folder.article_count||0} материалов</small></span>${admin?`<span class="kb-folder-edit" data-kb-folder-action="rename" data-kb-folder-id="${folder.id}" data-kb-folder-name="${esc(folder.name)}">✎</span>`:""}</button>`).join("")||`<div class="kb-folder-empty">${state.knowledgeFolderId?"В этой папке пока нет подпапок.":"Папки пока не созданы."}</div>`}</div></div>
<div id="kbLibraryGrid">${list.length?`<div class="knowledge-material-grid">${list.map(k=>`<article class="knowledge-item" data-kb-title="${esc(String(k.title||"").toLowerCase())}" data-kb-category="${esc(String(k.category||"").toLowerCase())}" data-kb-text="${esc(String(k.content||"").replace(/<[^>]+>/g," ").toLowerCase())}"><div class="knowledge-item-top"><div class="knowledge-item-icon">${kedoIcon('book')}</div><div class="knowledge-item-main"><div class="knowledge-item-title">${esc(k.title)}</div><div class="knowledge-item-meta"><span>${esc(k.category||"Без категории")}</span><i>•</i><span>${esc(k.department_name||"Общее")}</span>${k.folder_name?`<i>•</i><span>${kedoIcon('folder')} ${esc(k.folder_name)}</span>`:""}</div></div>${admin?`<div class="knowledge-item-actions"><button class="secondary" data-action="editKnowledge" data-id="${k.id}">Изменить</button><button class="secondary" data-action="editKnowledgeAccess" data-id="${k.id}">Доступ</button><button class="danger-outline" data-action="deleteKnowledge" data-id="${k.id}">Удалить</button></div>`:""}</div><div class="knowledge-item-content kb-article-body">${renderKnowledgeArticleHtml(k.content)||`<span class="muted">Без текста — только PDF или вложения ниже.</span>`}</div>${renderKnowledgeAttachments(k.id,k.attachments)}</article>`).join("")}</div>`:`<div class="empty knowledge-empty"><div class="knowledge-empty-icon">${kedoIcon('book','premium-icon--xl')}</div><b>Материалов пока нет</b><span>Создайте первый материал — он появится здесь.</span></div>`}</div></section>`;
if(admin){window.__kedoKnowledgeOptions=options;installKnowledgeAccessStyles();renderKnowledgeDraftRules();bindKnowledgeEditorToolbar("kContentToolbar","kContentEditor");$("kbNewMaterialToggle")?.addEventListener("click",()=>{const card=$("kbNewMaterialCard"),body=$("kbNewMaterialBody"),btn=$("kbNewMaterialToggle");if(!card||!body||!btn)return;const opening=body.hidden;body.hidden=!opening;btn.setAttribute("aria-expanded",String(opening));card.classList.toggle("kb-compose-open",opening);});$("kbOpenBuilder")?.addEventListener("click",()=>openKnowledgeAccessBuilder(knowledgeDraftRules,options,rules=>{state.knowledgeDraftRules=rules;renderKnowledgeDraftRules();}));$("kKnowledgeRuleSummary")?.addEventListener("click",e=>{const b=e.target.closest("[data-kb-rule-remove]");if(!b)return;state.knowledgeDraftRules.splice(Number(b.dataset.kbRuleRemove),1);if(!state.knowledgeDraftRules.length)state.knowledgeDraftRules=[{principal_type:"ALL",principal_value:""}];renderKnowledgeDraftRules();});}
$("kbNewFolder")?.addEventListener("click",()=>manageKnowledgeFolder("create"));
$("kbLibraryFolder")?.addEventListener("change",e=>{state.knowledgeFolderId=e.target.value?Number(e.target.value):null;renderKnowledge();});
document.querySelectorAll("[data-kb-folder]").forEach(button=>button.addEventListener("click",()=>{state.knowledgeFolderId=Number(button.dataset.kbFolder)||null;renderKnowledge();}));
document.querySelectorAll("[data-kb-folder-action]").forEach(button=>button.addEventListener("click",event=>{event.stopPropagation();manageKnowledgeFolder(button.dataset.kbFolderAction,Number(button.dataset.kbFolderId),button.dataset.kbFolderName);}));
const filterKbLibrary=()=>{const q=String($("kbLibrarySearch")?.value||"").trim().toLowerCase();const cat=String($("kbLibraryCategory")?.value||"").trim().toLowerCase();let visible=0;document.querySelectorAll("#kbLibraryGrid .knowledge-item").forEach(item=>{const okCat=!cat||(item.dataset.kbCategory||"")===cat;const hay=[item.dataset.kbTitle||"",item.dataset.kbCategory||"",item.dataset.kbText||""].join(" ");const okQ=!q||hay.includes(q);const show=okCat&&okQ;item.style.display=show?"inline-block":"none";if(show)visible++;});const badge=$("kbVisibleCount");if(badge)badge.textContent=`${visible} ${visible===1?"материал":"материалов"}`;};
$("kbLibrarySearch")?.addEventListener("input",filterKbLibrary);
$("kbLibraryCategory")?.addEventListener("change",filterKbLibrary);
if(trainingMode){
  const hero=document.querySelector(".knowledge-hero");
  hero?.classList.add("training-knowledge-hero");
  const eyebrow=hero?.querySelector(".knowledge-hero-copy .eyebrow"),title=hero?.querySelector(".knowledge-hero-copy .page-title"),intro=hero?.querySelector(".knowledge-hero-copy p");
  if(eyebrow)eyebrow.textContent="УЧЕБНЫЙ РЕЖИМ";
  if(title)title.textContent="Обучение сотрудника";
  if(intro)intro.textContent="Здесь собраны только материалы, которые нужно пройти новым сотрудникам.";
  hero?.insertAdjacentHTML("afterend",trainingProgress);
  document.querySelector(".knowledge-filter-bar")?.remove();
  document.querySelector(".knowledge-library-head .eyebrow")?.replaceChildren(document.createTextNode("ПАПКА ДЛЯ НОВЫХ СОТРУДНИКОВ"));
  const libraryTitle=document.querySelector(".knowledge-library-head h2"),libraryIntro=document.querySelector(".knowledge-library-head p");
  if(libraryTitle)libraryTitle.textContent="Учебные материалы";
  if(libraryIntro)libraryIntro.textContent="Откройте каждую карточку и подтвердите просмотр после ознакомления.";
  document.querySelector(".kb-folder-grid")?.remove();
  document.querySelectorAll(".knowledge-item").forEach((card,index)=>{
    const item=list[index];if(!item)return;
    card.dataset.kbTrainingCard=String(item.id);card.dataset.kbTrainingViewed=item.training_viewed?"true":"false";
    const done=!!item.training_viewed;
    card.insertAdjacentHTML("beforeend",`<div class="training-card-footer"><span class="training-card-status ${done?"is-done":""}">${done?"✓ Материал просмотрен":"Материал ещё не просмотрен"}</span><button type="button" class="${done?"secondary":"primary"} ${done?"is-done":""}" data-action="markKnowledgeViewed" data-id="${item.id}" ${done?"disabled":""}>${done?"✓ Просмотрено":"Отметить как просмотренное"}</button></div>`);
  });
}
installKnowledgeAccessStyles();
mountKnowledgePlayers($("main"));
installTrainingViewTracking();
}
async function addKnowledge(){
try{let documentId=$("kDocumentSelect")?.value||"";const file=$("kDocumentFile")?.files?.[0];
if(file){const form=new FormData();form.append("title",file.name);form.append("file",file);const uploaded=await api("/api/knowledge/upload-pdf",{method:"POST",body:form});documentId=String(uploaded.id);}
const rules=(state.knowledgeDraftRules||[]).map(r=>({principalType:r.principal_type,principalValue:r.principal_value}));
if(!rules.length)throw Error("Настройте доступ к материалу.");
const folderValue=$("kFolderSelect")?.value||"";
await api("/api/knowledge/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:$("kTitle").value,category:$("kCategory").value,content:getKnowledgeEditorHtml("kContentEditor"),rules,folderId:folderValue?Number(folderValue):null,documentIds:documentId?[Number(documentId)]:[]})});
state.knowledgeDraftRules=[{principal_type:"ALL",principal_value:""}];
renderKnowledge();
}catch(e){msg("kMsg",e.message);}}
async function deleteKnowledge(id){
if(!await kedoConfirm("Удалить материал из базы знаний?"))return;
try{await api("/api/knowledge/"+id,{method:"DELETE"});renderKnowledge();}catch(e){kedoAlert(e.message);}}
async function editKnowledge(id){
try{
  const item=await api("/api/knowledge/"+id);
  const editFolderOptions=knowledgeFolderOptions(state.knowledgeFolders).filter(({folder})=>!folder.archived_at).map(({folder,depth})=>`<option value="${folder.id}" ${String(item.folder_id)===String(folder.id)?"selected":""}>${"  ".repeat(depth)}${esc(folder.name)}</option>`).join("");
  installAdminEditStyles();
  installKnowledgeAccessStyles();
  const overlay=document.createElement("div");overlay.className="admin-edit-overlay";
  overlay.innerHTML=`<div class="admin-edit-modal knowledge-edit-modal"><h2>Изменить материал</h2><div class="kb-edit-grid"><label><span>Название</span><input id="kbEditTitle" value="${esc(item.title||"")}"></label><label><span>Категория</span><input id="kbEditCategory" value="${esc(item.category||"")}"></label><label><span>Папка</span><select id="kbEditFolder"><option value="">Без папки</option>${editFolderOptions}</select></label></div><label class="kb-edit-text-label"><span>Текст</span><div class="kb-article-shell"><div class="kb-article-toolbar" id="kbEditToolbar"><button type="button" data-kb-cmd="bold"><b>B</b></button><button type="button" data-kb-cmd="italic"><i>I</i></button><button type="button" data-kb-cmd="insertUnorderedList">•</button><button type="button" data-kb-cmd="h2">H2</button><button type="button" data-kb-cmd="quote">“</button><button type="button" data-kb-cmd="link">🔗</button><button type="button" data-kb-cmd="video">▶</button></div><div id="kbEditEditor" class="kb-article-editor" contenteditable="true"></div></div></label><p id="kbEditMsg" class="err"></p><div class="admin-edit-actions"><button type="button" class="secondary" id="kbEditCancel">Отмена</button><button type="button" class="primary" id="kbEditSave">Сохранить</button></div></div>`;
  document.body.appendChild(overlay);
  setKnowledgeEditorHtml("kbEditEditor",item.content||"");
  bindKnowledgeEditorToolbar("kbEditToolbar","kbEditEditor");
  const close=()=>overlay.remove();
  overlay.querySelector("#kbEditCancel").onclick=close;
  overlay.onclick=e=>{if(e.target===overlay)close();};
  overlay.querySelector("#kbEditSave").onclick=async()=>{
    try{
      const folderValue=overlay.querySelector("#kbEditFolder").value;
      await api("/api/knowledge/"+id,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:overlay.querySelector("#kbEditTitle").value,category:overlay.querySelector("#kbEditCategory").value,content:getKnowledgeEditorHtml("kbEditEditor"),folderId:folderValue?Number(folderValue):null})});
      close();renderKnowledge();
    }catch(e){msg("kbEditMsg",e.message);}
  };
}catch(e){kedoAlert(e.message);}}
function accessRuleLabel(r,options){const type=String(r.principal_type||r.principalType||"").toUpperCase(),value=String(r.principal_value??r.principalValue??"");if(type==="ALL")return "Все сотрудники";if(type==="ROLE")return "Роль: "+roleLabel(value);if(type==="POSITION")return "Должность: "+value;if(type==="DEPARTMENT"){const d=(options.departments||[]).find(x=>String(x.value)===value);return "Подразделение: "+(d?.name||value);}if(type==="GROUP"){const g=(options.groups||[]).find(x=>String(x.value)===value);return "Филиал / группа: "+(g?.name||value);}if(type==="USER"){const u=(options.users||[]).find(x=>String(x.value)===value);return "Сотрудник: "+(u?.name||value);}return type+": "+value;}
async function editKnowledgeAccess(id,context={}){
 try{
   const [current,options]=await Promise.all([api("/api/knowledge/"+id+"/access"),api("/api/knowledge/access/options")]);
   openKnowledgeAccessBuilder(current,options,async rules=>{try{await api("/api/knowledge/"+id+"/access",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({entries:rules})});if(context.returnToAccess)await renderAdminAccess();else await renderKnowledge();}catch(e){kedoAlert(e.message);}});
 }catch(e){kedoAlert(e.message);}}
function installKnowledgeAccessStyles(){
  let s=document.getElementById("kedoKnowledgeAccessStyles");
  if(!s){s=document.createElement("style");s.id="kedoKnowledgeAccessStyles";document.head.appendChild(s);}
  s.textContent=`
.kb-access-preview{display:flex;flex-wrap:wrap;gap:8px;min-height:42px;padding:10px;margin:12px 0;background:#f7fbff;border:1px solid #d9e7f2;border-radius:14px}.kb-rule-chip{display:flex;align-items:center;gap:7px;padding:7px 10px;border-radius:999px;background:#fff;border:1px solid #cfe0ed;color:#1c527d;font-size:12px}.kb-rule-chip button{border:0;background:transparent;color:#7891a6;font-size:17px;cursor:pointer}.kb-access-builder-trigger{width:100%;display:grid;grid-template-columns:42px 1fr auto;align-items:center;gap:12px;text-align:left;padding:14px 16px;border:1px solid #cfe1ee;border-radius:14px;background:linear-gradient(135deg,#f7fbff,#eef6fb);cursor:pointer;color:#183c5c}.kb-access-builder-trigger:hover{border-color:#9ec1d9;box-shadow:0 8px 24px rgba(26,78,116,.09)}.kb-trigger-icon{width:42px;height:42px;border-radius:12px;background:#fff;display:grid;place-items:center;color:#1971ac;font-weight:800}.kb-access-builder-trigger small{display:block;margin-top:4px;color:#7a8e9f;font-weight:400}.kb-trigger-arrow{font-size:22px;color:#5b7b95}.kb-access-builder-overlay{display:flex!important;align-items:center!important;justify-content:center!important;padding:16px!important;overflow:auto!important;inset:0!important}.kb-access-builder-modal{width:min(1050px,calc(100vw - 32px))!important;max-width:min(1050px,calc(100vw - 32px))!important;max-height:min(90vh,780px)!important;padding:0!important;margin:auto!important;overflow:hidden!important;flex-shrink:0!important;border-radius:20px!important;box-shadow:0 26px 80px rgba(10,35,57,.25)!important}.kb-builder-head{display:flex;justify-content:space-between;gap:20px;align-items:flex-start;padding:22px 24px;border-bottom:1px solid #e1eaf1;background:linear-gradient(135deg,#f9fcff,#eef6fb)}.kb-builder-head h2{margin:4px 0 5px;color:#183c5c}.kb-builder-head p{max-width:650px;margin:0}.kb-builder-body{display:grid;grid-template-columns:280px minmax(0,1fr);min-height:470px;max-height:calc(90vh - 170px)}.kb-builder-side{padding:16px;background:#f7fafc;border-right:1px solid #e0e8ef;overflow:auto}.kb-scope-tab{width:100%;display:grid;grid-template-columns:38px 1fr;align-items:center;gap:10px;text-align:left;padding:12px;border:1px solid transparent;background:transparent;border-radius:12px;margin-bottom:8px;color:#244663;cursor:pointer}.kb-scope-tab>span:first-child{width:38px;height:38px;border-radius:10px;background:#fff;display:grid;place-items:center;color:#3174a7}.kb-scope-tab b{display:block}.kb-scope-tab small{display:block;color:#8b9baa;margin-top:2px}.kb-scope-tab:hover{background:#eef6fb}.kb-scope-tab.active{background:#e8f3fb;border-color:#c5ddeb;color:#0f5f92}.kb-builder-main{padding:18px 20px;overflow:hidden;display:flex;flex-direction:column;min-width:0}.kb-builder-current{margin-bottom:14px;min-width:0}.kb-builder-current-title{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#7b8c9d;font-weight:700;margin-bottom:8px}.kb-rule-list{display:grid;gap:8px;max-height:150px;overflow:auto}.kb-rule-row{display:grid;grid-template-columns:34px minmax(0,1fr) auto;gap:10px;align-items:center;padding:10px 12px;border:1px solid #dce7ee;border-radius:12px;background:#fff;min-width:0}.kb-rule-row>div{min-width:0;overflow:hidden}.kb-rule-icon{width:30px;height:30px;border-radius:9px;background:#edf6fb;color:#2471a4;display:grid;place-items:center;font-weight:800;flex-shrink:0}.kb-rule-row strong{display:block;color:#234761;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.kb-rule-row small{display:block;color:#8a9aab;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.kb-rule-row .danger-outline{white-space:nowrap;flex-shrink:0;padding:6px 10px;font-size:12px}.kb-builder-controls{min-height:0}.kb-builder-control-head{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-bottom:10px}.kb-builder-control-head b{display:block;color:#244560}.kb-builder-control-head small{display:block;color:#8a9aab;margin-top:3px}.kb-selection-count{padding:5px 9px;border-radius:999px;background:#edf5fa;color:#216590;font-size:11px;font-weight:700}.kb-builder-search{display:flex;align-items:center;gap:8px;border:1px solid #d4e1ea;border-radius:12px;background:#fff;padding:0 11px;margin-bottom:10px}.kb-builder-search span{font-size:19px;color:#83a0b6}.kb-builder-search input{border:0!important;box-shadow:none!important;width:100%;padding:11px 0!important;outline:none!important;background:transparent!important}.kb-option-list{overflow:auto;min-height:180px;max-height:285px;padding-right:4px;display:grid;gap:6px}.kb-option{display:grid;grid-template-columns:18px 1fr;gap:10px;align-items:center;padding:10px 11px;border:1px solid #e0e8ee;border-radius:11px;background:#fff;cursor:pointer}.kb-option:hover{border-color:#bcd3e2;background:#f9fcff}.kb-option input{position:absolute;opacity:0;pointer-events:none}.kb-option-check{width:18px;height:18px;border:2px solid #bfd0dc;border-radius:5px;position:relative}.kb-option input:checked+.kb-option-check{background:#1674ad;border-color:#1674ad}.kb-option input:checked+.kb-option-check:after{content:'✓';color:#fff;font-size:12px;position:absolute;left:2px;top:-1px}.kb-option-copy b{display:block;color:#28485f}.kb-option-copy small{display:block;color:#8999a8;margin-top:2px}.kb-builder-wide-empty{display:grid;place-items:center;text-align:center;align-content:center;height:100%;min-height:280px;color:#6f8394}.kb-big-icon{font-size:42px;margin-bottom:10px}.kb-builder-wide-empty h3{margin:0 0 6px;color:#294c65}.kb-builder-wide-empty p{max-width:430px}.kb-builder-footer{display:flex;justify-content:space-between;gap:15px;align-items:center;padding:14px 20px;border-top:1px solid #e1eaf1;background:#fbfdff}.kb-builder-footer>div{display:flex;gap:8px}@media(max-width:820px){.kb-builder-body{grid-template-columns:1fr;max-height:calc(88vh - 180px)}.kb-builder-side{display:flex;gap:8px;overflow:auto;border-right:0;border-bottom:1px solid #e0e8ef;padding:10px}.kb-scope-tab{min-width:205px;margin:0}.kb-builder-footer{flex-direction:column;align-items:stretch}.kb-builder-footer>div{justify-content:flex-end}}

.access-editor-box{padding:14px;border:1px solid #dbe5ef;border-radius:10px;background:#f8fafc;margin:12px 0 16px}.knowledge-access-modal{width:min(680px,calc(100vw - 40px))!important}.knowledge-rule{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:10px 12px;border:1px solid #e2e8f0;border-radius:8px;background:#f8fafc;margin-bottom:8px}.knowledge-access-add{display:grid;grid-template-columns:1fr 1.4fr auto;gap:8px;margin-top:14px}.knowledge-access-add select{min-width:0}@media(max-width:700px){.knowledge-access-add{grid-template-columns:1fr}.knowledge-rule{align-items:flex-start;flex-direction:column}}
.kb-article-shell{border:1px solid #cfdce7;border-radius:12px;background:#fff;overflow:hidden}.kb-article-toolbar{display:flex;flex-wrap:wrap;gap:6px;padding:8px 10px;border-bottom:1px solid #e6eef5;background:#f7fbff}.kb-article-toolbar button{min-width:34px;height:34px;padding:0 10px;border:1px solid #cfe0ed;border-radius:8px;background:#fff;color:#1c527d;cursor:pointer;font:inherit}.kb-article-toolbar button:hover{border-color:#9ec1d9;background:#eef6fb}.kb-article-editor{min-height:180px;max-height:420px;overflow:auto;padding:14px 16px;line-height:1.55;color:#203b58;outline:none}.kb-article-editor:empty:before{content:attr(data-placeholder);color:#98a7b5;pointer-events:none}.kb-article-editor h2{font-size:18px;margin:14px 0 8px;color:#173f66}.kb-article-editor blockquote{margin:10px 0;padding:10px 14px;border-left:3px solid #9ec1d9;background:#f7fbff;color:#4a647a}.kb-article-editor a{color:#1674ad;text-decoration:underline}.kb-video-wrap{position:relative;width:100%;max-width:720px;margin:14px 0;padding-top:56.25%;border-radius:12px;overflow:hidden;background:#0f1720}.kb-video-wrap iframe{position:absolute;inset:0;width:100%;height:100%;border:0}.kb-player{position:relative;width:100%;max-width:760px;margin:16px 0;border-radius:16px;overflow:hidden;background:linear-gradient(180deg,#10283d 0%,#0d2137 100%);box-shadow:0 18px 40px rgba(13,33,55,.28);border:1px solid rgba(255,255,255,.08);user-select:none}.kb-player-stage{position:relative;width:100%;padding-top:56.25%;background:#0a1a2b}.kb-player-stage video,.kb-player-stage iframe,.kb-player-poster,.kb-player-shade{position:absolute;inset:0;width:100%;height:100%;border:0;object-fit:cover}.kb-player-stage video{background:#000;object-fit:contain}.kb-player-shade{background:linear-gradient(180deg,rgba(8,24,40,.15) 0%,rgba(8,24,40,.55) 100%)}.kb-player-bigplay{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;border:0;background:transparent;cursor:pointer;z-index:2;color:#fff}.kb-player-playicon{width:74px;height:74px;border-radius:50%;background:linear-gradient(180deg,#2d8fd4,#1a5f96);box-shadow:0 10px 28px rgba(26,95,150,.45),inset 0 1px 0 rgba(255,255,255,.25);position:relative}.kb-player-playicon:before{content:"";position:absolute;left:28px;top:24px;border-style:solid;border-width:13px 0 13px 22px;border-color:transparent transparent transparent #fff}.kb-player-bigplay:hover .kb-player-playicon{transform:scale(1.04);filter:brightness(1.08)}.kb-player-playlabel{font-size:12px;letter-spacing:.12em;text-transform:uppercase;font-weight:700;opacity:.9;text-shadow:0 1px 8px rgba(0,0,0,.4)}.kb-player.is-playing .kb-player-bigplay{opacity:0;pointer-events:none}.kb-player-bar{display:flex;align-items:center;gap:8px;padding:10px 12px 12px;background:linear-gradient(180deg,rgba(13,33,55,0),rgba(8,22,38,.96) 28%)}.kb-player-ctrl{width:32px;height:32px;border:0;border-radius:8px;background:rgba(255,255,255,.08);color:#fff;cursor:pointer;position:relative;flex-shrink:0}.kb-player-ctrl:hover{background:rgba(255,255,255,.16)}.kb-player-toggle:before{content:"";position:absolute;left:12px;top:8px;border-style:solid;border-width:8px 0 8px 12px;border-color:transparent transparent transparent #fff}.kb-player.is-playing .kb-player-toggle:before{left:10px;top:9px;width:5px;height:14px;border:0;background:#fff;box-shadow:8px 0 0 #fff;border-style:none}.kb-player-time{color:#d7e6f2;font-size:11px;min-width:34px;font-variant-numeric:tabular-nums}.kb-player-seek{position:relative;flex:1;height:18px;cursor:pointer;display:flex;align-items:center}.kb-player-seek:before{content:"";position:absolute;left:0;right:0;height:6px;border-radius:999px;background:rgba(255,255,255,.16)}.kb-player-seek-buf,.kb-player-seek-fill{position:absolute;left:0;height:6px;border-radius:999px;pointer-events:none;width:0}.kb-player-seek-buf{background:rgba(255,255,255,.28)}.kb-player-seek-fill{background:linear-gradient(90deg,#5eb6ea,#1a5f96);transition:width .16s linear}.kb-player.is-seeking .kb-player-seek-fill{transition:none}.kb-player-seek-thumb{position:absolute;top:50%;left:0;width:14px;height:14px;margin-left:-7px;border-radius:50%;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.35);transform:translateY(-50%) scale(.86);pointer-events:none;transition:transform .15s}.kb-player-seek:hover .kb-player-seek-thumb,.kb-player.is-seeking .kb-player-seek-thumb{transform:translateY(-50%) scale(1)}.kb-player-seek-tip{position:absolute;bottom:20px;transform:translateX(-50%);background:#0d2137;color:#fff;font-size:10px;padding:3px 6px;border-radius:6px;opacity:0;pointer-events:none;white-space:nowrap;border:1px solid rgba(255,255,255,.12)}.kb-player-seek:hover .kb-player-seek-tip,.kb-player.is-seeking .kb-player-seek-tip{opacity:1}.kb-player-volwrap{display:flex;align-items:center;gap:2px;flex-shrink:0}.kb-player-vol{-webkit-appearance:none;appearance:none;width:78px;height:18px;margin:0;background:transparent;cursor:pointer}.kb-player-vol::-webkit-slider-runnable-track{height:4px;background:rgba(255,255,255,.22);border-radius:99px}.kb-player-vol::-webkit-slider-thumb{-webkit-appearance:none;width:12px;height:12px;border-radius:50%;background:#fff;margin-top:-4px;box-shadow:0 1px 4px rgba(0,0,0,.35)}.kb-player-vol::-moz-range-track{height:4px;background:rgba(255,255,255,.22);border-radius:99px;border:0}.kb-player-vol::-moz-range-thumb{width:12px;height:12px;border:0;border-radius:50%;background:#fff}.kb-player-mute:before{content:"";position:absolute;left:8px;top:11px;width:8px;height:10px;background:#fff;clip-path:polygon(0 30%,55% 30%,100% 0,100% 100%,55% 70%,0 70%)}.kb-player.is-muted .kb-player-mute:after{content:"";position:absolute;left:8px;top:8px;width:16px;height:16px;border-top:2px solid #ff8a8a;transform:rotate(45deg);transform-origin:left top}.kb-player-speed{position:relative;flex-shrink:0}.kb-player-speed-btn{min-width:42px;height:32px;border:0;border-radius:8px;background:rgba(255,255,255,.08);color:#fff;cursor:pointer;font:inherit;font-size:12px;font-weight:700}.kb-player-speed-btn:hover,.kb-player-speed-menu button:hover{background:rgba(255,255,255,.16)}.kb-player-speed-menu{position:absolute;right:0;bottom:38px;display:flex;flex-direction:column;min-width:118px;padding:6px;border-radius:10px;background:#10283d;border:1px solid rgba(255,255,255,.08);box-shadow:0 12px 28px rgba(0,0,0,.4);z-index:6}.kb-player-speed-menu[hidden]{display:none!important}.kb-player-speed-menu button{border:0;background:transparent;color:#d7e6f2;text-align:left;padding:7px 10px;border-radius:7px;cursor:pointer;font:inherit;font-size:12px}.kb-player-speed-menu button.is-active{background:rgba(94,182,234,.2);color:#fff;font-weight:700}.kb-player-fs:before{content:"";position:absolute;inset:9px;border:2px solid #fff;border-radius:2px}.kb-player:fullscreen,.kb-player:-webkit-full-screen{max-width:none;width:100%;height:100%;border-radius:0;margin:0}.kb-player:fullscreen .kb-player-stage,.kb-player:-webkit-full-screen .kb-player-stage{padding-top:0;height:calc(100% - 58px)}.kb-video-dialog-overlay,.kb-link-dialog-overlay{position:fixed!important;inset:0!important;left:0!important;top:0!important;right:0!important;bottom:0!important;width:100vw!important;height:100vh!important;margin:0!important;padding:20px!important;display:flex!important;align-items:center!important;justify-content:center!important;overflow:auto!important;box-sizing:border-box!important;background:rgba(15,23,42,.62)!important;z-index:2147483000!important}.kb-video-dialog,.kb-link-dialog{width:min(480px,calc(100vw - 32px))!important;max-height:calc(100vh - 40px)!important;margin:auto!important;align-self:center!important;flex-shrink:0!important;background:#fff!important;color:#172033!important}.kb-video-dialog [data-kb-video-pane][hidden],.kb-video-dialog [hidden]{display:none!important}.kb-video-tabs{display:flex;gap:8px;margin:0 0 14px}.kb-video-tabs button{flex:1;height:38px;border:1px solid #cfe0ed;border-radius:10px;background:#fff;color:#1c527d;cursor:pointer;font:inherit;font-weight:600}.kb-video-tabs button.is-active{background:#1a5f96;border-color:#1a5f96;color:#fff}.kb-article-editor .kb-player{max-width:100%}.kb-editor-hint{display:block;margin-top:8px;color:#7b8ea0;font-size:11px}.kb-link-dialog{width:min(460px,calc(100vw - 32px))!important}.kb-link-dialog-hint{margin:-4px 0 14px}.kb-link-field{display:block!important;margin:0 0 12px!important}.kb-link-field>span{display:block;margin-bottom:6px;font-weight:600;color:#314b63}.kb-link-field input{width:100%;box-sizing:border-box;min-height:42px;padding:9px 11px;border:1px solid #cfdce7;border-radius:9px;background:#fff;color:#203b58;font:inherit;outline:none}.kb-link-field input:focus{border-color:#76a9ce;box-shadow:0 0 0 3px rgba(23,105,170,.09)}.kb-article-body{line-height:1.55;color:#334e68}.kb-article-body h2{font-size:17px;margin:10px 0 6px}.knowledge-item-actions{display:flex;flex-wrap:wrap;gap:6px;align-items:center}.knowledge-edit-modal{width:min(760px,calc(100vw - 32px))!important;max-width:min(760px,calc(100vw - 32px))!important}.knowledge-edit-modal .kb-edit-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:12px}.knowledge-edit-modal .kb-edit-grid label{display:block!important;margin:0!important}.knowledge-edit-modal .kb-edit-grid label>span{display:block;margin-bottom:6px;font-weight:600;color:#314b63}.knowledge-edit-modal label.kb-edit-text-label{display:block!important;margin-top:14px!important}.knowledge-edit-modal label.kb-edit-text-label>span{display:block;margin-bottom:6px;font-weight:600;color:#314b63}.knowledge-filter-bar{display:grid;grid-template-columns:minmax(0,1fr) minmax(180px,.45fr);gap:10px;margin:0 0 16px}.knowledge-material-grid{display:block!important;column-count:2;column-gap:12px}.knowledge-item{display:inline-block;width:100%;margin:0 0 12px;break-inside:avoid;-webkit-column-break-inside:avoid;height:auto!important}.knowledge-filter-search{display:flex;align-items:center;gap:8px;padding:0 12px;border:1px solid #cfdce7;border-radius:12px;background:#fff}.knowledge-filter-search span{color:#8aa0b3;font-size:16px}.knowledge-filter-search input{border:0!important;box-shadow:none!important;width:100%;padding:11px 0!important;outline:none!important;background:transparent!important}#kbLibraryCategory{width:100%;min-height:42px;padding:9px 11px;border:1px solid #cfdce7;border-radius:12px;background:#fff;color:#203b58;font:inherit}@media(max-width:720px){.knowledge-filter-bar{grid-template-columns:1fr}.knowledge-edit-modal .kb-edit-grid{grid-template-columns:1fr}}
`;document.head.appendChild(s);}

(function installV14Styles(){
if(document.getElementById("kedoV14Styles"))return;
const s=document.createElement("style");s.id="kedoV14Styles";s.textContent=`
.kb-file-box{padding:12px;border:1px solid #e2e8f0;border-radius:8px;background:#f8fafc}
.kb-attachments{margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.kb-attachment-item{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:8px 10px;border:1px solid #cbd5e1;border-radius:10px;background:#fff;max-width:100%}
.kb-attachment-badge{font-size:10px;font-weight:800;color:#64748b;background:#f1f5f9;padding:2px 7px;border-radius:5px;letter-spacing:.04em}
.kb-attachment-name{min-width:0;max-width:min(360px,55vw);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#1d5f95;font-size:12px;font-weight:600}
.kb-attachment{display:inline-block;padding:7px 10px;border:1px solid #cbd5e1;border-radius:7px;text-decoration:none;color:#1d5f95;background:#fff;font-size:11px}
.kb-attachment-preview,.kb-attachment-download{font-size:11px!important;padding:6px 10px!important;white-space:nowrap}
.kb-attachment:hover,.kb-attachment-download:hover{background:#f1f5f9}
`;document.head.appendChild(s);
})();
function installTaskStyles(){
  if(document.getElementById("kedoTaskStyles"))return;
  const st=document.createElement("style");st.id="kedoTaskStyles";st.textContent=`
    .tasks-page{padding-bottom:24px}
    .tasks-hero{display:flex;justify-content:space-between;align-items:flex-end;gap:18px;margin-bottom:16px}
    .tasks-hero h1{margin:4px 0 5px}
    .tasks-summary{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin:0 0 14px}
    .tasks-summary-card{border:1px solid #dce6ef;background:#fff;border-radius:12px;padding:13px 14px;cursor:pointer;text-align:left;transition:.16s ease}
    .tasks-summary-card:hover{border-color:#bfd2e2;box-shadow:0 6px 18px rgba(24,55,84,.06);transform:translateY(-1px)}
    .tasks-summary-card span{display:block;color:#718196;font-size:11px}.tasks-summary-card strong{display:block;color:#173f66;font-size:23px;margin:3px 0}.tasks-summary-card small{display:block;color:#8a99a8;font-size:10px}
    .tasks-summary-card.alert strong{color:#c23a32}
    .task-create-shell{border:1px solid #dce6ef;border-radius:14px;background:#fff;overflow:hidden;margin-bottom:14px}
    .task-create-head{display:flex;align-items:center;gap:13px;padding:15px 17px;cursor:pointer;background:#fff}
    .task-create-head:hover{background:#fbfdff}
    .task-create-icon{width:34px;height:34px;border-radius:10px;background:#eaf3fa;color:#1769aa;display:grid;place-items:center;font-size:20px;font-weight:700}
    .task-create-head-copy{min-width:0;flex:1}.task-create-head-copy strong{display:block;color:#203b58;font-size:16px}.task-create-head-copy small{display:block;margin-top:3px;color:#7b8da0;font-size:11px}
    .task-create-chevron{font-size:20px;color:#8ca0b1;transition:transform .18s ease}.task-create-shell.open .task-create-chevron{transform:rotate(180deg)}
    .task-create-body{padding:0 17px 17px;border-top:1px solid #edf2f6}.task-create-body .row{margin-top:14px}.task-create-body label{display:block;margin-bottom:6px;font-weight:600;color:#344b62}.task-create-body textarea{min-height:105px}
    .task-create-footer{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-top:12px;padding-top:12px;border-top:1px solid #edf2f6}
    .task-section{margin:12px 0;border:1px solid #dce6ef;border-radius:14px;background:#fff;overflow:hidden}
    .task-section-head{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid #edf2f6}
    .task-section-head h2{margin:3px 0 2px;font-size:17px}.task-section-head .muted{font-size:11px}
    .section-count{display:inline-flex;align-items:center;justify-content:center;min-width:28px;height:28px;padding:0 9px;border-radius:999px;background:#edf5fb;color:#176aa8;font-weight:700;font-size:12px}
    .task-section-list{padding:4px 14px 10px}
    .task-card-modern{padding:15px 2px 14px;margin:0;border:0;border-bottom:1px solid #edf2f6;background:#fff;box-shadow:none;border-radius:0}
    .task-card-modern:last-child{border-bottom:0}
     .task-card-head{display:flex;justify-content:space-between;align-items:flex-start;gap:14px}.task-kicker{font-size:10px;text-transform:uppercase;letter-spacing:.06em;color:#718397;font-weight:700}.task-title{font-size:16px;font-weight:700;color:#173b62;margin-top:4px}.task-badges{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:5px}.task-status,.task-priority{display:inline-flex;align-items:center;white-space:nowrap;padding:5px 9px;border-radius:999px;font-size:11px;font-weight:700}.task-status{background:#eef5fa;color:#176aa8}.task-priority{background:#edf2f6;color:#66788a}.priority-urgent{background:#fff0f0;color:#b52d2d}.priority-high{background:#fff4df;color:#a46700}.priority-low{background:#f1f3f5;color:#778494}.status-done,.status-acknowledged{background:#eaf7f0;color:#23744c}.status-cancelled{background:#fff0f0;color:#a63b3b}
    .task-people{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:10px;margin:11px 0;padding:9px 11px;border-radius:10px;background:#f7fafc}.task-person{display:flex;align-items:center;gap:8px;min-width:0}.task-person small,.task-person em{display:block;color:#7b8b9b;font-size:10px;font-style:normal}.task-person strong{display:block;color:#314d68;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.task-avatar{display:flex;align-items:center;justify-content:center;flex:0 0 30px;width:30px;height:30px;border-radius:9px;background:#e7f2fb;color:#176aa8;font-weight:700;font-size:11px}.task-arrow{text-align:center;color:#91a1af}
    .task-description{padding:2px 0 8px;color:#526a7f;line-height:1.5;font-size:12px}.task-doc{display:inline-flex;padding:6px 9px;border-radius:8px;background:#f3f7fa;color:#35627f;font-size:11px}.task-selected-people{padding:7px 9px;border-radius:8px;background:#f7fafc;border:1px solid #e5ebf2;font-size:11px;color:#51667c;margin-bottom:8px}.task-selected-people span{font-weight:700;color:#334e68}
    .task-progress{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:5px;margin:12px 0 10px}.task-step{text-align:center;color:#9aa9b6}.task-step span{display:flex;align-items:center;justify-content:center;width:21px;height:21px;margin:0 auto 4px;border-radius:50%;background:#edf2f6;font-size:10px}.task-step small{font-size:10px}.task-step.done span,.task-step.current span{background:#e7f2fb;color:#176aa8}.task-step.done small,.task-step.current small{color:#176aa8;font-weight:600}
     .task-footer{display:flex;justify-content:space-between;align-items:center;gap:12px;padding-top:9px}.task-meta{display:flex;flex-wrap:wrap;gap:8px;color:#8293a3;font-size:10px}.task-actions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:6px}.task-actions button{min-height:32px;padding:6px 10px;font-size:11px}.task-priority-action{border:1px solid #d8e2e9;border-radius:8px;background:#f8fbfd;color:#60788a;font:inherit;font-size:11px;cursor:pointer}.task-priority-action:hover{border-color:#9bbfd1;background:#edf7fb;color:#176aa8}
    .task-archive-collapsible{margin:12px 0;border:1px solid #dce6ef;border-radius:14px;background:#fff;overflow:hidden}.task-archive-collapsible summary{list-style:none;display:flex;justify-content:space-between;align-items:center;padding:14px 16px;cursor:pointer}.task-archive-collapsible summary::-webkit-details-marker{display:none}.task-archive-collapsible summary span{display:flex;flex-direction:column;gap:2px}.task-archive-collapsible summary strong{color:#203b58}.task-archive-collapsible summary small{color:#8191a1}.task-archive-collapsible summary b{min-width:26px;height:26px;display:grid;place-items:center;border-radius:50%;background:#f1f5f8;color:#6e8193;font-size:11px}.task-archive-collapsible[open] summary{border-bottom:1px solid #edf2f6}.task-archive-body{padding:0 14px 10px}
    .task-group-people-wrap{padding:12px;border:1px solid #e1e8ef;border-radius:10px;background:#f8fafc;margin:0 0 14px}.task-group-hint{font-size:11px;margin:-1px 0 8px}
    @media(max-width:800px){.tasks-summary{grid-template-columns:repeat(2,1fr)}.task-people{grid-template-columns:1fr}.task-arrow{display:none}.task-footer,.task-create-footer{align-items:stretch;flex-direction:column}.task-actions{justify-content:flex-start}}
    .task-field-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:14px;margin-top:14px}.task-field{min-width:0}.task-field>label{display:block;margin:0 0 6px;font-size:12px;font-weight:700;color:#314b63}.task-field input,.task-field select,.task-field textarea{width:100%;box-sizing:border-box;min-height:42px;padding:9px 11px;border:1px solid #cfdce7;border-radius:9px;background:#fff;color:#203b58;font:inherit;outline:none;transition:border-color .16s,box-shadow .16s,background .16s}.task-field textarea{min-height:112px;resize:vertical;line-height:1.45}.task-field input:focus,.task-field select:focus,.task-field textarea:focus{border-color:#76a9ce;box-shadow:0 0 0 3px rgba(23,105,170,.09)}.task-field input::placeholder,.task-field textarea::placeholder{color:#98a7b5}.task-field-grid+.task-field-grid{margin-top:14px}.task-field-stack{display:grid;gap:14px;margin-top:14px}.task-field-stack .task-field textarea{min-height:118px}.task-create-body{background:#fbfdff}.task-create-body>.task-field-grid:first-child{padding-top:15px;margin-top:0}.task-create-body>.task-field-grid:first-child .task-field label{margin-top:0}.task-create-footer{background:#fff;margin-left:-17px;margin-right:-17px;padding:13px 17px 0}.task-create-footer .primary{min-width:132px}.admin-org-head-actions{display:flex;align-items:center;gap:9px}.org-group-buttons{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin-top:14px}.org-group-button{min-width:0;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:13px 14px;border:1px solid #dce6ef;border-radius:11px;background:#fff;color:#203b58;text-align:left;cursor:pointer;transition:border-color .16s,box-shadow .16s,transform .16s}.org-group-button:hover{border-color:#bcd2e3;box-shadow:0 5px 15px rgba(24,55,84,.06);transform:translateY(-1px)}.org-group-button-main{min-width:0}.org-group-button-main strong,.org-group-button-main small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.org-group-button-main strong{font-size:13px}.org-group-button-main small{margin-top:4px;color:#7b8ea0;font-size:10px}.org-group-button-arrow{font-size:20px;color:#91a3b2;flex:0 0 auto}.user-menu-button{border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06);color:#fff;border-radius:9px;min-height:36px;padding:7px 11px;cursor:pointer;font:inherit;max-width:330px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.user-menu-button:hover{background:rgba(255,255,255,.13)}.nav button[data-page="knowledge"]{margin-left:4px;padding-left:18px;border-left:1px solid #d5e0e9}.nav button[data-page="admin"]{margin-left:auto}@media(max-width:900px){.nav button[data-page="admin"]{margin-left:0}.nav button[data-page="knowledge"]{margin-left:0;border-left:0;padding-left:14px}}
     @media(max-width:850px){.task-field-grid{grid-template-columns:1fr}.org-group-buttons{grid-template-columns:1fr 1fr}}
     @media(max-width:520px){.tasks-summary{grid-template-columns:1fr}.task-card-head{flex-direction:column}.task-status{align-self:flex-start}}
     .task-focus-toolbar{display:grid;grid-template-columns:minmax(190px,.8fr) minmax(240px,1.2fr) auto;align-items:center;gap:13px;margin:0 0 14px;padding:13px 15px;border:1px solid #dce6ef;border-radius:14px;background:linear-gradient(135deg,#f8fbfe,#fff);box-shadow:0 5px 16px rgba(28,61,88,.035)}
     .task-focus-copy{min-width:0}.task-focus-copy strong{display:block;margin-top:3px;color:#21435f;font-size:14px}.task-focus-copy small{display:block;margin-top:4px;color:#8293a3;font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
     .task-search-box{display:flex;align-items:center;gap:8px;min-width:0;height:40px;padding:0 11px;border:1px solid #cfdde7;border-radius:10px;background:#fff;color:#8299aa}.task-search-box:focus-within{border-color:#76a9ce;box-shadow:0 0 0 3px rgba(23,105,170,.09)}.task-search-box>span{font-size:18px}.task-search-box input{width:100%;min-width:0;border:0!important;outline:0!important;box-shadow:none!important;background:transparent!important;color:#203b58;font:inherit;font-size:12px}.task-filter-list{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:5px}.task-filter{min-height:32px;padding:6px 10px;border:1px solid #d4e1e9;border-radius:999px;background:#fff;color:#5e7586;font:inherit;font-size:11px;font-weight:700;cursor:pointer;transition:.15s ease}.task-filter:hover,.task-filter.active{border-color:#1e70a8;background:#eaf4fa;color:#176aa8}.tasks-summary-card.active{border-color:#70a8c9;background:#f3faff;box-shadow:0 0 0 3px rgba(42,123,181,.08)}
     .task-notes-section{margin:12px 0;border:1px solid #e4d8a9;border-radius:15px;background:linear-gradient(135deg,#fffdf4,#fffaf0);overflow:hidden}.task-notes-head{display:flex;justify-content:space-between;align-items:flex-start;gap:14px;padding:15px 16px;border-bottom:1px solid rgba(220,202,142,.45)}.task-notes-head h2{margin:3px 0 2px;color:#594b25;font-size:17px}.task-notes-head .muted{font-size:11px;color:#897c59}.task-notes-head .primary{white-space:nowrap;background:#96751f;border-color:#96751f}.task-notes-head .primary:hover{background:#7f6217;border-color:#7f6217}.task-notes-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:11px;padding:13px 14px 14px}.task-note-card{position:relative;display:flex;flex-direction:column;min-height:148px;padding:14px;border:1px solid #e7d88e;border-radius:12px;background:#fff8c9;box-shadow:0 5px 12px rgba(125,101,27,.08);transform:rotate(-.35deg);transition:transform .16s ease,box-shadow .16s ease}.task-note-card:nth-child(2n){transform:rotate(.3deg)}.task-note-card:nth-child(3n){transform:rotate(-.1deg)}.task-note-card:hover{z-index:1;transform:translateY(-3px) rotate(0);box-shadow:0 10px 20px rgba(125,101,27,.14)}.task-note-card.note-blue{background:#e9f5ff;border-color:#b9d8ee}.task-note-card.note-green{background:#e9f8ed;border-color:#b9dfc3}.task-note-card.note-pink{background:#fff0f4;border-color:#edc4d0}.task-note-card.is-done{opacity:.68;filter:saturate(.65)}.task-note-top{display:flex;justify-content:space-between;align-items:center;gap:8px}.task-note-label{color:#9b7c24;font-size:8px;font-weight:800;letter-spacing:.12em}.note-blue .task-note-label{color:#27709f}.note-green .task-note-label{color:#428159}.note-pink .task-note-label{color:#ad647b}.task-note-tools{display:flex;gap:3px}.task-note-tool{width:25px;height:25px;padding:0;border:0;border-radius:7px;background:rgba(255,255,255,.45);color:#8a7741;font-size:14px;line-height:1;cursor:pointer}.task-note-tool:hover{background:rgba(255,255,255,.85);color:#5e4d1e}.task-note-card h3{margin:13px 0 3px;color:#4e421f;font-size:14px;line-height:1.25}.task-note-card p{margin:8px 0 auto;color:#635632;font-size:12px;line-height:1.5;white-space:pre-wrap;overflow-wrap:anywhere}.note-blue h3,.note-blue p{color:#275572}.note-green h3,.note-green p{color:#315b3a}.note-pink h3,.note-pink p{color:#754254}.task-note-footer{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:13px;padding-top:9px;border-top:1px dashed rgba(117,96,32,.25)}.task-note-reminder{min-width:0;color:#89743a;font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.task-note-reminder.is-overdue{color:#b43e38;font-weight:800}.task-note-done{padding:5px 8px;border:1px solid rgba(121,102,37,.28);border-radius:7px;background:rgba(255,255,255,.5);color:#725f28;font:inherit;font-size:10px;font-weight:700;cursor:pointer}.task-note-done:hover{background:#fff;color:#4d401d}.task-notes-empty{grid-column:1/-1;display:grid;justify-items:center;gap:5px;padding:24px 15px;text-align:center;color:#887b59}.task-notes-empty>span{font-size:26px;color:#c09a2e}.task-notes-empty strong{color:#67562a;font-size:13px}.task-notes-empty small{max-width:420px;font-size:11px;line-height:1.45}.task-notes-empty button{margin-top:6px}
     .task-note-modal-overlay{position:fixed;inset:0;z-index:31000;display:grid;place-items:center;padding:18px;background:rgba(16,38,55,.56);backdrop-filter:blur(4px)}.task-note-modal{width:min(540px,96vw);max-height:90vh;overflow:auto;padding:22px;border:1px solid #e8dca4;border-radius:18px;background:#fffdf5;box-shadow:0 26px 80px rgba(24,52,67,.28)}.task-note-modal-head{display:flex;justify-content:space-between;align-items:flex-start;gap:15px;margin-bottom:18px}.task-note-modal-head h2{margin:4px 0;color:#4e421f;font-size:22px;letter-spacing:-.03em}.task-note-modal-head p{margin:5px 0 0;color:#8b7e5b;font-size:11px}.task-note-close{width:32px;height:32px;padding:0;border:1px solid #dfd5ac;border-radius:9px;background:#fff;color:#786a43;font-size:21px;line-height:1;cursor:pointer}.task-note-close:hover{background:#fff7d8}.task-note-field{display:block;margin:0 0 14px;color:#65572e;font-size:11px;font-weight:700}.task-note-field>span{display:flex;justify-content:space-between;margin-bottom:6px}.task-note-field>span small{color:#a19472;font-weight:500}.task-note-field input,.task-note-field textarea{width:100%;box-sizing:border-box;padding:10px 11px;border:1px solid #d8cfa9;border-radius:9px;background:#fff;color:#443b22;font:inherit;font-size:12px;outline:0;transition:.15s ease}.task-note-field input{height:40px}.task-note-field textarea{min-height:104px;resize:vertical;line-height:1.5}.task-note-field input:focus,.task-note-field textarea:focus{border-color:#b99632;box-shadow:0 0 0 3px rgba(185,150,50,.14)}.task-note-field>small{display:block;margin-top:5px;color:#998d6f;font-size:10px;font-weight:500}.task-note-editor-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.task-note-color-options{display:flex;gap:8px;align-items:center;height:40px}.task-note-color-option{width:32px;height:32px;padding:4px;border:2px solid transparent;border-radius:50%;background:transparent;cursor:pointer}.task-note-color-option span{display:block;width:100%;height:100%;border-radius:50%;box-shadow:inset 0 0 0 1px rgba(41,45,35,.12)}.task-note-color-option.yellow span{background:#f4df72}.task-note-color-option.blue span{background:#9dd2f3}.task-note-color-option.green span{background:#a9deb5}.task-note-color-option.pink span{background:#efb4c4}.task-note-color-option.active{border-color:#665523;box-shadow:0 0 0 2px rgba(185,150,50,.18)}.task-note-modal-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:20px;padding-top:15px;border-top:1px solid #eee6ca}.task-note-modal-actions .primary{background:#96751f;border-color:#96751f}.task-note-modal-actions .primary:hover{background:#7f6217;border-color:#7f6217}
     @media(max-width:800px){.task-focus-toolbar{grid-template-columns:1fr}.task-filter-list{justify-content:flex-start}.task-notes-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
     @media(max-width:520px){.task-notes-head{flex-direction:column}.task-notes-head .primary{width:100%}.task-notes-grid{grid-template-columns:1fr;padding:11px}.task-note-editor-grid{grid-template-columns:1fr}.task-note-modal{padding:18px}.task-note-modal-actions{justify-content:stretch}.task-note-modal-actions button{flex:1}}
     .task-focus-toolbar{grid-template-columns:minmax(220px,.72fr) minmax(300px,1.65fr) minmax(155px,.46fr);grid-template-areas:"copy search sort" "copy filters filters";gap:10px 13px;padding:14px 15px}
     .task-focus-copy{grid-area:copy;align-self:center}.task-search-box{grid-area:search;width:100%;box-sizing:border-box}.task-sort-box{grid-area:sort;width:100%;box-sizing:border-box}.task-filter-list{grid-area:filters;justify-content:center;align-items:center;padding-top:5px;border-top:1px solid #edf2f6}
     @media(max-width:800px){.task-focus-toolbar{grid-template-columns:1fr;grid-template-areas:"copy" "search" "sort" "filters"}.task-filter-list{justify-content:flex-start}}
   `;document.head.appendChild(st);
}

function branchTicketCategory(value){
  return ({SUPPORT:"Рабочая проблема",ACCOUNT_REMOVAL:"Удаление учётной записи",ACCOUNT_PROBLEM:"Проблема с учётной записью",ORGANIZATION:"Организация филиала"})[String(value||"").toUpperCase()]||"Заявка";
}
function branchTicketStatus(value){
  return ({OPEN:"Новая",IN_PROGRESS:"В работе",RESOLVED:"Решена",CLOSED:"Закрыта"})[String(value||"").toUpperCase()]||value||"—";
}
async function openBranchTicket(){
  document.querySelectorAll(".admin-edit-overlay").forEach(x=>x.remove());
  const overlay=document.createElement("div");
  overlay.className="admin-edit-overlay branch-ticket-overlay";
  overlay.innerHTML=`<div class="admin-edit-modal branch-ticket-modal"><div class="eyebrow">ЗАПРОС В АДМИНИСТРАЦИЮ</div><h2>Новая заявка филиала</h2><p class="muted">Опишите проблему или действие, которое нужно выполнить. Администраторы получат уведомление.</p><label>Тип заявки<select id="branchTicketCategory"><option value="SUPPORT">Рабочая проблема</option><option value="ACCOUNT_REMOVAL">Удаление учётной записи</option><option value="ACCOUNT_PROBLEM">Проблема с учётной записью</option><option value="ORGANIZATION">Организация филиала</option></select></label><label>Коротко о вопросе<input id="branchTicketTitle" maxlength="255" placeholder="Например: удалить учётную запись сотрудника"></label><label>Подробности<textarea id="branchTicketDescription" maxlength="5000" placeholder="Кого это касается, что нужно сделать и почему"></textarea></label><label>Приоритет<select id="branchTicketPriority"><option value="NORMAL">Обычный</option><option value="HIGH">Высокий</option><option value="LOW">Низкий</option></select></label><div class="admin-edit-actions"><button class="secondary" id="branchTicketCancel">Отмена</button><button class="primary" id="branchTicketSave">Создать заявку</button></div><p id="branchTicketMsg" class="muted"></p></div>`;
  document.body.appendChild(overlay);installAdminEditStyles();
  const close=()=>overlay.remove();
  overlay.querySelector("#branchTicketCancel").onclick=close;
  overlay.addEventListener("click",e=>{if(e.target===overlay)close();});
  overlay.querySelector("#branchTicketSave").onclick=async()=>{
    const button=overlay.querySelector("#branchTicketSave"),msgEl=overlay.querySelector("#branchTicketMsg");
    const title=overlay.querySelector("#branchTicketTitle").value.trim();
    if(title.length<3){msgEl.textContent="Напишите короткое описание заявки.";return;}
    button.disabled=true;button.textContent="Создание…";
    try{await api("/api/my-branch/tickets",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({category:overlay.querySelector("#branchTicketCategory").value,title,description:overlay.querySelector("#branchTicketDescription").value.trim(),priority:overlay.querySelector("#branchTicketPriority").value})});close();await renderMyBranch();}
    catch(e){msgEl.textContent=e.message;button.disabled=false;button.textContent="Создать заявку";}
  };
}

function openBranchHierarchyEditor(branchPath, rerender, initialHierarchy){
  document.querySelectorAll(".branch-hierarchy-modal-overlay").forEach(item=>item.remove());
  const hierarchy=initialHierarchy||{items:[]};
  const items=(Array.isArray(hierarchy.items)?hierarchy.items:[]).map(item=>({...item}));
  const roleOptions=(selected)=>["Руководитель организации","Руководитель филиала","Начальник подразделения","Заместитель руководителя","Сотрудник"].map(role=>`<option value="${esc(role)}" ${String(role).toLowerCase()===String(selected||"Сотрудник").toLowerCase()?"selected":""}>${esc(role)}</option>`).join("");
  const rowHtml=item=>`<div class="branch-hierarchy-modal-row" data-hierarchy-position="${esc(item.position)}"><div class="branch-hierarchy-order"><button type="button" data-hierarchy-move="up" aria-label="Поднять выше">↑</button><button type="button" data-hierarchy-move="down" aria-label="Опустить ниже">↓</button></div><div class="branch-hierarchy-position"><strong>${esc(item.position)}</strong><small>${Number(item.employee_count||0)} ${Number(item.employee_count||0)===1?"сотрудник":"сотрудников"}</small></div><select data-hierarchy-role aria-label="Роль должности">${roleOptions(item.position_role)}</select></div>`;
  const overlay=document.createElement("div");overlay.className="branch-hierarchy-modal-overlay";
  overlay.innerHTML=`<form class="branch-hierarchy-modal" role="dialog" aria-modal="true" aria-label="Иерархия должностей"><div class="branch-hierarchy-modal-head"><div><div class="eyebrow">СТРУКТУРА ФИЛИАЛА</div><h2>Иерархия должностей</h2><p>Должности уже собраны из сотрудников филиала. Выберите роль и порядок внутри своего уровня.</p></div><button type="button" class="secondary" data-hierarchy-close>Закрыть</button></div><div class="branch-hierarchy-modal-note"><strong>Как читать список</strong><span>Роль определяет уровень: выше могут руководить ниже. Одинаковые роли равнозначны и не руководят друг другом. Стрелки задают порядок должностей внутри одного уровня.</span></div><div class="branch-hierarchy-modal-list">${items.length?items.map(rowHtml).join(""):'<div class="branch-empty">В филиале пока нет сотрудников с заполненной должностью.</div>'}</div><div class="branch-hierarchy-modal-actions"><button type="button" class="secondary" data-hierarchy-close>Отмена</button><button type="submit" class="primary" ${items.length?"":"disabled"}>Сохранить список</button></div><p class="branch-hierarchy-modal-message muted" aria-live="polite"></p></form>`;
  document.body.appendChild(overlay);
  const form=overlay.querySelector("form"),close=()=>overlay.remove();
  overlay.querySelectorAll("[data-hierarchy-close]").forEach(button=>button.onclick=close);
  overlay.onclick=event=>{if(event.target===overlay)close();};
  overlay.querySelectorAll("[data-hierarchy-move]").forEach(button=>button.onclick=()=>{const row=button.closest(".branch-hierarchy-modal-row"),direction=button.dataset.hierarchyMove;if(!row)return;const sibling=direction==="up"?row.previousElementSibling:row.nextElementSibling;if(!sibling)return;if(direction==="up")row.parentElement.insertBefore(row,sibling);else row.parentElement.insertBefore(sibling,row);});
  form.onsubmit=async event=>{event.preventDefault();const submit=form.querySelector('button[type="submit"]'),message=form.querySelector(".branch-hierarchy-modal-message"),rows=[...form.querySelectorAll(".branch-hierarchy-modal-row")];submit.disabled=true;message.textContent="Сохранение…";try{await api(branchPath+"/position-hierarchy",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:rows.map((row,index)=>({position:row.dataset.hierarchyPosition,role:row.querySelector("[data-hierarchy-role]").value,sortOrder:index}))})});close();await rerender();}catch(error){message.textContent=error.message||"Не удалось сохранить иерархию.";submit.disabled=false;}};
}

function openDepartmentHeadEditor(branchPath, rerender, department, employees){
  document.querySelectorAll(".branch-department-head-overlay").forEach(item=>item.remove());
  const options=(employees||[]).filter(item=>item.is_active).map(item=>`<option value="${item.id}" ${Number(item.id)===Number(department.head_user_id||0)?"selected":""}>${esc(item.full_name)}${item.position?` · ${esc(item.position)}`:""}</option>`).join("");
  const overlay=document.createElement("div");overlay.className="admin-edit-overlay branch-department-head-overlay";
  overlay.innerHTML=`<div class="admin-edit-modal branch-department-head-modal" role="dialog" aria-modal="true" aria-label="Руководитель подразделения"><div class="admin-modal-head"><div><div class="eyebrow">СТРУКТУРА ПОДРАЗДЕЛЕНИЯ</div><h2>Руководитель подразделения</h2><p class="muted">${esc(department.name)} · сотрудники без отдельного руководителя будут направлены к выбранному руководителю.</p></div><button type="button" class="admin-modal-close" data-department-head-close aria-label="Закрыть">×</button></div><div class="admin-modal-body"><label>Кто руководит подразделением<select id="branchDepartmentHead"><option value="">Не назначен</option>${options}</select></label><p class="muted branch-department-head-note">Можно выбрать сотрудника из любого подразделения этого филиала. Если у человека задан непосредственный руководитель вручную, он сохранится.</p><p class="err" id="branchDepartmentHeadMessage" aria-live="polite"></p><div class="admin-edit-actions"><button type="button" class="secondary" data-department-head-close>Отмена</button><button type="button" class="primary" id="branchDepartmentHeadSave">Сохранить</button></div></div></div>`;
  document.body.appendChild(overlay);installAdminEditStyles();
  const close=()=>overlay.remove();overlay.querySelectorAll("[data-department-head-close]").forEach(button=>button.onclick=close);overlay.onclick=event=>{if(event.target===overlay)close();};
  overlay.querySelector("#branchDepartmentHeadSave").onclick=async()=>{
    const button=overlay.querySelector("#branchDepartmentHeadSave"),message=overlay.querySelector("#branchDepartmentHeadMessage");
    button.disabled=true;message.textContent="";
    try{await api(`${branchPath}/departments/${department.id}/head`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({employeeId:overlay.querySelector("#branchDepartmentHead").value?Number(overlay.querySelector("#branchDepartmentHead").value):null})});close();await rerender();}
    catch(error){message.textContent=error.message||"Не удалось сохранить руководителя.";button.disabled=false;}
  };
}

function openEmployeeSupervisorEditor(branchPath, rerender, employee, employees){
  document.querySelectorAll(".branch-employee-supervisor-overlay").forEach(item=>item.remove());
  const options=(employees||[]).filter(item=>item.is_active&&Number(item.id)!==Number(employee.id)).map(item=>`<option value="${item.id}" ${Number(item.id)===Number(employee.supervisor_id||0)?"selected":""}>${esc(item.full_name)}${item.position?` · ${esc(item.position)}`:""}</option>`).join("");
  const overlay=document.createElement("div");overlay.className="admin-edit-overlay branch-employee-supervisor-overlay";
  overlay.innerHTML=`<div class="admin-edit-modal branch-department-head-modal" role="dialog" aria-modal="true" aria-label="Непосредственный руководитель"><div class="admin-modal-head"><div><div class="eyebrow">ОРГАНИЗАЦИОННАЯ СВЯЗЬ</div><h2>Непосредственный руководитель</h2><p class="muted">${esc(employee.full_name)} · руководитель может быть из любого подразделения этого филиала.</p></div><button type="button" class="admin-modal-close" data-employee-supervisor-close aria-label="Закрыть">×</button></div><div class="admin-modal-body"><label>Кто руководит сотрудником<select id="branchEmployeeSupervisor"><option value="">Не назначен</option>${options}</select></label><p class="muted branch-department-head-note">Ручное назначение имеет приоритет над начальником подразделения и иерархией должностей. Равная или более низкая роль недоступна.</p><p class="err" id="branchEmployeeSupervisorMessage" aria-live="polite"></p><div class="admin-edit-actions"><button type="button" class="secondary" data-employee-supervisor-close>Отмена</button><button type="button" class="primary" id="branchEmployeeSupervisorSave">Сохранить</button></div></div></div>`;
  document.body.appendChild(overlay);installAdminEditStyles();
  const close=()=>overlay.remove();overlay.querySelectorAll("[data-employee-supervisor-close]").forEach(button=>button.onclick=close);overlay.onclick=event=>{if(event.target===overlay)close();};
  overlay.querySelector("#branchEmployeeSupervisorSave").onclick=async()=>{
    const button=overlay.querySelector("#branchEmployeeSupervisorSave"),message=overlay.querySelector("#branchEmployeeSupervisorMessage");
    button.disabled=true;message.textContent="";
    try{await api(`${branchPath}/employees/${employee.id}/supervisor`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({employeeId:overlay.querySelector("#branchEmployeeSupervisor").value?Number(overlay.querySelector("#branchEmployeeSupervisor").value):null})});close();await rerender();}
    catch(error){message.textContent=error.message||"Не удалось сохранить руководителя.";button.disabled=false;}
  };
}

async function renderMyBranch(branchId=null){
  const adminMode=branchId!==null&&branchId!==undefined&&Number.isInteger(Number(branchId));
  const branchPath=adminMode?`/api/my-branch/admin/${Number(branchId)}`:"/api/my-branch";
  const b=await api(branchPath);
  if(!b?.id){
    if(!adminMode)state.managedBranch=null;
    $("myBranchNav")?.classList.add("hidden");
    if(state.page==="myBranch") await setPage("dashboard",{silent:true});
    return;
  }
  const tickets=await api(adminMode?`/api/my-branch/tickets?scope=branch&branchId=${Number(branchId)}`:"/api/my-branch/tickets?scope=branch");
  const hierarchy=await api(branchPath+"/position-hierarchy").catch(()=>({items:[],availablePositions:[]}));
  if(!adminMode)state.managedBranch=b;
  const branchRoleLabel=adminMode?"Администратор филиала":"Вы руководитель филиала";
  const branchBack=adminMode?`<button class="secondary" id="branchAdminBack">← В администрирование</button>`:"";
  const ticketCreate=adminMode?"":`<button class="primary" id="branchNewTicket">＋ Новая заявка</button>`;
  const depOptions=b.departments.map(d=>`<option value="${d.id}">${esc(d.name)}</option>`).join("");
  const depHtml=b.departments.length?b.departments.map(d=>`<div class="branch-dep-row"><div class="branch-row-main"><strong>${esc(d.name)}</strong><small>${d.employee_count} ${d.employee_count===1?'сотрудник':'сотрудников'}</small><small class="branch-dep-head-meta">${d.head_name?`Руководитель: ${esc(d.head_name)}`:"Руководитель не назначен"}</small></div><div class="branch-row-actions"><button class="secondary" data-branch-action="setDepHead" data-id="${d.id}">Руководитель</button><button class="secondary" data-branch-action="renameDep" data-id="${d.id}" data-name="${esc(d.name)}">Изменить</button><button class="secondary" data-branch-action="removeDep" data-id="${d.id}">Убрать</button></div></div>`).join(""):'<div class="branch-empty">В филиале пока нет подразделений.</div>';
  const empHtml=b.employees.length?b.employees.map(u=>`<div class="branch-employee-row"><div class="branch-row-main"><strong>${esc(u.full_name)}</strong><small>${esc(u.login)} · ${u.department_name?esc(u.department_name):'без подразделения'}</small><small class="branch-dep-head-meta">${u.supervisor_name?`Руководитель: ${esc(u.supervisor_name)}`:"Руководитель не назначен"}</small></div><div class="branch-employee-controls"><input data-branch-position="${u.id}" value="${esc(u.position||"")}" placeholder="Должность"><select data-branch-employee="${u.id}"><option value="">Без подразделения</option>${depOptions}</select><button class="secondary" data-branch-action="setEmployeeSupervisor" data-id="${u.id}">Руководитель</button><button class="secondary" data-branch-action="saveEmployee" data-id="${u.id}">Сохранить</button><button class="danger-outline" data-branch-action="removeEmployee" data-id="${u.id}">Убрать</button></div></div>`).join(""):'<div class="branch-empty">Сотрудников в филиале пока нет.</div>';
  const hierarchyItems=Array.isArray(hierarchy.items)?hierarchy.items:[];
  const ticketHtml=tickets.length?tickets.map(t=>`<article class="branch-ticket-row"><div class="branch-ticket-copy"><div class="branch-ticket-top"><span class="branch-ticket-category">${esc(branchTicketCategory(t.category))}</span><span class="branch-ticket-status ${String(t.status||"").toLowerCase()}">${esc(branchTicketStatus(t.status))}</span></div><strong>${esc(t.title)}</strong><p>${esc(t.description||"Подробности не указаны.")}</p><small>№${t.id} · создана ${formatKedoDateTime(t.created_at)}${t.updated_at?` · обновлена ${formatKedoDateTime(t.updated_at)}`:""} · приоритет: ${t.priority==="HIGH"?"высокий":t.priority==="LOW"?"низкий":"обычный"}${t.resolved_by_name?` · ответственный: ${esc(t.resolved_by_name)}`:""}</small></div></article>`).join(""):'<div class="branch-empty">Заявок пока нет. Здесь появится история обращений в администрацию.</div>';
  $("main").innerHTML=`<div class="branch-page">
    <div class="branch-hero"><div class="branch-hero-copy"><div class="eyebrow">ОРГАНИЗАЦИОННАЯ СТРУКТУРА</div><h1 class="page-title">${esc(b.name)}</h1><p class="muted">Полное управление филиалом: сотрудники, должности, подразделения и обращения в администрацию.</p></div><div class="branch-hero-actions">${branchBack}<span class="branch-head-badge">${branchRoleLabel}</span><button class="secondary" id="branchEditDescription">Изменить описание</button></div></div>
    <div class="branch-stats"><div class="branch-stat"><span>Подразделения</span><strong>${b.departments.length}</strong></div><div class="branch-stat"><span>Сотрудники</span><strong>${b.employees.length}</strong></div><div class="branch-stat"><span>Заявки</span><strong>${tickets.filter(t=>!['RESOLVED','CLOSED'].includes(String(t.status).toUpperCase())).length}</strong></div><div class="branch-stat"><span>Руководитель</span><strong style="font-size:14px;margin-top:7px">${esc(b.head_name||state.user.fullName)}</strong></div></div>
    <div class="branch-note">Изменения действуют только в филиале «${esc(b.name)}». Удаление сотрудника убирает его из филиала, но не удаляет учётную запись из системы.</div>
    <section class="branch-card branch-hierarchy-card branch-hierarchy-launch"><div class="branch-card-head"><div><div class="eyebrow">ОРГАНИЗАЦИОННАЯ СХЕМА</div><h2>Иерархия должностей</h2><p class="muted">${hierarchyItems.length?`${hierarchyItems.length} должностей уже собраны из сотрудников филиала.`:"Список должностей будет собран из сотрудников филиала."}</p></div><button class="primary" data-branch-action="openHierarchy">Открыть список</button></div></section>
    <div class="branch-layout">
      <section class="branch-card"><div class="branch-card-head"><div><div class="eyebrow">СТРУКТУРА</div><h2>Подразделения</h2></div><span class="section-count">${b.departments.length}</span></div><div class="branch-list">${depHtml}</div><div class="branch-add"><input id="branchNewDep" placeholder="Новое подразделение"><button class="primary" id="branchAddDep">Добавить</button></div></section>
      <section class="branch-card branch-team-card"><div class="branch-card-head"><div><div class="eyebrow">КОМАНДА</div><h2>Сотрудники филиала</h2></div><span class="section-count">${b.employees.length}</span></div><div class="branch-list">${empHtml}</div></section>
    </div>
    <section class="branch-card branch-tickets-card"><div class="branch-card-head"><div><div class="eyebrow">ОБРАЩЕНИЯ</div><h2>Заявки в администрацию</h2><p class="muted">Удаление учётной записи, техническая проблема или вопрос по организации.</p></div>${ticketCreate}</div><div class="branch-ticket-list">${ticketHtml}</div></section>
  </div>`;
  $("branchAdminBack")?.addEventListener("click",()=>setPage("admin"));
  $("branchEditDescription").onclick=async()=>{const value=await kedoPrompt("Описание филиала:",b.description||"");if(value===null)return;try{await api(branchPath,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({description:value})});await renderMyBranch(adminMode?branchId:null);}catch(e){kedoAlert(e.message);}};
  $("branchNewTicket")?.addEventListener("click",openBranchTicket);
  $("branchAddDep").onclick=async()=>{const input=$("branchNewDep"),name=input.value.trim();if(!name)return;try{await api(branchPath+"/departments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name})});await renderMyBranch(adminMode?branchId:null);}catch(e){kedoAlert(e.message);}};
  $("main").querySelectorAll('[data-branch-action="renameDep"]').forEach(btn=>btn.onclick=async()=>{const name=await kedoPrompt("Новое название подразделения:",btn.dataset.name||"");if(!name||!name.trim())return;try{await api(branchPath+"/departments/"+btn.dataset.id,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:name.trim()})});await renderMyBranch(adminMode?branchId:null);}catch(e){kedoAlert(e.message);}});
  $("main").querySelectorAll('[data-branch-action="setDepHead"]').forEach(btn=>btn.onclick=()=>{const department=b.departments.find(item=>Number(item.id)===Number(btn.dataset.id));if(department)openDepartmentHeadEditor(branchPath,()=>renderMyBranch(adminMode?branchId:null),department,b.employees);});
  $("main").querySelectorAll('[data-branch-action="setEmployeeSupervisor"]').forEach(btn=>btn.onclick=()=>{const employee=b.employees.find(item=>Number(item.id)===Number(btn.dataset.id));if(employee)openEmployeeSupervisorEditor(branchPath,()=>renderMyBranch(adminMode?branchId:null),employee,b.employees);});
  $("main").querySelectorAll('[data-branch-action="removeDep"]').forEach(btn=>btn.onclick=async()=>{if(!await kedoConfirm("Убрать подразделение из филиала? Само подразделение не будет удалено из системы."))return;try{await api(branchPath+"/departments/"+btn.dataset.id,{method:"DELETE"});await renderMyBranch(adminMode?branchId:null);}catch(e){kedoAlert(e.message);}});
  $("main").querySelectorAll('[data-branch-action="saveEmployee"]').forEach(btn=>btn.onclick=async()=>{const position=$("main").querySelector(`[data-branch-position="${btn.dataset.id}"]`),department=$("main").querySelector(`[data-branch-employee="${btn.dataset.id}"]`);try{await api(branchPath+"/employees/"+btn.dataset.id,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({departmentId:department.value||null,position:position.value.trim()})});await renderMyBranch(adminMode?branchId:null);}catch(e){kedoAlert(e.message);}});
  $("main").querySelectorAll('[data-branch-action="removeEmployee"]').forEach(btn=>btn.onclick=async()=>{if(!await kedoConfirm("Убрать сотрудника из филиала? Учётная запись сохранится, но сотрудник вернётся в общий список без филиала."))return;try{await api(branchPath+"/employees/"+btn.dataset.id,{method:"DELETE"});await renderMyBranch(adminMode?branchId:null);}catch(e){kedoAlert(e.message);}});
  $("main").querySelector('[data-branch-action="openHierarchy"]')?.addEventListener("click",()=>openBranchHierarchyEditor(branchPath,()=>renderMyBranch(adminMode?branchId:null),hierarchy));
}

function personalNoteDateValue(value){
  if(!value)return "";
  const date=new Date(value);if(Number.isNaN(date.getTime()))return "";
  const pad=number=>String(number).padStart(2,"0");
  return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}
function personalNoteEditor(note=null){
  const colors=["yellow","blue","green","pink"],labels={yellow:"Жёлтая",blue:"Синяя",green:"Зелёная",pink:"Розовая"};
  const modal=document.createElement("div");modal.className="task-note-modal-overlay";
  modal.innerHTML=`<form class="task-note-modal" role="dialog" aria-modal="true" aria-label="${note?"Редактировать заметку":"Новая личная заметка"}"><div class="task-note-modal-head"><div><div class="eyebrow">ЛИЧНАЯ ЗАМЕТКА</div><h2>${note?"Редактировать заметку":"Оставить себе заметку"}</h2><p>${note?"Обновите текст и напоминание.":"Сохраните короткую мысль, чтобы не потерять её среди задач."}</p></div><button type="button" class="task-note-close" data-close aria-label="Закрыть">×</button></div><label class="task-note-field"><span>Заголовок <small>необязательно</small></span><input name="title" maxlength="160" placeholder="Например: Позвонить в филиал" value="${esc(note?.title||"")}"></label><label class="task-note-field"><span>Текст заметки</span><textarea name="body" required maxlength="4000" rows="4" placeholder="Что важно не забыть?">${esc(note?.body||"")}</textarea></label><div class="task-note-editor-grid"><label class="task-note-field"><span>Напомнить</span><input name="remindAt" type="datetime-local" value="${personalNoteDateValue(note?.remind_at)}"><small>Дата и время будут показаны на стикере.</small></label><div class="task-note-field"><span>Цвет стикера</span><div class="task-note-color-options">${colors.map(color=>`<button type="button" class="task-note-color-option ${color} ${(!note&&color==="yellow")||note?.color===color?"active":""}" data-note-color="${color}" aria-label="${labels[color]}" title="${labels[color]}"><span></span></button>`).join("")}</div><input type="hidden" name="color" value="${esc(note?.color||"yellow")}"></div></div><div class="task-note-modal-actions"><button type="button" class="secondary" data-close>Отмена</button><button type="submit" class="primary">${note?"Сохранить":"Добавить заметку"}</button></div></form>`;
  document.body.appendChild(modal);
  const form=modal.querySelector("form"),close=()=>modal.remove();
  modal.querySelectorAll("[data-close]").forEach(button=>button.onclick=close);
  modal.onclick=event=>{if(event.target===modal)close();};
  modal.querySelectorAll("[data-note-color]").forEach(button=>button.onclick=()=>{form.elements.color.value=button.dataset.noteColor;modal.querySelectorAll("[data-note-color]").forEach(item=>item.classList.toggle("active",item===button));});
  setTimeout(()=>form.elements.title.focus(),60);
  form.onsubmit=async event=>{
    event.preventDefault();
    const submit=form.querySelector("button[type=submit]");submit.disabled=true;
    const remindAt=form.elements.remindAt.value?new Date(form.elements.remindAt.value).toISOString():null;
    try{
      await api(note?`/api/tasks/notes/${note.id}`:"/api/tasks/notes",{method:note?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:form.elements.title.value,body:form.elements.body.value,color:form.elements.color.value,remindAt})});
      close();await renderTasks();
    }catch(error){kedoAlert(error.message||"Не удалось сохранить заметку.");submit.disabled=false;}
  };
}
async function togglePersonalNoteDone(id){
  const note=(state.personalNotes||[]).find(item=>Number(item.id)===Number(id));if(!note)return;
  try{await api(`/api/tasks/notes/${id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({isDone:!note.is_done})});await renderTasks();}catch(error){kedoAlert(error.message||"Не удалось изменить заметку.");}
}
async function deletePersonalNote(id){
  if(!await kedoConfirm("Удалить эту личную заметку?"))return;
  try{await api(`/api/tasks/notes/${id}`,{method:"DELETE"});await renderTasks();}catch(error){kedoAlert(error.message||"Не удалось удалить заметку.");}
}
let personalNoteReminderTimer=null;
function schedulePersonalNoteReminders(notes){
  clearTimeout(personalNoteReminderTimer);
  const now=Date.now(),marks=(()=>{
    try{return JSON.parse(localStorage.getItem("kedo_note_reminders_v1")||"{}");}catch{return {};}
  })();
  let next=null;
  for(const note of notes||[]){
    if(note.is_done||!note.remind_at)continue;
    const at=new Date(note.remind_at).getTime();
    if(!Number.isFinite(at))continue;
    if(at<=now){
      const key=String(note.id)+":"+String(note.remind_at);
      if(marks[key])continue;
      marks[key]=Date.now();
      showNotificationToast({note_id:note.id,title:"Напоминание из заметок",body:note.title||note.body});
    }else if(next===null||at<next)next=at;
  }
  try{localStorage.setItem("kedo_note_reminders_v1",JSON.stringify(marks));}catch{}
  if(next!==null)personalNoteReminderTimer=setTimeout(()=>schedulePersonalNoteReminders(notes),Math.max(30000,next-now+1000));
}
function openPersonalNoteComposer(){
  personalNoteEditor();
}

async function openTaskDetails(taskId){
  if(document.querySelector('.task-detail-overlay'))return;
  const overlay=document.createElement('div');overlay.className='task-detail-overlay';
  overlay.innerHTML='<div class="task-detail-modal"><div class="task-detail-loading">Загрузка задачи…</div></div>';
  document.body.appendChild(overlay);
  const onKey=e=>{if(e.key==='Escape')close();};
  const close=()=>{document.removeEventListener('keydown',onKey);overlay.remove();};
  document.addEventListener('keydown',onKey);overlay.addEventListener('click',e=>{if(e.target===overlay)close();});
  try{
    const data=await api(`/api/tasks/${Number(taskId)}/collaboration`),task=data.task||{};
    const labels={OPEN:'Новая',IN_PROGRESS:'В работе',DONE:'Выполнена',ACKNOWLEDGED:'Подтверждена',CANCELLED:'Отменена'};
    const reload=async()=>Object.assign(data,await api(`/api/tasks/${Number(taskId)}/collaboration`));
    const render=()=>{
      const comments=(data.comments||[]).map(item=>`<article class="task-comment"><div class="task-comment-head"><strong>${esc(item.author_name||'Сотрудник')}</strong><time>${formatKedoDateTime(item.created_at)}</time></div><p>${esc(item.body)}</p></article>`).join('')||'<div class="task-detail-empty">Комментариев пока нет.</div>';
      const checklist=(data.checklist||[]).map(item=>`<div class="task-check-row ${item.is_done?'is-done':''}"><label><input type="checkbox" data-task-check="${item.id}" ${item.is_done?'checked':''}><span>${esc(item.title)}</span></label><button type="button" class="task-detail-delete" data-task-check-delete="${item.id}" title="Удалить пункт">×</button></div>`).join('')||'<div class="task-detail-empty">Чек-лист пока пуст.</div>';
      const files=(data.attachments||[]).map(item=>`<a class="task-file-row" href="${/^\/api\/tasks\/attachments\/\d+$/.test(item.download_url||'')?item.download_url:'#'}" download><span>▣</span><strong>${esc(item.original_name)}</strong><small>${formatChatFileSize(item.size_bytes)} · ${esc(item.uploaded_by_name||'')}</small></a>`).join('')||'<div class="task-detail-empty">Файлов пока нет.</div>';
      const history=(data.history||[]).map(item=>`<li><span class="task-history-dot"></span><div><strong>${esc(item.actor_name||'Система')}</strong><span>${esc({CREATED:'создал задачу',STATUS_CHANGED:'изменил статус',COMMENT_ADDED:'добавил комментарий',CHECKLIST_ADDED:'добавил пункт чек-листа',CHECKLIST_UPDATED:'обновил чек-лист',CHECKLIST_REMOVED:'удалил пункт чек-листа',ATTACHMENT_ADDED:'прикрепил файл'}[item.action]||item.action)}</span><time>${formatKedoDateTime(item.created_at)}</time></div></li>`).join('')||'<li class="task-detail-empty">История пока пуста.</li>';
      overlay.querySelector('.task-detail-modal').innerHTML=`<div class="task-detail-head"><div><div class="eyebrow">КАРТОЧКА ЗАДАЧИ</div><h2>${esc(task.title||'Задача')}</h2><p>${esc(labels[task.status]||task.status||'')}</p></div><button type="button" class="secondary" data-task-detail-close>Закрыть</button></div><div class="task-detail-scroll"><div class="task-detail-summary"><span>Срок</span><strong>${task.due_date?formatKedoDate(task.due_date):'Без срока'}</strong><span>Приоритет</span><strong>${esc(task.priority||'NORMAL')}</strong><span>Описание</span><strong>${esc(task.description||'Описание не добавлено')}</strong></div><section class="task-detail-section"><div class="task-detail-section-head"><h3>Чек-лист</h3><span>${(data.checklist||[]).filter(x=>x.is_done).length}/${(data.checklist||[]).length}</span></div><div class="task-check-list">${checklist}</div><form class="task-check-form"><input name="title" required maxlength="500" placeholder="Добавить пункт…"><button class="secondary">Добавить</button></form></section><section class="task-detail-section"><div class="task-detail-section-head"><h3>Файлы</h3><span>${(data.attachments||[]).length}</span></div><div class="task-file-list">${files}</div><label class="task-file-upload"><span>＋ Прикрепить файл</span><input type="file" id="taskDetailFile"></label></section><section class="task-detail-section"><div class="task-detail-section-head"><h3>Обсуждение</h3><span>${(data.comments||[]).length}</span></div><div class="task-comments">${comments}</div><form class="task-comment-form"><textarea name="body" required maxlength="5000" placeholder="Напишите комментарий для участников задачи…"></textarea><button class="primary">Отправить комментарий</button></form></section><section class="task-detail-section"><div class="task-detail-section-head"><h3>История</h3><span>${(data.history||[]).length}</span></div><ol class="task-history">${history}</ol></section></div>`;
      overlay.querySelector('[data-task-detail-close]').onclick=close;
      overlay.querySelector('.task-comment-form').onsubmit=async e=>{e.preventDefault();const form=e.currentTarget,button=form.querySelector('button');button.disabled=true;try{await api(`/api/tasks/${taskId}/comments`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({body:form.elements.body.value})});await reload();render();}catch(err){kedoAlert(err.message||'Не удалось добавить комментарий.');}finally{button.disabled=false;}};
      overlay.querySelector('.task-check-form').onsubmit=async e=>{e.preventDefault();const form=e.currentTarget;try{await api(`/api/tasks/${taskId}/checklist`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title:form.elements.title.value})});await reload();render();}catch(err){kedoAlert(err.message||'Не удалось добавить пункт.');}};
      overlay.querySelectorAll('[data-task-check]').forEach(input=>input.onchange=async()=>{try{await api(`/api/tasks/${taskId}/checklist/${input.dataset.taskCheck}`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({isDone:input.checked})});await reload();render();}catch(err){input.checked=!input.checked;kedoAlert(err.message||'Не удалось обновить чек-лист.');}});
      overlay.querySelectorAll('[data-task-check-delete]').forEach(button=>button.onclick=async()=>{if(!await kedoConfirm('Удалить этот пункт чек-листа?'))return;try{await api(`/api/tasks/${taskId}/checklist/${button.dataset.taskCheckDelete}`,{method:'DELETE'});await reload();render();}catch(err){kedoAlert(err.message||'Не удалось удалить пункт.');}});
      overlay.querySelector('#taskDetailFile').onchange=async e=>{const file=e.target.files?.[0];if(!file)return;const fd=new FormData();fd.append('file',file,file.name);try{await api(`/api/tasks/${taskId}/attachments`,{method:'POST',body:fd});await reload();render();}catch(err){kedoAlert(err.message||'Не удалось прикрепить файл.');}e.target.value='';};
    };
    render();
  }catch(err){overlay.querySelector('.task-detail-modal').innerHTML=`<div class="task-detail-error"><strong>Не удалось открыть задачу</strong><p>${esc(err.message||'Попробуйте ещё раз.')}</p><button type="button" class="secondary" data-task-detail-close>Закрыть</button></div>`;overlay.querySelector('[data-task-detail-close]').onclick=close;}
}

async function renderTasks(){
installKedoUxEnhancements();
const roles=Array.isArray(state.user.roles)?state.user.roles:[state.user.role];
const canAssign=roles.some(r=>["admin","moderator","director","department_head"].includes(r));
const [tasks,users,deps,groups,docsRaw,archive,confirmation,notes]=await Promise.all([
  api("/api/tasks/?scope=assigned&view=active"),
  canAssign?api("/api/directory/users"):Promise.resolve([]),
  canAssign?api("/api/directory/departments"):Promise.resolve([]),
  canAssign?api("/api/directory/org-groups"):Promise.resolve([]),
  canAssign?api("/api/documents/?limit=100"):Promise.resolve([]),
  api("/api/tasks/?scope=assigned&view=archive"),
  canAssign?api("/api/tasks/?scope=created&view=confirmation"):Promise.resolve([]),
  api("/api/tasks/notes").catch(()=>[])
]);
 state.personalNotes=Array.isArray(notes)?notes:[];
 schedulePersonalNoteReminders(state.personalNotes);
const docs=listData(docsRaw);
const createdActive=canAssign?await api("/api/tasks/?scope=created&view=active"):[];
const createdArchive=canAssign?await api("/api/tasks/?scope=created&view=archive"):[];
const userOptions=users.map(u=>`<option value="${u.id}">${esc(u.full_name)}${u.position?` — ${esc(u.position)}`:""}${u.department_name?` · ${esc(u.department_name)}`:""}</option>`).join("");
const depOptions=deps.map(d=>`<option value="${d.id}">${esc(d.name)}</option>`).join("");
const groupOptions=groups.map(g=>`<option value="${g.id}">${esc(g.name)}${Array.isArray(g.departments)&&g.departments.length?` — ${esc(g.departments.map(d=>d.name).join(", "))}`:""}</option>`).join("");
const docOptions=docs.map(d=>`<option value="${d.id}">${esc(d.title)}${d.document_number?` №${esc(d.document_number)}`:""}</option>`).join("");
 const statusText={OPEN:"Новая",IN_PROGRESS:"В работе",DONE:"Выполнена",ACKNOWLEDGED:"Подтверждена",CANCELLED:"Отменена"};
 const priorityText={URGENT:"Срочный",HIGH:"Высокий",NORMAL:"Обычный",LOW:"Низкий"};

const taskCard=(t,scope="assigned")=>{
  const groupTask=t.assignee_type==="GROUP"||t.assignee_group_id!=null;
  const departmentTask=!groupTask&&(t.assignee_type==="DEPARTMENT"||t.assignee_department_id!=null);
  let isMine=false;
  if(groupTask){
    isMine=Array.isArray(t.assignee_group_departments) && t.assignee_group_departments.some(d=>String(d.id)===String(state.user.departmentId||""));
  }else if(departmentTask){
    isMine=String(t.assignee_department_id)===String(state.user.departmentId||"");
  }else{
    isMine=Number(t.assignee_id)===Number(state.user.id);
  }
  const isMyCreated=Number(t.created_by)===Number(state.user.id);
   const isOverdue=Boolean(t.due_date&&kedoDateEnd(t.due_date)<Date.now()&&!['DONE','ACKNOWLEDGED','CANCELLED'].includes(t.status));
   const priority=String(t.priority||"NORMAL").toUpperCase();
  const canConfirm=isMyCreated&&t.status==="DONE";
  const steps=t.status==="CANCELLED"?["OPEN","CANCELLED"]:["OPEN","IN_PROGRESS","DONE","ACKNOWLEDGED"];
  const idx=steps.indexOf(t.status);
  const progress=steps.map((st,i)=>`<div class="task-step ${i<idx?"done":""} ${i===idx?"current":""}"><span>${st==="ACKNOWLEDGED"?"✓":i+1}</span><small>${statusText[st]}</small></div>`).join("");
  const receiverName=groupTask?(t.assignee_group_name||"Организационная группа"):departmentTask?(t.assignee_department_name||t.assignee_department||"Подразделение"):(t.assignee_name||"—");
  const selectedGroupPeople=Array.isArray(t.task_recipient_users)?t.task_recipient_users:[];
  const selectedGroupDeps=Array.isArray(t.task_recipient_departments)?t.task_recipient_departments:[];
  const receiverMeta=groupTask?((selectedGroupDeps.length||selectedGroupPeople.length)?`Выбрано: ${selectedGroupDeps.length?selectedGroupDeps.length+" подраздел.":""}${selectedGroupDeps.length&&selectedGroupPeople.length?" + ":""}${selectedGroupPeople.length?selectedGroupPeople.length+" чел.":""}`:"Все активные сотрудники входящих подразделений"):departmentTask?"Все активные сотрудники подразделения":(t.assignee_position||t.assignee_department||"");
  const kicker=groupTask?(isMine?"Вам и вашей группе":"Выдано организационной группе"):departmentTask?(isMine?"Вам и вашему подразделению":"Выдано подразделению"):(isMine?"Вам назначено":"Выдано сотруднику");
   return `<article class="task-card task-card-modern" data-task-scope="${scope}" data-task-status="${esc(t.status||"")}" data-task-priority="${esc(priority)}" data-task-mine="${isMine?"true":"false"}" data-task-created="${isMyCreated?"true":"false"}" data-task-overdue="${isOverdue?"true":"false"}" data-task-due="${t.due_date?esc(kedoDateEnd(t.due_date)):""}" data-task-created-at="${t.created_at?esc(new Date(t.created_at).getTime()):""}">
     <div class="task-card-head"><div><div class="task-kicker">${kicker}</div><div class="task-title">${esc(t.title)}</div></div><div class="task-badges"><span class="task-priority priority-${priority.toLowerCase()}">${priorityText[priority]||priorityText.NORMAL}</span><span class="task-status status-${String(t.status).toLowerCase()}">${statusText[t.status]||t.status}</span></div></div>
    <div class="task-people"><div class="task-person"><span class="task-avatar">О</span><div><small>Поставил</small><strong>${esc(t.creator_name||"—")}</strong></div></div><div class="task-arrow">→</div><div class="task-person"><span class="task-avatar">${groupTask?"Ф":departmentTask?"П":"И"}</span><div><small>${groupTask?"Филиал / группа":departmentTask?"Подразделение":"Получатель"}</small><strong>${esc(receiverName)}</strong><em>${esc(receiverMeta)}</em></div></div></div>
    ${t.description?`<div class="task-description">${esc(t.description)}</div>`:""}
    ${t.document_title?`<div class="task-doc">${kedoIcon('file')} ${esc(t.document_title)}</div>`:""}${groupTask&&(selectedGroupPeople.length||selectedGroupDeps.length)?`<div class="task-selected-people"><span>Получатели:</span> ${selectedGroupDeps.map(x=>esc(x.name)).join(", ")}${selectedGroupDeps.length&&selectedGroupPeople.length?" · ":""}${selectedGroupPeople.map(x=>esc(x.name)).join(", ")}</div>`:""}
    <div class="task-progress">${progress}</div>
    <div class="task-footer"><div class="task-meta">${t.due_date?`<span>Срок: ${formatKedoDate(t.due_date)}</span>`:""}<span>Создана: ${formatKedoDateTime(t.created_at)}</span>${t.completed_at?`<span>Выполнена: ${formatKedoDateTime(t.completed_at)}</span>`:""}${t.acknowledged_at?`<span>Подтверждена: ${formatKedoDateTime(t.acknowledged_at)}</span>`:""}</div>
     <div class="doc-actions task-actions">${canAssign&&isMyCreated&&!["DONE","ACKNOWLEDGED","CANCELLED"].includes(t.status)?`<button class="task-priority-action" data-action="updateTaskPriority" data-id="${t.id}" data-priority="${priority==='URGENT'?'HIGH':priority==='HIGH'?'NORMAL':priority==='NORMAL'?'LOW':'URGENT'}" title="Сменить приоритет">⚑ ${priorityText[priority]||priorityText.NORMAL}</button>`:""}${t.status==="OPEN"&&isMine?`<button class="secondary" data-action="updateTask" data-id="${t.id}" data-status="IN_PROGRESS">Начать работу</button>`:""}${t.status==="IN_PROGRESS"&&isMine?`<button class="primary" data-action="updateTask" data-id="${t.id}" data-status="DONE">✓ Выполнено</button>`:""}${canConfirm?`<button class="primary" data-action="confirmTask" data-id="${t.id}">✓ Подтвердить выполнение</button>`:""}${canAssign&&t.status!=="DONE"&&t.status!=="ACKNOWLEDGED"&&t.status!=="CANCELLED"&&isMyCreated?`<button class="danger-outline" data-action="updateTask" data-id="${t.id}" data-status="CANCELLED">Отменить</button>`:""}</div></div>
  </article>`;
};
const section=(title,sub,items,empty,scope)=>items.length?`<section class="task-section" data-task-section="${scope}"><div class="task-section-head"><div><div class="eyebrow">ЗАДАЧИ</div><h2>${title}</h2><div class="muted">${sub}</div></div><span class="section-count" data-task-count>${items.length}</span></div><div class="task-section-list">${items.map(item=>taskCard(item,scope)).join("")}</div></section>`:"";
const archiveSection=(title,sub,items,empty,scope)=>items.length?`<details class="task-archive-collapsible"><summary><span><strong>${title}</strong><small>${sub}</small></span><b>${items.length}</b></summary><div class="task-archive-body">${items.map(item=>taskCard(item,scope)).join("")}</div></details>`:"";
const noteCard=note=>{
  const overdue=Boolean(note.remind_at&&!note.is_done&&new Date(note.remind_at).getTime()<Date.now());
  return `<article class="task-note-card note-${esc(note.color||"yellow")} ${note.is_done?"is-done":""} ${overdue?"is-overdue":""}"><div class="task-note-top"><span class="task-note-label">ЛИЧНАЯ ЗАМЕТКА</span><div class="task-note-tools"><button type="button" class="task-note-tool" data-note-edit="${note.id}" aria-label="Редактировать заметку" title="Редактировать">✎</button><button type="button" class="task-note-tool" data-note-delete="${note.id}" aria-label="Удалить заметку" title="Удалить">×</button></div></div>${note.title?`<h3>${esc(note.title)}</h3>`:""}<p>${esc(note.body)}</p><div class="task-note-footer"><span class="task-note-reminder ${overdue?"is-overdue":""}">${note.remind_at?`${kedoIcon(overdue?"warning":"calendar")} ${formatKedoDateTime(note.remind_at)}`:"Без напоминания"}</span><button type="button" class="task-note-done" data-note-done="${note.id}">${note.is_done?"Вернуть":"Готово"}</button></div></article>`;
};

$("main").innerHTML=`<div class="tasks-page">
  <div class="tasks-hero"><div><div class="eyebrow">РАБОЧИЕ ПОРУЧЕНИЯ</div><h1 class="page-title">Задачи</h1><p class="muted">Здесь собраны ваши поручения, задачи на подтверждение и выданные задания.</p></div></div>
   <div class="tasks-summary">
    <button class="tasks-summary-card" data-task-filter="assigned"><span>Мне назначено</span><strong>${tasks.length}</strong><small>${tasks.length?'требуют внимания':'активных задач нет'}</small></button>
    ${canAssign?`<button class="tasks-summary-card" data-task-filter="confirmation"><span>На подтверждение</span><strong>${confirmation.length}</strong><small>${confirmation.length?'нужно проверить':'всё подтверждено'}</small></button>`:""}
    ${canAssign?`<button class="tasks-summary-card" data-task-filter="created"><span>Выдано мной</span><strong>${createdActive.length}</strong><small>активных поручений</small></button>`:""}
    <button class="tasks-summary-card ${tasks.some(t=>t.due_date&&kedoDateEnd(t.due_date)<Date.now()&& !['DONE','ACKNOWLEDGED','CANCELLED'].includes(t.status))?'alert':''}" data-task-filter="overdue"><span>Контроль срока</span><strong>${tasks.filter(t=>t.due_date&&kedoDateEnd(t.due_date)<Date.now()&& !['DONE','ACKNOWLEDGED','CANCELLED'].includes(t.status)).length}</strong><small>просроченных задач</small></button>
   </div>
   <div class="task-focus-toolbar"><div class="task-focus-copy"><div class="eyebrow">ФОКУС</div><strong id="taskFocusTitle">Все активные задачи</strong><small id="taskFocusMeta">Выберите фильтр или найдите задачу по ключевому слову.</small></div><label class="task-search-box"><span>⌕</span><input id="taskSearch" type="search" placeholder="Найти задачу, сотрудника или документ…"></label><label class="task-sort-box"><span>Сортировка</span><select id="taskSort"><option value="priority">Сначала важные</option><option value="deadline">Ближайший срок</option><option value="newest">Сначала новые</option></select></label><div class="task-filter-list"><button type="button" class="task-filter active" data-task-filter="all">Все</button><button type="button" class="task-filter" data-task-filter="assigned">Мне</button>${canAssign?`<button type="button" class="task-filter" data-task-filter="confirmation">Подтвердить</button><button type="button" class="task-filter" data-task-filter="created">Выданные</button>`:""}<button type="button" class="task-filter" data-task-filter="urgent">Срочные</button><button type="button" class="task-filter" data-task-filter="high">Высокие</button><button type="button" class="task-filter" data-task-filter="overdue">Просрочено</button></div></div>
   ${canAssign?`<section class="task-create-shell" id="taskCreateShell">
    <div class="task-create-head" data-action="toggleTaskCreate"><span class="task-create-icon">＋</span><span class="task-create-head-copy"><strong>Поставить задачу</strong><small>Сотруднику, подразделению или филиалу / группе</small></span><span class="task-create-chevron">⌄</span></div>
    <div class="task-create-body hidden" id="taskCreateBody">
      <div class="task-field-grid"><div class="task-field"><label>Кому</label><select id="taskAssigneeType"><option value="USER">Конкретному сотруднику</option><option value="DEPARTMENT">Подразделению</option><option value="GROUP">Филиалу / группе</option></select></div><div class="task-field"><label>Получатель</label><select id="taskAssignee"><option value="">Выберите сотрудника</option>${userOptions}</select></div></div>
      <div id="taskGroupPeopleWrap" class="task-group-people-wrap" style="display:none"><label>Дополнительное ограничение получателей</label><div class="muted task-group-hint">Для филиала можно выбрать конкретные подразделения и людей. Если ничего не выбирать, задачу получат все сотрудники филиала.</div><div class="group-scope-grid"><div><label>Подразделения</label><div class="recipient-dropdown" id="taskGroupDepartments"><button type="button" class="recipient-dropdown-toggle"><span class="recipient-dropdown-label">Все подразделения</span><span>⌄</span></button><div class="recipient-dropdown-menu"><div class="recipient-dropdown-tools"><span>Выберите подразделения</span><button type="button" class="recipient-dropdown-clear">Сбросить</button></div><div id="taskGroupDepartmentOptions"><div class="recipient-empty">Сначала выберите филиал</div></div></div></div></div><div><label>Сотрудники</label><div class="recipient-dropdown" id="taskGroupPeople"><button type="button" class="recipient-dropdown-toggle"><span class="recipient-dropdown-label">Все сотрудники</span><span>⌄</span></button><div class="recipient-dropdown-menu"><div class="recipient-dropdown-tools"><span>Выберите сотрудников</span><button type="button" class="recipient-dropdown-clear">Сбросить</button></div><div id="taskGroupPeopleOptions"><div class="recipient-empty">Сначала выберите филиал</div></div></div></div></div></div></div>
       <div class="task-field-grid"><div class="task-field"><label>Срок</label><input id="taskDueDate" type="date"></div><div class="task-field"><label>Приоритет</label><select id="taskPriority"><option value="NORMAL">Обычный</option><option value="HIGH">Высокий</option><option value="URGENT">Срочный</option><option value="LOW">Низкий</option></select></div></div>
       <div class="task-field"><label>Документ</label><select id="taskDocument"><option value="">Без привязки к документу</option>${docOptions}</select></div>
      <div class="task-field-stack"><div class="task-field"><label>Название</label><input id="taskTitle" placeholder="Например: Подготовить отчёт по филиалу"></div><div class="task-field"><label>Описание</label><textarea id="taskDescription" placeholder="Что нужно сделать, какой нужен результат, дополнительные указания"></textarea></div></div>
      <div class="task-create-footer"><span class="muted">После выдачи получатель увидит задачу во «Входящих» и в разделе «Задачи».</span><button class="primary" data-action="createTask">Выдать задачу</button></div><p id="taskMsg"></p>
    </div>
  </section>`:""}
   <section class="task-notes-section"><div class="task-notes-head"><div><div class="eyebrow">ЛИЧНОЕ</div><h2>Мои заметки</h2><p class="muted">Стикеры для мыслей, звонков и напоминаний, которые видите только вы.</p></div><button type="button" class="primary" id="taskAddNote">＋ Новая заметка</button></div><div class="task-notes-grid">${notes.length?notes.map(noteCard).join(""):"<div class=\"task-notes-empty\"><span>✦</span><strong>Здесь будет ваш личный блокнот</strong><small>Оставьте себе короткую заметку и при необходимости добавьте напоминание.</small><button type=\"button\" class=\"secondary\" id=\"taskAddFirstNote\">Добавить первую заметку</button></div>"}</div></section>
   ${section("Назначенные мне","Активные задачи, которые требуют вашего внимания.",tasks,"Активных задач нет.","assigned")}
   ${canAssign?section("Нужно подтвердить","Сотрудники отметили эти задачи выполненными.",confirmation,"Нет задач, ожидающих подтверждения.","confirmation"):""}
   ${canAssign?section("Выданные мной","Текущие поручения.",createdActive,"Активных выданных задач нет.","created"):""}
   ${archiveSection("Мой архив","Выполненные и завершённые поручения.",archive,"Архив пока пуст.","archive")}
   ${canAssign?archiveSection("Архив выданных","Завершённые поручения, которые вы выдавали.",createdArchive,"Архив выданных задач пока пуст.","created-archive"):""}
 </div>`;

  const taskFilterNames={all:"Все активные задачи",assigned:"Назначенные мне",confirmation:"Задачи на подтверждение",created:"Выданные мной",urgent:"Срочные задачи",high:"Задачи с высоким приоритетом",overdue:"Просроченные задачи"};
 const applyTaskFilter=filterName=>{
   const query=String($("taskSearch")?.value||"").trim().toLowerCase();let shown=0;
   const sortMode=$("taskSort")?.value||"priority",priorityRank={URGENT:0,HIGH:1,NORMAL:2,LOW:3};
   document.querySelectorAll(".task-section-list").forEach(list=>{
     [...list.querySelectorAll(".task-card-modern")].sort((a,b)=>{
       if(sortMode==="deadline")return (Number(a.dataset.taskDue)||Number.MAX_SAFE_INTEGER)-(Number(b.dataset.taskDue)||Number.MAX_SAFE_INTEGER);
       if(sortMode==="newest")return (Number(b.dataset.taskCreatedAt)||0)-(Number(a.dataset.taskCreatedAt)||0);
       return (priorityRank[a.dataset.taskPriority]??9)-(priorityRank[b.dataset.taskPriority]??9);
     }).forEach(card=>list.appendChild(card));
   });
   document.querySelectorAll(".task-section .task-card-modern").forEach(card=>{
     const scope=card.dataset.taskScope||"assigned";
      const matchesFilter=filterName==="all"||filterName===scope||(filterName==="overdue"&&card.dataset.taskOverdue==="true")||(filterName==="urgent"&&card.dataset.taskPriority==="URGENT")||(filterName==="high"&&card.dataset.taskPriority==="HIGH");
     const matchesSearch=!query||card.textContent.toLowerCase().includes(query);
     card.hidden=!(matchesFilter&&matchesSearch);if(!card.hidden)shown++;
   });
   document.querySelectorAll(".task-section").forEach(section=>{
     const visible=section.querySelectorAll(".task-card-modern:not([hidden])").length;section.hidden=visible===0;const count=section.querySelector("[data-task-count]");if(count)count.textContent=visible;
   });
   document.querySelectorAll("[data-task-filter]").forEach(button=>button.classList.toggle("active",button.dataset.taskFilter===filterName));
   const title=$("taskFocusTitle"),meta=$("taskFocusMeta");if(title)title.textContent=taskFilterNames[filterName]||taskFilterNames.all;if(meta)meta.textContent=query?`${shown} ${shown===1?"задача найдена":"задач найдено"} по запросу «${query}».`:shown?`${shown} задач в текущем представлении.`:"В этом представлении задач пока нет.";
 };
 document.querySelectorAll("[data-task-filter]").forEach(button=>button.addEventListener("click",()=>applyTaskFilter(button.dataset.taskFilter||"all")));
 $("taskSearch")?.addEventListener("input",()=>applyTaskFilter(document.querySelector(".task-filter.active")?.dataset.taskFilter||"all"));
 $("taskSort")?.addEventListener("change",()=>applyTaskFilter(document.querySelector(".task-filter.active")?.dataset.taskFilter||"all"));
 $("taskAddNote")?.addEventListener("click",openPersonalNoteComposer);
 $("taskAddFirstNote")?.addEventListener("click",openPersonalNoteComposer);
 document.querySelectorAll("[data-note-edit]").forEach(button=>button.addEventListener("click",()=>personalNoteEditor((state.personalNotes||[]).find(note=>Number(note.id)===Number(button.dataset.noteEdit)))));
 document.querySelectorAll("[data-note-delete]").forEach(button=>button.addEventListener("click",()=>deletePersonalNote(button.dataset.noteDelete)));
 document.querySelectorAll("[data-note-done]").forEach(button=>button.addEventListener("click",()=>togglePersonalNoteDone(button.dataset.noteDone)));
 applyTaskFilter("all");
 document.querySelectorAll(".task-card-modern").forEach(card=>{const id=card.querySelector('[data-action="updateTask"], [data-action="confirmTask"]')?.dataset.id||card.querySelector('[data-action="updateTaskPriority"]')?.dataset.id;if(!id)return;const actions=card.querySelector(".task-actions");if(actions&&!actions.querySelector('[data-action="openTaskDetails"]')){const button=document.createElement("button");button.className="secondary";button.dataset.action="openTaskDetails";button.dataset.id=id;button.textContent="Подробнее";actions.prepend(button);}});

 const taskIds=[...tasks,...confirmation,...createdActive,...archive,...createdArchive].map(item=>item.id);
 document.querySelectorAll(".task-card-modern").forEach((card,index)=>{const id=taskIds[index];const actions=card.querySelector(".task-actions");if(!id||!actions||actions.querySelector('[data-action="openTaskDetails"]'))return;const button=document.createElement("button");button.className="secondary";button.dataset.action="openTaskDetails";button.dataset.id=id;button.textContent="Подробнее";actions.prepend(button);});
const typeEl=$("taskAssigneeType"),targetEl=$("taskAssignee");
const groupPeopleWrap=$("taskGroupPeopleWrap"),groupPeopleOptions=$("taskGroupPeopleOptions");
const renderGroupPeople=()=>{
  if(typeEl.value!=="GROUP"){groupPeopleWrap.style.display="none";return;}
  groupPeopleWrap.style.display="";
  const g=groups.find(x=>String(x.id)===String(targetEl.value));
  const depIds=(g?.departments||[]).map(d=>String(d.id));
  const depOptionsHtml=(g?.departments||[]).map(d=>`<label class="recipient-option"><input type="checkbox" value="${d.id}" data-label="${esc(d.name)}"><span>${esc(d.name)}</span></label>`).join("");
  $("taskGroupDepartmentOptions").innerHTML=depOptionsHtml||'<div class="recipient-empty">В филиале нет подразделений</div>';
  setupRecipientDropdown("taskGroupDepartments","Все подразделения");
  const renderPeople=()=>{
    const chosenDeps=getRecipientDropdownValues("taskGroupDepartments").map(String);
    const allowed=chosenDeps.length?new Set(chosenDeps):new Set(depIds);
    const members=users.filter(u=>allowed.has(String(u.department_id)));
    $("taskGroupPeopleOptions").innerHTML=members.length?members.map(u=>`<label class="recipient-option"><input type="checkbox" value="${u.id}" data-label="${esc(u.full_name)}"><span>${esc(u.full_name)}${u.position?` — ${esc(u.position)}`:""}${u.department_name?` · ${esc(u.department_name)}`:""}</span></label>`).join(""):'<div class="recipient-empty">В выбранных подразделениях нет активных сотрудников</div>';
    setupRecipientDropdown("taskGroupPeople","Все сотрудники");
  };
  const depWrap=$("taskGroupDepartments");
  depWrap?.querySelector(".recipient-dropdown-menu")?.addEventListener("change",renderPeople);
  renderPeople();
};
typeEl?.addEventListener("change",()=>{
  if(typeEl.value==="DEPARTMENT"){
    targetEl.innerHTML='<option value="">Выберите подразделение</option>'+depOptions;
  }else if(typeEl.value==="GROUP"){
    targetEl.innerHTML='<option value="">Выберите филиал / группу</option>'+groupOptions;
  }else{
    targetEl.innerHTML='<option value="">Выберите сотрудника</option>'+userOptions;
  }
  renderGroupPeople();
});
targetEl?.addEventListener("change",renderGroupPeople);
installTaskStyles();
}
async function createTask(){
  try{
    const assigneeType=$("taskAssigneeType").value;
    const targetId=$("taskAssignee").value;
    if(!targetId)throw Error(assigneeType==="DEPARTMENT"?"Выберите подразделение.":"Выберите сотрудника.");
    const title=$("taskTitle").value.trim();
    if(!title)throw Error("Введите название задачи.");

    const payload={
      title,
      description:$("taskDescription").value.trim(),
      assigneeType,
      assigneeId:assigneeType==="USER"?Number(targetId):null,
      assigneeDepartmentId:assigneeType==="DEPARTMENT"?Number(targetId):null,
      assigneeGroupId:assigneeType==="GROUP"?Number(targetId):null,
      recipientUserIds:assigneeType==="GROUP"?getRecipientDropdownValues("taskGroupPeople"):[],
      recipientDepartmentIds:assigneeType==="GROUP"?getRecipientDropdownValues("taskGroupDepartments"):[],
      dueDate:$("taskDueDate").value||null,
      priority:$("taskPriority").value||"NORMAL",
      documentId:$("taskDocument").value?Number($("taskDocument").value):null
    };
    const created=await api("/api/tasks/",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(payload)
    });

    if(created.notificationSent){
      msg("taskMsg",created.assigneeType==="GROUP"
        ?`Задача выдана филиалу/группе. Уведомлены ${created.recipientCount||0} сотрудников.`
        :created.assigneeType==="DEPARTMENT"
        ?`Задача выдана подразделению. Уведомлены ${created.recipientCount||0} сотрудников.`
        :"Задача выдана. Получатель получил уведомление.",true);
    }else{
      msg("taskMsg","Задача выдана, но часть уведомлений не создалась. Задача не потеряна.",false);
    }

    $("taskTitle").value="";
    $("taskDescription").value="";
    $("taskDueDate").value="";
    $("taskDocument").value="";
    $("taskPriority").value="NORMAL";
    await loadNotifications({announce:false});
    await renderTasks();
  }catch(e){
    msg("taskMsg",(e.message||"Не удалось выдать задачу.")+(e.code?` [${e.code}]`:""));
  }
}

function toggleTaskCreate(){
  const shell=$("taskCreateShell"),body=$("taskCreateBody");
  if(!shell||!body)return;
  const open=body.classList.toggle("hidden");
  shell.classList.toggle("open",!open);
  if(!open)setTimeout(()=>$("taskTitle")?.focus(),80);
}

function installProfileExperienceStyles(){
  if(document.getElementById("kedoProfileExperienceStyles"))return;
  const style=document.createElement("style");style.id="kedoProfileExperienceStyles";style.textContent=`
    .profile-page{max-width:1180px;margin:0 auto;padding-bottom:30px}
    .profile-hero{position:relative;overflow:hidden;display:flex;justify-content:space-between;align-items:flex-end;gap:18px;padding:22px 24px;margin-bottom:14px;border:1px solid #d5e5ee;border-radius:18px;background:radial-gradient(circle at 88% 0%,rgba(135,202,225,.34),transparent 32%),linear-gradient(135deg,#f5fbfd,#eef5fb);box-shadow:0 10px 26px rgba(30,76,105,.06)}
    .profile-hero:after{content:"";position:absolute;right:-44px;bottom:-60px;width:190px;height:190px;border:24px solid rgba(255,255,255,.55);border-radius:50%;pointer-events:none}
    .profile-hero h1{position:relative;margin:5px 0 5px;z-index:1}.profile-hero p{position:relative;z-index:1}
    .profile-hero-actions{position:relative;z-index:1;display:flex;flex-wrap:wrap;justify-content:flex-end;gap:7px}
    .profile-identity{position:relative;display:flex;align-items:center;gap:17px;padding:20px;margin-bottom:14px;border:1px solid #d7e5ee;background:#fff;box-shadow:0 10px 26px rgba(30,76,105,.055)}
    .profile-identity-main{min-width:0}.profile-identity-main h2{font-size:23px!important;letter-spacing:-.02em}.profile-identity-main p{font-size:13px!important}
    .profile-identity-actions{display:flex;align-items:center;flex-wrap:wrap;gap:7px;margin-left:auto;align-self:flex-start}.profile-avatar-actions{display:flex;flex-wrap:wrap;gap:7px}
    .profile-badges span{box-shadow:0 2px 7px rgba(29,89,122,.05)}
    .profile-grid{grid-template-columns:minmax(0,1.15fr) minmax(300px,.85fr)!important;gap:14px!important}
    .profile-card,.profile-shortcuts,.profile-leadership,.profile-switcher,.profile-team{border:1px solid #dce8ef;box-shadow:0 8px 22px rgba(30,76,105,.04)}
    .profile-card h2,.profile-shortcuts h2,.profile-leadership h2,.profile-switcher h2,.profile-team h2{font-size:18px!important}
    .profile-card-head,.profile-section-head{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:10px}.profile-section-head{margin-bottom:13px}.profile-section-actions{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:7px}.profile-section-actions button{white-space:nowrap}
    .profile-info-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 20px}.profile-info-list>div{min-width:0}.profile-info-list strong{display:block;overflow-wrap:anywhere;word-break:break-word;line-height:1.35}
    .profile-work-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin:4px 0 15px}.profile-work-item{min-width:0;padding:11px 12px;border:1px solid #dceaf1;border-radius:12px;background:linear-gradient(145deg,#fbfdff,#f2f8fb)}.profile-work-item span,.profile-work-item small{display:block;color:#7891a2;font-size:10px}.profile-work-item strong{display:block;margin:5px 0 3px;color:#214b68;font-size:12px;line-height:1.3;overflow-wrap:anywhere;word-break:break-word}.profile-work-item small{font-size:10px;color:#9aabb7}.profile-work-item.is-empty{background:#fbfcfd;border-style:dashed}.profile-work-item.is-empty strong{color:#7c8f9c}.profile-work-supervisor{border-color:#cfe3ec;background:linear-gradient(145deg,#f5fcff,#eaf6fa)}
    .profile-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:14px}.profile-metric{padding:10px 11px;border:1px solid #e0ebf1;border-radius:10px;background:#f8fbfd}.profile-metric strong{display:block;color:#1b638f;font-size:20px;line-height:1.1}.profile-metric span{display:block;margin-top:4px;color:#7b90a0;font-size:10px}
    .profile-leadership,.profile-switcher,.profile-team{margin-top:14px;padding:17px}.profile-leadership-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.profile-management-hint{margin:12px 0 0;padding:10px 12px;border:1px solid #e1edf2;border-radius:10px;background:#f7fbfd;color:#7890a0;font-size:11px;line-height:1.45}.profile-team-picker{display:grid;gap:10px;margin-top:14px;padding:13px;border:1px solid #dbe9ef;border-radius:12px;background:linear-gradient(145deg,#f8fcfe,#f1f8fb)}.profile-team-picker>div:first-child strong,.profile-team-picker>div:first-child small{display:block}.profile-team-picker>div:first-child strong{color:#2b5870;font-size:12px}.profile-team-picker>div:first-child small{margin-top:3px;color:#8096a4;font-size:10px}.profile-team-candidates{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;max-height:240px;overflow:auto}.profile-team-candidate{display:flex;align-items:center;gap:8px;min-width:0;padding:8px 9px;border:1px solid #dfebf0;border-radius:9px;background:#fff}.profile-team-candidate .profile-person-copy{min-width:0}.profile-team-candidate .primary{flex:0 0 auto;padding:6px 9px;font-size:10px;white-space:nowrap}.profile-team-candidate-empty{grid-column:1/-1;padding:10px;color:#8296a3;font-size:11px}.profile-person-card{display:flex;align-items:center;gap:10px;min-width:0;padding:10px;border:1px solid #e0eaf0;border-radius:11px;background:linear-gradient(135deg,#fff,#f8fbfd);transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease}.profile-person-card:hover{transform:translateY(-2px);border-color:#b9d5e3;box-shadow:0 7px 17px rgba(30,76,105,.08)}.profile-person-copy{min-width:0;flex:1}.profile-person-copy strong,.profile-person-copy small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.profile-person-copy strong{color:#294b63;font-size:12px}.profile-person-copy small{margin-top:3px;color:#8193a1;font-size:10px}.profile-person-kind{display:inline-flex;margin-top:4px;padding:3px 6px;border-radius:999px;background:#eaf5fa;color:#287398;font-size:9px;font-weight:700}.profile-person-actions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:5px;flex:0 0 auto}.profile-person-actions button{padding:6px 8px;font-size:10px;white-space:nowrap}.profile-person-card .secondary{padding:6px 8px;font-size:10px;white-space:nowrap}
    .profile-switcher{background:linear-gradient(135deg,#fbfdff,#f2f8fb)}.profile-switcher-note{margin:0 0 12px;padding:9px 11px;border:1px solid #d8e8f0;border-radius:9px;background:#f5fbfd;color:#5f7889;font-size:11px;line-height:1.45}.profile-switcher-note strong{color:#2d617d}.profile-switch-search{width:100%;box-sizing:border-box;margin-bottom:10px}.profile-switch-list{display:grid;gap:6px;max-height:310px;overflow:auto;padding-right:3px}.profile-switch-row{display:flex;align-items:center;gap:9px;padding:8px;border:1px solid #e2ebf0;border-radius:9px;background:#fff}.profile-switch-row .profile-person-copy{min-width:0}.profile-switch-row .primary{padding:6px 9px;font-size:10px;white-space:nowrap}
    .profile-session-banner{display:flex;align-items:center;gap:9px;margin-right:8px;padding:5px 7px 5px 10px;border:1px solid rgba(255,214,137,.5);border-radius:9px;background:rgba(132,78,10,.22);color:#fff5dc;font-size:11px}.profile-session-banner span{max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.profile-session-banner button{border:1px solid rgba(255,255,255,.35);border-radius:7px;padding:5px 8px;background:rgba(255,255,255,.14);color:#fff;font-size:10px;font-weight:700;cursor:pointer}.profile-session-banner button:hover{background:rgba(255,255,255,.24)}
    .profile-person-modal{position:fixed;inset:0;z-index:30000;display:grid;place-items:center;padding:18px;background:rgba(16,38,55,.5);backdrop-filter:blur(4px)}.profile-person-modal-card{width:min(470px,calc(100vw - 30px));padding:20px;border:1px solid #d6e5ed;border-radius:16px;background:#fff;box-shadow:0 22px 60px rgba(16,38,55,.25)}.profile-person-modal-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}.profile-person-modal-identity{display:flex;align-items:center;gap:11px}.profile-person-modal-card h2{margin:0;color:#213f56;font-size:19px}.profile-person-modal-card p{margin:4px 0 0;color:#7890a0;font-size:12px}.profile-person-modal-details{display:grid;gap:8px;margin:17px 0}.profile-person-modal-details div{display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-top:1px solid #edf2f5;font-size:11px}.profile-person-modal-details span{color:#8193a1}.profile-person-modal-details strong{color:#38566b;text-align:right}.profile-person-modal-actions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:7px}
    @media(max-width:800px){.profile-hero{align-items:flex-start;flex-direction:column}.profile-hero-actions{justify-content:flex-start}.profile-leadership-list{grid-template-columns:1fr}.profile-work-grid{grid-template-columns:1fr 1fr}.profile-team-candidates{grid-template-columns:1fr}}
    @media(max-width:560px){.profile-identity{align-items:flex-start;flex-wrap:wrap}.profile-identity-actions{width:100%;margin-left:0}.profile-info-list{grid-template-columns:1fr}.profile-work-grid{grid-template-columns:1fr}.profile-metrics{grid-template-columns:1fr 1fr}.profile-session-banner{display:flex;margin-right:0;padding:4px}.profile-session-banner span{display:none}.profile-session-banner button{padding:5px 7px}}
  `;document.head.appendChild(style);
  style.textContent += ".profile-person-avatar{border:0;background:transparent;padding:0;cursor:pointer;border-radius:50%;line-height:0}.profile-empty-state{grid-column:1/-1;padding:22px 14px;border:1px dashed #cbdce6;border-radius:11px;text-align:center;color:#7c91a0}.profile-empty-state strong,.profile-empty-state span{display:block}.profile-empty-state span{margin-top:4px;font-size:11px;line-height:1.45}";
  style.textContent += ".profile-directory-launch{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:14px;padding:17px;border:1px solid #dce8ef;box-shadow:0 8px 22px rgba(30,76,105,.04);background:linear-gradient(135deg,#fbfdff,#f2f8fb)}.profile-directory-launch-copy{min-width:0}.profile-directory-launch-copy h2{margin:4px 0 3px;font-size:18px!important;color:#294b63}.profile-directory-launch-copy p{margin:0;color:#8193a1;font-size:11px}.profile-directory-launch .primary{white-space:nowrap}.profile-directory-modal-card{width:min(720px,calc(100vw - 30px));max-height:min(760px,calc(100vh - 30px));display:flex;flex-direction:column;padding:20px;border:1px solid #d6e5ed;border-radius:16px;background:#fff;box-shadow:0 22px 60px rgba(16,38,55,.25)}.profile-directory-modal-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}.profile-directory-modal-head h2{margin:3px 0 4px;color:#213f56;font-size:20px}.profile-directory-modal-head p{margin:0;color:#7890a0;font-size:11px}.profile-directory-modal-search{width:100%;box-sizing:border-box;margin:16px 0 10px;padding:11px 12px;border:1px solid #d5e3e9;border-radius:10px;background:#f8fbfd;color:#294b63;outline:none;font:inherit;font-size:11px}.profile-directory-modal-search:focus{border-color:#78aac0;box-shadow:0 0 0 3px rgba(72,139,169,.08)}.profile-directory-modal-list{display:grid;gap:7px;min-height:0;overflow:auto;padding-right:3px}.profile-directory-modal-row{display:flex;align-items:center;gap:10px;padding:9px;border:1px solid #e0eaf0;border-radius:10px;background:#fbfdfe}.profile-directory-modal-row .profile-person-copy{min-width:0}.profile-directory-modal-row .primary{flex:0 0 auto;padding:7px 10px;font-size:10px;white-space:nowrap}.profile-directory-modal-empty{padding:24px 12px;border:1px dashed #cbdce6;border-radius:10px;text-align:center;color:#7c91a0;font-size:11px}@media(max-width:600px){.profile-directory-launch{align-items:flex-start;flex-direction:column}.profile-directory-launch .primary{width:100%}.profile-directory-modal-card{padding:16px}.profile-directory-modal-row{align-items:flex-start;flex-wrap:wrap}.profile-directory-modal-row .primary{margin-left:auto}}";
  style.textContent += ".profile-contacts-card{margin-top:14px}.profile-contact-list{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.profile-contact-row{min-width:0;padding:11px 12px;border:1px solid #dce9ef;border-radius:11px;background:linear-gradient(145deg,#fbfdff,#f3f8fb)}.profile-contact-row span{display:block;color:#7891a2;font-size:10px}.profile-contact-row strong{display:block;margin-top:5px;color:#294f68;font-size:12px;overflow-wrap:anywhere;word-break:break-word}.profile-contact-empty{padding:13px;border:1px dashed #cbdce6;border-radius:11px;background:#fbfdfe;color:#8296a3;font-size:11px}.profile-contacts-modal-card{width:min(540px,calc(100vw - 30px))}.profile-contact-form{display:grid;gap:12px;margin:20px 0 4px}.profile-contact-form label{display:grid;gap:6px}.profile-contact-form label span{color:#385970;font-size:11px;font-weight:700}.profile-contact-form input{width:100%;box-sizing:border-box;padding:11px 12px;border:1px solid #d3e2e9;border-radius:10px;background:#f8fbfd;color:#294b63;outline:none;font:inherit;font-size:12px}.profile-contact-form input:focus{border-color:#75a9bf;box-shadow:0 0 0 3px rgba(76,145,174,.09);background:#fff}.profile-contact-form-message{min-height:16px;margin:8px 0 0;font-size:11px}@media(max-width:800px){.profile-contact-list{grid-template-columns:1fr 1fr}}@media(max-width:560px){.profile-contact-list{grid-template-columns:1fr}}";
}
function profileAvatarLetters(){return esc((state.user?.fullName||"?").split(/\s+/).map(x=>x[0]).slice(0,2).join("").toUpperCase());}
function updateProfileSessionBanner(){
  const host=document.querySelector("header.top .top-right"),logoutButton=$("logout");
  if(!host||!logoutButton)return;
  let banner=$("profileSessionBanner");
  if(!state.user?.isImpersonating){banner?.remove();return;}
  if(!banner){banner=document.createElement("div");banner.id="profileSessionBanner";banner.className="profile-session-banner";host.insertBefore(banner,logoutButton);}
  banner.innerHTML=`<span>Вы вошли как ${esc(state.user.fullName||"сотрудник")}</span><button type="button" data-action="returnProfile">Вернуться</button>`;
}
function profilePersonById(id){
  const overview=state.profileOverview||{};
  return [...(overview.leadership||[]),...(overview.team||[]),...(overview.teamCandidates||[]),...(overview.switchCandidates||[])].find(item=>Number(item.id)===Number(id));
}
function profileContactsMarkup(person,editable=false){
  const contacts=[
    ["Телефон",person?.contact_phone,"tel"],
    ["E-mail",person?.contact_email,"email"],
    ["Дополнительно",person?.contact_note,"note"]
  ].filter(item=>item[1]);
  return `<section class="card profile-card profile-contacts-card"><div class="profile-card-head"><div><div class="eyebrow">РАБОЧИЕ КОНТАКТЫ</div><h2>Как связаться</h2><p class="muted">${editable?"Контакты видны коллегам в вашей карточке.":"Контакты, которые сотрудник оставил для связи."}</p></div>${editable?'<button type="button" class="secondary" data-action="openProfileContacts">Изменить</button>':""}</div>${contacts.length?`<div class="profile-contact-list">${contacts.map(([label,value,kind])=>`<div class="profile-contact-row"><span>${label}</span><strong>${esc(value)}</strong></div>`).join("")}</div>`:`<div class="profile-contact-empty">${editable?"Контакты пока не заполнены.":"Сотрудник пока не оставил контакты."}</div>`}</section>`;
}
function openProfileContacts(){
  const person=state.profileOverview?.user||state.user||{};
  document.querySelectorAll(".profile-contacts-modal").forEach(item=>item.remove());
  const overlay=document.createElement("div");overlay.className="profile-person-modal profile-contacts-modal";
  overlay.innerHTML=`<form class="profile-person-modal-card profile-contacts-modal-card" role="dialog" aria-modal="true" aria-label="Рабочие контакты"><div class="profile-person-modal-head"><div><div class="eyebrow">РАБОЧИЕ КОНТАКТЫ</div><h2>Как с вами связаться</h2><p>Эти данные будут доступны коллегам в вашей карточке.</p></div><button type="button" class="secondary" data-contact-close>Закрыть</button></div><div class="profile-contact-form"><label><span>Телефон</span><input name="phone" maxlength="80" placeholder="+7 (___) ___-__-__" value="${esc(person.contact_phone||"")}"></label><label><span>E-mail</span><input name="email" type="email" maxlength="255" placeholder="name@company.ru" value="${esc(person.contact_email||"")}"></label><label><span>Дополнительно</span><input name="note" maxlength="500" placeholder="Кабинет, Telegram или добавочный номер" value="${esc(person.contact_note||"")}"></label></div><div class="profile-person-modal-actions"><button type="button" class="secondary" data-contact-close>Отмена</button><button type="submit" class="primary">Сохранить</button></div><p class="profile-contact-form-message muted" aria-live="polite"></p></form>`;
  document.body.appendChild(overlay);
  const form=overlay.querySelector("form"),close=()=>overlay.remove();
  overlay.querySelectorAll("[data-contact-close]").forEach(button=>button.onclick=close);
  overlay.onclick=event=>{if(event.target===overlay)close();};
  form.elements.phone.focus();
  form.onsubmit=async event=>{
    event.preventDefault();
    const submit=form.querySelector('button[type="submit"]'),message=form.querySelector(".profile-contact-form-message");
    submit.disabled=true;message.textContent="Сохранение…";
    try{
      const result=await api("/api/profile/me/contacts",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:form.elements.phone.value,email:form.elements.email.value,note:form.elements.note.value})});
      state.profileOverview={...(state.profileOverview||{}),user:{...(state.profileOverview?.user||{}),...result}};
      state.user={...(state.user||{}),...result};
      close();await renderProfile();
    }catch(error){message.textContent=error.message||"Не удалось сохранить контакты.";submit.disabled=false;}
  };
}
async function renderViewedProfile(person){
  applyProfileSettings();
  installProfileExperienceStyles();
  const role=Array.isArray(person.roles)&&person.roles.length?roleLabelsList(person.roles):roleLabel(person.role);
  const supervisorName=person.supervisor_name||"Не назначен";
  const supervisorPosition=person.supervisor_position||"Руководитель не указан";
  const subordinateCount=Number(person.subordinate_count||0);
  const leadership=Array.isArray(person.leadership)?person.leadership:[];
  const team=Array.isArray(person.team)?person.team:[];
  const photo=avatarMarkup({userId:person.id,name:person.full_name,hasAvatar:!!person.has_avatar,sizeClass:"profile-avatar kedo-avatar-lg",bust:Date.now()});
  const publicPersonHtml=(item,kind)=>`<div class="profile-person-card"><button type="button" class="profile-person-avatar" data-action="openProfileCard" data-id="${item.id}">${avatarMarkup({userId:item.id,name:item.full_name,hasAvatar:!!item.has_avatar,sizeClass:"kedo-avatar-sm",bust:Date.now()})}</button><div class="profile-person-copy"><strong>${esc(item.full_name)}</strong><small>${esc(item.position||"Должность не указана")} · ${esc(item.department_name||item.org_group_name||"Без подразделения")}</small><span class="profile-person-kind">${esc(kind)}</span></div><div class="profile-person-actions"><button type="button" class="primary" data-action="openChatWithUser" data-id="${item.id}">Написать</button><button type="button" class="secondary" data-action="openProfileCard" data-id="${item.id}">Профиль</button></div></div>`;
  const leadershipHtml=leadership.length?leadership.map(item=>publicPersonHtml(item,item.leader_type||"Руководство")).join(""):`<div class="profile-empty-state"><strong>Руководители не назначены</strong><span>Для этого сотрудника руководящая цепочка пока не заполнена.</span></div>`;
  const teamHtml=team.length?team.map(item=>publicPersonHtml(item,"Подчинённый")).join(""):`<div class="profile-empty-state"><strong>Подчинённых пока нет</strong><span>В команде сотрудника пока нет назначенных подчинённых.</span></div>`;
  $("main").innerHTML=`<div class="profile-page profile-public-page">
    <div class="profile-hero"><div><div class="eyebrow">ПРОФИЛЬ СОТРУДНИКА</div><h1 class="page-title">${esc(person.full_name)}</h1><p class="muted">Просмотр рабочей информации сотрудника.</p></div><div class="profile-hero-actions"><button type="button" class="secondary" data-action="backToMyProfile">← Назад к моему профилю</button></div></div>
    <section class="profile-identity card"><div>${photo}</div><div class="profile-identity-main"><div class="eyebrow">СОТРУДНИК</div><h2>${esc(person.full_name)}</h2><p>${esc(person.position||"Должность не указана")}</p><div class="profile-badges"><span>${esc(role)}</span><span class="profile-status">Активен</span></div></div><div class="profile-identity-actions"><button type="button" class="primary" data-action="openChatWithUser" data-id="${person.id}">Написать сообщение</button></div></section>
    <section class="card profile-card profile-public-summary"><div class="profile-card-head"><div><div class="eyebrow">ОСНОВНАЯ ИНФОРМАЦИЯ</div><h2>Рабочий профиль</h2><p class="muted">Открытая информация для рабочих контактов.</p></div></div>
      <div class="profile-work-grid"><div class="profile-work-item"><span>Подразделение</span><strong>${esc(person.department_name||"Не указано")}</strong><small>Рабочая команда</small></div><div class="profile-work-item"><span>Филиал</span><strong>${esc(person.org_group_name||"Не указан")}</strong><small>Место работы</small></div><div class="profile-work-item profile-work-supervisor ${supervisorName==="Не назначен"?"is-empty":""}"><span>Непосредственный руководитель</span><strong>${esc(supervisorName)}</strong><small>${esc(supervisorPosition)}</small></div></div>
      <div class="profile-info-list"><div><span>ФИО</span><strong>${esc(person.full_name||"—")}</strong></div><div><span>Логин</span><strong>${esc(person.login||"Не указан")}</strong></div><div><span>Должность</span><strong>${esc(person.position||"Не указана")}</strong></div><div><span>Роль</span><strong>${esc(role)}</strong></div><div><span>Статус</span><strong>Активный сотрудник</strong></div><div><span>Подчинённые</span><strong>${subordinateCount}</strong></div></div>
    </section>
    ${profileContactsMarkup(person)}
    <section class="card profile-leadership"><div class="profile-section-head"><div><div class="eyebrow">ОРГАНИЗАЦИОННАЯ СТРУКТУРА</div><h2>Руководство</h2><p class="muted">Руководители и рабочие контакты сотрудника.</p></div><span class="profile-branch-badge">${leadership.length} ${leadership.length===1?"контакт":"контактов"}</span></div><div class="profile-leadership-list">${leadershipHtml}</div></section>
    <section class="card profile-team"><div class="profile-section-head"><div><div class="eyebrow">КОМАНДА СОТРУДНИКА</div><h2>Подчинённые</h2><p class="muted">Сотрудники, закреплённые за этим руководителем.</p></div><span class="profile-branch-badge">${subordinateCount} ${subordinateCount===1?"сотрудник":"сотрудников"}</span></div><div class="profile-leadership-list">${teamHtml}</div></section>
    <section class="card profile-shortcuts profile-public-note"><div><div class="eyebrow">ПРОСМОТР</div><h2>Профиль открыт в режиме чтения</h2><p class="muted">Ваш профиль и активная сессия не изменились.</p></div><div class="profile-shortcut-grid"><button type="button" data-action="openChatWithUser" data-id="${person.id}"><strong>Сообщения</strong><small>Написать сотруднику</small></button><button type="button" data-action="backToMyProfile"><strong>Мой профиль</strong><small>Вернуться назад</small></button></div></section>
  </div>`;
}
function closeEmployeeDirectory(){document.querySelectorAll(".profile-directory-modal").forEach(item=>item.remove());}
function openEmployeeDirectory(){
  closeEmployeeDirectory();
  const people=Array.isArray(state.profileOverview?.switchCandidates)?state.profileOverview.switchCandidates:[];
  const overlay=document.createElement("div");overlay.className="profile-person-modal profile-directory-modal";
  overlay.innerHTML=`<div class="profile-directory-modal-card" role="dialog" aria-modal="true" aria-label="Карточки сотрудников"><div class="profile-directory-modal-head"><div><div class="eyebrow">СПРАВОЧНИК СОТРУДНИКОВ</div><h2>Карточки сотрудников</h2><p>Выберите сотрудника для просмотра полной рабочей информации.</p></div><button type="button" class="secondary" data-action="closeEmployeeDirectory">Закрыть</button></div><input class="profile-directory-modal-search" id="profileDirectorySearch" placeholder="Найти по ФИО, логину или подразделению" autocomplete="off"><div class="profile-directory-modal-list" id="profileDirectoryList">${people.length?people.map(person=>`<div class="profile-directory-modal-row" data-search="${esc(`${person.full_name} ${person.login||""} ${person.position||""} ${person.department_name||""} ${person.org_group_name||""}`.toLowerCase())}">${avatarMarkup({userId:person.id,name:person.full_name,hasAvatar:!!person.has_avatar,sizeClass:"kedo-avatar-sm",bust:Date.now()})}<div class="profile-person-copy"><strong>${esc(person.full_name)}</strong><small>${esc(person.position||"Без должности")} · ${esc(person.department_name||person.org_group_name||"Без подразделения")}</small></div><button type="button" class="primary" data-action="openProfileCard" data-id="${person.id}">Открыть профиль</button></div>`).join(""):`<div class="profile-directory-modal-empty">Сотрудники не найдены.</div>`}</div></div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener("click",event=>{if(event.target===overlay)closeEmployeeDirectory();});
  overlay.querySelector("#profileDirectorySearch")?.addEventListener("input",event=>{const query=event.target.value.trim().toLowerCase();overlay.querySelectorAll(".profile-directory-modal-row").forEach(row=>{row.hidden=!!query&&!String(row.dataset.search||"").includes(query);});});
  overlay.querySelector("#profileDirectorySearch")?.focus();
}
async function openProfileCard(id){
  const cached=profilePersonById(id);
  let person=cached;
  try{person={...(cached||{}),...await api(`/api/profile/users/${Number(id)}`)};}catch(error){if(!person)return kedoAlert(error.message||"Не удалось открыть профиль сотрудника.");}
  state.profileViewedUser=person;
  closeEmployeeDirectory();
  state.page="profile";
  return setPage("profile",{force:true,viewedProfile:true});
}
function openAdminImpersonationModal(){
  document.querySelectorAll(".admin-impersonation-overlay").forEach(item=>item.remove());
  const candidates=Array.isArray(state.adminImpersonationCandidates)?state.adminImpersonationCandidates:[];
  const roles=[...new Set(candidates.flatMap(person=>Array.isArray(person.roles)&&person.roles.length?person.roles:[person.role]).filter(Boolean).map(String))].sort((a,b)=>roleLabel(a).localeCompare(roleLabel(b),"ru"));
  const overlay=document.createElement("div");overlay.className="admin-edit-overlay admin-impersonation-overlay";
  overlay.innerHTML=`<div class="admin-edit-modal admin-impersonation-modal" role="dialog" aria-modal="true" aria-labelledby="adminImpersonationTitle"><div class="admin-modal-head"><div><div class="eyebrow">ПРОВЕРКА ДОСТУПОВ</div><h2 id="adminImpersonationTitle">Открыть портал от имени сотрудника</h2><p class="muted">Выберите человека и проверьте интерфейс с его ролями и доступами. Все действия в этом режиме попадут в журнал аудита.</p></div><button type="button" class="admin-modal-close" aria-label="Закрыть">×</button></div><div class="admin-impersonation-tools" style="display:flex;gap:8px;flex-wrap:wrap;margin:0 0 12px"><input id="adminImpersonationModalSearch" type="search" style="flex:1;min-width:230px" placeholder="Поиск по ФИО, логину или подразделению" autocomplete="off"><select id="adminImpersonationModalRole" style="flex:0 0 230px"><option value="">Все роли</option>${roles.map(role=>`<option value="${esc(role)}">${esc(roleLabel(role))}</option>`).join("")}</select></div><div class="muted" style="margin-bottom:10px">Админская сессия сохранится. После выбора сверху появится кнопка возврата.</div><div class="admin-impersonation-list" id="adminImpersonationModalList" style="display:grid;gap:7px;max-height:min(55vh,430px);overflow:auto;padding-right:3px"></div><div class="admin-edit-actions"><button type="button" class="secondary" data-impersonation-close>Отмена</button></div></div>`;
  document.body.appendChild(overlay);
  const list=overlay.querySelector("#adminImpersonationModalList"),search=overlay.querySelector("#adminImpersonationModalSearch"),roleSelect=overlay.querySelector("#adminImpersonationModalRole");
  const render=()=>{
    const query=search.value.trim().toLowerCase(),role=roleSelect.value.toLowerCase();
    const visible=candidates.filter(person=>{const personRoles=Array.isArray(person.roles)&&person.roles.length?person.roles:[person.role];const haystack=`${person.full_name} ${person.login||""} ${person.position||""} ${person.department_name||""} ${person.org_group_name||""} ${roleLabelsList(personRoles)}`.toLowerCase();return (!query||haystack.includes(query))&&(!role||personRoles.map(item=>String(item).toLowerCase()).includes(role));});
    list.innerHTML=visible.length?visible.map(person=>{const personRoles=Array.isArray(person.roles)&&person.roles.length?person.roles:[person.role];return `<div style="display:flex;align-items:center;gap:10px;padding:10px;border:1px solid #e0eaf0;border-radius:10px;background:#fff">${avatarMarkup({userId:person.id,name:person.full_name,hasAvatar:!!person.has_avatar,sizeClass:"kedo-avatar-sm",bust:Date.now()})}<div style="min-width:0;flex:1"><strong style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#294b63">${esc(person.full_name)}</strong><small style="display:block;margin-top:3px;color:#8193a1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(person.position||"Без должности")} · ${esc(person.department_name||person.org_group_name||"Без подразделения")}</small><span class="profile-person-kind">${esc(roleLabelsList(personRoles))}</span></div><button type="button" class="primary" data-switch-profile-id="${person.id}">Открыть портал</button></div>`;}).join(""):"<div class=\"empty\">По заданным условиям сотрудники не найдены.</div>";
  };
  let closed=false;const onKey=event=>{if(event.key==="Escape")close();};const close=()=>{if(closed)return;closed=true;overlay.remove();document.removeEventListener("keydown",onKey);};
  document.addEventListener("keydown",onKey);overlay.querySelector("[data-impersonation-close]").onclick=close;overlay.querySelector(".admin-modal-close").onclick=close;search.addEventListener("input",render);roleSelect.addEventListener("change",render);list.addEventListener("click",async event=>{const button=event.target.closest("[data-switch-profile-id]");if(!button)return;const id=button.dataset.switchProfileId;close();await switchProfile(id);});render();setTimeout(()=>search.focus(),0);
}
async function switchProfile(id){
  const person=profilePersonById(id)||state.adminImpersonationCandidates?.find(item=>Number(item.id)===Number(id));
  if(!person)return;
  const roles=Array.isArray(person.roles)&&person.roles.length?roleLabelsList(person.roles):roleLabel(person.role);
  if(!await kedoConfirm(`Открыть портал от имени «${person.full_name}»?\n\nРоли: ${roles}. Все действия в этом режиме будут записаны в журнал аудита.`))return;
  try{
    const result=await api("/api/auth/switch-profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:Number(id)})});
    document.querySelectorAll(".profile-person-modal").forEach(item=>item.remove());
    state.csrfToken=result.csrfToken||null;state.profileOverview=null;state.profileViewedUser=null;state.page="dashboard";
    await showApp(result.user);
  }catch(error){kedoAlert(error.message||"Не удалось открыть профиль сотрудника.");}
}
async function openChatWithUser(id){
  const person=profilePersonById(id)||await api(`/api/profile/users/${Number(id)}`);if(!person)return;
  document.querySelectorAll(".profile-person-modal").forEach(item=>item.remove());
  state.chatActiveUser=Number(person.id);state.chatActiveGroup=null;
  return setPage("messages",{force:true});
}
async function backToMyProfile(){
  state.profileViewedUser=null;
  state.page="profile";
  return setPage("profile",{force:true});
}
async function returnProfile(){
  const result=await api("/api/auth/return-profile",{method:"POST"});
  state.csrfToken=result.csrfToken||null;state.profileOverview=null;state.page="profile";
  await showApp();
}
function applyProfileSettings(){
  const density=localStorage.getItem("kedo_density")||"comfortable";
  const avatar=localStorage.getItem("kedo_avatar")||"blue";
  document.body.classList.toggle("kedo-compact",density==="compact");
  document.body.dataset.profileAvatar=avatar;
  state.soundEnabled=(localStorage.getItem("kedo_sound")||"on")==="on";
}
function setProfileSetting(key,value){
  localStorage.setItem(key,value);applyProfileSettings();
  if(key==="kedo_sound")state.soundEnabled=value==="on";
  renderProfile();
}
async function assignProfileTeam(id){
  const person=profilePersonById(id);if(!person)return;
  try{await api(`/api/profile/team/${Number(id)}`,{method:"POST"});await renderProfile();}
  catch(error){kedoAlert(error.message||"Не удалось добавить сотрудника в команду.");}
}
async function removeProfileTeam(id){
  const person=profilePersonById(id);if(!person)return;
  if(!await kedoConfirm(`Убрать «${person.full_name}» из вашей команды?`))return;
  try{await api(`/api/profile/team/${Number(id)}`,{method:"DELETE"});await renderProfile();}
  catch(error){kedoAlert(error.message||"Не удалось изменить команду.");}
}
async function renderProfile(){
  applyProfileSettings();
  installProfileExperienceStyles();
  if(state.profileViewedUser)return renderViewedProfile(state.profileViewedUser);
  try{
    const overview=await api("/api/profile/overview");
    state.profileOverview=overview;
    if(overview.user)state.user={...state.user,...overview.user};
  }catch(error){console.warn("[KEDO] Profile overview unavailable:",error);state.profileOverview={leadership:[],switchCandidates:[],canSwitchProfile:false,stats:{}};}
  const role=roleLabelsList(state.user?.roles);
  const login=state.user?.login||state.user?.username||"—";
  const avatar=profileAvatarLetters();
  const sound=localStorage.getItem("kedo_sound")||"on";
  const density=localStorage.getItem("kedo_density")||"comfortable";
  const avatarColor=localStorage.getItem("kedo_avatar")||"blue";
  const hasPhoto=!!state.user?.hasAvatar;
  const profileOverview=state.profileOverview||{};
  const profileUser=profileOverview.user||state.user||{};
  const supervisorName=profileUser.supervisor_name||"Не назначен";
  const supervisorPosition=profileUser.supervisor_position||"Руководитель появится после назначения";
  const leadership=Array.isArray(profileOverview.leadership)?profileOverview.leadership:[];
  const team=Array.isArray(profileOverview.team)?profileOverview.team:[];
  const teamCandidates=Array.isArray(profileOverview.teamCandidates)?profileOverview.teamCandidates:[];
  const canShowTeam=!!profileOverview.canManageTeam&&userRoles().includes("department_head");
  const profileStats=profileOverview.stats||{};
  const leadershipHtml=leadership.length?leadership.map(person=>`<div class="profile-person-card"><button type="button" class="profile-person-avatar" data-action="openProfileCard" data-id="${person.id}">${avatarMarkup({userId:person.id,name:person.full_name,hasAvatar:!!person.has_avatar,sizeClass:"kedo-avatar-sm",bust:Date.now()})}</button><div class="profile-person-copy"><strong>${esc(person.full_name)}</strong><small>${esc(person.position||"Должность не указана")}</small><span class="profile-person-kind">${esc(person.leader_type||"Руководство")}</span></div><div class="profile-person-actions"><button type="button" class="primary" data-action="openChatWithUser" data-id="${person.id}">Написать</button><button type="button" class="secondary" data-action="openProfileCard" data-id="${person.id}">Карточка</button></div></div>`).join(""):`<div class="profile-empty-state"><strong>Руководители пока не назначены</strong><span>Здесь появятся руководители филиала, подразделения и организации.</span></div>`;
  const teamHtml=team.length?team.map(person=>`<div class="profile-person-card profile-team-person"><button type="button" class="profile-person-avatar" data-action="openProfileCard" data-id="${person.id}">${avatarMarkup({userId:person.id,name:person.full_name,hasAvatar:!!person.has_avatar,sizeClass:"kedo-avatar-sm",bust:Date.now()})}</button><div class="profile-person-copy"><strong>${esc(person.full_name)}</strong><small>${esc(person.position||"Должность не указана")} · ${esc(person.department_name||"Без подразделения")}</small><span class="profile-person-kind">Подчинённый</span></div><div class="profile-person-actions"><button type="button" class="primary" data-action="openChatWithUser" data-id="${person.id}">Написать</button><button type="button" class="secondary" data-action="openProfileCard" data-id="${person.id}">Карточка</button>${profileOverview.canManageTeam?`<button type="button" class="danger-outline" data-action="removeProfileTeam" data-id="${person.id}">Убрать</button>`:""}</div></div>`).join(""):`<div class="profile-empty-state"><strong>${profileOverview.canManageTeam?"Команда пока не сформирована":"Подчинённых пока нет"}</strong><span>${profileOverview.canManageTeam?"Добавьте сотрудников из списка ниже — они сразу появятся в вашей карточке.":"Назначенные вам сотрудники появятся здесь."}</span></div>`;
  const teamCandidatesHtml=teamCandidates.length?teamCandidates.map(person=>`<div class="profile-team-candidate"><div class="profile-person-copy"><strong>${esc(person.full_name)}</strong><small>${esc(person.position||"Без должности")} · ${esc(person.department_name||person.org_group_name||"Без подразделения")}</small></div><button type="button" class="primary" data-action="assignProfileTeam" data-id="${person.id}">Добавить</button></div>`).join(""):`<div class="profile-team-candidate-empty">Все доступные сотрудники уже распределены или пока не найдены.</div>`;
  const photoHtml=avatarMarkup({userId:state.user?.id,name:state.user?.fullName,hasAvatar:hasPhoto,sizeClass:`profile-avatar profile-avatar-${avatarColor} kedo-avatar-lg`,bust:Date.now()});
  $("main").innerHTML=`<div class="profile-page">
    <div class="profile-hero"><div><div class="eyebrow">ЛИЧНЫЙ РАЗДЕЛ</div><h1 class="page-title">Мой профиль</h1><p class="muted">Ваш рабочий кабинет, команда и настройки портала.</p></div><div class="profile-hero-actions"><button class="secondary" data-action="setPage" data-page="dashboard">На главную</button><button class="primary" data-action="setPage" data-page="messages">Открыть сообщения</button></div></div>
    <section class="profile-identity card">${photoHtml}<div class="profile-identity-main"><div class="eyebrow">СОТРУДНИК</div><h2>${esc(state.user?.fullName||"Пользователь")}</h2><p>${esc(state.user?.position||"Должность не указана")}</p><div class="profile-badges"><span>${esc(role)}</span>${state.managedBranch?`<span class="profile-branch-badge">Руководитель филиала · ${esc(state.managedBranch.name)}</span>`:""}<span class="profile-status">Активен</span></div>
      <div class="profile-avatar-actions">
        <label class="secondary profile-avatar-upload">Загрузить фото<input id="avatarFileInput" type="file" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp" hidden></label>
        ${hasPhoto?`<button type="button" class="secondary" data-action="removeAvatar">Удалить фото</button>`:""}
      </div>
      <p class="muted" style="margin:8px 0 0;font-size:12px">JPG, PNG или WEBP до 2 МБ.</p>
    </div><button class="secondary" data-action="setPage" data-page="dashboard">На главную</button></section>
    <div class="profile-grid">
      <section class="card profile-card"><div class="profile-card-head"><div><div class="eyebrow">УЧЁТНАЯ ЗАПИСЬ</div><h2>Основная информация</h2><p class="muted">Коротко о вашей рабочей привязке и доступе.</p></div></div>
        <div class="profile-work-grid">
          <div class="profile-work-item"><span>Подразделение</span><strong title="${esc(state.user?.departmentName||"Не указано")}">${esc(state.user?.departmentName||"Не указано")}</strong><small>Рабочая команда</small></div>
          <div class="profile-work-item"><span>Филиал</span><strong title="${esc(state.user?.orgGroupName||"Основное здание")}">${esc(state.user?.orgGroupName||"Основное здание")}</strong><small>Место работы</small></div>
          <div class="profile-work-item profile-work-supervisor ${supervisorName==="Не назначен"?"is-empty":""}"><span>Непосредственный руководитель</span><strong>${esc(supervisorName)}</strong><small>${esc(supervisorPosition)}</small></div>
        </div>
        <div class="profile-info-list">
          <div><span>ФИО</span><strong>${esc(state.user?.fullName||"—")}</strong></div>
          <div><span>Логин</span><strong>${esc(login)}</strong></div>
          <div><span>Должность</span><strong>${esc(state.user?.position||"Не указана")}</strong></div>
          <div><span>Роль</span><strong>${esc(role)}</strong></div>
        </div>
        <div class="profile-metrics"><div class="profile-metric"><strong>${Number(profileStats.document_count||0)}</strong><span>моих документов</span></div><div class="profile-metric"><strong>${Number(profileStats.task_count||0)}</strong><span>активных задач</span></div><div class="profile-metric"><strong>${Number(profileStats.session_count||0)}</strong><span>активных сессий</span></div></div>
      </section>
      <section class="card profile-card"><div class="profile-card-head"><div><div class="eyebrow">НАСТРОЙКИ</div><h2>Интерфейс</h2></div></div>
        <div class="profile-setting"><div><strong>Звуки уведомлений</strong><small>Звук входящих сообщений и системных уведомлений.</small></div><div class="profile-segment"><button class="${sound==="on"?"active":""}" data-action="setProfileSetting" data-key="kedo_sound" data-value="on">Вкл.</button><button class="${sound==="off"?"active":""}" data-action="setProfileSetting" data-key="kedo_sound" data-value="off">Выкл.</button></div></div>
        <div class="profile-setting"><div><strong>Плотность интерфейса</strong><small>Можно сделать рабочие списки компактнее.</small></div><div class="profile-segment"><button class="${density==="comfortable"?"active":""}" data-action="setProfileSetting" data-key="kedo_density" data-value="comfortable">Обычная</button><button class="${density==="compact"?"active":""}" data-action="setProfileSetting" data-key="kedo_density" data-value="compact">Компактная</button></div></div>
        <div class="profile-setting"><div><strong>Цвет аватара</strong><small>Используется, если фото не загружено.</small></div><div class="profile-avatar-choices">${["blue","teal","slate","sand"].map(c=>`<button class="profile-avatar-choice ${avatarColor===c?"active":""} profile-avatar-${c}" data-action="setProfileSetting" data-key="kedo_avatar" data-value="${c}">${avatar}</button>`).join("")}</div></div>
      </section>
    </div>
    ${profileContactsMarkup(profileUser,true)}
    <section class="card profile-leadership"><div class="profile-section-head"><div><div class="eyebrow">ВАША КОМАНДА</div><h2>Руководство</h2><p class="muted">Люди, к которым можно обратиться по рабочим вопросам.</p></div><div class="profile-section-actions"><span class="profile-branch-badge">${leadership.length} ${leadership.length===1?"контакт":"контактов"}</span>${profileOverview.canSwitchProfile?`<button type="button" class="secondary" data-action="setPage" data-page="admin">Настроить структуру</button>`:""}</div></div><div class="profile-leadership-list">${leadershipHtml}</div>${!profileUser.supervisor_id?`<p class="profile-management-hint">Непосредственный руководитель назначается администратором в карточке сотрудника.</p>`:""}</section>
    ${canShowTeam?`<section class="card profile-team"><div class="profile-section-head"><div><div class="eyebrow">МОЯ КОМАНДА</div><h2>Подчинённые</h2><p class="muted">Сотрудники, которых вы ведёте по рабочим вопросам.</p></div><span class="profile-branch-badge">${team.length} ${team.length===1?"сотрудник":"сотрудников"}</span></div><div class="profile-leadership-list">${teamHtml}</div><div class="profile-team-picker"><div><strong>Добавить сотрудника</strong><small>Доступны сотрудники вашей зоны управления без другого руководителя.</small></div><div class="profile-team-candidates">${teamCandidatesHtml}</div></div></section>`:""}
    <section class="card profile-shortcuts"><div><div class="eyebrow">БЫСТРЫЕ ДЕЙСТВИЯ</div><h2>Рабочие разделы</h2></div><div class="profile-shortcut-grid"><button data-action="setPage" data-page="messages"><strong>Сообщения</strong><small>Написать коллеге</small></button><button data-action="setPage" data-page="documents"><strong>Документы</strong><small>Открыть архив</small></button><button data-action="setPage" data-page="orders"><strong>Приказы</strong><small>Открыть реестр</small></button><button data-action="setPage" data-page="tasks"><strong>Задачи</strong><small>Проверить поручения</small></button></div></section>
  </div>`;
  $("avatarFileInput")?.addEventListener("change",async e=>{
    const file=e.target.files?.[0];
    e.target.value="";
    if(!file)return;
    try{
      await uploadMyAvatar(file);
      await showApp();
      await renderProfile();
    }catch(err){kedoAlert(err.message||"Не удалось загрузить аватар.");}
  });
}

async function confirmTask(id){try{await api("/api/tasks/"+id+"/confirm",{method:"POST"});await loadNotifications({announce:false});await renderTasks();}catch(e){kedoAlert(e.message);}}
async function updateTask(id,status){
  try{
    await api("/api/tasks/"+id,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status})});
    await loadNotifications({announce:false});
    renderTasks();
  }catch(e){
    kedoAlert((e.message||"Не удалось изменить статус задачи.")+(e.code?` [${e.code}]`:""));
    await renderTasks();
  }
}
async function updateTaskPriority(id,priority){
  try{
    await api("/api/tasks/"+id,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({priority})});
    await renderTasks();
  }catch(e){
    kedoAlert((e.message||"Не удалось изменить приоритет задачи.")+(e.code?" ["+e.code+"]":""));
  }
}

async function renderAdminAccess(){
  if(!isAdminUser()) return setPage("dashboard");
  const loaded=await Promise.allSettled([
    api("/api/documents/?limit=100"),
    api("/api/knowledge/"),
    api("/api/knowledge/access/options")
  ]);
  const docs=loaded[0].status==="fulfilled"?listData(loaded[0].value):[];
  const knowledge=loaded[1].status==="fulfilled"?listData(loaded[1].value):[];
  const options=loaded[2].status==="fulfilled"?loaded[2].value:{roles:[],positions:[],departments:[],groups:[],users:[]};
  const resources=[
    ...docs.map(d=>({kind:"DOCUMENT",id:d.id,title:d.title||d.filename||"Документ",meta:`${d.document_number?"№ "+d.document_number+" · ":""}${d.department_name||"Общее"}`})),
    ...knowledge.map(k=>({kind:"KNOWLEDGE",id:k.id,title:k.title||"Материал базы знаний",meta:`${k.category||"Без категории"} · ${k.department_name||"Общее"}`}))
  ];
  const resourceResults=await Promise.all(resources.map(async resource=>{
    try{
      const endpoint=resource.kind==="DOCUMENT"?`/api/documents/${resource.id}/access`:`/api/knowledge/${resource.id}/access`;
      return {...resource,rules:await api(endpoint),rulesError:false};
    }catch{return {...resource,rules:[],rulesError:true};}
  }));
  const kindLabel={DOCUMENT:"Документ",KNOWLEDGE:"База знаний"};
  const hasRules=r=>r.rules.some(x=>String(x.principal_type||x.principalType||"").toUpperCase()==="ALL")?"ALL":r.rules.map(x=>String(x.principal_type||x.principalType||"").toUpperCase()).filter(Boolean);
  const ruleSummary=r=>{
    if(r.rulesError)return `<span class="access-status is-error">Не удалось загрузить правила</span>`;
    if(!r.rules.length)return `<span class="access-status is-default">По умолчанию · доступ по подразделению</span>`;
    if(r.rules.some(x=>String(x.principal_type||x.principalType||"").toUpperCase()==="ALL"))return `<span class="access-status is-open">Все сотрудники</span>`;
    const labels=r.rules.slice(0,3).map(x=>accessRuleLabel(x,options));
    return `<span class="access-status is-limited">${esc(labels.join(" · "))}${r.rules.length>3?` <b>+${r.rules.length-3}</b>`:""}</span>`;
  };
  const resourceCard=r=>{
    const types=hasRules(r),searchText=[r.title,r.meta,...r.rules.map(x=>accessRuleLabel(x,options))].join(" ").toLowerCase();
    return `<article class="access-resource" data-resource-kind="${r.kind}" data-resource-types="${Array.isArray(types)?types.join(","):types}" data-resource-search="${esc(searchText)}"><div class="access-resource-icon ${r.kind==="DOCUMENT"?"is-document":"is-knowledge"}">${r.kind==="DOCUMENT"?"▤":"✦"}</div><div class="access-resource-main"><div class="access-resource-top"><span class="access-kind">${kindLabel[r.kind]}</span>${r.rules.length?`<span class="access-rule-count">${r.rules.length} ${r.rules.length===1?"правило":"правила"}</span>`:""}</div><strong>${esc(r.title)}</strong><div class="access-resource-meta">${esc(r.meta)}</div><div class="access-current">${ruleSummary(r)}</div></div><button class="secondary access-resource-action" data-action="${r.kind==="DOCUMENT"?"editDocumentAccess":"editKnowledgeAccess"}" data-id="${r.id}" data-return-to="access">Настроить</button></article>`;
  };
  const resourceError=loaded[0].status!=="fulfilled"||loaded[1].status!=="fulfilled";
  $("main").innerHTML=`<div class="access-page-heading"><div><div class="eyebrow">АДМИНИСТРИРОВАНИЕ</div><h1 class="page-title">Центр доступа</h1><p class="muted">Управляйте видимостью документов и материалов в одном месте.</p></div><button class="secondary" data-action="setPage" data-page="admin">Пользователи</button></div><div class="admin-tabs"><button class="secondary" data-action="setPage" data-page="admin">Пользователи</button><button class="primary" data-action="openAdminAccess">Права доступа</button><button class="secondary" data-action="openAdminVersions">Изменения версий</button></div><section class="card access-center-intro"><div class="access-intro-copy"><span class="access-intro-icon">⌘</span><div><h2>Единый центр доступа</h2><p class="muted">Правила складываются по принципу «ИЛИ»: достаточно одного совпадения, чтобы открыть ресурс.</p></div></div><div class="access-quick-rules"><span><b>✓</b> Всем сотрудникам</span><span><b>R</b> Роль</span><span><b>П</b> Подразделение</span><span><b>С</b> Сотрудник</span></div></section><section class="card access-resources-panel"><div class="access-panel-head"><div><div class="eyebrow">КАТАЛОГ РЕСУРСОВ</div><h2>Что сейчас защищено</h2><p class="muted">Выберите ресурс, чтобы изменить его аудиторию.</p></div><div class="access-stat-row"><div><strong>${resourceResults.length}</strong><span>всего</span></div><div><strong>${docs.length}</strong><span>документов</span></div><div><strong>${knowledge.length}</strong><span>материалов</span></div></div></div><div class="access-toolbar"><div class="access-kind-tabs" role="tablist"><button type="button" class="is-active" data-access-kind-filter="ALL">Все <b>${resourceResults.length}</b></button><button type="button" data-access-kind-filter="DOCUMENT">Документы <b>${docs.length}</b></button><button type="button" data-access-kind-filter="KNOWLEDGE">База знаний <b>${knowledge.length}</b></button></div><label class="access-resource-search"><span>⌕</span><input id="accessResourceSearch" type="search" placeholder="Найти ресурс или правило…" autocomplete="off"></label><select id="accessRuleFilter" class="access-rule-select"><option value="ALL">Любой доступ</option><option value="OPEN">Всем сотрудникам</option><option value="ROLE">По роли</option><option value="POSITION">По должности</option><option value="DEPARTMENT">По подразделению</option><option value="GROUP">По филиалу / группе</option><option value="USER">Для сотрудника</option></select></div>${resourceError?`<div class="access-load-note">Часть каталога не загрузилась. Обновите страницу или проверьте доступ к API.</div>`:""}<div id="accessResourceList" class="access-resource-list">${resourceResults.map(resourceCard).join("")||'<div class="empty">Ресурсов пока нет.</div>'}</div><div id="accessResourceEmpty" class="empty access-filter-empty" hidden>По выбранным фильтрам ничего не найдено.</div></section>`;
  const list=document.getElementById("accessResourceList"),empty=document.getElementById("accessResourceEmpty"),search=document.getElementById("accessResourceSearch"),ruleFilter=document.getElementById("accessRuleFilter");
  let activeKind="ALL";
  const applyFilters=()=>{const q=String(search?.value||"").trim().toLowerCase(),rule=ruleFilter?.value||"ALL";let visible=0;list?.querySelectorAll(".access-resource").forEach(card=>{const kindOk=activeKind==="ALL"||card.dataset.resourceKind===activeKind,queryOk=!q||(card.dataset.resourceSearch||"").includes(q),types=String(card.dataset.resourceTypes||"").split(","),ruleOk=rule==="ALL"||(rule==="OPEN"?types.includes("ALL"):types.includes(rule)),show=kindOk&&queryOk&&ruleOk;card.hidden=!show;if(show)visible++;});if(empty)empty.hidden=visible>0||!resourceResults.length;if(list&&resourceResults.length&&!visible)list.hidden=true;else if(list)list.hidden=false;};
  document.querySelectorAll("[data-access-kind-filter]").forEach(button=>button.addEventListener("click",()=>{activeKind=button.dataset.accessKindFilter||"ALL";document.querySelectorAll("[data-access-kind-filter]").forEach(item=>item.classList.toggle("is-active",item===button));applyFilters();}));
  search?.addEventListener("input",applyFilters);ruleFilter?.addEventListener("change",applyFilters);
}

function installAccessCenterStyles(){
  if(document.getElementById("kedoAccessCenterStyles"))return;
  const s=document.createElement("style");s.id="kedoAccessCenterStyles";s.textContent=`
    .access-page-heading{display:flex;justify-content:space-between;align-items:flex-end;gap:18px;margin-bottom:12px}.access-page-heading p{margin:4px 0 0}.access-page-heading>.secondary{flex:0 0 auto}
    .admin-tabs{display:flex;gap:7px;margin:0 0 16px}.admin-tabs button{min-width:140px}
    .access-center-intro{display:flex;justify-content:space-between;gap:24px;align-items:center;padding:18px 20px}.access-intro-copy{display:flex;gap:13px;align-items:flex-start}.access-intro-copy h2{margin:0 0 5px}.access-intro-copy p{margin:0;max-width:560px}.access-intro-icon{width:38px;height:38px;display:grid;place-items:center;flex:0 0 auto;border-radius:12px;background:#eaf4fb;color:#176b9f;font-size:20px;font-weight:800}.access-quick-rules{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:7px;max-width:430px}.access-quick-rules span{display:inline-flex;align-items:center;gap:6px;padding:7px 9px;border:1px solid #dbe6ef;border-radius:9px;background:#f9fbfd;color:#60758a;font-size:11px;white-space:nowrap}.access-quick-rules b{color:#176b9f;font-size:12px}
    .access-resources-panel{margin-top:16px;padding:0;overflow:hidden}.access-panel-head{display:flex;justify-content:space-between;gap:20px;align-items:center;padding:20px 20px 16px;border-bottom:1px solid #e4edf4}.access-panel-head h2{margin:3px 0 3px}.access-panel-head p{margin:0}.access-stat-row{display:flex;gap:9px}.access-stat-row>div{min-width:72px;padding:8px 10px;border:1px solid #dfe9f1;border-radius:10px;background:#f8fbfd;text-align:center}.access-stat-row strong,.access-stat-row span{display:block}.access-stat-row strong{color:#17618e;font-size:18px}.access-stat-row span{margin-top:2px;color:#7b8fa2;font-size:10px}
    .access-toolbar{display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:13px 20px;border-bottom:1px solid #e4edf4;background:#fbfdff}.access-kind-tabs{display:flex;gap:4px;padding:3px;border:1px solid #dce7ef;border-radius:10px;background:#f1f6fa}.access-kind-tabs button{border:0;border-radius:7px;background:transparent;padding:7px 10px;color:#60758a;font:inherit;font-size:11px;cursor:pointer}.access-kind-tabs button b{margin-left:3px;color:#8aa0b2}.access-kind-tabs button.is-active{background:#fff;color:#17618e;box-shadow:0 2px 5px rgba(24,65,96,.08)}.access-kind-tabs button.is-active b{color:#17618e}.access-resource-search{display:flex;align-items:center;gap:7px;flex:1 1 220px;min-width:180px;border:1px solid #d6e2eb;border-radius:9px;background:#fff;padding:0 10px}.access-resource-search span{color:#83a0b5;font-size:18px}.access-resource-search input{width:100%;border:0!important;outline:0!important;box-shadow:none!important;background:transparent!important;padding:9px 0!important;font:inherit;font-size:12px}.access-rule-select{min-width:168px;max-width:210px;padding:9px 28px 9px 10px;border:1px solid #d6e2eb;border-radius:9px;background:#fff;color:#52697e;font:inherit;font-size:12px}
    .access-load-note{margin:12px 20px 0;padding:9px 11px;border-radius:8px;background:#fff8e8;color:#8b6727;font-size:11px}.access-resource-list{display:grid;gap:8px;padding:12px 20px 16px}.access-resource{display:grid;grid-template-columns:38px minmax(0,1fr) auto;gap:12px;align-items:center;padding:12px;border:1px solid #dfe9f1;border-radius:11px;background:#fff;transition:border-color .16s,box-shadow .16s}.access-resource:hover{border-color:#b8d2e2;box-shadow:0 5px 15px rgba(24,65,96,.06)}.access-resource[hidden]{display:none}.access-resource-icon{width:38px;height:38px;display:grid;place-items:center;border-radius:10px;font-size:19px;font-weight:700}.access-resource-icon.is-document{background:#edf5fb;color:#26729e}.access-resource-icon.is-knowledge{background:#f3effb;color:#6a4e99}.access-resource-main{min-width:0}.access-resource-top{display:flex;align-items:center;gap:7px;margin-bottom:3px}.access-kind{display:inline-flex;padding:3px 7px;border-radius:6px;background:#eef5fb;color:#1b6094;font-size:10px;font-weight:700}.access-rule-count{color:#8b9eae;font-size:10px}.access-resource-main>strong{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#254863;font-size:13px}.access-resource-meta{margin-top:3px;color:#7d91a3;font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.access-current{margin-top:6px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px}.access-status.is-default{color:#7a8c9b}.access-status.is-open{color:#237c61;font-weight:700}.access-status.is-limited{color:#276b96}.access-status.is-error{color:#b16d35}.access-status b{font-weight:700}.access-resource-action{white-space:nowrap}.access-filter-empty{margin:0 20px 16px;padding:20px}.access-filter-empty[hidden]{display:none}
    @media(max-width:820px){.access-page-heading,.access-center-intro,.access-panel-head{align-items:stretch;flex-direction:column}.access-page-heading>.secondary{align-self:flex-start}.access-quick-rules{justify-content:flex-start;max-width:none}.access-stat-row{justify-content:flex-start}.access-resource{grid-template-columns:34px minmax(0,1fr)}.access-resource-action{grid-column:2;justify-self:start}.access-toolbar{align-items:stretch}.access-kind-tabs{overflow:auto}.access-rule-select{max-width:none;width:100%}}
  `;
  document.head.appendChild(s);
}
installAccessCenterStyles();


const auditCategoryLabels={ALL:"Все",DOCUMENTS:"Документы",AUTH:"Вход и безопасность",USERS:"Учетные записи",TASKS:"Задачи",ACCESS:"Доступы",DELEGATIONS:"Замещения",MESSAGES:"Сообщения",SYSTEM:"Система"};
const auditActionLabels={
  LOGIN:"Вход в систему",LOGOUT:"Выход из системы",CHANGE_OWN_PASSWORD:"Смена своего пароля",CHANGE_PASSWORD:"Смена пароля",
  CREATE_USER:"Создание учетной записи",CHANGE_ROLES:"Изменение ролей",DELETE_USER:"Удаление учетной записи",
  BLOCK_USER:"Блокировка",UNBLOCK_USER:"Разблокировка",QUARANTINE_USER:"Блокировка учетной записи",UNQUARANTINE_USER:"Разблокировка учетной записи",
  QUARANTINE_BRUTEFORCE:"Автоблокировка после неверных паролей",UPDATE_PROFILE:"Изменение учетной записи",
  RESET_PASSWORD:"Сброс пароля администратором",GENERATE_PASSWORD:"Генерация пароля",ARCHIVE_PROFILE:"Архивация учетной записи",
  CREATE:"Создание",APPROVE:"Согласование",
  REJECT:"Отклонение",SIGN:"Подписание",SUBMIT_FOR_APPROVAL:"Отправка на согласование",
  SEND_FOR_SIGNATURE:"Назначение подписанта",COMMENT:"Комментарий",CREATE_TASK:"Выдача задачи",
  UPDATE_TASK:"Изменение задачи",CONFIRM_TASK:"Подтверждение задачи",WORKFLOW_SECURITY_VIOLATION:"Нарушение workflow",CREATE_DELEGATION:"Создание замещения",CANCEL_DELEGATION:"Отмена замещения",
  PIN_MESSAGE:"Закрепление сообщения",UNPIN_MESSAGE:"Снятие закрепления",SEND_MESSAGE:"Отправка сообщения",
  EDIT_MESSAGE:"Изменение сообщения",DELETE_MESSAGE:"Удаление сообщения",ADD_REACTION:"Добавление реакции",REMOVE_REACTION:"Удаление реакции",
  ADD_MESSAGE_LINK:"Добавление ссылки",FORWARD_MESSAGE:"Пересылка сообщения",
  CREATE_CONVERSATION:"Создание беседы",UPDATE_CONVERSATION:"Изменение беседы",DELETE_CONVERSATION:"Удаление беседы",UPDATE_CONVERSATION_AVATAR:"Изменение изображения беседы",DELETE_CONVERSATION_AVATAR:"Удаление изображения беседы",SEND_GROUP_MESSAGE:"Сообщение в беседе",ARCHIVE_CONVERSATION:"Архивирование беседы",RESTORE_CONVERSATION:"Восстановление беседы",
  SWITCH_PROFILE:"Открытие чужого профиля",RETURN_PROFILE:"Возврат в свой профиль",UPLOAD_AVATAR:"Загрузка аватара",DELETE_AVATAR:"Удаление аватара",SET_TRAINING_EXIT_PASSWORD:"Настройка учебного пароля",
  CREATE_ORG_GROUP:"Создание филиала",UPDATE_ORG_GROUP:"Изменение филиала",DELETE_ORG_GROUP:"Удаление филиала",CREATE_DEPARTMENT:"Создание подразделения",UPDATE_DEPARTMENT:"Изменение подразделения",
  ASSIGN_TEAM_MEMBER:"Назначение сотрудника в команду",REMOVE_TEAM_MEMBER:"Удаление сотрудника из команды"
};
const auditEntityLabels={USER:"Учетная запись",DOCUMENT:"Документ",MESSAGE:"Сообщение",CHAT_GROUP:"Беседа",TASK:"Задача",ACCOUNT_REQUEST:"Заявка",ORG_GROUP:"Филиал",DEPARTMENT:"Подразделение",KNOWLEDGE_ARTICLE:"Материал БЗ",KNOWLEDGE_FOLDER:"Папка БЗ",ROLE:"Роль",SECURITY:"Безопасность",REPORT:"Отчёт",REPORT_FOLDER:"Папка отчётов",DOCUMENT_FOLDER:"Папка документов",ORDER_FOLDER:"Папка приказов",SUPPORT_TICKET:"Заявка филиала"};
const auditFieldLabels={
  ip:"IP-адрес",userAgent:"Браузер",actorName:"Кто выполнил",actorLogin:"Логин исполнителя",rules:"Правила доступа",type:"Тип",value:"Значение",
  login:"Логин",fullName:"ФИО",role:"Роль",roles:"Роли",oldRoles:"Было (роли)",newRoles:"Стало (роли)",
  primaryRole:"Основная роль",position:"Должность",departmentName:"Подразделение",orgGroupName:"Филиал",
  departmentId:"ID подразделения",orgGroupId:"ID филиала",reason:"Причина",isActive:"Активна",
  method:"Способ",preview:"Текст",peerName:"Собеседник",peerId:"ID собеседника",participants:"Участники беседы",pinned:"Закреплено",
  before:"Было",title:"Название",targetName:"Объект",targetLogin:"Логин объекта",targetPosition:"Должность объекта",targetId:"ID объекта",actingAsId:"ID действующего профиля",actingAsName:"Действующий профиль",restoredById:"Восстановил профиль",recipientId:"Получатель",sourceMessageId:"Исходное сообщение",replyToMessageId:"Ответ на сообщение",attachmentCount:"Вложений",bodyLength:"Длина сообщения",beforeLength:"Длина до изменения",afterLength:"Длина после изменения",reaction:"Реакция",entityType:"Тип ссылки",entityId:"Объект ссылки",linkId:"Ссылка",memberIds:"Участники",memberCount:"Количество участников",beforeTitle:"Название до изменения",afterTitle:"Название после изменения",beforeDescription:"Описание до изменения",afterDescription:"Описание после изменения",filename:"Файл",replaced:"Файл заменён",messageId:"Сообщение",path:"Маршрут запроса"
};
function formatAuditValue(v){
  if(v==null||v==="")return "—";
  if(typeof v==="boolean")return v?"да":"нет";
  if(Array.isArray(v))return v.map(x=>formatAuditValue(x)).join(", ");
  if(typeof v==="object")return Object.entries(v).map(([k,val])=>`${auditFieldLabels[k]||k}: ${formatAuditValue(val)}`).join("; ");
  return String(v);
}
function formatAuditPayload(payload){
  const p=payload&&typeof payload==="object"&&!Array.isArray(payload)?payload:{};
  const keys=Object.keys(p).filter(k=>p[k]!==undefined&&p[k]!==null&&p[k]!=="");
  if(!keys.length)return `<div class="audit-payload-empty">Дополнительных сведений нет</div>`;
  return `<dl class="audit-payload">${keys.map(k=>`<div><dt>${esc(auditFieldLabels[k]||k)}</dt><dd>${esc(formatAuditValue(p[k]))}</dd></div>`).join("")}</dl>`;
}
function auditActionText(action){
  const value=String(action||"");
  return auditActionLabels[value]||value.replace(/_/g," ").toLowerCase().replace(/^./,x=>x.toUpperCase())||"Событие";
}
function auditNarrative(log,actor,target){
  const action=String(log.action||"").toUpperCase(),a=actor||"Система",t=target||"";
  if(action==="LOGIN")return `${a} вошёл в систему`;
  if(action==="LOGOUT")return `${a} вышел из системы`;
  if(action==="SWITCH_PROFILE")return `${a} открыл профиль «${t||"сотрудника"}»`;
  if(action==="RETURN_PROFILE")return `${a} вернулся из профиля «${t||"сотрудника"}»`;
  if(action.includes("MESSAGE")||action.includes("REACTION")||action.includes("CONVERSATION"))return `${a} · ${auditActionText(action)}${t?` · ${t}`:""}`;
  if(action==="CHANGE_ROLES")return `${a} изменил роли для «${t||"учётной записи"}»`;
  if(action.includes("PASSWORD"))return `${a} изменил пароль для «${t||"учётной записи"}»`;
  return `${a} · ${auditActionText(action)}${t?` · ${t}`:""}`;
}
function auditLogsHtml(logs){
  return logs.length?logs.map(l=>{
    const payload=l.payload&&typeof l.payload==="object"?l.payload:{},actor=payload.actorName||l.user_name||"Система",target=l.target_name||payload.targetName||(`${auditEntityLabels[l.entity_type]||l.entity_type||"Объект"}${l.entity_id?` #${l.entity_id}`:""}`),effective=payload.actingAsName?` · в профиле ${payload.actingAsName}`:"";
    return `<article class="audit-row"><div class="audit-row-main"><div class="audit-row-top"><span class="audit-category-badge">${esc(auditCategoryLabels[l.category]||l.category||"Система")}</span><strong>${esc(auditActionText(l.action))}</strong></div><div class="audit-narrative">${esc(auditNarrative(l,actor,target))}</div><div class="audit-row-meta"><span>Исполнитель: <b>${esc(actor)}</b>${effective?esc(effective):""}</span><span>Объект: <b>${esc(target)}</b></span><span>${l.created_at?formatKedoDateTime(l.created_at):"—"}</span></div></div><details class="audit-details"><summary>Открыть детали</summary><div class="audit-detail-grid"><div><small>Кто выполнил</small><strong>${esc(actor)}</strong><span>${esc(payload.actorLogin||l.user_login||"")}</span></div><div><small>Что изменено</small><strong>${esc(auditActionText(l.action))}</strong><span>${esc(auditEntityLabels[l.entity_type]||l.entity_type||"Система")}${l.entity_id?` #${l.entity_id}`:""}</span></div><div><small>Над чем</small><strong>${esc(target)}</strong><span>${esc(l.target_login||payload.targetLogin||payload.targetPosition||"")}</span></div>${payload.actingAsName?`<div><small>Действующий профиль</small><strong>${esc(payload.actingAsName)}</strong><span>Действие выполнено через чужой профиль</span></div>`:""}</div>${formatAuditPayload(payload)}</details></article>`;
  }).join(''):'<div class="empty audit-empty">В этой категории записей нет.</div>';
}
async function loadAdminLogs(category="ALL"){
  try{
    const result=await api("/api/admin/logs?category="+encodeURIComponent(category)+"&page=1&limit=200");
    const logs=Array.isArray(result)?result:(Array.isArray(result?.items)?result.items:[]);
    const body=document.querySelector("#adminAuditBody");
    if(body)body.innerHTML=auditLogsHtml(logs);
    document.querySelectorAll("[data-log-category]").forEach(b=>b.classList.toggle("primary",b.dataset.logCategory===category));
    document.querySelectorAll("[data-log-category]").forEach(b=>b.classList.toggle("secondary",b.dataset.logCategory!==category));
  }catch(e){
    const body=document.querySelector("#adminAuditBody");if(body)body.innerHTML=`<tr><td colspan="6">${esc(e.message)}</td></tr>`;
  }
}


async function openAdminToolsLegacy(){
  const overlay=document.createElement('div');
  overlay.className='admin-edit-overlay';
  overlay.innerHTML='<div class="admin-edit-modal" style="width:min(900px,94vw)"><div class="admin-section-head"><div><div class="eyebrow">Инструменты администратора</div><h2 style="margin:3px 0">Сервисный центр</h2><div class="muted">Корзина, шаблоны документов и замещение на время отсутствия.</div></div><button class="secondary" id="toolsClose">Закрыть</button></div><div class="admin-tabs" style="margin-top:14px"><button class="primary" data-tool-tab="recycle">Корзина</button><button class="secondary" data-tool-tab="templates">Шаблоны</button><button class="secondary" data-tool-tab="delegation">Замещение</button></div><div id="toolsBody"></div></div>';
  document.body.appendChild(overlay);
  overlay.querySelector('#toolsClose').onclick=()=>overlay.remove();
  overlay.onclick=e=>{if(e.target===overlay)overlay.remove()};
  const body=overlay.querySelector('#toolsBody');
  async function tab(name){
    overlay.querySelectorAll('[data-tool-tab]').forEach(b=>b.className=b.dataset.toolTab===name?'primary':'secondary');
    if(name==='recycle'){
      const rows=await api('/api/admin-utils/recycle-bin');
      body.innerHTML='<div class="notice">Документы не удаляются физически сразу. Они находятся в корзине до даты восстановления.</div>'+(rows.length?rows.map(x=>'<div class="task-card recycle-item"><div><strong>'+esc(x.title||'Документ')+'</strong><div class="muted">'+esc(x.filename||'')+' · удалил: '+esc(x.deleted_by_name||'Система')+' · '+formatKedoDateTime(x.deleted_at)+'</div></div><div class="recycle-actions"><button class="primary" data-restore-doc="'+x.document_id+'">Восстановить</button><button class="danger-outline" data-delete-forever-doc="'+x.document_id+'">Удалить навсегда</button></div></div>').join(''):'<div class="empty">Корзина пуста.</div>');
      body.querySelectorAll('[data-restore-doc]').forEach(b=>b.onclick=async()=>{try{await api('/api/admin-utils/recycle-bin/'+b.dataset.restoreDoc+'/restore',{method:'POST'});await tab('recycle')}catch(e){kedoAlert(e.message)}});
      body.querySelectorAll('[data-delete-forever-doc]').forEach(b=>b.onclick=async()=>{const ok=await kedoConfirm('Документ будет удалён БЕЗВОЗВРАТНО вместе с файлами, подписями, комментариями и историей. Восстановить его будет невозможно. Продолжить?');if(!ok)return;const confirmWord=await kedoPrompt('Для подтверждения введите: УДАЛИТЬ');if(confirmWord!=='УДАЛИТЬ'){kedoAlert('Удаление отменено.');return;}b.disabled=true;try{const r=await api('/api/admin-utils/recycle-bin/'+b.dataset.deleteForeverDoc+'/permanent',{method:'DELETE'});if(r.failedFiles?.length)kedoAlert('Документ удалён из базы, но некоторые файлы не удалось удалить. Проверьте журнал аудита.');await tab('recycle')}catch(e){kedoAlert(e.message||'Не удалось удалить документ безвозвратно.');b.disabled=false;}});
      return;
    }
    if(name==='templates'){
      const rows=await api('/api/admin-utils/templates');
      const list=rows.length?rows.map(x=>'<div class="task-card"><div><strong>'+esc(x.name)+'</strong><div class="muted">'+esc(x.document_type)+' · '+(x.workflow_action==='SIGNATURE'?'Подписание':x.workflow_action==='ACKNOWLEDGE'?'Ознакомление':'Согласование')+'</div></div><button class="danger-outline" data-del-template="'+x.id+'">Скрыть</button></div>').join(''):'<div class="empty">Шаблонов пока нет.</div>';
      body.innerHTML='<div class="row"><input id="tplName" placeholder="Например: Служебная записка"><select id="tplAction"><option value="APPROVAL">Согласование</option><option value="SIGNATURE">Подписание</option><option value="ACKNOWLEDGE">Ознакомление</option></select></div><button class="primary" id="tplCreate">Создать шаблон</button><div style="margin-top:14px">'+list+'</div>';
      body.querySelector('#tplCreate').onclick=async()=>{try{await api('/api/admin-utils/templates',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:body.querySelector('#tplName').value,workflowAction:body.querySelector('#tplAction').value})});await tab('templates')}catch(e){kedoAlert(e.message)}};
      body.querySelectorAll('[data-del-template]').forEach(b=>b.onclick=async()=>{try{await api('/api/admin-utils/templates/'+b.dataset.delTemplate,{method:'DELETE'});await tab('templates')}catch(e){kedoAlert(e.message)}});
      return;
    }
    const employees=await api('/api/admin/employees');
    body.innerHTML='<div class="notice">Замещение используется, когда сотрудник временно отсутствует. Это не меняет его роль и не выдаёт заместителю администраторские права.</div><div class="row"><select id="delFrom"><option value="">Кого замещать</option>'+employees.map(e=>'<option value="'+e.id+'">'+esc(e.full_name)+'</option>').join('')+'</select><select id="delTo"><option value="">Кто замещает</option>'+employees.map(e=>'<option value="'+e.id+'">'+esc(e.full_name)+'</option>').join('')+'</select></div><div class="row"><input id="delStart" type="datetime-local"><input id="delEnd" type="datetime-local"></div><input id="delReason" placeholder="Причина (необязательно)"><div class="doc-actions" style="margin-top:10px"><button class="primary" id="delCreate">Добавить замещение</button></div><div id="delList" style="margin-top:14px"></div>';
    const rows=await api('/api/admin-utils/delegations');
    body.querySelector('#delList').innerHTML=rows.length?rows.map(x=>{
      const cancelled=!!x.cancelled_at;
      const ended=(parseKedoDate(x.ends_at)||new Date(0))<new Date();
      const status=cancelled?'Отменено':ended?'Завершено':'Действует';
      const cls=cancelled?'muted':ended?'muted':'success';
      return '<div class="task-card delegation-admin-row"><div><strong>'+esc(x.delegator_name)+' → '+esc(x.delegate_name)+'</strong><div class="muted">'+formatKedoDateTime(x.starts_at)+' — '+formatKedoDateTime(x.ends_at)+(x.reason?' · '+esc(x.reason):'')+'</div></div><div class="delegation-admin-actions"><span class="status-pill '+cls+'">'+status+'</span>'+(!cancelled&&!ended?'<button type="button" class="danger-outline" data-tool-cancel-delegation="'+x.id+'">Отменить</button>':'')+'<button type="button" class="danger-outline" data-tool-delete-delegation="'+x.id+'">Удалить</button></div></div>';
    }).join(''):'<div class="empty">Замещений пока нет.</div>';
    body.querySelectorAll('[data-tool-cancel-delegation]').forEach(b=>b.onclick=async()=>{
      if(!await kedoConfirm('Отменить это замещение досрочно?'))return;
      b.disabled=true;
      try{await api('/api/admin-utils/delegations/'+b.dataset.toolCancelDelegation+'/cancel',{method:'PATCH'});await tab('delegation')}
      catch(e){kedoAlert(e.message||'Не удалось отменить замещение.');b.disabled=false;}
    });
    body.querySelectorAll('[data-tool-delete-delegation]').forEach(b=>b.onclick=async()=>{
      if(!await kedoConfirm('Удалить это замещение из списка?'))return;
      b.disabled=true;
      try{await api('/api/admin-utils/delegations/'+b.dataset.toolDeleteDelegation,{method:'DELETE'});await tab('delegation')}
      catch(e){kedoAlert(e.message||'Не удалось удалить замещение.');b.disabled=false;}
    });
    body.querySelector('#delCreate').onclick=async()=>{try{await api('/api/admin-utils/delegations',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({delegatorId:body.querySelector('#delFrom').value,delegateId:body.querySelector('#delTo').value,startsAt:body.querySelector('#delStart').value,endsAt:body.querySelector('#delEnd').value,reason:body.querySelector('#delReason').value})});await tab('delegation')}catch(e){kedoAlert(e.message)}};
  }
  overlay.querySelectorAll('[data-tool-tab]').forEach(b=>b.onclick=()=>tab(b.dataset.toolTab));
  await tab('recycle');
}


function installServiceCenterStyles(){
  if(document.getElementById("serviceCenterStyles"))return;
  const style=document.createElement("style");style.id="serviceCenterStyles";style.textContent=`
    body:has(.service-center-overlay){overflow:hidden!important}
    .service-center-overlay{position:fixed;inset:0;z-index:2147483600;display:grid;place-items:center;padding:18px;background:rgba(12,31,47,.56);backdrop-filter:blur(5px)}
    .service-center-modal{width:min(1060px,96vw);height:min(760px,92vh);display:grid;grid-template-rows:auto minmax(0,1fr);overflow:hidden;border:1px solid #d7e4eb;border-radius:20px;background:#f5f9fb;box-shadow:0 30px 90px rgba(8,35,52,.28);color:#29485b}
    .service-center-head{display:flex;justify-content:space-between;gap:18px;padding:23px 25px 20px;border-bottom:1px solid #deeaef;background:linear-gradient(135deg,#fff,#edf7fa)}
    .service-center-head h2{margin:4px 0 5px;color:#153d58;font-size:25px;letter-spacing:-.025em}.service-center-head p{margin:0;color:#78909c;font-size:11px}.service-center-close{flex:none;align-self:flex-start;border:1px solid #d1e0e7;border-radius:10px;background:#fff;color:#57717f;padding:9px 12px;cursor:pointer}
    .service-center-layout{display:grid;grid-template-columns:235px minmax(0,1fr);min-height:0}.service-center-nav{padding:14px 11px;border-right:1px solid #dfe9ee;background:#f8fbfc}.service-center-nav button{width:100%;display:grid;grid-template-columns:34px minmax(0,1fr) auto;gap:9px;align-items:center;margin:4px 0;padding:10px;border:1px solid transparent;border-radius:12px;background:transparent;color:#607b88;text-align:left;cursor:pointer}.service-center-nav button:hover{background:#eef6f8}.service-center-nav button.active{border-color:#c9e0e8;background:#e8f5f8;color:#236b85;box-shadow:inset 3px 0 #3f91ae}.service-center-nav button>span:first-child{width:32px;height:32px;display:grid;place-items:center;border-radius:9px;background:#edf5f7;font-size:15px}.service-center-nav button.active>span:first-child{background:#d5ebf1}.service-center-nav strong{display:block;font-size:11px}.service-center-nav small{display:block;margin-top:3px;color:#91a2a9;font-size:8px;line-height:1.25}.service-center-nav b{min-width:22px;height:22px;display:grid;place-items:center;border-radius:999px;background:#fff;color:#6d8793;font-size:9px}.service-center-body{min-width:0;min-height:0;overflow:auto;padding:18px 20px 22px}.service-center-kicker{color:#91a2aa;font-size:8px;font-weight:800;letter-spacing:.13em;text-transform:uppercase}.service-center-title-row{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:15px}.service-center-title-row h3{margin:4px 0 3px;color:#1d4960;font-size:19px}.service-center-title-row p{margin:0;color:#8b9da5;font-size:10px}.service-center-refresh{border:1px solid #d7e4e9;border-radius:9px;background:#fff;color:#5e7a87;padding:8px 10px;cursor:pointer}.service-center-note{margin-bottom:13px;padding:11px 12px;border:1px solid #d9e8ed;border-radius:11px;background:#f1f8fa;color:#63808d;font-size:10px;line-height:1.45}.service-center-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.service-center-panel{padding:14px;border:1px solid #dce8ed;border-radius:14px;background:#fff}.service-center-panel.wide{grid-column:1/-1}.service-center-panel h4{margin:0 0 10px;color:#315a6e;font-size:12px}.service-center-form{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:8px}.service-center-form label{display:grid;gap:5px;color:#55717f;font-size:9px;font-weight:750}.service-center-form label.wide{grid-column:1/-1}.service-center-form input,.service-center-form select{width:100%;box-sizing:border-box;min-height:36px;padding:8px 9px;border:1px solid #ccdce3;border-radius:8px;background:#fbfdfe;color:#2d5062;outline:0;font:inherit;font-size:10px}.service-center-form input:focus,.service-center-form select:focus{border-color:#6fa9bc;box-shadow:0 0 0 3px rgba(65,143,169,.1);background:#fff}.service-center-form-actions{display:flex;justify-content:flex-end;gap:7px;grid-column:1/-1;padding-top:3px}.service-center-search{width:100%;box-sizing:border-box;min-height:36px;padding:8px 10px;margin-bottom:9px;border:1px solid #d1e0e6;border-radius:9px;outline:0;font-size:10px}.service-center-list{display:grid;gap:8px}.service-center-item{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:12px;border:1px solid #e0e9ed;border-radius:11px;background:#fff}.service-center-item-main{min-width:0}.service-center-item-main strong{display:block;color:#2b5367;font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.service-center-item-main small{display:block;margin-top:4px;color:#879aa3;font-size:9px;line-height:1.4}.service-center-item-actions{display:flex;flex:none;gap:5px;flex-wrap:wrap;justify-content:flex-end}.service-center-item-actions button{min-height:29px;padding:5px 8px;font-size:9px}.service-center-empty{padding:28px 14px;border:1px dashed #cfdfe6;border-radius:12px;background:#fbfdfe;color:#8a9ca5;text-align:center;font-size:10px}.service-center-danger{color:#a65e5e!important;border-color:#e6caca!important}.service-center-status{display:inline-flex;align-items:center;gap:5px;padding:4px 7px;border-radius:999px;background:#eaf7ef;color:#387b55;font-size:8px;font-weight:750}.service-center-status.done{background:#f1f4f5;color:#819097}.service-center-stat{display:grid;grid-template-columns:35px minmax(0,1fr);gap:10px;align-items:center;padding:12px;border:1px solid #e0e9ed;border-radius:11px;background:#fff}.service-center-stat b{width:35px;height:35px;display:grid;place-items:center;border-radius:10px;background:#edf6f8;color:#317b93;font-size:16px}.service-center-stat strong{display:block;color:#31596c;font-size:11px}.service-center-stat small{display:block;margin-top:3px;color:#8c9da5;font-size:9px}@media(max-width:720px){.service-center-modal{height:96vh;width:calc(100vw - 14px)}.service-center-layout{grid-template-columns:1fr}.service-center-nav{display:flex;gap:5px;overflow:auto;border-right:0;border-bottom:1px solid #dfe9ee;padding:8px}.service-center-nav button{min-width:145px;margin:0;grid-template-columns:29px minmax(0,1fr) auto;padding:7px}.service-center-nav button>span:first-child{width:28px;height:28px}.service-center-nav small{display:none}.service-center-body{padding:13px}.service-center-grid,.service-center-form{grid-template-columns:1fr}.service-center-panel.wide,.service-center-form label.wide{grid-column:auto}.service-center-head{padding:17px}.service-center-head h2{font-size:21px}}
  `;document.head.appendChild(style);
}
async function openAdminTools(){
  installServiceCenterStyles();
  const overlay=document.createElement("div");overlay.className="service-center-overlay";overlay.innerHTML=`<section class="service-center-modal" role="dialog" aria-modal="true" aria-labelledby="serviceCenterTitle"><header class="service-center-head"><div><div class="service-center-kicker">ИНСТРУМЕНТЫ АДМИНИСТРАТОРА</div><h2 id="serviceCenterTitle">Сервисный центр</h2><p>Рабочие инструменты для документов, шаблонов и временного замещения.</p></div><button type="button" class="service-center-close" id="toolsClose">Закрыть</button></header><div class="service-center-layout"><nav class="service-center-nav" aria-label="Разделы сервисного центра"><button type="button" data-tool-tab="recycle" class="active"><span>♻</span><span><strong>Корзина</strong><small>Восстановление документов</small></span><b data-tool-count="recycle">—</b></button><button type="button" data-tool-tab="templates"><span>▤</span><span><strong>Шаблоны</strong><small>Быстрый запуск документов</small></span><b data-tool-count="templates">—</b></button><button type="button" data-tool-tab="delegation"><span>⇄</span><span><strong>Замещение</strong><small>Временная передача задач</small></span><b data-tool-count="delegation">—</b></button></nav><main id="toolsBody" class="service-center-body"></main></div></section>`;document.body.appendChild(overlay);document.body.classList.add("kedo-dialog-open");const body=overlay.querySelector("#toolsBody"),close=()=>{overlay.remove();document.body.classList.remove("kedo-dialog-open")};overlay.querySelector("#toolsClose").onclick=close;overlay.onclick=event=>{if(event.target===overlay)close()};overlay.addEventListener("keydown",event=>{if(event.key==="Escape")close()});overlay.tabIndex=-1;overlay.focus();
  let editingTemplate=null;
  const actionLabel=action=>action==="SIGNATURE"?"Подписание ЭП":action==="ACKNOWLEDGE"?"Ознакомление":"Согласование";
  const typeLabel=type=>({LETTER:"Письмо",MEMO:"Служебная записка",CONTRACT:"Договор",ACT:"Акт",ORDER:"Приказ",OTHER:"Другой документ"}[type]||type||"Документ");
  async function tab(name){
    overlay.querySelectorAll("[data-tool-tab]").forEach(button=>{button.classList.toggle("active",button.dataset.toolTab===name);});
    try{
      if(name==="recycle"){
        const rows=await api("/api/admin-utils/recycle-bin");overlay.querySelector('[data-tool-count="recycle"]').textContent=rows.length;
        const recycleList=rows.length?rows.map(x=>`<article class="service-center-item"><div class="service-center-item-main"><strong>${esc(x.title||"Документ")}</strong><small>${esc(x.filename||"")} · удалил: ${esc(x.deleted_by_name||"Система")} · ${formatKedoDateTime(x.deleted_at)}</small></div><div class="service-center-item-actions"><button class="primary" data-restore-doc="${x.document_id}">Восстановить</button><button class="danger-outline service-center-danger" data-delete-forever-doc="${x.document_id}">Удалить навсегда</button></div></article>`).join(""):'<div class="service-center-empty">Корзина пуста.</div>';
        body.innerHTML=`<div class="service-center-title-row"><div><div class="service-center-kicker">ДОКУМЕНТЫ</div><h3>Корзина</h3><p>Документы можно вернуть в рабочий список или удалить безвозвратно.</p></div><button class="service-center-refresh" type="button" data-tool-refresh>Обновить</button></div><div class="service-center-note">Физическое удаление требует отдельного подтверждения и не может быть отменено.</div><div class="service-center-list">${recycleList}</div>`;
        body.querySelector("[data-tool-refresh]").onclick=()=>tab(name);
        body.querySelectorAll("[data-restore-doc]").forEach(button=>button.onclick=async()=>{button.disabled=true;try{await api(`/api/admin-utils/recycle-bin/${button.dataset.restoreDoc}/restore`,{method:"POST"});await tab(name)}catch(error){button.disabled=false;kedoAlert(error.message)}});
        body.querySelectorAll("[data-delete-forever-doc]").forEach(button=>button.onclick=async()=>{if(!await kedoConfirm("Удалить документ безвозвратно вместе с файлами и историей?"))return;const word=await kedoPrompt("Для подтверждения введите: УДАЛИТЬ");if(word!=="УДАЛИТЬ")return kedoAlert("Удаление отменено.");button.disabled=true;try{await api(`/api/admin-utils/recycle-bin/${button.dataset.deleteForeverDoc}/permanent`,{method:"DELETE"});await tab(name)}catch(error){button.disabled=false;kedoAlert(error.message)}});
        return;
      }
      if(name==="templates"){
        const [rows,deps]=await Promise.all([api("/api/admin-utils/templates"),api("/api/admin/departments")]);overlay.querySelector('[data-tool-count="templates"]').textContent=rows.length;
        const form=editingTemplate;const departmentOptions=deps.map(d=>`<option value="${d.id}" ${Number(form?.default_department_id)===Number(d.id)?"selected":""}>${esc(d.name)}</option>`).join("");
        body.innerHTML=`<div class="service-center-title-row"><div><div class="service-center-kicker">БЫСТРЫЕ ЗАГОТОВКИ</div><h3>${form?"Редактирование шаблона":"Шаблоны документов"}</h3><p>Выберите шаблон при загрузке — тип и первый этап маршрута подставятся автоматически.</p></div><button class="service-center-refresh" type="button" data-tool-refresh>Обновить</button></div><div class="service-center-panel"><h4>${form?"Изменить шаблон":"Новый шаблон"}</h4><div class="service-center-form"><label class="wide">Название<input id="scTemplateName" value="${esc(form?.name||"")}" placeholder="Например: Служебная записка на согласование"></label><label>Тип документа<select id="scTemplateType"><option value="OTHER">Другой документ</option><option value="LETTER">Письмо</option><option value="MEMO">Служебная записка</option><option value="CONTRACT">Договор</option><option value="ACT">Акт</option></select></label><label>Первый этап<select id="scTemplateAction"><option value="APPROVAL">Согласование</option><option value="SIGNATURE">Подписание ЭП</option><option value="ACKNOWLEDGE">Ознакомление</option></select></label><label>Подразделение по умолчанию<select id="scTemplateDepartment"><option value="">Подразделение автора</option>${departmentOptions}</select></label><div class="service-center-form-actions">${form?'<button type="button" class="secondary" id="scTemplateCancel">Отмена</button>':""}<button type="button" class="primary" id="scTemplateSave">${form?"Сохранить изменения":"Создать шаблон"}</button></div></div></div><div class="service-center-panel" style="margin-top:12px"><h4>Активные шаблоны</h4><input class="service-center-search" id="scTemplateSearch" placeholder="Поиск по названию, типу или маршруту"><div class="service-center-list" id="scTemplateList"></div></div>`;
        if(form){body.querySelector("#scTemplateType").value=form.document_type||"OTHER";body.querySelector("#scTemplateAction").value=form.workflow_action||"APPROVAL";}
        const draw=()=>{const query=(body.querySelector("#scTemplateSearch").value||"").trim().toLowerCase();const filtered=rows.filter(x=>`${x.name} ${typeLabel(x.document_type)} ${actionLabel(x.workflow_action)}`.toLowerCase().includes(query));body.querySelector("#scTemplateList").innerHTML=filtered.length?filtered.map(x=>`<article class="service-center-item"><div class="service-center-item-main"><strong>${esc(x.name)}</strong><small>${typeLabel(x.document_type)} · ${actionLabel(x.workflow_action)}${x.department_name?` · ${esc(x.department_name)}`:""}</small></div><div class="service-center-item-actions"><button class="primary" data-use-template="${x.id}">Использовать</button><button class="secondary" data-edit-template="${x.id}">Изменить</button><button class="danger-outline service-center-danger" data-del-template="${x.id}">Скрыть</button></div></article>`).join(""):'<div class="service-center-empty">Подходящих шаблонов нет.</div>';};draw();body.querySelector("#scTemplateSearch").oninput=draw;body.querySelector("[data-tool-refresh]").onclick=()=>tab(name);body.querySelector("#scTemplateCancel")?.addEventListener("click",()=>{editingTemplate=null;tab(name)});
        body.querySelector("#scTemplateSave").onclick=async()=>{const templateName=body.querySelector("#scTemplateName").value.trim();if(!templateName)return kedoAlert("Укажите название шаблона.");const payload={name:templateName,documentType:body.querySelector("#scTemplateType").value,workflowAction:body.querySelector("#scTemplateAction").value,departmentId:Number(body.querySelector("#scTemplateDepartment").value)||null};const url=form?`/api/admin-utils/templates/${form.id}`:"/api/admin-utils/templates";const method=form?"PATCH":"POST";try{await api(url,{method,headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});editingTemplate=null;await tab(name)}catch(error){kedoAlert(error.message)}};
        body.querySelectorAll("[data-edit-template]").forEach(button=>button.onclick=()=>{editingTemplate=rows.find(x=>Number(x.id)===Number(button.dataset.editTemplate));tab(name)});
        body.querySelectorAll("[data-use-template]").forEach(button=>button.onclick=()=>{const template=rows.find(x=>Number(x.id)===Number(button.dataset.useTemplate));if(!template)return;state.archiveTemplate=template;close();setPage("documents")});
        body.querySelectorAll("[data-del-template]").forEach(button=>button.onclick=async()=>{if(!await kedoConfirm("Скрыть этот шаблон из списка?"))return;button.disabled=true;try{await api(`/api/admin-utils/templates/${button.dataset.delTemplate}`,{method:"DELETE"});await tab(name)}catch(error){button.disabled=false;kedoAlert(error.message)}});
        return;
      }
      const rows=await api("/api/admin-utils/delegations");const active=rows.filter(x=>!x.cancelled_at&&(parseKedoDate(x.ends_at)||new Date(0))>=new Date());overlay.querySelector('[data-tool-count="delegation"]').textContent=active.length;
      const employees=await api("/api/admin/employees");body.innerHTML=`<div class="service-center-title-row"><div><div class="service-center-kicker">ДОСТУП НА ПЕРИОД ОТСУТСТВИЯ</div><h3>Замещение</h3><p>Передача рабочих задач на срок без изменения ролей и прав.</p></div><button class="service-center-refresh" type="button" data-tool-refresh>Обновить</button></div><div class="service-center-grid"><div class="service-center-panel"><h4>Новое замещение</h4><div class="service-center-form" style="grid-template-columns:1fr 1fr"><label>Кого замещать<select id="delFrom"><option value="">Выберите сотрудника</option>${employees.filter(e=>e.is_active).map(e=>`<option value="${e.id}">${esc(e.full_name)}</option>`).join("")}</select></label><label>Кто замещает<select id="delTo"><option value="">Выберите сотрудника</option>${employees.filter(e=>e.is_active).map(e=>`<option value="${e.id}">${esc(e.full_name)}</option>`).join("")}</select></label><label>Начало<input id="delStart" type="datetime-local"></label><label>Окончание<input id="delEnd" type="datetime-local"></label><label class="wide">Причина<input id="delReason" placeholder="Необязательно"></label><div class="service-center-form-actions"><button type="button" class="primary" id="delCreate">Добавить замещение</button></div></div></div><div class="service-center-panel"><h4>Что важно</h4><div class="service-center-note">Замещение действует только в выбранный период. Оно не выдаёт заместителю административные права.</div><div class="service-center-stat"><b>${active.length}</b><span><strong>Действует сейчас</strong><small>Оконченные и отменённые записи остаются в истории.</small></span></div></div></div><div class="service-center-panel" style="margin-top:12px"><h4>История замещений</h4><div class="service-center-list">${rows.length?rows.map(x=>{const cancelled=!!x.cancelled_at,ended=(parseKedoDate(x.ends_at)||new Date(0))<new Date(),label=cancelled?"Отменено":ended?"Завершено":"Действует";return `<article class="service-center-item"><div class="service-center-item-main"><strong>${esc(x.delegator_name)} → ${esc(x.delegate_name)}</strong><small>${formatKedoDateTime(x.starts_at)} — ${formatKedoDateTime(x.ends_at)}${x.reason?` · ${esc(x.reason)}`:""}</small></div><div class="service-center-item-actions"><span class="service-center-status ${ended||cancelled?"done":""}">${label}</span>${!cancelled&&!ended?`<button class="danger-outline service-center-danger" data-tool-cancel-delegation="${x.id}">Отменить</button>`:""}<button class="danger-outline service-center-danger" data-tool-delete-delegation="${x.id}">Удалить</button></div></article>`}).join(""):'<div class="service-center-empty">Замещений пока нет.</div>'}</div></div>`;body.querySelector("[data-tool-refresh]").onclick=()=>tab(name);body.querySelector("#delCreate").onclick=async()=>{try{await api("/api/admin-utils/delegations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({delegatorId:body.querySelector("#delFrom").value,delegateId:body.querySelector("#delTo").value,startsAt:body.querySelector("#delStart").value,endsAt:body.querySelector("#delEnd").value,reason:body.querySelector("#delReason").value})});await tab(name)}catch(error){kedoAlert(error.message)}};body.querySelectorAll("[data-tool-cancel-delegation]").forEach(button=>button.onclick=async()=>{if(!await kedoConfirm("Отменить это замещение досрочно?"))return;button.disabled=true;try{await api(`/api/admin-utils/delegations/${button.dataset.toolCancelDelegation}/cancel`,{method:"PATCH"});await tab(name)}catch(error){button.disabled=false;kedoAlert(error.message)}});body.querySelectorAll("[data-tool-delete-delegation]").forEach(button=>button.onclick=async()=>{if(!await kedoConfirm("Удалить это замещение из истории?"))return;button.disabled=true;try{await api(`/api/admin-utils/delegations/${button.dataset.toolDeleteDelegation}`,{method:"DELETE"});await tab(name)}catch(error){button.disabled=false;kedoAlert(error.message)}});
    }catch(error){body.innerHTML=`<div class="service-center-empty">Не удалось загрузить раздел.<br><small>${esc(error.message)}</small></div>`;}
  }
  overlay.querySelectorAll("[data-tool-tab]").forEach(button=>button.onclick=()=>{editingTemplate=null;tab(button.dataset.toolTab)});await tab("recycle");
}

async function renderDelegations(){
  const rows=await api('/api/admin-utils/my-delegations');
  const isAdmin=state.user?.role==='admin';
  const active=rows.filter(x=>!x.cancelled_at && (parseKedoDate(x.ends_at)||new Date(0))>=new Date());
  const now=new Date();
  const status=x=>{
    if(x.cancelled_at)return ['Отменено','cancelled'];
    const s=parseKedoDate(x.starts_at)||new Date(0), e=parseKedoDate(x.ends_at)||new Date(0);
    if(now<s)return ['Ожидает','pending'];
    if(now<=e)return ['Действует','active'];
    return ['Завершено','done'];
  };
  const card=x=>{
    const [label,cls]=status(x);
    const incoming=x.direction==='INCOMING';
    const title=incoming?'Вы замещаете сотрудника':'Вас замещают';
    const person=incoming?x.delegator_name:x.delegate_name;
    return `<article class="delegation-card">
      <div class="delegation-card-top">
        <div class="delegation-avatar">${esc(String(person||'?').trim().slice(0,1).toUpperCase())}</div>
        <div class="delegation-card-title">
          <div class="eyebrow">${title}</div>
          <h3>${esc(person||'Сотрудник')}</h3>
        </div>
        <span class="delegation-status ${cls}">${label}</span>
      </div>
      <div class="delegation-period">
        <div><span>Начало</span><strong>${formatKedoDateTime(x.starts_at)}</strong></div>
        <div class="delegation-arrow">→</div>
        <div><span>Окончание</span><strong>${formatKedoDateTime(x.ends_at)}</strong></div>
      </div>
      ${x.reason?`<div class="delegation-reason">${esc(x.reason)}</div>`:''}
      ${isAdmin ? `<div class="delegation-card-actions">${!x.cancelled_at && (parseKedoDate(x.ends_at)||new Date(0))>=now ? `<button type="button" class="danger-outline" data-cancel-delegation="${x.id}">Отменить замещение</button>` : ''}<button type="button" class="danger-outline" data-delete-delegation="${x.id}">Удалить</button></div>` : ''}
    </article>`;
  };

  let adminBlock='';
  if(isAdmin){
    const employees=await api('/api/admin/employees');
    adminBlock=`<section class="card delegation-create">
      <div class="section-head">
        <div><h2>Создать замещение</h2><p class="muted">Замещение действует только в указанный период и не меняет роль сотрудника.</p></div>
      </div>
      <div class="delegation-form-grid">
        <label><span>Кого замещать <b class="required">*</b></span>
          <select id="pageDelFrom"><option value="">Выберите сотрудника</option>${employees.filter(e=>e.is_active).map(e=>`<option value="${e.id}">${esc(e.full_name)}${e.position?` — ${esc(e.position)}`:''}</option>`).join('')}</select>
        </label>
        <label><span>Кто замещает <b class="required">*</b></span>
          <select id="pageDelTo"><option value="">Выберите сотрудника</option>${employees.filter(e=>e.is_active).map(e=>`<option value="${e.id}">${esc(e.full_name)}${e.position?` — ${esc(e.position)}`:''}</option>`).join('')}</select>
        </label>
        <label><span>Начало <b class="required">*</b></span><input id="pageDelStart" type="datetime-local"></label>
        <label><span>Окончание <b class="required">*</b></span><input id="pageDelEnd" type="datetime-local"></label>
        <label class="delegation-full"><span>Причина</span><input id="pageDelReason" placeholder="Например: отпуск, больничный, командировка"></label>
      </div>
      <div class="form-actions"><button class="primary" id="pageDelCreate">Создать замещение</button></div>
      <div id="pageDelMsg" class="form-message"></div>
    </section>`;
  }

  $("main").innerHTML=`<div class="delegation-page">
    <div class="page-heading-row">
      <div><h1 class="page-title">Замещения</h1><p class="muted">Здесь видно, кто кого временно замещает и на какой срок.</p></div>
      <div class="delegation-summary"><b>${active.length}</b><span>активных</span></div>
    </div>
    ${adminBlock}
    <section class="card">
      <div class="section-head"><div><h2>Мои замещения</h2><p class="muted">Активные — сверху. Завершённые и отменённые остаются в истории.</p></div></div>
      <div class="delegation-list">${rows.length?rows.map(card).join(''):'<div class="empty delegation-empty">Замещений пока нет.</div>'}</div>
    </section>
  </div>`;

  if(isAdmin){
    $("pageDelCreate").onclick=async()=>{
      const msg=$("pageDelMsg"), btn=$("pageDelCreate");
      msg.textContent=''; msg.className='form-message';
      const delegatorId=$("pageDelFrom").value, delegateId=$("pageDelTo").value;
      const startsAt=$("pageDelStart").value, endsAt=$("pageDelEnd").value;
      if(!delegatorId||!delegateId||!startsAt||!endsAt){msg.textContent='Заполните обязательные поля.';msg.classList.add('error');return;}
      if(delegatorId===delegateId){msg.textContent='Нельзя назначить сотрудника его собственным заместителем.';msg.classList.add('error');return;}
      btn.disabled=true;
      try{
        await api('/api/admin-utils/delegations',{method:'POST',headers:{'Content-Type':'application/json'},
          body:JSON.stringify({delegatorId,delegateId,startsAt,endsAt,reason:$("pageDelReason").value})});
        msg.textContent='Замещение создано.';
        msg.classList.add('success');
        await renderDelegations();
      }catch(e){msg.textContent=e.message||'Не удалось создать замещение.';msg.classList.add('error');}
      finally{btn.disabled=false;}
    };
    document.querySelectorAll("[data-cancel-delegation]").forEach(btn=>btn.onclick=async()=>{
      if(!await kedoConfirm("Отменить это замещение досрочно?"))return;
      btn.disabled=true;
      try{
        await api("/api/admin-utils/delegations/"+btn.dataset.cancelDelegation+"/cancel",{method:"PATCH"});
        await renderDelegations();
      }catch(e){kedoAlert(e.message||"Не удалось отменить замещение.");btn.disabled=false;}
    });
    document.querySelectorAll("[data-delete-delegation]").forEach(btn=>btn.onclick=async()=>{
      if(!await kedoConfirm("Удалить это замещение из списка?"))return;
      btn.disabled=true;
      try{
        await api("/api/admin-utils/delegations/"+btn.dataset.deleteDelegation,{method:"DELETE"});
        await renderDelegations();
      }catch(e){kedoAlert(e.message||"Не удалось удалить замещение.");btn.disabled=false;}
    });
  }
}


function formatChatFileSize(bytes){
  const n=Number(bytes||0);
  if(n<1024) return `${n} Б`;
  if(n<1024*1024) return `${(n/1024).toFixed(n<10240?1:0)} КБ`;
  return `${(n/(1024*1024)).toFixed(n<10*1024*1024?1:0)} МБ`;
}
function chatAttachmentsHtml(attachments,own=false){
  const files=Array.isArray(attachments)?attachments:[];
  if(!files.length)return '';
  return `<div class="chat-attachments">${files.map(a=>{
    const name=esc(a.original_name||'Файл');
    const rawUrl=String(a.download_url||'');
    // Only same-origin attachment API URLs — block javascript:/data: tricks
    const safe=/^\/api\/messages\/(?:attachments|group-attachments)\/\d+(\?.*)?$/.test(rawUrl)?rawUrl:'#';
    const url=esc(safe);
    const size=formatChatFileSize(a.size_bytes);
    if(a.is_image && safe!=='#'){
      return `<a class="chat-image-attachment" href="${url}" target="_blank" rel="noopener noreferrer" referrerpolicy="no-referrer" title="Открыть ${name}"><img src="${url}" alt="${name}" loading="lazy" decoding="async" referrerpolicy="no-referrer"><span>${name}<small>${size}</small></span></a>`;
    }
    return `<a class="chat-file-attachment" href="${url}" rel="noopener noreferrer" download="${name}" referrerpolicy="no-referrer"><span class="chat-file-icon">▣</span><span class="chat-file-name"><strong>${name}</strong><small>${size}</small></span><span class="chat-file-download">↓</span></a>`;
  }).join('')}</div>`;
}
function chatMessageHtml(m,me){
  const own=Number(m.sender_id)===Number(me);
  const deleted=Boolean(m.deleted_at);
  const body=deleted
    ? '<div class="chat-text chat-deleted-text">Сообщение удалено</div>'
    : (m.body?'<div class="chat-text">'+esc(m.body).replace(/\\n/g,'<br>')+'</div>':'');
  const reply=(!deleted&&m.reply_to_message_id)
    ? '<button type="button" class="chat-reply-quote" data-jump-message="'+m.reply_to_message_id+'"><small>'+esc(m.reply_to_sender_name||'Ответ')+'</small><span>'+esc(String(m.reply_to_body||'Сообщение').replace(/\\s+/g,' ').slice(0,120))+'</span></button>'
    : '';
  const reactions=(m.reactions||[]).map(r=>'<button type="button" class="chat-reaction-chip '+(r.mine?'mine':'')+'" data-message-reaction="'+m.id+'" data-reaction="'+esc(r.reaction)+'"><span>'+esc(r.reaction)+'</span><b>'+r.count+'</b></button>').join('');
  const reactionLine=reactions?'<div class="chat-reaction-line">'+reactions+'</div>':'';
  const edited=(!deleted&&m.edited_at)?'<span class="chat-edited">изменено</span>':'';
  const pinned=m.pinned_at?'<span class="chat-pinned">📌</span>':'';
  const time='<div class="chat-time">'+formatKedoTime(m.created_at)+(own&&!deleted?(m.read_at?' ✓✓':' ✓'):'')+edited+pinned+'</div>';
return '<div class="chat-row '+(own?'own':'other')+'" data-message-id="'+m.id+'" data-message-author="'+m.sender_id+'"><div class="chat-bubble '+(deleted?'chat-bubble-deleted':'')+'">'+reply+body+(!deleted?chatAttachmentsHtml(m.attachments,own):'')+time+reactionLine+'</div></div>';
}
async function renderMessages(renderGen=kedoRenderGen){
  const alive=()=>renderGen===kedoRenderGen && state.page==="messages";
  if(state.chatPollTimer){clearInterval(state.chatPollTimer);state.chatPollTimer=null;}
  if(state.kedoMessagesPoll){clearInterval(state.kedoMessagesPoll);state.kedoMessagesPoll=null;}
  if(state.chatTypingTimer){clearInterval(state.chatTypingTimer);state.chatTypingTimer=null;}

  document.querySelector('#kedoMessagesRebuildCss')?.remove();
  document.querySelectorAll('style[id^="kedo55"],style[id^="kedo59"],style[id^="kedo60"],style[id^="kedo61"],style[id^="kedoMx"],style#kedoOneStyle').forEach(n=>n.remove());

  let cssLink=document.getElementById('kedoMessagesCss');
  if(!cssLink){
    cssLink=document.createElement('link');
    cssLink.id='kedoMessagesCss';
    cssLink.rel='stylesheet';
    document.head.appendChild(cssLink);
  }
    cssLink.href='./messages.css';

  if(!document.getElementById('kedoPortalThemeCss')){
    const t=document.createElement('link');
    t.id='kedoPortalThemeCss';
    t.rel='stylesheet';
    t.href='./portal-theme.css';
    document.head.appendChild(t);
  }

  const REACTIONS=['👍','❤️','😂','🔥','👏','😮'];
  const normRx=v=>String(v||'').normalize('NFC').replace(/\uFE0F/g,'');
  const allowedRx=new Map(REACTIONS.map(r=>[normRx(r),r]));
  const icon=name=>{
    const paths={
      settings:'<path d="M9.75 3.75h4.5l.6 2.1c.43.17.84.4 1.21.7l2.06-.54 2.25 3.9-1.47 1.56c.03.23.05.47.05.71s-.02.48-.05.71l1.47 1.56-2.25 3.9-2.06-.54c-.37.3-.78.53-1.21.7l-.6 2.1h-4.5l-.6-2.1a7.2 7.2 0 0 1-1.21-.7l-2.06.54-2.25-3.9 1.47-1.56a5.2 5.2 0 0 1 0-1.42L3.63 9.91l2.25-3.9 2.06.54c.37-.3.78-.53 1.21-.7l.6-2.1Z"/><circle cx="12" cy="12" r="2.7"/>',
      users:'<path d="M16 19v-1.2a3.2 3.2 0 0 0-3.2-3.2H7.2A3.2 3.2 0 0 0 4 17.8V19"/><circle cx="10" cy="8" r="3"/><path d="M16 7.2a3 3 0 0 1 0 5.7M18.2 19v-1.2a3.2 3.2 0 0 0-1.8-2.9"/>',
      archive:'<path d="M4 6h16v13H4z"/><path d="M3 4h18v3H3zM9 11h6"/>',
      search:'<circle cx="10.8" cy="10.8" r="6.3"/><path d="m16 16 4.2 4.2"/>',
      template:'<rect x="5" y="3.5" width="14" height="17" rx="1.8"/><path d="M8 8h8M8 12h8M8 16h5"/>',
      pin:'<path d="m9 4 6 6M8 5l7 7M6 9l9 9M10 14l-5 5M14 10l5-5M8 4l-2 5 9 9 5-2-4-4 3-3z"/>',
      sound:'<path d="M4 10v4h3l4 3V7l-4 3z"/><path d="M15 9.5a4 4 0 0 1 0 5M17.5 7a7.2 7.2 0 0 1 0 10"/>',
      soundOff:'<path d="M4 10v4h3l4 3V7l-4 3z"/><path d="m16 10 4 4M20 10l-4 4"/>'
    };
    return '<svg class="kedoSvgIcon" viewBox="0 0 24 24" aria-hidden="true">'+(paths[name]||paths.template)+'</svg>';
  };

  if(!alive())return;
  $("main").innerHTML=`
    <div class="kedo-one-block">
      <aside class="kOneSide">
        <div class="kOneHead">
          <div><div class="kOneEyebrow">Внутренний КЭДО</div><h1>Чаты</h1></div>
          <span class="kOneSideActions"><button type="button" id="kOneGlobalSearch" class="kOneNew" title="Поиск по сообщениям">⌕</button><button type="button" id="kOneNew" class="kOneNew" title="Новая беседа">＋</button></span>
        </div>
        <div class="kOneSearch"><span>⌕</span><input id="kOneContactSearch" placeholder="Найти сотрудника" autocomplete="off"></div>
        <div class="kOneTabs">
          <button type="button" class="active" data-kone-filter="all">Все</button>
          <button type="button" data-kone-filter="unread">Новые</button>
          <button type="button" data-kone-filter="pinned">Закреп</button>
          <button type="button" data-kone-filter="archived">Архив</button>
        </div>
        <div class="kOneSection"><span>Диалоги</span><b id="kOneCount"></b></div>
        <div id="kOneContacts" class="kOneContacts"><div class="kOneContactsLoading">Загрузка диалогов…</div></div>
      </aside>
      <section id="kOneChat" class="kOneChat">
        <div class="kOneContent"><div class="kOneMessages"></div></div>
      </section>
    </div>`;

  if(!alive())return;
  document.documentElement.classList.add('kedoOnePage');
  document.body.classList.add('kedoOnePage');
  const globalSearchButton=$("kOneGlobalSearch");
  if(globalSearchButton)globalSearchButton.innerHTML=icon('search');
  endPageTransition(renderGen);

  const [contacts,groupRows,initialArchived,initialArchivedGroups]=await Promise.all([api('/api/messages/contacts'),api('/api/messages/groups').catch(()=>[]),api('/api/messages/archived').catch(()=>[]),api('/api/messages/groups/archived').catch(()=>[])]);
  if(!alive())return;
  if(!state.chatActiveGroup){
    state.chatActiveUser=state.chatActiveUser&&contacts.some(x=>Number(x.id)===Number(state.chatActiveUser))
      ? state.chatActiveUser : (contacts[0]?.id||null);
    if(!state.chatActiveUser&&groupRows[0])state.chatActiveGroup=Number(groupRows[0].id);
  }

  const me=Number(state.user.id);
  const esc2=v=>esc(String(v??''));
  const clean=v=>String(v||'').replace(/\s+/g,' ').trim();
  const initials=n=>esc2(String(n||'?').split(/\s+/).map(x=>x[0]).slice(0,2).join('').toUpperCase());
  const groupAvatarMarkup=(group,sizeClass='kOneAvatar kOneGroupAvatar')=>{
    const title=esc2(group?.title||'Беседа');
    const url=String(group?.avatar_url||'');
    const bust=group?.updated_at?`?v=${encodeURIComponent(group.updated_at)}`:'';
    if(group?.has_avatar&&/^\/api\/messages\/group-avatars\/\d+$/.test(url)){
      return `<span class="kedo-avatar ${sizeClass} kOneGroupPhoto"><img src="${esc2(url+bust)}" alt="" loading="lazy" decoding="async" onerror="this.remove();this.parentElement.classList.add('is-fallback');"><span class="kedo-avatar-fallback">${initials(group.title)}</span></span>`;
    }
    return `<span class="kedo-avatar is-fallback ${sizeClass}"><span class="kedo-avatar-fallback">${initials(group.title)}</span></span>`;
  };
  const time=v=>{try{return v?formatKedoTime(v):'';}catch{return '';}};
  const day=v=>{
    try{
      const d=new Date(v),n=new Date();
      const diff=Math.round(
        (new Date(n.getFullYear(),n.getMonth(),n.getDate())-
         new Date(d.getFullYear(),d.getMonth(),d.getDate()))/86400000
      );
      if(diff===0)return 'Сегодня';
      if(diff===1)return 'Вчера';
      return d.toLocaleDateString('ru-RU',{day:'numeric',month:'long',year:d.getFullYear()===n.getFullYear()?undefined:'numeric'});
    }catch{return '';}
  };

  if(!alive())return;

  let filter='all',contactRows=[...contacts],archivedRows=[...initialArchived],archivedGroupRows=[...initialArchivedGroups];
  const convPinned=id=>Number(state.chatPinnedUser)===Number(id);

  function drawContacts(){
    const q=clean($("kOneContactSearch")?.value).toLowerCase();
    const sourceRows=filter==='archived'?archivedRows:contactRows;
    const rows=sourceRows.filter(c=>{
      const hay=[c.full_name,c.login,c.position,c.department_name,c.last_message_body].map(clean).join(' ').toLowerCase();
      if(q&&!hay.includes(q))return false;
      if(filter==='unread'&&!c.has_unread)return false;
      if(filter==='pinned'&&!convPinned(c.id))return false;
      return true;
    }).sort((a,b)=>{
      const ap=convPinned(a.id),bp=convPinned(b.id);
      if(ap!==bp)return ap?-1:1;
      const au=!!a.has_unread,bu=!!b.has_unread;
      if(au!==bu)return au?-1:1;
      return (b.last_message_at?new Date(b.last_message_at).getTime():0)-(a.last_message_at?new Date(a.last_message_at).getTime():0);
    });

    const box=$("kOneContacts");if(!box)return;
    $("kOneCount").textContent=rows.length?String(rows.length):'';
    box.innerHTML=rows.length?rows.map(c=>`
      <button type="button" class="kOneContact ${Number(c.id)===Number(state.chatActiveUser)?'active':''}" data-kone-user="${c.id}">
        ${avatarMarkup({userId:c.id,name:c.full_name,hasAvatar:!!c.has_avatar,sizeClass:"kOneAvatar kedo-avatar-md",bust:c.id})}
        <span class="kOneContactMain">
          <span class="kOneContactTop"><strong>${esc2(c.full_name||'Сотрудник')}</strong><small>${esc2(time(c.last_message_at))}</small></span>
          <span class="kOneContactBottom"><span><em class="kOnePresenceDot ${c.is_online?'is-online':''}" title="${c.is_online?'В сети':'Не в сети'}"></em>${esc2(clean(c.last_message_body)||c.position||c.department_name||'Сотрудник')}</span><i>${convPinned(c.id)?'★':''}${c.has_unread?'●':''}</i></span>
        </span>
      </button>`).join(''):'<div style="padding:36px 16px;text-align:center;color:#8a8076;font-size:13px">Никого не нашли.</div>';
    const groupsSource=filter==='archived'?(archivedGroupRows||[]):(groupRows||[]);
    const groupsFiltered=groupsSource.filter(g=>filter!=='unread'||g.has_unread).filter(g=>filter!=='pinned'||g.is_pinned).filter(g=>{const q=clean($('kOneContactSearch')?.value).toLowerCase();return !q||clean(g.title).toLowerCase().includes(q);});
    if(groupsFiltered.length){box.querySelector('div[style*="padding:36px"]')?.remove();box.insertAdjacentHTML('afterbegin',`<div class="kOneGroupLabel">Группы</div>`+groupsFiltered.map(g=>`<button type="button" class="kOneContact kOneGroupContact ${Number(g.id)===Number(state.chatActiveGroup)?'active':''}" data-kone-group="${g.id}">${groupAvatarMarkup(g)}<span class="kOneContactMain"><span class="kOneContactTop"><strong>${esc2(g.title)}</strong><small>${esc2(time(g.last_message_at))}</small></span><span class="kOneContactBottom"><span>${esc2(clean(g.last_message_body)||`${g.member_count||0} участников`)}</span><i>${g.has_unread?'●':''}</i></span></span></button>`).join(''));}

    box.querySelectorAll('[data-kone-user]').forEach(btn=>btn.onclick=async()=>{
      state.chatActiveUser=Number(btn.dataset.koneUser);
      state.chatActiveGroup=null;
      await openChat();
      drawContacts();
    });
    box.querySelectorAll('[data-kone-group]').forEach(btn=>btn.onclick=async()=>{state.chatActiveGroup=Number(btn.dataset.koneGroup);state.chatActiveUser=null;await openGroupChat();drawContacts();});
  }

  async function loadContacts(){try{const data=await Promise.all([api('/api/messages/contacts'),api('/api/messages/archived').catch(()=>[]),api('/api/messages/groups').catch(()=>[]),api('/api/messages/groups/archived').catch(()=>[])]);contactRows=data[0];archivedRows=data[1];groupRows.splice(0,groupRows.length,...data[2]);archivedGroupRows=data[3];drawContacts();}catch{}}

  function openGlobalMessageSearch(){
    if(document.querySelector('.kOneGlobalSearchModal'))return;
    const modal=document.createElement('div');
    modal.className='kOneCreateModal kOneGlobalSearchModal';
    modal.innerHTML='<form class="kOneCreateCard kOneGlobalSearchCard"><div class="kOneGlobalSearchHead"><div><div class="kOneEyebrow">ПОИСК ПО ПЕРЕПИСКЕ</div><h2>Найти сообщение</h2><p>Поиск работает в личных и групповых чатах.</p></div><button type="button" class="secondary" data-close>Закрыть</button></div><div class="kOneGlobalSearchInput"><span>⌕</span><input name="query" type="search" minlength="1" maxlength="200" placeholder="Введите слово или фразу…" autocomplete="off"><button class="primary" type="submit">Найти</button></div><div class="kOneGlobalSearchResults"><div class="kOneGlobalSearchHint">Введите запрос, чтобы найти нужное сообщение.</div></div></form>';
    document.body.appendChild(modal);
    const form=modal.querySelector('form'),input=form.elements.query,list=modal.querySelector('.kOneGlobalSearchResults');
    const close=()=>modal.remove();
    modal.querySelector('[data-close]').onclick=close;
    modal.onclick=e=>{if(e.target===modal)close();};
    const render=rows=>{
      list.innerHTML=rows.length?rows.map(row=>{
        const group=row.conversation_type==='GROUP',title=group?(row.conversation_name||'Группа'):(row.conversation_name||'Сотрудник');
        return '<button type="button" class="kOneGlobalSearchResult" data-search-result data-search-type="'+(group?'GROUP':'DIRECT')+'" data-search-peer="'+(row.peer_id||'')+'" data-search-group="'+(row.group_id||'')+'" data-search-message="'+row.id+'"><span class="kOneGlobalSearchResultIcon">'+(group?'👥':'✉')+'</span><span class="kOneGlobalSearchResultCopy"><strong>'+esc2(title)+'</strong><small>'+esc2(row.sender_name||'Сотрудник')+' · '+esc2(time(row.created_at))+'</small><span>'+esc2(clean(row.body||''))+'</span></span><b>›</b></button>';
      }).join(''):'<div class="kOneGlobalSearchHint">Ничего не найдено. Попробуйте другое слово.</div>';
    };
    form.onsubmit=async e=>{
      e.preventDefault();
      const q=input.value.trim();
      if(!q)return;
      const submit=form.querySelector('button[type=submit]');submit.disabled=true;
      list.innerHTML='<div class="kOneGlobalSearchHint">Ищу сообщения…</div>';
      try{render(await api('/api/messages/search?q='+encodeURIComponent(q)+'&limit=100'));}catch(err){list.innerHTML='<div class="kOneGlobalSearchHint">'+esc2(err.message||'Не удалось выполнить поиск.')+'</div>';}finally{submit.disabled=false;}
    };
    list.onclick=async e=>{
      const result=e.target.closest('[data-search-result]');if(!result)return;
      close();
      try{
        const type=result.dataset.searchType;
        if(type==='GROUP'){state.chatActiveGroup=Number(result.dataset.searchGroup);state.chatActiveUser=null;await openGroupChat();}
        else{state.chatActiveUser=Number(result.dataset.searchPeer);state.chatActiveGroup=null;await openChat();}
        drawContacts();
        const target=document.querySelector('.kOneRow[data-message-id="'+result.dataset.searchMessage+'"]');
        target?.scrollIntoView({behavior:'smooth',block:'center'});
      }catch(err){kedoAlert(err.message||'Не удалось открыть сообщение.');}
    };
    setTimeout(()=>input.focus(),40);
  }

  function fitComposerInput(){
    const inp=$("kOneInput");
    if(!inp)return;
    inp.style.height='40px';
    const next=Math.min(Math.max(inp.scrollHeight,40),140);
    inp.style.height=next+'px';
    inp.classList.toggle('is-scrollable',inp.scrollHeight>140 || next>=140);
  }

  async function toggleReaction(messageId,reactionRaw){
    const canonical=allowedRx.get(normRx(reactionRaw));
    if(!canonical||!messageId)return;
    await api((state.chatActiveGroup?'/api/messages/groups/by-id/':'/api/messages/by-id/')+messageId+'/reaction',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({reaction:canonical})
    });
    await window.__kOneRefresh?.(true);
  }

  function closeOverlays(){
    document.querySelectorAll('.kOnePop,.kOneReactionMenu').forEach(x=>x.remove());
    document.body.classList.remove('kedoRxOpen','kedoMenuOpen');
  }

  function showReactionPicker(anchorRect,messageId){
    // Always only ONE picker on screen
    document.querySelectorAll('.kOnePop,.kOneReactionMenu').forEach(x=>x.remove());
    document.body.classList.remove('kedoMenuOpen');
    document.body.classList.add('kedoRxOpen');

    const panel=document.createElement('div');
    panel.className='kOneReactionMenu';
    panel.setAttribute('data-for-message',String(messageId));
    panel.innerHTML=REACTIONS.map(v=>'<button type="button" data-reaction="'+v+'">'+v+'</button>').join('');
    document.body.appendChild(panel);

    const pr=panel.getBoundingClientRect();
    let left=anchorRect.left+(anchorRect.width/2)-(pr.width/2);
    let top=anchorRect.top-pr.height-10;
    if(left<8)left=8;
    if(left+pr.width>innerWidth-8)left=innerWidth-pr.width-8;
    if(top<8)top=anchorRect.bottom+8;
    panel.style.left=left+'px';
    panel.style.top=top+'px';
    requestAnimationFrame(()=>panel.classList.add('show'));

    panel.querySelectorAll('[data-reaction]').forEach(btn=>{
      btn.addEventListener('click',async e=>{
        e.preventDefault();
        e.stopPropagation();
        try{
          await toggleReaction(messageId,btn.getAttribute('data-reaction'));
          closeOverlays();
        }catch(err){kedoAlert(err.message||'Не удалось поставить реакцию.');}
      });
    });
  }

  function messageHtml(m){
    const own=Number(m.sender_id)===me,deleted=!!m.deleted_at;
    const reply=(!deleted&&m.reply_to_message_id)
      ?`<button type="button" class="kOneReply" data-jump="${m.reply_to_message_id}"><small>${esc2(m.reply_to_sender_name||'Ответ')}</small><span>${esc2(clean(m.reply_to_body||'Сообщение').slice(0,140))}</span></button>`
      :'';
    const body=deleted
      ?'<div class="kOneDeleted">Сообщение удалено</div>'
      :(m.body?`<div class="kOneText">${esc2(m.body).replace(/\n/g,'<br>')}</div>`:'');
    const at=!deleted?chatAttachmentsHtml(m.attachments,own):'';
    const links=!deleted&&(m.links||[]).length?`<div class="kOneLinks">${m.links.map(link=>`<a href="${esc2(link.url||'#')}" target="_blank" rel="noopener noreferrer">🔗 ${esc2(link.label)}</a>`).join('')}</div>`:'';
    const rx=(m.reactions||[]).map(r=>{
      const label=allowedRx.get(normRx(r.reaction))||r.reaction;
      const mine=!!r.mine;
      return `<button type="button" class="kOneRx${mine?' mine':''}" data-rx-id="${m.id}" data-rx="${esc2(label)}"><span class="kOneRxEmoji">${esc2(label)}</span><b>${Number(r.count)||1}</b></button>`;
    }).join('');
    const pinBadge=(!deleted&&m.pinned_at)?'<div class="kOnePinBadge"><span aria-hidden="true">📌</span> Закреплено</div>':'';
    const meta=`<div class="kOneMeta"><span>${esc2(time(m.created_at))}</span>${own&&!deleted?`<span>${m.read_at?'✓✓':'✓'}</span>`:''}${m.edited_at?'<em>изм.</em>':''}</div>`;
    const trig=!deleted
      ?`<button type="button" class="kOneReactTrig" data-open-rx="${m.id}" title="Реакция">☺</button>`
      :'';
    return `<div class="kOneRow ${own?'own':'other'}${m.pinned_at?' is-pinned':''}" data-message-id="${m.id}" data-author="${m.sender_id}" data-pinned="${m.pinned_at?'1':'0'}"><div class="kOneBubbleWrap">${trig}<div class="kOneBubble">${pinBadge}${reply}${body}${at}${links}${meta}${rx?`<div class="kOneRxLine">${rx}</div>`:''}</div></div></div>`;
  }

  function pinnedList(rows){
    // Порядок как в TG: 1-й закреп = самый нижний в чате, дальше выше по истории
    return (rows||[])
      .filter(m=>m.pinned_at&&!m.deleted_at)
      .slice()
      .sort((a,b)=>{
        const ta=new Date(a.created_at).getTime()||0;
        const tb=new Date(b.created_at).getTime()||0;
        if(tb!==ta)return tb-ta;
        return Number(b.id)-Number(a.id);
      });
  }

  function pinnedBarHtml(rows){
    const pinned=pinnedList(rows);
    if(!pinned.length){
      window.__kOnePinIdx=0;
      return '';
    }
    let idx=Number(window.__kOnePinIdx||0);
    if(!Number.isFinite(idx)||idx<0||idx>=pinned.length)idx=0;
    window.__kOnePinIdx=idx;
    const m=pinned[idx];
    const preview=clean(m.body||'')||((m.attachments&&m.attachments.length)?'Вложение':'Сообщение');
    const segs=pinned.map((_,i)=>`<span class="kOnePinSeg${i===idx?' is-on':''}" data-pin-i="${i}"></span>`).join('');
    const title=pinned.length>1
      ?`Закреплённое сообщение · ${idx+1}/${pinned.length}`
      :'Закреплённое сообщение';
    return `<div class="kOneTgPin" data-pin-ids="${pinned.map(x=>x.id).join(',')}" data-pin-i="${idx}">
      <div class="kOnePinSegs">${segs}</div>
      <button type="button" class="kOneTgPinMain" data-jump="${m.id}" title="К закреплённому сообщению">
        <span class="kOneTgPinCopy"><small>${esc2(title)}</small><b>${esc2(preview.slice(0,140))}</b></span>
      </button>
    </div>`;
  }

  function jumpToPinnedMessage(box,messageId){
    if(!box||!messageId)return;
    const target=box.querySelector('.kOneRow[data-message-id="'+messageId+'"]');
    if(!target)return;
    window.__kOnePinJumping=true;
    clearTimeout(window.__kOnePinJumpTimer);
    const y=Math.max(0, target.offsetTop - Math.round(box.clientHeight * 0.22));
    box.scrollTop=y;
    target.classList.add('kOneFlash');
    setTimeout(()=>target.classList.remove('kOneFlash'),700);
    window.__kOnePinJumpTimer=setTimeout(()=>{window.__kOnePinJumping=false;},700);
  }

  function refreshPinnedSlot(rows){
    window.__kOneLastMessages=rows||[];
    const slot=$("kOnePinnedSlot");
    if(slot)slot.innerHTML=pinnedBarHtml(rows);
  }

  function patchPinnedSlot(rows){
    window.__kOneLastMessages=rows||[];
    const pinned=pinnedList(rows);
    const slot=$("kOnePinnedSlot");
    if(!slot)return;
    if(!pinned.length){slot.innerHTML='';window.__kOnePinIdx=0;return;}
    let idx=Number(window.__kOnePinIdx||0);
    if(!Number.isFinite(idx)||idx<0||idx>=pinned.length)idx=0;
    window.__kOnePinIdx=idx;
    const root=slot.querySelector('.kOneTgPin');
    if(!root){refreshPinnedSlot(rows);return;}
    const m=pinned[idx];
    const preview=clean(m.body||'')||((m.attachments&&m.attachments.length)?'Вложение':'Сообщение');
    const title=pinned.length>1
      ?`Закреплённое сообщение · ${idx+1}/${pinned.length}`
      :'Закреплённое сообщение';
    root.dataset.pinIds=pinned.map(x=>x.id).join(',');
    root.dataset.pinI=String(idx);
    const segs=root.querySelector('.kOnePinSegs');
    if(segs){
      const nodes=[...segs.querySelectorAll('.kOnePinSeg')];
      if(nodes.length!==pinned.length){
        segs.innerHTML=pinned.map((_,i)=>`<span class="kOnePinSeg${i===idx?' is-on':''}" data-pin-i="${i}"></span>`).join('');
      }else{
        nodes.forEach((n,i)=>{
          n.dataset.pinI=String(i);
          n.classList.toggle('is-on',i===idx);
        });
      }
    }
    const main=root.querySelector('.kOneTgPinMain');
    if(main){
      main.dataset.jump=String(m.id);
      const small=main.querySelector('small');
      const b=main.querySelector('b');
      if(small)small.textContent=title;
      if(b)b.textContent=preview.slice(0,140);
    }
  }

  function syncPinnedFromScroll(box){
    if(!box||window.__kOnePinJumping)return;
    const rows=window.__kOneLastMessages||[];
    const pinned=pinnedList(rows);
    if(!pinned.length)return;
    const nearBottom=(box.scrollHeight-box.scrollTop-box.clientHeight)<110;
    let idx=0;
    if(!nearBottom){
      const top=box.scrollTop+28;
      for(let i=0;i<pinned.length;i++){
        const el=box.querySelector('.kOneRow[data-message-id="'+pinned[i].id+'"]');
        if(!el)continue;
        if(el.offsetTop+Math.min(el.offsetHeight,48)<=top){
          idx=Math.min(i+1,pinned.length-1);
        }else break;
      }
    }
    if(idx!==Number(window.__kOnePinIdx||0)){
      window.__kOnePinIdx=idx;
      patchPinnedSlot(rows);
    }
  }

  function bindPinnedSlot(box){
    const slot=$("kOnePinnedSlot");
    if(!slot||slot.dataset.bound==='1')return;
    slot.dataset.bound='1';
    slot.addEventListener('click',e=>{
      const seg=e.target.closest('.kOnePinSeg');
      const main=e.target.closest('.kOneTgPinMain');
      if(!seg&&!main)return;
      e.preventDefault();
      const rows=window.__kOneLastMessages||[];
      const pinned=pinnedList(rows);
      if(!pinned.length)return;
      let idx=Number(window.__kOnePinIdx||0);
      if(seg){
        idx=Number(seg.dataset.pinI||0);
      }else if(pinned.length>1){
        idx=(idx+1)%pinned.length;
      }
      window.__kOnePinIdx=idx;
      patchPinnedSlot(rows);
      jumpToPinnedMessage(box,pinned[idx].id);
    });
    if(box.dataset.pinScrollBound!=='1'){
      box.dataset.pinScrollBound='1';
      box.addEventListener('scroll',()=>{
        if(window.__kOnePinJumping)return;
        clearTimeout(window.__kOnePinScrollTimer);
        window.__kOnePinScrollTimer=setTimeout(()=>syncPinnedFromScroll(box),60);
      },{passive:true});
    }
  }

  function messagesSig(rows){
    return (rows||[]).map(m=>{
      const rx=(m.reactions||[]).map(r=>normRx(r.reaction)+':'+(r.count||0)+':'+(r.mine?1:0)).join(',');
      return [m.id,m.edited_at||'',m.deleted_at||'',m.pinned_at||'',m.read_at||'',m.body||'',rx].join('~');
    }).join('|');
  }

  function messageList(rows){
    if(!rows.length){
      return '<div class="kOneEmptyChat"><div style="font-size:42px;opacity:.3">✉</div><strong>Пусто</strong><span>Напишите первое сообщение</span></div>';
    }
    let h='',last='';
    for(const m of rows){
      const d=day(m.created_at);
      if(d!==last){h+=`<div class="kOneDay"><span>${esc2(d)}</span></div>`;last=d;}
      h+=messageHtml(m);
    }
    return h;
  }

  function menu(row,x,y){
    closeOverlays();
    document.body.classList.add('kedoMenuOpen');
    const id=Number(row.dataset.messageId),own=Number(row.dataset.author)===me,groupMode=Boolean(state.chatActiveGroup),messageApi=groupMode?'/api/messages/groups/by-id/':'/api/messages/by-id/';
    const deleted=!!row.querySelector('.kOneDeleted');
    const p=document.createElement('div');p.className='kOnePop';
    const isPinned=row.dataset.pinned==='1'||row.classList.contains('is-pinned');
    p.innerHTML=
      '<button type="button" data-a="reply">↩ Ответить</button>'+
      (!deleted?'<button type="button" data-a="react">☺ Реакция</button>':'')+
      (!deleted?'<button type="button" data-a="forward">↗ Переслать</button><button type="button" data-a="link">🔗 Связать</button><button type="button" data-a="readers">✓✓ Кто прочитал</button>':'')+
      '<button type="button" data-a="pin">'+(isPinned?'📌 Открепить':'📌 Закрепить')+'</button>'+
      (own&&!deleted
        ? '<div style="height:1px;background:#e3ecef;margin:4px 6px"></div>'+
          '<button type="button" data-a="edit">✎ Изменить</button>'+
          '<button type="button" class="danger" data-a="delete">⌫ Удалить</button>'
        : '');
    document.body.appendChild(p);
    const r=p.getBoundingClientRect();
    let left=x+8,top=y+8;
    if(left+r.width>innerWidth-8)left=innerWidth-r.width-8;
    if(top+r.height>innerHeight-8)top=y-r.height-8;
    p.style.left=Math.max(8,left)+'px';p.style.top=Math.max(8,top)+'px';

    p.querySelector('[data-a="reply"]')?.addEventListener('click',()=>{
      const bars=$("kOneComposerBars"),inp=$("kOneInput");
      if(!bars||!inp)return;
      bars.querySelector('.kOneEditBar')?.remove();
      window.__kedoEditMessageId=null;
      let bar=bars.querySelector('.kOneReplyBar');
      if(!bar){
        bar=document.createElement('div');bar.className='kOneReplyBar';
        bar.innerHTML='<span></span><div><small>Ответ</small><b></b></div><button type="button" aria-label="Отменить">×</button>';
        bars.appendChild(bar);bar.querySelector('button').onclick=()=>{window.__kedoReplyToMessageId=null;bar.remove();};
      }
      bar.querySelector('b').textContent=(own?'Вы':$("kOnePersonName")?.textContent||'Сотрудник')+': '+clean(row.querySelector('.kOneText')?.textContent||'Сообщение').slice(0,150);
      window.__kedoReplyToMessageId=id;inp.focus();closeOverlays();
    });

    p.querySelector('[data-a="forward"]')?.addEventListener('click',async()=>{if(groupMode)return kedoAlert('Пересылка из группы будет доступна после выбора личного чата.');try{const answer=await kedoSelect({title:'Переслать сообщение',message:'Выберите сотрудника.',options:contacts.map(c=>({value:c.id,label:c.full_name,meta:c.position||c.department_name||'',icon:'↗'}))});if(answer)await api('/api/messages/by-id/'+id+'/forward',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({target_user_id:Number(answer)})});closeOverlays();}catch(err){kedoAlert(err.message);}});
    p.querySelector('[data-a="readers"]')?.addEventListener('click',async()=>{if(groupMode)return kedoAlert('В группе отображаются отметки прочтения участников.');try{const readers=await api('/api/messages/by-id/'+id+'/readers');kedoAlert(readers.length?readers.map(r=>`${r.full_name} · ${formatKedoDateTime(r.read_at)}`).join('\n'):'Сообщение ещё никто не прочитал.');closeOverlays();}catch(err){kedoAlert(err.message);}});
    p.querySelector('[data-a="link"]')?.addEventListener('click',async()=>{try{const label=await kedoPrompt('Название связанного объекта:');if(!label)return;const url=await kedoPrompt('Ссылка (необязательно):','');await api(messageApi+id+'/links',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({entity_type:'URL',label:label.trim(),url:url?.trim()||null})});closeOverlays();}catch(err){kedoAlert(err.message);}});

    p.querySelector('[data-a="react"]')?.addEventListener('click',e=>{
      e.preventDefault();
      e.stopPropagation();
      const bubble=row.querySelector('.kOneBubble')||row;
      // closes context menu and opens ONLY the reaction picker
      showReactionPicker(bubble.getBoundingClientRect(),id);
    });

    p.querySelector('[data-a="pin"]')?.addEventListener('click',async()=>{
      try{await api(messageApi+id+'/pin',{method:'POST'});closeOverlays();await window.__kOneRefresh?.(true);}catch(e){kedoAlert(e.message);}
    });

    p.querySelector('[data-a="edit"]')?.addEventListener('click',()=>{
      const inp=$("kOneInput"),bars=$("kOneComposerBars");if(!inp||!bars)return;
      bars.querySelector('.kOneReplyBar')?.remove();
      window.__kedoReplyToMessageId=null;
      let bar=bars.querySelector('.kOneEditBar');
      if(!bar){
        bar=document.createElement('div');bar.className='kOneEditBar';
        bar.innerHTML='<span></span><div><small>Редактирование</small><b>Изменение сообщения</b></div><button type="button" aria-label="Отменить">×</button>';
        bars.appendChild(bar);
        bar.querySelector('button').onclick=()=>{window.__kedoEditMessageId=null;bar.remove();inp.value='';fitComposerInput();};
      }
      window.__kedoEditMessageId=id;inp.value=(row.querySelector('.kOneText')?.textContent||'').trim();fitComposerInput();inp.focus();closeOverlays();
    });

    p.querySelector('[data-a="delete"]')?.addEventListener('click',async()=>{
      if(!await kedoConfirm('Удалить сообщение?'))return;
      try{await api(messageApi+id,{method:'DELETE'});closeOverlays();await window.__kOneRefresh?.(true);}catch(e){kedoAlert(e.message);}
    });
  }

  function bindMessageBox(box){
    if(!box||box.dataset.bound==='1')return;
    box.dataset.bound='1';

    box.addEventListener('contextmenu',e=>{
      const row=e.target.closest('.kOneRow');if(!row)return;
      e.preventDefault();
      menu(row,e.clientX,e.clientY);
    });

    let longTimer=null,rowDown=null,xDown=0,yDown=0;
    box.addEventListener('pointerdown',e=>{
      if(e.target.closest('[data-rx-id],.kOneReply,.kOneReactTrig,.kOneReactionMenu'))return;
      const row=e.target.closest('.kOneRow');if(!row)return;
      if(e.pointerType==='mouse'&&e.button!==0)return;
      clearTimeout(longTimer);rowDown=row;xDown=e.clientX;yDown=e.clientY;
      longTimer=setTimeout(()=>{if(rowDown)menu(rowDown,xDown,yDown);rowDown=null;},520);
    });
    box.addEventListener('pointermove',e=>{
      if(rowDown&&Math.hypot(e.clientX-xDown,e.clientY-yDown)>16){clearTimeout(longTimer);rowDown=null;}
    });
    const clearLong=()=>{clearTimeout(longTimer);rowDown=null;};
    box.addEventListener('pointerup',clearLong);
    box.addEventListener('pointercancel',clearLong);

    box.addEventListener('click',async e=>{
      const openRx=e.target.closest('[data-open-rx]');
      if(openRx){
        e.preventDefault();
        e.stopPropagation();
        const id=Number(openRx.getAttribute('data-open-rx'));
        const wrap=openRx.closest('.kOneBubbleWrap')||openRx;
        showReactionPicker(wrap.getBoundingClientRect(),id);
        return;
      }
      const jump=e.target.closest('[data-jump]');
      if(jump){
        e.preventDefault();
        box.querySelector('.kOneRow[data-message-id="'+jump.dataset.jump+'"]')?.scrollIntoView({behavior:'smooth',block:'center'});
        return;
      }
      const rxBtn=e.target.closest('[data-rx-id]');
      if(rxBtn){
        e.preventDefault();
        e.stopPropagation();
        try{
          await toggleReaction(Number(rxBtn.getAttribute('data-rx-id')),rxBtn.getAttribute('data-rx'));
        }catch(err){kedoAlert(err.message||'Не удалось поставить реакцию.');}
      }
    });
  }

  async function openGroupSettings(data){
    const group=data?.group||{};
    if(!['OWNER','ADMIN'].includes(group.member_role))return;
    const modal=document.createElement('div');
    modal.className='kOneCreateModal';
    modal.innerHTML=`<form class="kOneCreateCard kOneGroupSettingsCard"><div class="kOneGroupSettingsHead"><div><div class="kOneEyebrow">НАСТРОЙКИ БЕСЕДЫ</div><h2>Редактировать беседу</h2></div><button type="button" class="secondary" data-close aria-label="Закрыть">Закрыть</button></div><div class="kOneGroupAvatarEditor"><div class="kOneGroupAvatarPreview">${groupAvatarMarkup(group,'kOneAvatar kOneBig kOneGroupAvatar')}</div><div><strong>Изображение беседы</strong><small>JPG, PNG или WEBP до 2 МБ.</small><div class="kOneGroupAvatarActions"><label class="secondary kOneFileLabel">Выбрать картинку<input type="file" name="avatar" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp" hidden></label>${group.has_avatar?'<button type="button" class="danger-outline" data-remove-avatar>Удалить</button>':''}</div></div></div><label>Название<input name="title" required maxlength="255" value="${esc2(group.title||'')}"></label><label>Описание<input name="description" maxlength="1000" value="${esc2(group.description||'')}"></label><div class="kOneGroupSettingsMembers"><b>Участники · ${(data.members||[]).length}</b><span>${(data.members||[]).map(member=>esc2(member.full_name)+(member.member_role==='OWNER'?' · владелец':'')).join(', ')||'Участников нет.'}</span></div><div class="kOneCreateActions kOneGroupSettingsActions"><button type="button" class="danger-outline" data-delete-group>Удалить беседу</button><span></span><button type="button" class="secondary" data-close>Отмена</button><button class="primary">Сохранить</button></div></form>`;
    document.body.appendChild(modal);
    const memberBox=modal.querySelector('.kOneGroupSettingsMembers');
    if(memberBox){memberBox.insertAdjacentHTML('afterbegin','<span class="kOneSettingsMembersIcon">'+icon('users')+'</span>');memberBox.classList.add('has-icon');}
    const form=modal.querySelector('form'),fileInput=form.elements.avatar,preview=modal.querySelector('.kOneGroupAvatarPreview');
    const close=()=>modal.remove();
    modal.querySelectorAll('[data-close]').forEach(button=>button.onclick=close);
    modal.onclick=e=>{if(e.target===modal)close();};
    fileInput.onchange=()=>{
      const file=fileInput.files?.[0];
      if(!file)return;
      if(!/^image\/(jpeg|png|webp)$/i.test(file.type)){fileInput.value='';return kedoAlert('Допустимы только JPG, PNG или WEBP.');}
      const reader=new FileReader();reader.onload=()=>{preview.innerHTML=`<span class="kedo-avatar kOneAvatar kOneBig kOneGroupAvatar kOneGroupPhoto"><img src="${esc2(String(reader.result||''))}" alt="Предпросмотр"><span class="kedo-avatar-fallback">${initials(group.title)}</span></span>`;};reader.readAsDataURL(file);
    };
    modal.querySelector('[data-remove-avatar]')?.addEventListener('click',async()=>{
      if(!await kedoConfirm('Удалить изображение беседы?'))return;
      try{await api(`/api/messages/groups/${group.id}/avatar`,{method:'DELETE'});group.has_avatar=false;group.avatar_url=null;preview.innerHTML=groupAvatarMarkup(group,'kOneAvatar kOneBig kOneGroupAvatar');modal.querySelector('[data-remove-avatar]')?.remove();}catch(err){kedoAlert(err.message||'Не удалось удалить изображение.');}
    });
    modal.querySelector('[data-delete-group]').onclick=async()=>{
      if(!await kedoConfirm('Удалить беседу? Она будет скрыта у всех участников.'))return;
      try{await api(`/api/messages/groups/${group.id}`,{method:'DELETE'});close();state.chatActiveGroup=null;await loadContacts();filter='all';document.querySelectorAll('[data-kone-filter]').forEach(x=>x.classList.toggle('active',x.dataset.koneFilter===filter));drawContacts();$('kOneChat').innerHTML='<div class="kOneEmptyChat"><strong>Выберите диалог</strong><span>Список слева</span></div>';}catch(err){kedoAlert(err.message||'Не удалось удалить беседу.');}
    };
    form.onsubmit=async e=>{
      e.preventDefault();
      const save=form.querySelector('button.primary');save.disabled=true;
      try{
        await api(`/api/messages/groups/${group.id}`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({title:form.elements.title.value,description:form.elements.description.value})});
        const file=fileInput.files?.[0];
        if(file){const fd=new FormData();fd.append('avatar',file,file.name);await api(`/api/messages/groups/${group.id}/avatar`,{method:'POST',body:fd});}
        close();await loadContacts();await openGroupChat();
      }catch(err){kedoAlert(err.message||'Не удалось сохранить беседу.');save.disabled=false;}
    };
  }

  function scrollChatToBottom(box){
    if(!box)return;
    const move=()=>{box.scrollTop=box.scrollHeight;};
    let frames=0;
    const settle=()=>{move();if(++frames<5)requestAnimationFrame(settle);};
    requestAnimationFrame(settle);
    setTimeout(move,160);
    setTimeout(move,420);
    box.querySelectorAll('img').forEach(image=>{if(!image.complete)image.addEventListener('load',move,{once:true});});
  }

  async function openGroupChat(){
    if(!alive()||!state.chatActiveGroup)return;
    const data=await api('/api/messages/groups/'+state.chatActiveGroup);if(!alive())return;
    const chat=$("kOneChat");if(!chat)return;
    const canManageGroup=['OWNER','ADMIN'].includes(data.group.member_role);
    chat.innerHTML=`<header class="kOneHead"><div class="kOnePerson">${groupAvatarMarkup(data.group,'kOneAvatar kOneBig kOneGroupAvatar')}<div><strong id="kOnePersonName">${esc2(data.group.title)}</strong><span>${esc2(data.group.description||`${(data.members||[]).length} участников`)}</span></div></div><div class="kOneHeadActions">${canManageGroup?'<button type="button" id="kOneGroupSettings" class="kOneHeadBtn" title="Настройки беседы">⚙</button>':''}<button type="button" id="kOneGroupInfo" class="kOneHeadBtn" title="Участники">👥</button><button type="button" id="kOneGroupArchive" class="kOneHeadBtn" title="Архивировать группу">▣</button><button type="button" id="kOneSound" class="kOneHeadBtn" title="Звук уведомлений"><span id="kOneSoundIco">${state.soundEnabled?'🔊':'🔇'}</span></button></div></header><div class="kOneContent"><div id="kOnePinnedSlot">${pinnedBarHtml(data.messages||[])}</div><div id="kOneMessages" class="kOneMessages">${messageList(data.messages||[])}</div></div><form id="kOneComposer" class="kOneComposer"><div id="kOneComposerBars"></div><div class="kOneComposerShell"><button type="button" id="kOneAttach" class="kOneAttach">＋</button><div class="kOneComposerMain"><textarea id="kOneInput" maxlength="10000" rows="1" placeholder="Напишите сообщение…"></textarea></div><input id="kOneFiles" type="file" multiple hidden><button class="kOneSend" type="submit">Отправить</button></div><div class="kOneHint">Enter — отправить · Shift+Enter — новая строка</div></form>`;
    const groupHeaderIcons={kOneGroupSettings:'settings',kOneGroupInfo:'users',kOneGroupArchive:'archive'};
    Object.entries(groupHeaderIcons).forEach(([id,name])=>{const button=$(id);if(button)button.innerHTML=icon(name);});
    const groupSound=$("kOneSoundIco");if(groupSound)groupSound.innerHTML=icon(state.soundEnabled?'sound':'soundOff');
    const box=$("kOneMessages");window.__kOneMsgSig=messagesSig(data.messages||[]);window.__kOneLastMessages=data.messages||[];scrollChatToBottom(box);bindMessageBox(box);bindPinnedSlot(box);
    $("kOneGroupInfo").onclick=()=>kedoAlert((data.members||[]).map(m=>`${m.full_name}${m.member_role==='OWNER'?' · владелец':''}`).join('\n')||'Участников нет.');
    $("kOneGroupSettings")?.addEventListener("click",()=>openGroupSettings(data));
    const groupArchived=filter==='archived';
    $("kOneGroupArchive").title=groupArchived?'Вернуть группу из архива':'Архивировать группу';
    $("kOneGroupArchive").onclick=async()=>{if(!await kedoConfirm(groupArchived?'Вернуть группу из архива?':'Переместить группу в архив?'))return;try{await api('/api/messages/groups/'+state.chatActiveGroup+'/'+(groupArchived?'restore':'archive'),{method:'POST'});state.chatActiveGroup=null;await loadContacts();filter=groupArchived?'all':'archived';document.querySelectorAll('[data-kone-filter]').forEach(x=>x.classList.toggle('active',x.dataset.koneFilter===filter));drawContacts();$("kOneChat").innerHTML='<div class="kOneEmptyChat"><strong>Выберите диалог</strong><span>Список слева</span></div>';}catch(err){kedoAlert(err.message);}};
    $("kOneSound").onclick=()=>{unlockKedoAudio();state.soundEnabled=!state.soundEnabled;$("kOneSoundIco").innerHTML=icon(state.soundEnabled?'sound':'soundOff');};
    const form=$("kOneComposer"),input=$("kOneInput"),files=$("kOneFiles");$("kOneAttach").onclick=()=>files.click();input.oninput=fitComposerInput;fitComposerInput();input.onkeydown=e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();form.requestSubmit();}};
    form.onsubmit=async e=>{e.preventDefault();const body=input.value.trim(),attached=[...files.files],send=form.querySelector('.kOneSend');if(window.__kedoEditMessageId){if(!body)return;send.disabled=true;try{await api('/api/messages/groups/by-id/'+Number(window.__kedoEditMessageId),{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({body})});window.__kedoEditMessageId=null;input.value='';document.querySelector('.kOneEditBar')?.remove();fitComposerInput();await window.__kOneRefresh?.(true);}catch(err){kedoAlert(err.message);}finally{send.disabled=false;input.focus();}return;}if(!body&&!attached.length)return;send.disabled=true;try{const fd=new FormData();if(body)fd.append('body',body);const replyId=Number(window.__kedoReplyToMessageId||0);if(replyId)fd.append('reply_to_message_id',String(replyId));attached.forEach(f=>fd.append('files',f,f.name));await api('/api/messages/groups/'+state.chatActiveGroup,{method:'POST',body:fd});input.value='';files.value='';fitComposerInput();window.__kedoReplyToMessageId=null;document.querySelector('.kOneReplyBar')?.remove();await window.__kOneRefresh?.(true);}catch(err){kedoAlert(err.message);}finally{send.disabled=false;input.focus();}};
    window.__kOneRefresh=async force=>{try{const next=await api('/api/messages/groups/'+state.chatActiveGroup),b=$("kOneMessages");if(!b)return;const near=(b.scrollHeight-b.scrollTop-b.clientHeight)<120,old=b.scrollTop;const sig=messagesSig(next.messages||[]);if(!force&&sig===window.__kOneMsgSig)return;window.__kOneMsgSig=sig;b.innerHTML=messageList(next.messages||[]);refreshPinnedSlot(next.messages||[]);if(force||near)scrollChatToBottom(b);else b.scrollTop=old;}catch{}};
    clearInterval(state.kedoMessagesPoll);state.kedoMessagesPoll=setInterval(()=>window.__kOneRefresh?.(false),5000);
  }

  async function openChat(){
    if(!alive())return;
    if(!state.chatActiveUser){
      const chat=$("kOneChat");
      if(chat)chat.innerHTML='<div class="kOneEmptyChat"><strong>Выберите диалог</strong><span>Список слева</span></div>';
      return;
    }
    const data=await api('/api/messages/'+state.chatActiveUser);
    if(!alive())return;
    const messageApi='/api/messages/by-id/';
    const chat=$("kOneChat");if(!chat)return;

    chat.innerHTML=`
      <header class="kOneHead">
        <div class="kOnePerson kOnePersonCardTrigger" data-action="openProfileCard" data-id="${data.user.id}" role="button" tabindex="0" title="Открыть карточку сотрудника">${avatarMarkup({userId:data.user.id,name:data.user.full_name,hasAvatar:!!data.user.has_avatar,sizeClass:"kOneAvatar kOneBig kedo-avatar-md",bust:data.user.id})}<div><strong id="kOnePersonName">${esc2(data.user.full_name)}</strong><span id="kOnePersonStatus" class="kOnePersonStatus ${data.user.is_online?'is-online':''}">${data.user.is_online?'В сети':esc2(data.user.position||'Не в сети')}</span><em id="kOneTyping" class="kOneTyping" hidden>печатает…</em></div></div>
        <div class="kOneHeadActions">
          <button type="button" id="kOnePin" class="kOneHeadBtn" title="Закрепить диалог"><span class="kOneHeadIco" aria-hidden="true">★</span></button>
          <button type="button" id="kOneArchive" class="kOneHeadBtn" title="Архивировать чат"><span class="kOneHeadIco" aria-hidden="true">▣</span></button>
          <button type="button" id="kOneFind" class="kOneHeadBtn" title="Поиск по диалогу"><span class="kOneHeadIco" aria-hidden="true">⌕</span></button>
          <button type="button" id="kOneTemplate" class="kOneHeadBtn" title="Шаблоны сообщений"><span class="kOneHeadIco" aria-hidden="true">▤</span></button>
          <button type="button" id="kOneSound" class="kOneHeadBtn" title="Звук уведомлений"><span class="kOneHeadIco" id="kOneSoundIco" aria-hidden="true">${state.soundEnabled?'🔊':'🔇'}</span></button>
        </div>
      </header>
      <div id="kOneSearchBar" class="kOneFindBar"><span class="kOneHeadIco">⌕</span><input id="kOneSearchInput" placeholder="Найти в диалоге"><button id="kOneSearchClose" type="button">×</button></div>
      <div class="kOneContent">
        <div id="kOnePinnedSlot">${pinnedBarHtml(data.messages||[])}</div>
        <div id="kOneMessages" class="kOneMessages">${messageList(data.messages||[])}</div>
      </div>
      <form id="kOneComposer" class="kOneComposer">
        <div id="kOneComposerBars"></div>
        <div class="kOneComposerShell">
          <button type="button" id="kOneAttach" class="kOneAttach" title="Прикрепить файл">＋</button>
          <div class="kOneComposerMain">
            <textarea id="kOneInput" maxlength="4000" rows="1" placeholder="Напишите сообщение…" autocomplete="off"></textarea>
          </div>
          <input id="kOneFiles" type="file" multiple accept="image/jpeg,image/png,image/webp,image/gif,application/pdf,.doc,.docx,.xls,.xlsx,.txt,.csv" hidden>
          <button class="kOneSend" type="submit">Отправить</button>
        </div>
        <div class="kOneHint">Enter — отправить · Shift+Enter — новая строка · ПКМ — меню</div>
      </form>`;

    const directHeaderIcons={kOnePin:'pin',kOneArchive:'archive',kOneFind:'search',kOneTemplate:'template'};
    Object.entries(directHeaderIcons).forEach(([id,name])=>{const button=$(id);if(button)button.innerHTML=icon(name);});
    const directSound=$("kOneSoundIco");if(directSound)directSound.innerHTML=icon(state.soundEnabled?'sound':'soundOff');
    const box=$("kOneMessages");
    if(!box||!alive())return;
    window.__kOnePinIdx=0;
    window.__kOnePinJumping=false;
    window.__kOneMsgSig=messagesSig(data.messages||[]);
    window.__kOneLastMessages=data.messages||[];
    scrollChatToBottom(box);
    bindMessageBox(box);
    bindPinnedSlot(box);
    box.addEventListener('scroll',async()=>{if(box.scrollTop>24||window.__kOneLoadingOlder||!window.__kOneLastMessages?.length)return;window.__kOneLoadingOlder=true;const before=window.__kOneLastMessages[0]?.id,oldHeight=box.scrollHeight;try{const older=await api(`/api/messages/${state.chatActiveUser}?limit=50&before=${before}`);if((older.messages||[]).length){window.__kOneLastMessages=[...(older.messages||[]),...window.__kOneLastMessages];box.innerHTML=messageList(window.__kOneLastMessages);box.scrollTop=box.scrollHeight-oldHeight;}}catch{}finally{window.__kOneLoadingOlder=false;}},{passive:true});

    const searchBar=$("kOneSearchBar");
    $("kOneFind").onclick=()=>{
      const show=searchBar.style.display!=='flex';
      searchBar.style.display=show?'flex':'none';
      if(show)$("kOneSearchInput").focus();
    };
    $("kOneTemplate").onclick=async()=>{try{const templates=await api('/api/messages/templates');if(!templates.length)return kedoAlert('Шаблонов пока нет.');const choice=await kedoSelect({title:'Шаблон сообщения',message:'Выберите текст для вставки.',options:templates.map(t=>({value:t.id,label:t.title,meta:t.body.slice(0,80),icon:'▤'}))});const t=templates.find(x=>Number(x.id)===Number(choice));if(t){$("kOneInput").value=t.body;fitComposerInput();$("kOneInput").focus();}}catch(err){kedoAlert(err.message);}};
    $("kOneSearchClose").onclick=()=>{searchBar.style.display='none';$("kOneSearchInput").value='';box.querySelectorAll('.kOneRow').forEach(r=>r.style.outline='none');};
    $("kOneSearchInput").oninput=e=>{
      const q=e.target.value.trim().toLowerCase();
      box.querySelectorAll('.kOneRow').forEach(r=>r.style.outline=q&&(r.textContent||'').toLowerCase().includes(q)?'2px solid rgba(196,92,38,.35)':'none');
    };

    $("kOnePin").onclick=()=>{
      const id=Number(state.chatActiveUser);
      if(convPinned(id)){state.chatPinnedUser=null;localStorage.removeItem('kedo_chat_pinned_v1');}
      else{state.chatPinnedUser=id;localStorage.setItem('kedo_chat_pinned_v1',String(id));}
      $("kOnePin").classList.toggle('active',convPinned(id));drawContacts();
    };
    $("kOnePin").classList.toggle('active',convPinned(state.chatActiveUser));
    $("kOneArchive").title=filter==='archived'?'Вернуть чат из архива':'Архивировать чат';
    $("kOneArchive").onclick=async()=>{const archived=filter==='archived';if(!await kedoConfirm(archived?'Вернуть чат из архива?':'Переместить этот чат в архив?'))return;try{await api('/api/messages/'+state.chatActiveUser+'/'+(archived?'restore':'archive'),{method:'POST'});state.chatActiveUser=null;await loadContacts();filter=archived?'all':'archived';document.querySelectorAll('[data-kone-filter]').forEach(x=>x.classList.toggle('active',x.dataset.koneFilter===filter));drawContacts();}catch(err){kedoAlert(err.message);}};

    $("kOneSound").onclick=()=>{
      unlockKedoAudio();
      state.soundEnabled=!state.soundEnabled;
      const ico=$("kOneSoundIco");
      if(ico)ico.innerHTML=icon(state.soundEnabled?'sound':'soundOff');
      else $("kOneSound").innerHTML=icon(state.soundEnabled?'sound':'soundOff');
      if(state.soundEnabled)playKedoNotifySound('message');
    };

    const form=$("kOneComposer"),inp=$("kOneInput"),files=$("kOneFiles");
    api('/api/messages/drafts/'+state.chatActiveUser).then(d=>{if(d?.body&&alive()){inp.value=d.body;fitComposerInput();}}).catch(()=>{});
    $("kOneAttach").onclick=()=>files.click();
    let draftTimer=null;
    let typingStopTimer=null;
    const setTyping=active=>api(`/api/messages/${state.chatActiveUser}/typing`,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({active})}).catch(()=>{});
    const markTyping=()=>{clearTimeout(typingStopTimer);setTyping(true);typingStopTimer=setTimeout(()=>setTyping(false),1200);};
    const pollTyping=async()=>{try{const value=await api(`/api/messages/${state.chatActiveUser}/typing`);const typing=$("kOneTyping");if(typing){typing.hidden=!value.active;typing.textContent=value.active?'печатает…':'';}}catch{}};
    inp.oninput=()=>{fitComposerInput();markTyping();clearTimeout(draftTimer);draftTimer=setTimeout(()=>api('/api/messages/drafts',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({peer_user_id:Number(state.chatActiveUser),body:inp.value})}).catch(()=>{}),500);};
    state.chatTypingTimer=setInterval(pollTyping,1500);pollTyping();
    fitComposerInput();
    inp.onkeydown=e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();form.requestSubmit();}};

    form.onsubmit=async e=>{
      e.preventDefault();
      clearTimeout(typingStopTimer);setTyping(false);
      const send=form.querySelector('.kOneSend'),body=inp.value.trim(),attached=[...files.files];
      if(window.__kedoEditMessageId){
        const id=Number(window.__kedoEditMessageId);if(!body)return;
        send.disabled=true;
        try{
          await api(messageApi+id,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({body})});
          window.__kedoEditMessageId=null;inp.value='';document.querySelector('.kOneEditBar')?.remove();fitComposerInput();
          await window.__kOneRefresh?.(true);
        }catch(err){kedoAlert(err.message);}finally{send.disabled=false;}
        return;
      }
      if(!body&&!attached.length)return;
      send.disabled=true;
      try{
        const fd=new FormData();if(body)fd.append('body',body);
        const replyId=Number(window.__kedoReplyToMessageId||0);if(replyId)fd.append('reply_to_message_id',String(replyId));
        attached.forEach(f=>fd.append('files',f,f.name));
        await api('/api/messages/'+state.chatActiveUser,{method:'POST',body:fd});
        inp.value='';fitComposerInput();files.value='';clearTimeout(draftTimer);api('/api/messages/drafts/'+state.chatActiveUser,{method:'DELETE'}).catch(()=>{});
        window.__kedoReplyToMessageId=null;document.querySelector('.kOneReplyBar')?.remove();
        playKedoNotifySound('send');await window.__kOneRefresh?.(true);
      }catch(err){kedoAlert(err.message);}finally{send.disabled=false;inp.focus();}
    };

    const poll=async(force)=>{
      try{
        if(!alive()||!state.chatActiveUser)return;
        if(document.hidden&&!force)return;
        const d=await api('/api/messages/'+state.chatActiveUser);
        if(!alive())return;
        const b=$("kOneMessages");if(!b)return;
        const status=$("kOnePersonStatus");
        if(status){status.textContent=d.user?.is_online?'В сети':(d.user?.position||'Не в сети');status.classList.toggle('is-online',!!d.user?.is_online);}
        const near=(b.scrollHeight-b.scrollTop-b.clientHeight)<120,old=b.scrollTop;
        const sig=messagesSig(d.messages||[]);
        if(!force && sig===window.__kOneMsgSig){
          if(Date.now()-(window.__kOneContactsAt||0)>20000){
            window.__kOneContactsAt=Date.now();
            loadContacts();
          }
          return;
        }
        window.__kOneMsgSig=sig;
        b.innerHTML=messageList(d.messages||[]);
        if(force||near)window.__kOnePinIdx=0;
        refreshPinnedSlot(d.messages||[]);
        if(force||near)scrollChatToBottom(b);else b.scrollTop=old;
        if(!window.__kOnePinJumping)syncPinnedFromScroll(b);
        if(force||Date.now()-(window.__kOneContactsAt||0)>12000){
          window.__kOneContactsAt=Date.now();
          loadContacts();
        }
      }catch{}
    };
    window.__kOneRefresh=async force=>poll(force);
    clearInterval(state.kedoMessagesPoll);state.kedoMessagesPoll=setInterval(()=>poll(false),5000);
  }

  if(!window.__kedoMsgOverlayBound){
    window.__kedoMsgOverlayBound=true;
    document.addEventListener('click',e=>{
      if(!e.target.closest('.kOnePop,.kOneReactionMenu,.kOneReactTrig,[data-a="react"]')){
        window.__kedoCloseMsgOverlays?.();
      }
    });
    document.addEventListener('keydown',e=>{
      if(e.key==='Escape')window.__kedoCloseMsgOverlays?.();
    });
  }
  window.__kedoCloseMsgOverlays=closeOverlays;

  drawContacts();
  $("kOneContactSearch").oninput=drawContacts;
  $("kOneGlobalSearch").onclick=openGlobalMessageSearch;
  document.querySelectorAll('[data-kone-filter]').forEach(btn=>btn.onclick=()=>{
    filter=btn.dataset.koneFilter;
    document.querySelectorAll('[data-kone-filter]').forEach(x=>x.classList.toggle('active',x===btn));
    drawContacts();
  });
  $("kOneNew").onclick=()=>{
    const modal=document.createElement('div');modal.className='kOneCreateModal';modal.innerHTML=`<form class="kOneCreateCard"><h2>Новая группа</h2><label>Название<input name="title" required maxlength="255" placeholder="Например, Рабочая группа"></label><label>Описание<input name="description" maxlength="1000" placeholder="Необязательно"></label><div class="kOneCreateMembers"><b>Участники</b>${contacts.map(c=>`<label><input type="checkbox" name="member" value="${c.id}"> ${esc2(c.full_name)}</label>`).join('')}</div><div class="kOneCreateActions"><button type="button" class="secondary" data-close>Отмена</button><button class="primary">Создать группу</button></div></form>`;document.body.appendChild(modal);const close=()=>modal.remove();modal.querySelector('[data-close]').onclick=close;modal.onclick=e=>{if(e.target===modal)close();};modal.querySelector('form').onsubmit=async e=>{e.preventDefault();const form=e.currentTarget,ids=[...form.querySelectorAll('input[name="member"]:checked')].map(x=>Number(x.value));if(!ids.length)return kedoAlert('Выберите хотя бы одного участника.');try{const group=await api('/api/messages/groups',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title:form.elements.title.value,description:form.elements.description.value,member_ids:ids})});close();groupRows.push({...group,member_count:ids.length+1});state.chatActiveGroup=group.id;state.chatActiveUser=null;drawContacts();await openGroupChat();}catch(err){kedoAlert(err.message);}};
  };
  if(state.chatActiveUser){
    await openChat();
    if(!alive())return;
  } else if(state.chatActiveGroup){
    await openGroupChat();
    if(!alive())return;
  } else {
    const chat=$("kOneChat");
    if(chat)chat.innerHTML='<div class="kOneEmptyChat"><strong>Выберите диалог</strong><span>Список слева</span></div>';
  }
}



function ensureAdminFaqStyles(){
  if(document.getElementById("kedoAdminFaqStyles"))return;
  const st=document.createElement("style");st.id="kedoAdminFaqStyles";st.textContent=`
  .admin-faq-overlay{position:fixed;inset:0;background:rgba(18,35,52,.52);backdrop-filter:blur(3px);z-index:12000;display:grid;place-items:center;padding:20px;animation:kedoFaqFade .18s ease-out}
  .admin-faq-modal{width:min(1120px,96vw);height:min(820px,92vh);background:#fff;border:1px solid #d9e4ed;border-radius:18px;box-shadow:0 24px 70px rgba(20,48,75,.24);display:flex;flex-direction:column;overflow:hidden;animation:kedoFaqUp .2s ease-out}
  .admin-faq-head{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 22px;border-bottom:1px solid #e4ebf1;background:#fbfdff}
  .admin-faq-head h2{margin:2px 0 3px;color:#173f66;font-size:22px}
  .admin-faq-head .muted{font-size:12px}
  .admin-faq-layout{display:grid;grid-template-columns:220px minmax(0,1fr);min-height:0;flex:1}
  .admin-faq-nav{padding:14px;border-right:1px solid #e5edf3;background:#f7fafc;overflow:auto}
  .admin-faq-nav button{width:100%;text-align:left;border:1px solid transparent;background:transparent;border-radius:10px;padding:9px 10px;color:#36536e;cursor:pointer;font-size:12px;margin-bottom:5px;transition:.16s ease}
  .admin-faq-nav button:hover{background:#edf5fa;border-color:#dce8f0;transform:translateX(1px)}
  .admin-faq-nav button.active{background:#176fae;color:#fff;border-color:#176fae;box-shadow:0 4px 12px rgba(23,111,174,.16)}
  .admin-faq-content{padding:18px 22px 28px;overflow:auto;scroll-behavior:smooth}
  .admin-faq-search{position:sticky;top:0;z-index:2;background:#fff;padding-bottom:12px}
  .admin-faq-search input{width:100%;box-sizing:border-box}
  .admin-faq-section{scroll-margin-top:12px;margin-bottom:22px}
  .admin-faq-section h3{margin:0 0 8px;color:#173f66;font-size:17px}
  .admin-faq-section-intro{font-size:12px;color:#6d8094;margin-bottom:10px}
  .admin-faq-item{border:1px solid #dfe8ef;border-radius:11px;background:#fff;margin:7px 0;overflow:hidden;transition:border-color .16s,box-shadow .16s}
  .admin-faq-item[open]{border-color:#c8dbe8;box-shadow:0 4px 16px rgba(30,67,96,.06)}
  .admin-faq-item summary{cursor:pointer;list-style:none;padding:12px 14px;font-weight:700;font-size:12px;color:#203f5c;display:flex;align-items:center;gap:10px}
  .admin-faq-item summary::-webkit-details-marker{display:none}
  .admin-faq-item summary:before{content:'+';display:grid;place-items:center;width:20px;height:20px;border-radius:6px;background:#eef5fa;color:#1971ae;font-size:15px;flex:0 0 auto}
  .admin-faq-item[open] summary:before{content:'−';background:#e5f1f8}
  .admin-faq-answer{padding:0 14px 14px 44px;color:#526a81;font-size:12px;line-height:1.6}
  .admin-faq-answer p{margin:7px 0}
  .admin-faq-answer ol,.admin-faq-answer ul{margin:7px 0;padding-left:20px}
  .admin-faq-answer li{margin:4px 0}
  .admin-faq-path{display:inline-flex;align-items:center;gap:5px;background:#f3f7fa;border:1px solid #dfe9ef;border-radius:7px;padding:5px 8px;color:#2c5c7d;font-size:11px;margin:5px 0}
  .admin-faq-warning{background:#fff8e8;border:1px solid #f1dfae;border-radius:9px;padding:9px 10px;color:#765d1b;margin:8px 0}
  .admin-faq-good{background:#eef9f3;border:1px solid #cfe9d9;border-radius:9px;padding:9px 10px;color:#246443;margin:8px 0}
  .admin-faq-code{background:#162635;color:#dceaf5;border-radius:8px;padding:8px 10px;font-family:ui-monospace,Consolas,monospace;font-size:11px;overflow:auto}
  .admin-faq-empty{padding:30px;text-align:center;color:#788b9d}
  @keyframes kedoFaqFade{from{opacity:0}to{opacity:1}}
  @keyframes kedoFaqUp{from{opacity:0;transform:translateY(8px) scale(.99)}to{opacity:1;transform:none}}
  @media(max-width:760px){.admin-faq-modal{height:94vh}.admin-faq-layout{grid-template-columns:1fr}.admin-faq-nav{display:flex;gap:5px;overflow:auto;border-right:0;border-bottom:1px solid #e5edf3}.admin-faq-nav button{width:auto;white-space:nowrap;margin:0}.admin-faq-answer{padding-left:14px}.admin-faq-nav button.active{transform:none}}
  `;document.head.appendChild(st);
}

function openAdminFaq(){
  if(state.user?.role!=="admin")return;
  document.querySelectorAll(".admin-faq-overlay").forEach(x=>x.remove());
  ensureAdminFaqStyles();
  const sections=[
    {id:"start",name:"С чего начать",intro:"Главные действия администратора после входа.",items:[
      ["Что вообще делает администратор?",`Администратор отвечает за учетные записи, структуру организации, права доступа, документы и порядок работы системы. Не нужно постоянно менять настройки: если всё работает, ничего лишнего не трогайте.`,"Администрирование → Пользователи / Структура / Доступ"],
      ["Что проверить после изменения настроек?",`После любого важного изменения проверьте результат обычным пользовательским аккаунтом. Например: изменили доступ к документу — войдите под получателем и убедитесь, что документ виден или скрыт именно так, как задумано.`,"Проверка → обычный пользователь"],
      ["Что нельзя делать без необходимости?",`Не удаляйте документы, сотрудников, подразделения и филиалы ради «очистки». Сначала проверьте, не используются ли они в задачах, маршрутах, доступах и истории. Для сотрудников безопаснее блокировка: профиль попадает в карантин, а рабочие данные сохраняются.`]
    ]},
    {id:"accounts",name:"Учетные записи",intro:"Создание, изменение, блокировка и роли сотрудников.",items:[
      ["Как создать сотрудника?",`Откройте раздел «Администрирование» и блок «Новый сотрудник». Заполните ФИО, логин, пароль, должность, филиал и подразделение. Роль оставляйте минимально необходимой. После создания проверьте карточку сотрудника.`,"Администрирование → Новый сотрудник"],
      ["Как изменить сотрудника?",`В списке сотрудников нажмите «Изменить». Здесь можно исправить ФИО, должность, филиал и подразделение. После сохранения проверьте, что доступы соответствуют новой должности.`,"Администрирование → Сотрудники → Изменить"],
      ["Как назначить несколько ролей?",`Нажмите «Роли» у нужного сотрудника и отметьте нужные роли. Можно оставить одну роль или несколько. Итоговые права рассчитываются системой по назначенным ролям.`,"Сотрудники → Роли"],
      ["Как заблокировать сотрудника?",`Нажмите «Заблокировать». Сотрудник перестанет входить в систему, но его документы, сообщения, задачи и история не должны удаляться. Заблокированные профили находятся в карантине.`,"Сотрудники → Заблокировать"],
      ["Когда использовать «Удалить»?",`Удаление используйте только когда профиль действительно больше не нужен и это разрешено вашей внутренней процедурой. Удалённые профили скрываются из рабочего списка. Документы и история не должны удаляться вместе с учетной записью.`,"Сотрудники → Удалить"],
      ["Что делать с заявкой на аккаунт?",`Откройте заявки в административном разделе. Проверьте ФИО, должность, филиал и подразделение. Если всё верно — создайте учетную запись на основании заявки. Если данные неверны — отклоните заявку с понятной причиной.`]
    ]},
    {id:"rbac",name:"Роли и права",intro:"Как не выдать лишний доступ.",items:[
      ["Как изменить уровни доступа роли?",`Нажмите отдельную кнопку «Настроить уровни доступа». Для каждой роли можно выбрать: «Нет доступа», «Просмотр» или «Управление». После сохранения проверьте результат на тестовом пользователе.`,"Администрирование → Уровни доступа ролей"],
      ["Можно ли выдать админские права через разрешение роли?",`Нет. Администратор — системная роль. Её нельзя заменить отдельным разрешением «управление». Если человеку действительно нужна админская роль, назначайте её отдельно и осознанно.`,"Роли → Администратор"],
      ["Что выбрать: просмотр или управление?",`Если человеку нужно только читать документы и данные — «Просмотр». Если он должен создавать, изменять или управлять объектами — «Управление». Не выдавайте управление «на всякий случай».`],
      ["Что делать, если сотрудник получил две роли?",`Проверьте обе роли и убедитесь, что комбинация действительно нужна. Если одна роль больше не нужна — откройте «Роли» и снимите её, оставив необходимую.`]
    ]},
    {id:"structure",name:"Филиалы и подразделения",intro:"Организационная структура, Демо-филиал и другие группы.",items:[
      ["Как создать филиал?",`В блоке «Филиалы» нажмите «Добавить филиал», укажите название и описание, затем выберите подразделения, которые относятся к филиалу. После создания откройте филиал и проверьте состав.`,"Администрирование → Филиалы → Добавить филиал"],
      ["Как изменить состав филиала?",`Откройте нужный филиал кнопкой с его названием. Там можно добавлять, удалять и переименовывать подразделения в пределах доступных действий. После изменения проверьте документы и задачи, где этот филиал используется как получатель.`,"Филиалы → Открыть филиал"],
      ["Как удалить филиал?",`Перед удалением убедитесь, что он не нужен для действующих маршрутов и доступов. Если система не разрешает удаление, сначала устраните связанные объекты или обратитесь к администратору более высокого уровня по вашей внутренней процедуре.`],
      ["Что такое «Основное здание / без филиала»?",`Это сотрудники и подразделения основного здания, которым не нужно присваивать отдельный филиал. В заявке на аккаунт филиал можно не выбирать — тогда используется основное здание.`]
    ]},
    {id:"documents",name:"Документы",intro:"Загрузка, доступ, маршруты и контроль действий.",items:[
      ["Как правильно загрузить документ?",`Откройте «Документы», нажмите загрузку и заполните обязательные поля. Сначала выберите получателей и маршрут, затем прикрепите PDF и отправьте документ. Перед отправкой проверьте название, номер, дату и получателей.`,"Документы → Загрузка документа"],
      ["Кому можно отправить документ?",`Получателей можно задавать через филиал, подразделение или отдельных сотрудников. Если выбран филиал, при необходимости дополнительно ограничьте его конкретными подразделениями или людьми. Если маршрут должен выполнить конкретный человек — выберите его явно.`],
      ["Как выбрать действие получателя?",`В маршруте выбирается одно основное действие: ознакомление, согласование или подписание. От этого зависит кнопка, которую увидит получатель. Не назначайте человеку согласование или подпись, если это не входит в его задачу.`],
      ["Что делать, если документ отправлен не тому человеку?",`Не пытайтесь обходить назначенный маршрут. Остановите неправильный маршрут, исправьте получателей и отправьте документ заново по правильной схеме. Важные изменения должны оставаться в аудите.`],
      ["Как посмотреть PDF до работы с документом?",`Используйте кнопку «Предпросмотр». PDF открывается внутри окна сайта. Кнопка «PDF» используется для скачивания файла.`],
      ["Можно ли удалить документ?",`Удаление ограничено правами администратора. Перед удалением проверьте историю и связанные действия. Если документ нужен для подтверждения работы организации, лучше использовать архивирование, а не физическое удаление.`]
    ]},
    {id:"tasks",name:"Задачи",intro:"Постановка, выполнение и подтверждение.",items:[
      ["Как поставить задачу?",`В разделе «Задачи» нажмите создание. Получателем может быть конкретный сотрудник или подразделение. Для филиала можно выбрать нужные подразделения или отдельных сотрудников. Укажите понятное название, описание и срок.`,"Задачи → Создать задачу"],
      ["Что происходит после «Выполнено»?",`Исполнитель отмечает задачу выполненной. Постановщику приходит уведомление, а задача появляется в блоке, где требуется подтверждение. После подтверждения она уходит из активного списка в архив.`],
      ["Почему архив задач скрыт?",`Архив специально свернут, чтобы рабочий экран не захламлялся. Разверните архив, если нужно посмотреть старую задачу или проверить историю.`],
      ["Что делать, если задача назначена не тому?",`Не подтверждайте чужое выполнение и не меняйте исполнителя вручную без необходимости. Исправьте назначение или создайте корректную задачу, чтобы в аудите оставалась понятная история.`]
    ]},
    {id:"knowledge",name:"База знаний",intro:"Материалы и доступ к ним.",items:[
      ["Как добавить материал?",`В «Базе знаний» создайте материал, укажите понятный заголовок, категорию и текст. Если есть файл, прикрепите его. Затем настройте доступ, если материал не должен быть виден всем.`],
      ["Как дать материал только демо-филиалу?",`Используйте доступ по филиалу/группе. После выбора демо-филиала можно дополнительно ограничить получателей подразделениями или сотрудниками, если это требуется.`],
      ["Что делать, если сотрудник не видит материал?",`Проверьте правила доступа: филиал, подразделение, роль и конкретный сотрудник. Помните, что ограничение доступа может быть задано несколькими правилами.`]
    ]},
    {id:"notifications",name:"Уведомления",intro:"Что приходит сотрудникам и где искать историю.",items:[
      ["Почему уведомление не пришло?",`Сначала проверьте, создалось ли событие и назначен ли получатель. Затем проверьте страницу уведомлений и журнал аудита. Если уведомление есть в системе, но не видно в браузере, обновите страницу и проверьте realtime-соединение.`],
      ["Где старые уведомления?",`Колокольчик показывает актуальные непрочитанные события. Прочитанные перемещаются в архив уведомлений. Архив хранится ограниченное время — не более 7 дней.`],
      ["Почему уведомление прочитано, но снова показывается?",`Проверьте, не создаётся ли новое событие для того же действия. В аудите можно увидеть, какое именно событие создало уведомление.`]
    ]},
    {id:"delegations",name:"Замещения",intro:"Временная передача рабочих действий на время отсутствия.",items:[
      ["Как создать замещение?",`Откройте «Сервисный центр» → «Замещение». Выберите, кого заменяют, кто заменяет, дату начала и окончания и при необходимости причину. Замещение не выдаёт заменяющему администраторские права.`,"Администрирование → Сервисный центр → Замещение"],
      ["Как отменить замещение раньше срока?",`В списке замещений найдите активное замещение и нажмите «Отменить». Это удобно, если сотрудник вернулся раньше отпуска или больничного.`],
      ["Когда использовать удаление замещения?",`Удаляйте замещение только если запись больше не нужна как организационная история. Для действующего замещения сначала используйте «Отменить», а не удаление.`]
    ]},
    {id:"audit",name:"Журнал аудита",intro:"Как понять, кто и что сделал.",items:[
      ["Как найти нужное событие?",`Используйте фильтры: документы, вход и безопасность, учетные записи, задачи, доступы, замещения или система. Это быстрее, чем просматривать весь журнал.`,"Администрирование → Журнал аудита"],
      ["Что смотреть в аудите при ошибке?",`Сначала найдите событие по времени. Затем откройте «Подробнее». Смотрите категорию, действие, пользователя, дату и технические данные ошибки. Не удаляйте запись аудита ради исправления отображения.`],
      ["Почему время и дата важны?",`Аудит нужен для восстановления последовательности событий. Поэтому всегда проверяйте системное время сервера и браузера, особенно при спорных ситуациях.`]
    ]},
    {id:"security",name:"Безопасность",intro:"Минимальный набор правил администратора.",items:[
      ["Что делать с паролями?",`Никому не передавайте пароль администратора. Не храните пароли в заметках, чатах или файлах проекта. Если пароль известен постороннему — сразу смените его.`],
      ["Что делать при подозрительном входе?",`Заблокируйте подозрительную учетную запись, сохраните время события и проверьте журнал аудита. После этого смените пароль и проверьте активные действия пользователя.`],
      ["Почему нельзя давать всем роль администратора?",`Администратор может управлять критическими настройками. Чем больше администраторов, тем больше риск ошибки или компрометации. Используйте минимально необходимые права.`],
      ["Что делать при подозрении на утечку?",`Не удаляйте следы и не очищайте журнал. Ограничьте доступ к учетной записи, зафиксируйте время и обстоятельства, сохраните логи и действуйте по внутреннему регламенту безопасности.`],
      ["Что важно помнить про Burp и перехват трафика?",`HTTPS защищает трафик от обычного сетевого прослушивания, но не делает скомпрометированный компьютер безопасным. Администратор должен защищать учетные записи, сервер, браузерные ключи ЭП, cookies и права доступа.`]
    ]},
    {id:"troubleshooting",name:"Если что-то сломалось",intro:"Короткий алгоритм вместо хаотичных изменений.",items:[
      ["На странице «Внутренняя ошибка сервера». Что делать?",`Не нажимайте одну и ту же кнопку десятки раз. Запишите время, страницу и действие, после которого появилась ошибка. Затем посмотрите журнал сервера и журнал аудита. Для базы данных особенно важны код PostgreSQL и имя функции/таблицы.`,"Сначала: время → действие → серверный лог → аудит"],
      ["Кнопка сработала, но показала ошибку",`Проверьте фактическое состояние объекта. Например, если при «Ознакомлен» появилась ошибка, откройте документ и посмотрите, изменился ли статус. Не повторяйте действие до проверки — иначе можно получить дубли событий.`],
      ["После обновления что-то перестало работать",`Сначала очистите кэш браузера через Ctrl+F5. Затем перезапустите сервис и проверьте миграции базы. Если проблема осталась, не меняйте схему базы вручную без резервной копии.`],
      ["Что обязательно сообщить разработчику?",`Страница, кнопка, точное время, пользователь, объект (например номер документа), текст ошибки и фрагмент серверного лога. Скриншот тоже полезен. Никогда не отправляйте пароли, cookies, приватные ключи ЭП или секреты.`]
    ]}
  ];
  const overlay=document.createElement("div");overlay.className="admin-faq-overlay";overlay.innerHTML=`<div class="admin-faq-modal" role="dialog" aria-modal="true" aria-labelledby="adminFaqTitle">
    <div class="admin-faq-head"><div><div class="eyebrow">Только для администратора</div><h2 id="adminFaqTitle">FAQ администратора</h2><div class="muted">Подробная инструкция по работе с Internal KEDO простым языком.</div></div><button type="button" class="secondary" id="adminFaqClose">Закрыть</button></div>
    <div class="admin-faq-layout"><nav class="admin-faq-nav" id="adminFaqNav">${sections.map((x,i)=>`<button type="button" data-faq-section="${x.id}" class="${i===0?'active':''}">${esc(x.name)}</button>`).join('')}</nav><div class="admin-faq-content" id="adminFaqContent"><div class="admin-faq-search"><input id="adminFaqSearch" placeholder="Поиск по инструкции: сотрудники, документы, права, замещения..." autocomplete="off"></div>${sections.map(x=>`<section class="admin-faq-section" id="adminFaq-${x.id}"><h3>${esc(x.name)}</h3><div class="admin-faq-section-intro">${esc(x.intro)}</div>${x.items.map(([q,a,path])=>`<details class="admin-faq-item" data-faq-text="${esc((q+' '+a+' '+(path||'')).toLowerCase())}"><summary>${esc(q)}</summary><div class="admin-faq-answer"><p>${esc(a)}</p>${path?`<div class="admin-faq-path">📍 ${esc(path)}</div>`:''}</div></details>`).join('')}</section>`).join('')}</div></div></div>`;
  document.body.appendChild(overlay);
  const close=()=>overlay.remove();overlay.querySelector('#adminFaqClose').onclick=close;overlay.addEventListener('click',e=>{if(e.target===overlay)close();});
  const content=overlay.querySelector('#adminFaqContent');
  overlay.querySelectorAll('[data-faq-section]').forEach(btn=>btn.onclick=()=>{overlay.querySelectorAll('[data-faq-section]').forEach(x=>x.classList.toggle('active',x===btn));overlay.querySelector('#adminFaq-'+btn.dataset.faqSection)?.scrollIntoView({behavior:'smooth',block:'start'});});
  const search=overlay.querySelector('#adminFaqSearch');search.oninput=()=>{const q=search.value.trim().toLowerCase();let visible=0;overlay.querySelectorAll('.admin-faq-item').forEach(item=>{const ok=!q||item.dataset.faqText.includes(q);item.style.display=ok?'':'none';if(ok)visible++;});let empty=overlay.querySelector('.admin-faq-empty');if(!visible){if(!empty){empty=document.createElement('div');empty.className='admin-faq-empty';empty.textContent='По этому запросу ничего не найдено.';content.appendChild(empty);}}else empty?.remove();};
  document.addEventListener('keydown',function escFaq(e){if(e.key==='Escape'){close();document.removeEventListener('keydown',escFaq);}}, {once:true});
}

async function renderAdminVersions(){
  if(state.user?.role!=="admin")return setPage("dashboard");
  const [buildInfo,history]=await Promise.all([loadBuildInfo(),api("/api/admin-utils/version-history")]);
  const rows=Array.isArray(history)?history:[];
  const historyHtml=rows.length?rows.map((row,index)=>`<div class="admin-version-row"><span class="admin-version-index">${rows.length-index}</span><div class="admin-version-main"><div><strong>${esc(row.version||"Неизвестная версия")}</strong><code>${esc(String(row.commit||"—").slice(0,8))}</code></div><small>${formatKedoDateTime(row.deployed_at)}${row.status&&row.status!=="success"?` · ${esc(row.status)}`:" · Успешно установлена"}</small></div></div>`).join(""):'<div class="empty">История обновлений пока пуста.</div>';
  $("main").innerHTML=`<div class="admin-page-top"><h1 class="page-title">Изменения версий</h1><div class="admin-build-info"><span>Текущая версия</span><strong>${esc(buildInfo.version||fallbackBuildInfo.version)}</strong><code>${esc(String(buildInfo.commit||fallbackBuildInfo.commit).slice(0,8))}</code></div></div>
  <div class="admin-tabs"><button class="secondary" data-action="setPage" data-page="admin">Пользователи</button><button class="secondary" data-action="openAdminAccess">Права доступа</button><button class="primary" data-action="openAdminVersions">Изменения версий</button></div>
  <section class="card admin-version-history"><div class="admin-section-head"><div><div class="eyebrow">ЖУРНАЛ ОБНОВЛЕНИЙ</div><h2 style="margin:0">История установленных сборок</h2><div class="muted">Дата и время берутся с сервера. Коммит показывает, какие изменения сейчас установлены.</div></div><span class="admin-section-count">${rows.length}</span></div><div class="admin-version-list">${historyHtml}</div></section>`;
}

async function renderAdmin(){
if(state.user.role!=="admin")return setPage("dashboard");
 const [buildInfo,settled]=await Promise.all([loadBuildInfo(),Promise.allSettled([api("/api/admin/employees"),api("/api/admin/departments"),api("/api/admin/logs?page=1&limit=200"),api("/api/account-requests"),api("/api/admin/org-groups"),api("/api/admin/employees/quarantine"),api("/api/admin/role-permissions"),api("/api/admin/security/ip-blocks"),api("/api/my-branch/tickets?scope=all"),api("/api/my-branch/tickets?scope=archive"),api("/api/account-requests?archive=true"),api("/api/security-center/overview")])]);
 const [employeesR,depsR,logsR,accountRequestsR,orgGroupsR,quarantineR,roleAccessR,ipBlocksR,ticketsR,archivedTicketsR,archivedAccountRequestsR,securityOverviewR]=settled;
const employees=employeesR.status==="fulfilled"?employeesR.value:[];
const deps=depsR.status==="fulfilled"?depsR.value:[];
 const logsPage=logsR.status==="fulfilled"?logsR.value:{};
 const logs=Array.isArray(logsPage)?logsPage:(Array.isArray(logsPage?.items)?logsPage.items:[]);
 const logsTotal=Number(logsPage?.total)||logs.length;
const accountRequests=accountRequestsR.status==="fulfilled"?accountRequestsR.value:[];
const orgGroups=orgGroupsR.status==="fulfilled"?orgGroupsR.value:[];
const quarantine=quarantineR.status==="fulfilled"?quarantineR.value:[];
const roleAccess=roleAccessR.status==="fulfilled"?roleAccessR.value:null;
const ipBlocks=ipBlocksR.status==="fulfilled"?ipBlocksR.value:[];
const tickets=ticketsR.status==="fulfilled"?ticketsR.value:[];
const archivedTickets=archivedTicketsR.status==="fulfilled"?archivedTicketsR.value:[];
 const archivedAccountRequests=archivedAccountRequestsR.status==="fulfilled"?archivedAccountRequestsR.value:[];
 const securityOverview=securityOverviewR.status==="fulfilled"?securityOverviewR.value:{};
 const onlineCount=Number(securityOverview.online_users||0);
 const adminLoadErrors=settled.map((x,i)=>x.status==="rejected"?`${["Сотрудники","Подразделения","Аудит","Заявки","Филиалы","Карантин","Права доступа","IP-блоки","Тикеты","Архив тикетов","Архив заявок","Онлайн"][i]}: ${x.reason?.message||"ошибка"}`:null).filter(Boolean);
const availableRoleRows=roleAccess?.roles||[{code:"employee",name:"Сотрудник",rank:10}];
const roleOptionsHtml=availableRoleRows.filter(r=>r.code!=="new_employee").map(r=>`<option value="${esc(r.code)}">${esc(r.name)}</option>`).join("");
const adminImpersonationCandidates=employees.filter(e=>e.is_active&&!e.deleted_at&&Number(e.id)!==Number(state.user?.id));
state.adminImpersonationCandidates=adminImpersonationCandidates;

const activeCount=employees.filter(e=>e.is_active).length;
const blockedCount=employees.filter(e=>!e.is_active).length;
const deletedCount=0;
const quarantineCount=quarantine.length;
const departmentById=new Map(deps.map(d=>[String(d.id),d]));
const linkedDepartmentIds=new Set();
const departmentRow=d=>`<tr data-dept-name="${esc(String(d.name||"").toLowerCase())}"><td>${esc(d.name)}</td><td>${Number(d.employee_count)||0}</td><td><button type="button" class="danger-outline admin-dept-del" data-action="deleteDepartment" data-id="${d.id}">Удалить</button></td></tr>`;
const departmentGroupRows=orgGroups.map(g=>{
  const groupDeps=(Array.isArray(g.departments)?g.departments:[]).map(d=>departmentById.get(String(d.id))||{...d,employee_count:0});
  groupDeps.forEach(d=>linkedDepartmentIds.add(String(d.id)));
  return `<tr class="admin-department-group-row" data-dept-group="${esc(String(g.name||""))}"><th colspan="3">🏢 ${esc(g.name)} <small>${groupDeps.length} подразделений</small></th></tr>${groupDeps.length?groupDeps.map(departmentRow).join(""):`<tr class="admin-department-empty"><td colspan="3">В этом филиале пока нет подразделений.</td></tr>`}`;
}).join("");
const unassignedDepartments=deps.filter(d=>!linkedDepartmentIds.has(String(d.id)));
const departmentRowsHtml=`${departmentGroupRows}${unassignedDepartments.length?`<tr class="admin-department-group-row" data-dept-group="Без филиала"><th colspan="3">⌂ Без филиала <small>${unassignedDepartments.length} подразделений</small></th></tr>${unassignedDepartments.map(departmentRow).join("")}`:""}`||`<tr class="admin-department-empty"><td colspan="3">Подразделений пока нет.</td></tr>`;
const adminTicketRow=(t,archived=false)=>`<div class="admin-ticket-row"><div><div class="admin-ticket-meta">№${t.id} · ${esc(t.branch_name||"Без филиала")} · создана ${formatKedoDateTime(t.created_at)}${t.updated_at?` · обновлена ${formatKedoDateTime(t.updated_at)}`:""}</div><strong>${esc(t.title)}</strong><div class="muted">${esc(t.description||"Подробности не указаны.")}</div><small>${esc(t.creator_name||"Неизвестный автор")} · ${esc(branchTicketCategory(t.category))} · приоритет: ${t.priority==="HIGH"?"высокий":t.priority==="LOW"?"низкий":"обычный"}${t.resolved_by_name?` · закрыл: ${esc(t.resolved_by_name)}`:""}</small></div>${archived?`<div class="admin-ticket-actions"><span class="branch-ticket-status ${String(t.status||"").toLowerCase()}">${esc(branchTicketStatus(t.status))}</span><button class="secondary" data-action="archiveBranchTicket" data-id="${t.id}" data-archived="false">Вернуть</button></div>`:`<div class="admin-ticket-actions"><select data-admin-ticket-status="${t.id}" data-current-status="${esc(t.status||"OPEN")}" aria-label="Статус заявки"><option value="OPEN" ${t.status==="OPEN"?"selected":""}>Новая</option><option value="IN_PROGRESS" ${t.status==="IN_PROGRESS"?"selected":""}>В работе</option><option value="RESOLVED" ${t.status==="RESOLVED"?"selected":""}>Решена</option><option value="CLOSED" ${t.status==="CLOSED"?"selected":""}>Закрыта</option></select><button class="danger-outline" data-action="archiveBranchTicket" data-id="${t.id}" data-archived="true">В архив</button></div>`}</div>`;
const adminAccountRequestRow=(r,archived=false)=>`<div class="account-request-row ${r.status==="PENDING"&&!archived?"pending":""}"><div class="account-request-main"><div class="request-id">Заявка №${r.id} · ${formatKedoDateTime(r.created_at)}</div><strong>${esc(r.full_name)}</strong><div>${esc(r.position)}${r.org_group_name?` · филиал: ${esc(r.org_group_name)}`:" · основное здание"}${r.department_name?` · ${esc(r.department_name)}`:""}</div>${r.contact?`<div class="muted">Контакт: ${esc(r.contact)}</div>`:""}${r.comment?`<div class="muted">Комментарий: ${esc(r.comment)}</div>`:""}<div class="request-status">${r.status==="PENDING"?"Ожидает обработки":r.status==="APPROVED"?"Обработана":"Отклонена"}${r.created_user_name?` · аккаунт: ${esc(r.created_user_name)}`:""}${archived?" · в архиве":""}</div></div><div class="doc-actions">${!archived&&r.status==="PENDING"?`<button class="primary" data-action="createAccountFromRequest" data-id="${r.id}">Создать аккаунт</button><button class="danger-outline" data-action="rejectAccountRequest" data-id="${r.id}">Отклонить</button>`:!archived?`<span class="muted">Обработана</span>`:""}${archived?`<button class="secondary" data-action="archiveAccountRequest" data-id="${r.id}" data-archived="false">Вернуть</button>`:`<button class="danger-outline" data-action="archiveAccountRequest" data-id="${r.id}" data-archived="true">В архив</button>`}</div></div>`;

$("main").innerHTML=`<div class="admin-page-top"><h1 class="page-title">Администрирование</h1><div class="admin-build-info"><span>Текущая версия</span><strong>${esc(buildInfo.version||fallbackBuildInfo.version)}</strong><code>${esc(String(buildInfo.commit||fallbackBuildInfo.commit).slice(0,8))}</code></div></div>${adminLoadErrors.length?`<div class="admin-load-warning"><strong>Часть данных не загрузилась.</strong><span>${esc(adminLoadErrors.join(" · "))}</span></div>`:""}
<div class="admin-tabs"><button class="primary" data-action="setPage" data-page="admin">Пользователи</button><button class="secondary" data-action="openAdminAccess">Права доступа</button><button class="secondary" data-action="openAdminVersions">Изменения версий</button></div>
<div class="admin-tabs admin-archive-tabs"><button class="secondary" data-action="openAdminArchiveTab" data-target="branchTicketsArchive">Архив заявок филиалов <span>${archivedTickets.length}</span></button><button class="secondary" data-action="openAdminArchiveTab" data-target="accountRequestsArchive">Архив заявок на аккаунты <span>${archivedAccountRequests.length}</span></button></div>

 <div class="admin-stats">
   <div class="admin-stat admin-stat-online"><b>${onlineCount}</b><span>Онлайн</span><small>сейчас в системе</small></div>
   <div class="admin-stat"><b>${activeCount}</b><span>Количество сотрудников</span><small>активные учётные записи</small></div>
  <div class="admin-stat"><b>${blockedCount}</b><span>Заблокированных</span></div>
  <div class="admin-stat"><b>${quarantineCount}</b><span>В карантине</span></div>
</div>

<details class="card admin-tickets-card admin-collapsible">
  <summary class="admin-collapsible-summary"><span><strong>Заявки филиалов</strong><small>Обращения руководителей: удаление учётных записей, проблемы и организация работы.</small></span><span class="request-count">${tickets.filter(t=>!['RESOLVED','CLOSED'].includes(String(t.status).toUpperCase())).length} новых</span></summary>
  <div class="admin-collapsible-body">
  ${tickets.length?`<div class="admin-ticket-list">${tickets.map(t=>adminTicketRow(t)).join("")}</div>`:'<div class="empty">Активных заявок филиалов пока нет.</div>'}
  </div>
</details>

<details id="branchTicketsArchive" class="card admin-requests-card admin-collapsible">
  <summary class="admin-collapsible-summary"><span><strong>Архив заявок филиалов</strong><small>Закрытые и убранные из рабочего списка обращения. Их можно вернуть.</small></span><span class="request-count">${archivedTickets.length}</span></summary>
  <div class="admin-collapsible-body">${archivedTickets.length?`<div class="admin-ticket-list">${archivedTickets.map(t=>adminTicketRow(t,true)).join("")}</div>`:'<div class="empty">Архив заявок филиалов пуст.</div>'}</div>
</details>

<details id="accountRequestsArchive" class="card admin-requests-card admin-collapsible">
  <summary class="admin-collapsible-summary">
    <span><strong>Заявки на создание аккаунта</strong><small>Заявки из окна входа. Только администратор создаёт учетную запись.</small></span>
    <span class="request-count">${accountRequests.filter(r=>r.status==="PENDING").length} новых</span>
  </summary>
  <div class="admin-collapsible-body">
  ${accountRequests.length?accountRequests.map(r=>adminAccountRequestRow(r)).join(""):'<div class="empty">Активных заявок пока нет.</div>'}
  </div>
</details>

<details class="card admin-requests-card admin-collapsible">
  <summary class="admin-collapsible-summary"><span><strong>Архив заявок на создание аккаунтов</strong><small>Скрытые заявки с сохранением всей истории и возможности восстановления.</small></span><span class="request-count">${archivedAccountRequests.length}</span></summary>
  <div class="admin-collapsible-body">${archivedAccountRequests.length?archivedAccountRequests.map(r=>adminAccountRequestRow(r,true)).join(""):'<div class="empty">Архив заявок на создание аккаунтов пуст.</div>'}</div>
</details>

<details class="card admin-requests-card admin-collapsible admin-quarantine-card" style="margin-bottom:18px">
  <summary class="admin-collapsible-summary"><span><strong>Карантин учетных записей</strong><small>Заблокированные пользователи (включая администраторов). Автокарантин — после 8 неверных паролей за 15 мин.</small></span><span class="request-count">${quarantineCount}</span></summary>
  <div class="admin-collapsible-body">
  ${quarantine.length?`<div class="quarantine-list">${quarantine.map(e=>{const roleLabel=e.role==="admin"?"Администратор":e.role==="moderator"?"Модератор":e.role==="director"?"Директор":e.role==="department_head"?"Руководитель":"Сотрудник";return `<div class="quarantine-row"><div><strong>${esc(e.full_name)}</strong>${e.role==="admin"?` <span class="muted" style="color:#a05a5a;font-weight:700">· ${roleLabel}</span>`:` <span class="muted">· ${roleLabel}</span>`}<div class="muted">${esc(e.login)} · ${esc(e.position||"Без должности")}${e.department_name?` · ${esc(e.department_name)}`:""}</div>${e.quarantine_reason?`<div class="muted" style="margin-top:4px;color:#a05a5a">${esc(e.quarantine_reason)}${e.quarantined_at?` · ${esc(String(e.quarantined_at).replace("T"," ").slice(0,16))}`:""}</div>`:""}</div><button class="primary" data-action="toggleEmployee" data-id="${e.id}" data-active="true">Вернуть из карантина</button></div>`;}).join("")}</div>`:'<div class="empty">Карантин пуст.</div>'}
  </div>
</details>

<details class="card admin-requests-card admin-collapsible" style="margin-bottom:18px">
  <summary class="admin-collapsible-summary"><span><strong>Блокировки IP</strong><small>Автоблок при массовых неудачных входах или признаках сканера (Burp/ZAP и т.п.).</small></span><span class="request-count">${ipBlocks.length}</span></summary>
  <div class="admin-collapsible-body">
  ${ipBlocks.length?`<div class="quarantine-list">${ipBlocks.map(b=>`<div class="quarantine-row"><div><strong>${esc(b.ip)}</strong><div class="muted">${esc(b.reason||"Блок")}${b.blocked_until?` · до ${esc(String(b.blocked_until).replace("T"," ").slice(0,16))}`:""}</div></div><button class="secondary" data-action="unblockIp" data-id="${b.id}">Снять блок</button></div>`).join("")}</div>`:'<div class="empty">Активных IP-блоков нет.</div>'}
  </div>
</details>

<div class="admin-quick-grid">
  <section class="card admin-quick-card"><div class="admin-quick-icon">＋</div><div class="admin-quick-copy"><div class="eyebrow">УЧЕТНЫЕ ЗАПИСИ</div><h2>Новый сотрудник</h2><p class="muted">Создайте аккаунт и сразу назначьте филиал, подразделение, руководителя и роль.</p></div><button type="button" class="primary" id="openEmployeeCreate">Открыть форму</button></section>
  <section class="card admin-quick-card"><div class="admin-quick-icon admin-quick-icon-blue">▦</div><div class="admin-quick-copy"><div class="eyebrow">ОРГАНИЗАЦИЯ</div><h2>Подразделения</h2><p class="muted">${deps.length} подразделений в системе, распределённых по филиалам.</p></div><button type="button" class="secondary" id="openAdminDepartments">Открыть справочник</button></section>
</div>
<template id="adminEmployeeCreateTemplate">
  <div class="admin-create-form">
    <section class="admin-create-section"><div class="admin-create-section-head"><span class="admin-create-section-number">01</span><div><strong>Учётная запись</strong><small>Данные для входа сотрудника</small></div></div><div class="admin-create-grid"><label><span>ФИО <i class="required-mark">обязательно</i></span><input id="eName" placeholder="Например, Иванов Иван Иванович" autocomplete="name"></label><label><span>Логин <i class="required-mark">обязательно</i></span><input id="eLogin" placeholder="Например, ivanov_i" autocomplete="username"></label></div></section>
    <section class="admin-create-section"><div class="admin-create-section-head"><span class="admin-create-section-number">02</span><div><strong>Доступ</strong><small>Пароль и рабочая роль</small></div></div><div class="admin-create-grid"><label><span>Пароль <i class="required-mark">обязательно</i></span><input id="ePassword" type="password" minlength="8" placeholder="Минимум 8 символов" autocomplete="new-password"></label><label><span>Роль <i class="required-mark">обязательно</i></span><select id="eRole"><option value="new_employee">Учебный аккаунт</option>${roleOptionsHtml}</select></label><label class="admin-create-field-wide" id="eTrainingExitPasswordRow"><span>Пароль выхода из учебного режима <i class="required-mark">для учебного аккаунта</i></span><input id="eTrainingExitPassword" type="password" minlength="8" autocomplete="new-password" placeholder="Отдельный пароль, минимум 8 символов"><small class="muted">Нужен только для учебного аккаунта.</small></label></div></section>
    <section class="admin-create-section"><div class="admin-create-section-head"><span class="admin-create-section-number">03</span><div><strong>Рабочие данные</strong><small>Привязка к структуре организации</small></div></div><div class="admin-create-grid"><label><span>Должность <i class="optional-mark">необязательно</i></span><input id="ePosition" placeholder="Например, менеджер"></label><label><span>Филиал <i class="optional-mark">необязательно</i></span><select id="eGroup"><option value="">Основное здание / без филиала</option>${orgGroups.map(g=>`<option value="${g.id}">${esc(g.name)}</option>`).join("")}</select></label><label><span>Подразделение <i class="optional-mark">необязательно</i></span><select id="eDep"><option value="">Без подразделения</option>${deps.map(d=>`<option value="${d.id}">${esc(d.name)}</option>`).join("")}</select></label><label><span>Непосредственный руководитель <i class="optional-mark">необязательно</i></span><select id="eSupervisor"><option value="">Не назначен</option>${employees.filter(e=>e.is_active).map(e=>`<option value="${e.id}">${esc(e.full_name)}${e.position?` · ${esc(e.position)}`:""}</option>`).join("")}</select><small class="muted">Список уточняется после выбора филиала.</small></label></div></section>
    <div class="admin-edit-actions"><button type="button" class="secondary" data-admin-modal-close>Отмена</button><button type="button" class="primary" data-action="createEmployee">Создать сотрудника</button></div><p id="eMsg" class="muted"></p>
  </div>
</template>
<template id="adminDepartmentsTemplate">
  <div class="admin-departments-create"><input id="dName" placeholder="Название нового подразделения"><button type="button" class="secondary" data-action="createDepartment">Добавить без филиала</button></div>
  <div class="admin-departments-panel" id="adminDepartmentsPanel"><div class="admin-departments-toolbar"><input type="search" id="adminDeptSearch" placeholder="Поиск подразделения…" autocomplete="off"><span class="admin-departments-count" id="adminDeptCount">${deps.length}</span></div><div class="admin-departments-table-wrap"><table class="admin-departments-table"><thead><tr><th>Название</th><th>Сотрудников</th><th></th></tr></thead><tbody id="adminDepartmentsBody">${departmentRowsHtml}</tbody></table></div><p class="muted admin-departments-hint">Новые подразделения без филиала можно подключить через карточку нужного филиала.</p></div>
</template>

<section class="card admin-org-groups" style="margin-top:18px">
  <div class="admin-section-head">
    <div><div class="eyebrow">Структура</div><h2 style="margin:0">Филиалы</h2><div class="muted">Филиал объединяет подразделения и может использоваться как единый получатель.</div></div>
    <div class="admin-org-head-actions"><span class="admin-section-count">${orgGroups.length}</span><button class="primary" data-action="openOrgGroupCreate">＋ Добавить филиал</button></div>
  </div>
  <div class="org-group-buttons">
    ${orgGroups.length?orgGroups.map(g=>`<div class="org-group-button" data-action="editOrgGroup" data-id="${g.id}">
      <span class="org-group-button-main"><span class="org-group-button-title">${esc(g.name||("Филиал №"+g.id))}</span><span class="org-group-button-meta">${Array.isArray(g.departments)?g.departments.length:0} подразделений${g.head_name?` · руководитель: ${esc(g.head_name)}`:""}</span></span>
      <span class="org-group-button-actions"><button type="button" class="primary" data-action="openAdminBranch" data-id="${g.id}">Управление филиалом</button><button type="button" class="secondary" data-action="editOrgGroup" data-id="${g.id}">Настройки</button><button type="button" class="danger-outline" data-action="deleteOrgGroup" data-id="${g.id}">Удалить</button></span>
    </div>`).join(''):'<div class="empty">Филиалов пока нет.</div>'}
  </div>
</section>

<section class="card" style="margin-top:18px"><div class="admin-section-head" style="align-items:center"><div><h2 style="margin:0">Сервисный центр</h2><div class="muted">Корзина документов, шаблоны и временное замещение сотрудников.</div></div><button class="secondary" data-action="openAdminTools">Открыть</button></div></section>

<section class="card" style="margin-top:18px"><div class="admin-section-head" style="align-items:center"><div><div class="eyebrow">Инструкция</div><h2 style="margin:0">FAQ администратора</h2><div class="muted">Подробно: сотрудники, роли, филиалы, документы, задачи, замещения, аудит и безопасность.</div></div><button class="primary" type="button" data-action="openAdminFaq">📘 Открыть FAQ</button></div></section>

<section class="card admin-role-access-launcher" style="margin-top:18px">
  <div class="admin-section-head" style="align-items:center">
    <div>
      <h2 style="margin:0">Уровни доступа ролей</h2>
      <div class="muted">Настройка прав «нет доступа / просмотр / управление» для ролей.</div>
    </div>
    <button class="secondary" type="button" id="openRoleAccess">Настроить уровни доступа</button>
  </div>
</section>

<section class="card admin-employees-card emp-premium-card" style="margin-top:18px">
<div class="admin-section-head emp-premium-head">
  <div><div class="eyebrow">Учетные записи</div><h2 style="margin:0">Сотрудники</h2><div class="muted">Управление профилями, ролями и паролями.</div></div>
  <div class="employee-section-actions"><span class="admin-section-count">${employees.filter(e=>!e.deleted_at).length}</span><button type="button" class="secondary employee-toggle" id="employeeListToggle" aria-expanded="false">Показать сотрудников</button></div>
</div>
<div class="employee-list is-collapsed" id="employeeList">
<div class="emp-table-wrap">
<table class="emp-table">
<thead><tr><th>Сотрудник</th><th>Роли</th><th>Статус</th><th>Действия</th></tr></thead>
<tbody>${employees.filter(e=>!e.deleted_at).map(e=>employeeAdminRowHtml(e)).join("")}</tbody>
</table>
</div>
</div>
<div class="admin-password-note emp-premium-note"><div><strong>Пароли.</strong> В базе только хэши. «Ещё → Сменить пароль» — сгенерировать, скопировать и передать сотруднику лично.</div></div>
</section>

<section class="card admin-impersonation-card" style="margin-top:18px">
  <div class="admin-section-head" style="align-items:flex-start">
    <div><div class="eyebrow">ПРОВЕРКА ДОСТУПОВ</div><h2 style="margin:0">Просмотр портала</h2><div class="muted">Откройте интерфейс от имени сотрудника и проверьте его роли и доступы.</div></div>
    <span class="admin-section-count">${adminImpersonationCandidates.length}</span>
  </div>
  <div class="muted" style="margin:-4px 0 12px">Поиск сотрудника и фильтр по роли откроются в отдельном окне. Админская сессия сохранится.</div>
  <button type="button" class="primary" data-action="openAdminImpersonationModal">Выбрать сотрудника</button>
</section>

<section class="card admin-audit-launcher" style="margin-top:18px" id="auditJournalLauncher" tabindex="0" role="button" aria-label="Открыть журнал аудита">
  <div class="admin-section-head">
    <div><div class="eyebrow">Контроль</div><h2 style="margin:0">Журнал аудита</h2><div class="muted">Просмотр действий пользователей, документов, задач, доступов и системы.</div></div>
   <div class="employee-section-actions"><span class="admin-section-count">${logsTotal}</span><button type="button" class="secondary" id="openAuditJournal">Открыть журнал</button></div>
  </div>
</section>`;

installAdminUiStabilityStyles();installAdminStyles();installAdminEditStyles();installAdminEmployeesV2Styles();setupRecipientDropdown("adminOrgGroupDepartments","Выберите подразделения");
const trainingRoleSelect=$("eRole"),trainingExitRow=$("eTrainingExitPasswordRow");if(trainingRoleSelect&&trainingExitRow){const syncTrainingExit=()=>{trainingExitRow.hidden=trainingRoleSelect.value!=="new_employee";};trainingRoleSelect.addEventListener("change",syncTrainingExit);syncTrainingExit();}
const createGroupSelect=$("eGroup"),createSupervisorSelect=$("eSupervisor");
if(createGroupSelect&&createSupervisorSelect){
  const syncCreateSupervisor=()=>{
    const current=createSupervisorSelect.value,groupValue=createGroupSelect.value||"";
    const options=employees.filter(item=>item.is_active&&String(item.org_group_id||"")===groupValue);
    createSupervisorSelect.innerHTML='<option value="">Не назначен</option>'+options.map(item=>`<option value="${item.id}">${esc(item.full_name)}${item.position?` · ${esc(item.position)}`:""}</option>`).join("");
    if(options.some(item=>String(item.id)===current))createSupervisorSelect.value=current;
  };
  createGroupSelect.addEventListener("change",syncCreateSupervisor);syncCreateSupervisor();
}
const employeeListToggle=$("employeeListToggle"),employeeList=$("employeeList");
if(employeeListToggle&&employeeList){employeeListToggle.onclick=()=>{const collapsed=employeeList.classList.toggle("is-collapsed");employeeListToggle.setAttribute("aria-expanded",String(!collapsed));employeeListToggle.textContent=collapsed?"Показать сотрудников":"Скрыть сотрудников";};}
const openEmployeeCreate=()=>{
  document.querySelectorAll(".admin-create-employee-overlay,.admin-departments-overlay").forEach(x=>x.remove());
  const template=$("adminEmployeeCreateTemplate");if(!template)return;
  const overlay=document.createElement("div");overlay.className="admin-edit-overlay admin-create-employee-overlay";
  overlay.innerHTML='<div class="admin-edit-modal admin-create-employee-modal"><div class="admin-modal-head"><div><div class="eyebrow">УЧЕТНЫЕ ЗАПИСИ</div><h2>Новый сотрудник</h2><p class="muted">Создайте рабочую учётную запись и назначьте доступы.</p></div><button type="button" class="admin-modal-close" aria-label="Закрыть">×</button></div><div class="admin-modal-body" id="adminEmployeeCreateBody"></div></div>';
  document.body.appendChild(overlay);overlay.querySelector("#adminEmployeeCreateBody").appendChild(template.content.cloneNode(true));installAdminEditStyles();
  const close=()=>overlay.remove();overlay.querySelector(".admin-modal-close").onclick=close;overlay.querySelector("[data-admin-modal-close]").onclick=close;overlay.onclick=e=>{if(e.target===overlay)close();};
  const trainingRoleSelect=overlay.querySelector("#eRole"),trainingExitRow=overlay.querySelector("#eTrainingExitPasswordRow");
  const syncTrainingExit=()=>{trainingExitRow.hidden=trainingRoleSelect.value!=="new_employee";};trainingRoleSelect.addEventListener("change",syncTrainingExit);syncTrainingExit();
  const groupSelect=overlay.querySelector("#eGroup"),supervisorSelect=overlay.querySelector("#eSupervisor");
  const syncSupervisor=()=>{const current=supervisorSelect.value,groupValue=groupSelect.value||"";const options=employees.filter(item=>item.is_active&&String(item.org_group_id||"")===groupValue);supervisorSelect.innerHTML='<option value="">Не назначен</option>'+options.map(item=>`<option value="${item.id}">${esc(item.full_name)}${item.position?` · ${esc(item.position)}`:""}</option>`).join("");if(options.some(item=>String(item.id)===current))supervisorSelect.value=current;};
  groupSelect.addEventListener("change",syncSupervisor);syncSupervisor();setTimeout(()=>overlay.querySelector("#eName")?.focus(),0);
};
const openAdminDepartments=()=>{
  document.querySelectorAll(".admin-create-employee-overlay,.admin-departments-overlay").forEach(x=>x.remove());
  const template=$("adminDepartmentsTemplate");if(!template)return;
  const overlay=document.createElement("div");overlay.className="admin-edit-overlay admin-departments-overlay";
  overlay.innerHTML='<div class="admin-edit-modal admin-departments-modal"><div class="admin-modal-head"><div><div class="eyebrow">ОРГАНИЗАЦИЯ</div><h2>Справочник подразделений</h2><p class="muted">Ищите подразделение, смотрите количество сотрудников и управляйте списком.</p></div><button type="button" class="admin-modal-close" aria-label="Закрыть">×</button></div><div class="admin-modal-body" id="adminDepartmentsBodyModal"></div></div>';
  document.body.appendChild(overlay);overlay.querySelector("#adminDepartmentsBodyModal").appendChild(template.content.cloneNode(true));installAdminEditStyles();
  const close=()=>overlay.remove();overlay.querySelector(".admin-modal-close").onclick=close;overlay.onclick=e=>{if(e.target===overlay)close();};
  const search=overlay.querySelector("#adminDeptSearch"),count=overlay.querySelector("#adminDeptCount");
  const applySearch=()=>{const q=search.value.trim().toLowerCase();let visible=0;overlay.querySelectorAll("#adminDepartmentsBody tr").forEach(row=>{const isDepartment=row.hasAttribute("data-dept-name");const show=!q||!isDepartment||(row.cells[0]?.textContent||"").toLowerCase().includes(q);row.style.display=show?"":"none";if(isDepartment&&show)visible++;});overlay.querySelectorAll("#adminDepartmentsBody .admin-department-group-row").forEach(row=>{const next=[];let sibling=row.nextElementSibling;while(sibling&&!sibling.classList.contains("admin-department-group-row")){if(sibling.hasAttribute("data-dept-name"))next.push(sibling);sibling=sibling.nextElementSibling;}row.style.display=!q||next.some(x=>x.style.display!=="none")?"":"none";});if(count)count.textContent=String(visible);};
  search.oninput=applySearch;applySearch();overlay.querySelector("#dName")?.focus();
};
$("openEmployeeCreate")?.addEventListener("click",openEmployeeCreate);
$("openAdminDepartments")?.addEventListener("click",openAdminDepartments);
document.querySelectorAll("[data-admin-ticket-status]").forEach(select=>{select.onchange=()=>updateAdminTicket(Number(select.dataset.adminTicketStatus),select.value,select);});
employeeList?.addEventListener("click",e=>{if(e.target.closest(".emp-menu-item")) e.target.closest(".emp-more")?.removeAttribute("open");});
function installAdminQuickModalStyles(){
  if(document.getElementById("kedoAdminQuickModalStyles"))return;
  const s=document.createElement("style");s.id="kedoAdminQuickModalStyles";s.textContent=`
    .admin-quick-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin:0 0 18px}
    .admin-quick-card{display:grid;grid-template-columns:44px minmax(0,1fr) auto;align-items:center;gap:15px;min-height:126px;padding:20px 21px!important;border:1px solid #d7e5ee!important;border-radius:16px!important;background:linear-gradient(135deg,#fbfdff,#f5faff)!important;box-shadow:0 8px 22px rgba(26,70,99,.055)!important}
    .admin-quick-icon{display:grid;place-items:center;width:44px;height:44px;border-radius:13px;background:#e8f3fa;color:#1c6e9f;font-size:25px;font-weight:700;box-shadow:inset 0 0 0 1px #d3e7f3}.admin-quick-icon-blue{background:#eaf4ff;color:#2777ae}
    .admin-quick-copy{min-width:0}.admin-quick-copy h2{margin:4px 0 5px!important;color:#203f5b;font-size:18px!important}.admin-quick-copy p{margin:0;max-width:360px;font-size:11px;line-height:1.45}.admin-quick-card>button{white-space:nowrap}
    html body .admin-create-employee-overlay,html body .admin-departments-overlay{padding:22px!important;background:rgba(11,30,47,.62)!important;backdrop-filter:blur(7px)!important}
    html body .admin-create-employee-overlay .admin-edit-modal,html body .admin-departments-overlay .admin-edit-modal{width:min(820px,calc(100vw - 44px))!important;max-width:820px!important;max-height:calc(100vh - 44px)!important;overflow:hidden!important;padding:0!important;border:1px solid #d5e4ed!important;border-radius:20px!important;box-shadow:0 30px 90px rgba(5,27,44,.3)!important;animation:kedoModalIn .2s ease-out both!important}
    html body .admin-create-employee-overlay .admin-edit-modal{width:min(720px,calc(100vw - 36px))!important;max-width:720px!important;border-radius:18px!important}
    html body .admin-departments-overlay .admin-edit-modal{width:min(940px,calc(100vw - 44px))!important;max-width:940px!important}
    .admin-modal-head{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;padding:25px 28px 19px;border-bottom:1px solid #e3edf2;background:linear-gradient(135deg,#f8fbfd,#fff)}.admin-modal-head h2{margin:4px 0 5px!important;color:#1e4260!important;font-size:23px!important;letter-spacing:-.025em}.admin-modal-head p{margin:0;max-width:620px;font-size:12px;line-height:1.45}.admin-modal-close{display:grid;place-items:center;flex:0 0 auto;width:34px;height:34px;padding:0;border:1px solid #cbdde8;border-radius:10px;background:#fff;color:#46647a;font-size:21px;line-height:1;cursor:pointer}.admin-modal-close:hover{background:#eef7fb;border-color:#8ebad2;color:#166895}
    .admin-modal-body{min-height:0;max-height:calc(100vh - 145px);overflow:auto;padding:21px 28px 25px;scrollbar-width:thin}.admin-create-form .row{margin-top:0;margin-bottom:13px}.admin-create-form .row+ .row{margin-top:0}.admin-create-form .admin-edit-actions{margin-top:20px;padding-top:16px;border-top:1px solid #e4edf2}.admin-create-form #eMsg{margin:9px 0 0}
    html body .admin-create-employee-overlay .admin-modal-head{padding:20px 22px 16px!important}.admin-create-employee-overlay .admin-modal-head h2{font-size:21px!important}.admin-create-employee-overlay .admin-modal-head p{font-size:11px!important}
    .admin-create-form{display:grid;gap:12px}.admin-create-section{padding:14px 15px;border:1px solid #e1ebf1;border-radius:14px;background:linear-gradient(135deg,#fbfdff,#f7fbfd)}.admin-create-section-head{display:flex;align-items:center;gap:10px;margin-bottom:13px}.admin-create-section-number{display:grid;place-items:center;width:26px;height:26px;border-radius:8px;background:#e7f3f8;color:#2b7696;font-size:10px;font-weight:800}.admin-create-section-head strong,.admin-create-section-head small{display:block}.admin-create-section-head strong{color:#244c64;font-size:12px}.admin-create-section-head small{margin-top:2px;color:#8094a1;font-size:10px}.admin-create-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:11px 13px}.admin-create-grid label{display:grid!important;gap:5px!important;margin:0!important;color:#496579;font-size:10px;font-weight:700!important}.admin-create-grid label>span{display:block;min-height:16px}.admin-create-grid label>input,.admin-create-grid label>select{margin-top:0!important;min-height:38px;padding:9px 10px!important;border:1px solid #d2e0e7!important;border-radius:9px!important;background:#fff!important;color:#294b60!important;font:inherit!important;font-size:11px!important;outline:none}.admin-create-grid label>input:focus,.admin-create-grid label>select:focus{border-color:#72a9c1!important;box-shadow:0 0 0 3px rgba(73,143,174,.1)!important}.admin-create-grid label>small{margin:0!important;font-size:9px;line-height:1.35}.admin-create-field-wide{grid-column:1/-1}.admin-create-grid [hidden]{display:none!important}.admin-create-form .required-mark,.admin-create-form .optional-mark{margin-left:4px;padding:2px 5px;font-size:8px;line-height:1.2}.admin-create-form .admin-edit-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:2px;padding-top:13px}.admin-create-form .admin-edit-actions button{min-height:36px;padding:0 14px;border-radius:9px}.admin-create-form #eMsg{grid-column:1/-1;margin:0;font-size:10px}
    .admin-departments-create{display:flex;gap:10px;align-items:center;margin-bottom:14px;padding:14px;border:1px solid #dce9f0;border-radius:13px;background:#f7fbfd}.admin-departments-create input{flex:1;min-width:0;min-height:40px;padding:8px 11px;border:1px solid #cbdde8;border-radius:9px;background:#fff;color:#294a62;font:inherit;font-size:12px}.admin-departments-create button{white-space:nowrap}.admin-departments-modal .admin-departments-panel{margin-top:0;max-height:none!important;opacity:1!important;overflow:hidden}.admin-departments-modal .admin-departments-table-wrap{max-height:430px}.admin-departments-modal .admin-departments-hint{margin-bottom:0}
    @media(max-width:760px){.admin-quick-grid{grid-template-columns:1fr}.admin-quick-card{grid-template-columns:42px minmax(0,1fr);align-items:start}.admin-quick-card>button{grid-column:2;justify-self:start}.admin-modal-head{padding:20px 18px 16px}.admin-modal-body{padding:16px 18px 20px}.admin-departments-create{align-items:stretch;flex-direction:column}.admin-departments-create button{width:100%}.admin-create-grid{grid-template-columns:1fr}.admin-create-field-wide{grid-column:auto}.admin-create-form .admin-edit-actions{position:sticky;bottom:-1px;padding-bottom:2px;background:#fff}}
  `;document.head.appendChild(s);
}
installAdminQuickModalStyles();

function installAuditFinalStyles(){
  if(document.getElementById("kedoAuditFinalStyles"))return;
  const s=document.createElement("style");
  s.id="kedoAuditFinalStyles";
  s.textContent=`
  html body .admin-edit-overlay.audit-journal-overlay{
    position:fixed!important;inset:0!important;display:flex!important;align-items:center!important;justify-content:center!important;
    padding:24px!important;box-sizing:border-box!important;overflow:hidden!important;
    background:rgba(15,34,53,.62)!important;backdrop-filter:blur(7px)!important;
    z-index:2147483640!important;
  }
  html body .admin-edit-overlay.audit-journal-overlay .admin-edit-modal.audit-journal-modal{
    position:relative!important;display:flex!important;flex-direction:column!important;
    width:min(1160px,calc(100vw - 56px))!important;
    height:min(860px,calc(100vh - 48px))!important;
    max-width:none!important;max-height:calc(100vh - 48px)!important;min-height:0!important;
    margin:0!important;padding:26px!important;box-sizing:border-box!important;
    overflow:hidden!important;border-radius:24px!important;
    background:linear-gradient(180deg,#ffffff 0%,#f8fbfd 100%)!important;
    border:1px solid #d8e4ee!important;
    box-shadow:0 30px 90px rgba(10,29,48,.36)!important;
  }
  html body .admin-edit-overlay.audit-journal-overlay .audit-journal-head{
    flex:0 0 auto!important;margin:0!important;padding:0 0 16px!important;
    border-bottom:1px solid #e1ebf2!important;
  }
  html body .admin-edit-overlay.audit-journal-overlay .audit-journal-head h2{
    margin:2px 0 5px!important;font-size:28px!important;letter-spacing:-.025em!important;color:#173f67!important;
  }
  html body .admin-edit-overlay.audit-journal-overlay .audit-modal-search{
    flex:0 0 auto!important;position:sticky!important;top:0!important;z-index:20!important;
    margin:14px 0 10px!important;padding:2px 0!important;background:linear-gradient(180deg,#f8fbfd 72%,rgba(248,251,253,0))!important;
  }
  html body .admin-edit-overlay.audit-journal-overlay .audit-modal-search input{
    min-height:48px!important;font-size:13px!important;border-radius:13px!important;background:#fff!important;
  }
  html body .admin-edit-overlay.audit-journal-overlay .audit-modal-filters{
    flex:0 0 auto!important;position:sticky!important;top:64px!important;z-index:19!important;
    display:flex!important;gap:8px!important;flex-wrap:nowrap!important;overflow-x:auto!important;overflow-y:hidden!important;
    padding:3px 0 12px!important;background:linear-gradient(180deg,#f8fbfd 78%,rgba(248,251,253,0))!important;
    scrollbar-width:thin!important;
  }
  html body .admin-edit-overlay.audit-journal-overlay .audit-modal-filters button{
    min-height:38px!important;padding:8px 14px!important;border-radius:999px!important;font-size:12px!important;
  }
  html body .admin-edit-overlay.audit-journal-overlay .audit-modal-list{
    flex:1 1 auto!important;min-height:0!important;height:auto!important;max-height:none!important;
    overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;
    padding:4px 10px 10px 2px!important;margin-top:2px!important;
    border:1px solid #dfe9f0!important;border-radius:18px!important;background:#eef5f9!important;
    box-shadow:inset 0 1px 0 rgba(255,255,255,.8)!important;
    scrollbar-gutter:stable!important;
  }
  html body .admin-edit-overlay.audit-journal-overlay .audit-modal-list .audit-row{
    min-height:78px!important;margin:8px 6px!important;padding:13px 14px!important;border-radius:14px!important;
    border:1px solid #dbe7ef!important;background:#fff!important;
    box-shadow:0 3px 12px rgba(24,67,98,.05)!important;
  }
  html body .admin-edit-overlay.audit-journal-overlay .audit-modal-list .audit-row:hover{
    transform:translateY(-1px)!important;border-color:#b8cfdf!important;box-shadow:0 9px 20px rgba(24,67,98,.09)!important;
  }
  html body .admin-edit-overlay.audit-journal-overlay .audit-modal-list .audit-row-top{gap:10px!important}
  html body .admin-edit-overlay.audit-journal-overlay .audit-modal-list .audit-category-badge{
    min-height:24px!important;padding:4px 9px!important;background:#e8f3fa!important;color:#1f6b98!important;font-size:10px!important;
  }
  html body .admin-edit-overlay.audit-journal-overlay .audit-modal-list .audit-row-top strong{
    font-size:14px!important;color:#153d61!important;
  }
   html body .admin-edit-overlay.audit-journal-overlay .audit-modal-list .audit-row-meta{
     margin-top:7px!important;font-size:11.5px!important;color:#72889b!important;gap:12px!important;
   }
   html body .admin-edit-overlay.audit-journal-overlay .audit-modal-list .audit-narrative{
     margin-top:6px!important;color:#2d5876!important;font-size:12px!important;line-height:1.35!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;
   }
   html body .admin-edit-overlay.audit-journal-overlay .audit-modal-list .audit-row-meta span{overflow:hidden!important;text-overflow:ellipsis!important}
   html body .admin-edit-overlay.audit-journal-overlay .audit-modal-list .audit-row-meta b{color:#345d79!important;font-weight:700!important}
   html body .admin-edit-overlay.audit-journal-overlay .audit-detail-grid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:8px!important;margin-top:10px!important;max-width:min(760px,78vw)!important}
   html body .admin-edit-overlay.audit-journal-overlay .audit-detail-grid>div{display:grid!important;gap:3px!important;min-width:0!important;padding:9px 10px!important;border:1px solid #d7e5ee!important;border-radius:10px!important;background:#fff!important}
   html body .admin-edit-overlay.audit-journal-overlay .audit-detail-grid small{color:#7890a3!important;font-size:10px!important}
   html body .admin-edit-overlay.audit-journal-overlay .audit-detail-grid strong{overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;color:#214a68!important;font-size:12px!important}
   html body .admin-edit-overlay.audit-journal-overlay .audit-detail-grid span{overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;color:#8499aa!important;font-size:10px!important}
  html body .admin-edit-overlay.audit-journal-overlay .audit-modal-list .audit-details summary{
    min-height:38px!important;padding:8px 13px!important;border-radius:10px!important;
    background:#f3f8fb!important;border:1px solid #cfe0eb!important;font-size:11.5px!important;
  }
   html body .admin-edit-overlay.audit-journal-overlay .audit-pagination{
     flex:0 0 auto!important;display:flex!important;align-items:center!important;justify-content:space-between!important;
     gap:12px!important;padding:11px 2px 0!important;color:#71899a!important;font-size:11px!important;
   }
   html body .admin-edit-overlay.audit-journal-overlay .audit-pagination-total{white-space:nowrap!important}
   html body .admin-edit-overlay.audit-journal-overlay .audit-pagination-controls{display:flex!important;align-items:center!important;gap:5px!important}
   html body .admin-edit-overlay.audit-journal-overlay .audit-page-button{
     min-width:32px!important;height:32px!important;padding:0 8px!important;border:1px solid #d1e0e9!important;border-radius:9px!important;
     background:#fff!important;color:#416278!important;font-size:11px!important;font-weight:700!important;cursor:pointer!important;
   }
   html body .admin-edit-overlay.audit-journal-overlay .audit-page-button:hover:not(:disabled){border-color:#8eb6ca!important;background:#eef7fb!important;color:#1f6b98!important}
   html body .admin-edit-overlay.audit-journal-overlay .audit-page-button.is-active{border-color:#2879aa!important;background:#2879aa!important;color:#fff!important;box-shadow:0 4px 10px rgba(40,121,170,.18)!important}
   html body .admin-edit-overlay.audit-journal-overlay .audit-page-button:disabled{cursor:default!important;opacity:.45!important}
   @media(max-width:900px){
    html body .admin-edit-overlay.audit-journal-overlay .admin-edit-modal.audit-journal-modal{width:calc(100vw - 24px)!important;height:calc(100vh - 24px)!important;padding:18px!important;border-radius:18px!important}
     html body .admin-edit-overlay.audit-journal-overlay .audit-modal-filters{top:58px!important}
   }
   @media(max-width:640px){html body .admin-edit-overlay.audit-journal-overlay .audit-detail-grid{grid-template-columns:1fr!important;max-width:none!important}html body .admin-edit-overlay.audit-journal-overlay .audit-modal-list .audit-row-meta{white-space:normal!important;flex-wrap:wrap!important}html body .admin-edit-overlay.audit-journal-overlay .audit-pagination{align-items:flex-start!important;flex-direction:column!important}.audit-pagination-controls{align-self:flex-end!important}}
  `;
  document.head.appendChild(s);
}

const openAuditJournal=()=>{
  installKedoUxEnhancements();
  installAuditFinalStyles();
  document.querySelectorAll(".admin-edit-overlay.audit-journal-overlay").forEach(x=>x.remove());
  const overlay=document.createElement("div");
  overlay.className="admin-edit-overlay audit-journal-overlay";
  overlay.innerHTML=`<div class="admin-edit-modal audit-journal-modal" role="dialog" aria-modal="true" aria-labelledby="auditJournalTitle">
    <div class="admin-section-head audit-journal-head">
      <div><div class="eyebrow">Контроль</div><h2 id="auditJournalTitle" style="margin:3px 0">Журнал аудита</h2><div class="muted">Полный список событий с отдельной прокруткой внутри окна.</div></div>
      <div class="audit-journal-head-actions"><button type="button" class="secondary" id="auditJournalExport">Выгрузить CSV</button><button type="button" class="secondary" id="auditJournalClose">Закрыть</button></div>
    </div>
    <div class="audit-modal-search"><input id="auditJournalSearch" type="search" autocomplete="off" placeholder="Поиск по пользователю, действию, объекту или событию..."></div>
    <div class="audit-date-filters"><label>С <input id="auditJournalFrom" type="date"></label><label>По <input id="auditJournalTo" type="date"></label><button type="button" class="secondary" id="auditJournalApply">Применить</button><button type="button" class="secondary" id="auditJournalReset">Сбросить</button></div>
    <div class="audit-filter-bar audit-filter-minimal audit-modal-filters">${Object.entries(auditCategoryLabels).map(([k,v])=>`<button type="button" class="${k==="ALL"?"primary":"secondary"}" data-audit-modal-category="${k}">${v}</button>`).join("")}</div>
    <div class="audit-modal-list" id="auditModalBody">${auditLogsHtml(logs)}</div>
    <div class="audit-pagination" id="auditJournalPagination" aria-label="Страницы журнала"></div>
  </div>`;
  document.body.appendChild(overlay);
  let currentLogs=Array.isArray(logs)?logs.slice():[];
  let currentCategory="ALL";
  let currentPage=Number(logsPage?.page)||1;
  let currentTotal=Number(logsPage?.total)||currentLogs.length;
  let currentPages=Math.max(1,Number(logsPage?.pages)||Math.ceil(currentTotal/200)||1);
  const close=()=>{overlay.remove();document.body.classList.remove("kedo-audit-open");document.documentElement.classList.remove("kedo-audit-open");};
  overlay.querySelector("#auditJournalClose").onclick=close;
  overlay.querySelector("#auditJournalExport").onclick=async()=>{
    const exportButton=overlay.querySelector("#auditJournalExport");
    const exportLogs=[];
    exportButton.disabled=true;
    try{
      for(let page=1;page<=currentPages;page++){
        const result=await api(auditQuery(currentCategory,page));
        const rows=Array.isArray(result)?result:(Array.isArray(result?.items)?result.items:[]);
        exportLogs.push(...rows);
        if(rows.length<200)break;
      }
    }catch(e){
      exportButton.disabled=false;
      kedoAlert(e.message||"Не удалось выгрузить журнал.");
      return;
    }
    const csvEscape=value=>`"${String(value??"").replace(/"/g,'""')}"`;
    const lines=[[
      "Дата","Категория","Действие","Исполнитель","Логин исполнителя","Объект","Сущность","ID","Подробности"
    ].map(csvEscape).join(",")];
    exportLogs.forEach(row=>{
      const payload=row.payload&&typeof row.payload==="object"?row.payload:{};
      const actor=payload.actorName||row.user_name||"Система";
      const target=row.target_name||payload.targetName||(`${auditEntityLabels[row.entity_type]||row.entity_type||"Объект"}${row.entity_id?` #${row.entity_id}`:""}`);
      lines.push([row.created_at||"",row.category||"Система",auditActionText(row.action),actor,payload.actorLogin||row.user_login||"",target,auditEntityLabels[row.entity_type]||row.entity_type||"",row.entity_id||"",formatAuditValue(payload)].map(csvEscape).join(","));
    });
    const blob=new Blob(["\\uFEFF"+lines.join("\\r\\n")],{type:"text/csv;charset=utf-8"});
    const url=URL.createObjectURL(blob),link=document.createElement("a");link.href=url;link.download=`kedo-audit-${new Date().toISOString().slice(0,10)}.csv`;document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
    exportButton.disabled=false;
  };
  overlay.addEventListener("click",e=>{if(e.target===overlay)close()});
  overlay.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
  document.body.classList.add("kedo-audit-open");
  document.documentElement.classList.add("kedo-audit-open");
  const searchInput=overlay.querySelector("#auditJournalSearch");
  const pagination=overlay.querySelector("#auditJournalPagination");
  const auditQuery=(category,page=1)=>{
    const params=new URLSearchParams({category,page:String(page),limit:"200"});
    const q=String(searchInput?.value||"").trim();
    const from=overlay.querySelector("#auditJournalFrom")?.value||"",to=overlay.querySelector("#auditJournalTo")?.value||"";
    if(q)params.set("q",q);if(from)params.set("from_date",from);if(to)params.set("to_date",to);
    return "/api/admin/logs?"+params.toString();
  };
  const renderPagination=()=>{
    if(!pagination)return;
    if(!currentTotal){pagination.innerHTML='<span class="audit-pagination-total">Записей нет</span>';return;}
    const first=(currentPage-1)*200+1,last=Math.min(currentTotal,currentPage*200);
    const firstPage=Math.max(1,Math.min(currentPage-2,Math.max(1,currentPages-4))),lastPage=Math.min(currentPages,firstPage+4);
    const pageButtons=[];
    for(let page=firstPage;page<=lastPage;page++)pageButtons.push(`<button type="button" class="audit-page-button${page===currentPage?" is-active":""}" data-audit-page="${page}" aria-label="Страница ${page}" ${page===currentPage?"aria-current=\"page\"":""}>${page}</button>`);
    pagination.innerHTML=`<span class="audit-pagination-total">Показано ${first}–${last} из ${currentTotal}</span><div class="audit-pagination-controls"><button type="button" class="audit-page-button" data-audit-page="${Math.max(1,currentPage-1)}" aria-label="Предыдущая страница" ${currentPage===1?"disabled":""}>‹</button>${pageButtons.join("")}<button type="button" class="audit-page-button" data-audit-page="${Math.min(currentPages,currentPage+1)}" aria-label="Следующая страница" ${currentPage===currentPages?"disabled":""}>›</button></div>`;
  };
  const loadAuditPage=async(page=1)=>{
    const body=overlay.querySelector("#auditModalBody");
    if(!body)return;
    body.innerHTML='<div class="audit-loading">Загрузка событий…</div>';
    try{
      const result=await api(auditQuery(currentCategory,page));
      const rows=Array.isArray(result)?result:(Array.isArray(result?.items)?result.items:[]);
      currentLogs=rows.slice();
      currentPage=Number(result?.page)||page;
      currentTotal=Number(result?.total)||rows.length;
      currentPages=Math.max(1,Number(result?.pages)||Math.ceil(currentTotal/200)||1);
      body.innerHTML=auditLogsHtml(rows);
      overlay.querySelectorAll("[data-audit-modal-category]").forEach(b=>{b.className=b.dataset.auditModalCategory===currentCategory?"primary":"secondary"});
      renderPagination();
      body.scrollTop=0;
    }catch(e){body.innerHTML=`<div class="empty audit-empty">${esc(e.message)}</div>`;if(pagination)pagination.innerHTML="";}
  };
  let searchTimer=0;
  const scheduleSearch=()=>{clearTimeout(searchTimer);searchTimer=setTimeout(()=>loadAuditPage(1),220);};
  searchInput?.addEventListener("input",scheduleSearch);
  searchInput?.addEventListener("search",()=>loadAuditPage(1));
  pagination?.addEventListener("click",e=>{const button=e.target.closest("[data-audit-page]");if(button&&!button.disabled)loadAuditPage(Number(button.dataset.auditPage)||1);});
  overlay.querySelector("#auditJournalApply")?.addEventListener("click",()=>loadAuditPage(1));
  overlay.querySelector("#auditJournalReset")?.addEventListener("click",()=>{overlay.querySelector("#auditJournalFrom").value="";overlay.querySelector("#auditJournalTo").value="";loadAuditPage(1);});
  overlay.querySelectorAll("[data-audit-modal-category]").forEach(b=>b.onclick=()=>{currentCategory=b.dataset.auditModalCategory||"ALL";loadAuditPage(1);});
  renderPagination();
  requestAnimationFrame(()=>overlay.querySelector("#auditJournalClose")?.focus());
};
const auditLauncher=$("auditJournalLauncher");
const auditOpenButton=$("openAuditJournal");
if(auditLauncher){auditLauncher.onclick=e=>{if(e.target.closest("button"))return;openAuditJournal();};auditLauncher.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openAuditJournal();}};}
if(auditOpenButton)auditOpenButton.onclick=e=>{e.stopPropagation();openAuditJournal();};
const openRoleAccess=$("openRoleAccess");
openRoleAccess.onclick=()=>{
  document.querySelectorAll(".admin-edit-overlay.role-access-overlay").forEach(x=>x.remove());
  const overlay=document.createElement("div");
  overlay.className="admin-edit-overlay role-access-overlay";
  overlay.innerHTML=`<div class="admin-edit-modal role-access-modal">
    <div class="admin-section-head role-access-modal-head">
      <div><div class="eyebrow">Администрирование</div><h2 style="margin:3px 0">Уровни доступа ролей</h2><div class="muted">Настройте, что каждая роль может делать в системе. Администратор — системная роль и не может быть выдан как разрешение другой роли.</div></div>
      <button type="button" class="secondary" id="roleAccessClose">Закрыть</button>
    </div>
    <div class="role-access-modal-body">
    <div class="role-access-toolbar">
      <label>Роль<select id="roleAccessRole">${roleAccess.roles.map(r=>`<option value="${esc(r.code)}">${esc(r.name)}${r.system?" · системная":""}</option>`).join("")}</select></label>
      <button type="button" class="secondary" id="createRoleButton">＋ Создать роль</button>
      <span class="muted" id="roleAccessHint"></span>
    </div>
    <div class="role-access-grid" id="roleAccessGrid"></div>
    </div>
    <div class="role-access-modal-footer"><div class="admin-edit-actions"><button class="primary" id="saveRoleAccess" type="button">Сохранить уровни доступа</button></div>
    <p id="roleAccessMsg" class="muted"></p>
    </div>
  </div>`;
  document.body.appendChild(overlay);
  const roleSelect=overlay.querySelector("#roleAccessRole"),roleGrid=overlay.querySelector("#roleAccessGrid"),roleHint=overlay.querySelector("#roleAccessHint"),roleMsg=overlay.querySelector("#roleAccessMsg");
  overlay.querySelector("#createRoleButton").onclick=async()=>{
    const code=await kedoPrompt("Код роли (латиница, например hr_manager):"); if(!code?.trim())return;
    const name=await kedoPrompt("Название роли:"); if(!name?.trim())return;
    try{
      const created=await api("/api/admin/roles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:code.trim().toLowerCase(),name:name.trim(),rank:10})});
      roleAccess.roles.push(created); const option=document.createElement("option"); option.value=created.code; option.textContent=created.name; roleSelect.appendChild(option); roleSelect.value=created.code; renderRoleAccess(); roleMsg.textContent="Роль создана. Настройте права и сохраните."; roleMsg.style.color="#237a4b";
    }catch(e){roleMsg.textContent=e.message;roleMsg.style.color="#b42318";}
  };
  const renderRoleAccess=()=>{
    const grants=new Map(roleAccess.grants.filter(g=>g.role_code===roleSelect.value).map(g=>[g.permission_code,Number(g.access_level)]));
    const locked=roleSelect.value==="admin";
    roleHint.textContent=locked?"Системная роль: полный доступ ко всем разделам, менять нельзя.":"Уровень 0 — нет доступа · 1 — просмотр · 2 — управление. Право «Администрирование» даёт полный доступ к панели управления и ролям.";
    const groups=new Map();
    roleAccess.permissions.forEach(permission=>{
      const section=permission.section||"Прочее";
      if(!groups.has(section))groups.set(section,[]);
      groups.get(section).push(permission);
    });
    roleGrid.innerHTML=[...groups.entries()].map(([section,permissions])=>`<section class="role-access-group"><div class="role-access-group-head"><strong>${esc(section)}</strong><span>${permissions.length} разрешений</span></div>${permissions.map(p=>{
      const level=locked?2:(grants.get(p.code)||0);
      const uploadOnly=p.max_level===1;
      return `<div class="role-access-row"><div><strong>${esc(p.name)}</strong><small>${esc(p.description||"")}</small></div><select data-role-permission="${esc(p.code)}" ${locked?"disabled":""}><option value="0" ${level===0?"selected":""}>Нет доступа</option><option value="1" ${level===1?"selected":""}>${uploadOnly?"Разрешено":"Просмотр"}</option>${uploadOnly?"":`<option value="2" ${level===2?"selected":""}>Управление</option>`}</select></div>`;
    }).join("")}</section>`).join("");
    overlay.querySelector("#saveRoleAccess").disabled=locked;
  };
  roleSelect.onchange=renderRoleAccess;
  overlay.querySelector("#saveRoleAccess").onclick=async()=>{
    try{
      const permissions=[...roleGrid.querySelectorAll("[data-role-permission]")].map(x=>({code:x.dataset.rolePermission,level:Number(x.value)}));
      await api("/api/admin/role-permissions/"+encodeURIComponent(roleSelect.value),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({permissions})});
      roleMsg.textContent="Уровни доступа сохранены.";
      roleMsg.style.color="#237a4b";
      roleAccess.grants=roleAccess.grants.filter(g=>g.role_code!==roleSelect.value).concat(permissions.filter(x=>x.level>0).map(x=>({role_code:roleSelect.value,permission_code:x.code,access_level:x.level})));
    }catch(e){roleMsg.textContent=e.message;roleMsg.style.color="#b42318";}
  };
  const close=()=>overlay.remove();
  overlay.querySelector("#roleAccessClose").onclick=close;
  overlay.addEventListener("click",e=>{if(e.target===overlay)close();});
  renderRoleAccess();
};
function installRoleAccessLauncherStyles(){
  if(document.getElementById("kedoRoleAccessLauncherStyles"))return;
  const s=document.createElement("style");s.id="kedoRoleAccessLauncherStyles";s.textContent=`
    .admin-role-access-launcher{padding:16px 18px}
    .admin-role-access-launcher .admin-section-head{margin:0}
    .role-access-overlay .admin-edit-modal{width:min(780px,calc(100vw - 40px)) !important}
    .role-access-modal .admin-section-head{align-items:flex-start}
    .role-access-modal .role-access-toolbar{margin-top:16px}
    html body .role-access-overlay{padding:24px!important;background:rgba(11,29,46,.64)!important;backdrop-filter:blur(8px)!important}
    html body .role-access-overlay .role-access-modal{width:min(900px,calc(100vw - 48px))!important;max-width:900px!important;height:min(800px,calc(100vh - 48px))!important;max-height:calc(100vh - 48px)!important;display:grid!important;grid-template-rows:auto minmax(0,1fr) auto!important;overflow:hidden!important;padding:0!important;border:1px solid #d5e4ed!important;border-radius:22px!important;box-shadow:0 30px 90px rgba(5,27,44,.3)!important}
    html body .role-access-modal .role-access-modal-head{display:flex!important;align-items:flex-start!important;justify-content:space-between!important;gap:22px!important;margin:0!important;padding:26px 30px 22px!important;border-bottom:1px solid #e4edf2!important;background:linear-gradient(135deg,#f8fbfd,#fff)!important}
    html body .role-access-modal .role-access-modal-head h2{margin:4px 0 6px!important;font-size:24px!important;letter-spacing:-.025em!important}
    html body .role-access-modal .role-access-modal-head .muted{max-width:620px!important;line-height:1.5!important;font-size:12px!important}
    html body .role-access-modal .role-access-modal-head #roleAccessClose{flex:0 0 auto!important;margin-top:0!important}
    html body .role-access-modal .role-access-modal-body{min-height:0!important;overflow:auto!important;padding:20px 30px 10px!important;scrollbar-width:thin!important}
    html body .role-access-modal .role-access-toolbar{display:grid!important;grid-template-columns:minmax(0,1fr) auto!important;align-items:end!important;gap:12px!important;margin:0 0 16px!important;padding:14px!important;border:1px solid #dce9f0!important;border-radius:14px!important;background:#f7fbfd!important}
    html body .role-access-modal .role-access-toolbar label{margin:0!important;color:#38566d!important;font-size:11px!important}
    html body .role-access-modal .role-access-toolbar select{height:42px!important;margin-top:6px!important;padding:8px 12px!important;border:1px solid #c9dce8!important;border-radius:10px!important;background:#fff!important;color:#23445e!important;font-size:12px!important}
    html body .role-access-modal .role-access-toolbar #createRoleButton{height:42px!important;margin:0!important;white-space:nowrap!important}
    html body .role-access-modal .role-access-toolbar #roleAccessHint{grid-column:1/-1!important;margin:0!important;color:#7890a0!important;font-size:11px!important}
    html body .role-access-modal .role-access-grid{display:grid!important;gap:16px!important}
    html body .role-access-modal .role-access-group{display:grid!important;gap:8px!important}
    html body .role-access-modal .role-access-group-head{display:flex!important;align-items:center!important;justify-content:space-between!important;padding:2px 3px!important;color:#315873!important;font-size:12px!important;letter-spacing:.01em!important}
    html body .role-access-modal .role-access-group-head span{color:#91a4b1!important;font-size:10px!important;font-weight:500!important}
    html body .role-access-modal .role-access-row{display:grid!important;grid-template-columns:minmax(0,1fr) 178px!important;align-items:center!important;gap:22px!important;min-height:68px!important;padding:13px 15px!important;border:1px solid #dce8ef!important;border-radius:13px!important;background:#fff!important;transition:border-color .16s ease,box-shadow .16s ease,transform .16s ease!important}
    html body .role-access-modal .role-access-row:hover{border-color:#b8d5e5!important;box-shadow:0 6px 18px rgba(31,88,122,.07)!important;transform:translateY(-1px)!important}
    html body .role-access-modal .role-access-row>div{gap:4px!important}
    html body .role-access-modal .role-access-row strong{color:#234965!important;font-size:13px!important}
    html body .role-access-modal .role-access-row small{color:#8196a5!important;font-size:11px!important;line-height:1.35!important}
    html body .role-access-modal .role-access-row select{height:38px!important;margin:0!important;border-radius:9px!important;background:#f8fbfd!important;color:#31546c!important;font-size:11px!important}
    html body .role-access-modal .role-access-modal-footer{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:14px!important;padding:15px 30px 20px!important;border-top:1px solid #e4edf2!important;background:#fff!important}
    html body .role-access-modal .role-access-modal-footer .admin-edit-actions{margin:0!important;padding:0!important;border:0!important}
    html body .role-access-modal .role-access-modal-footer #roleAccessMsg{margin:0!important;color:#2b8a5b!important;font-size:11px!important}
    @media(max-width:620px){html body .role-access-overlay{padding:10px!important}html body .role-access-overlay .role-access-modal{width:calc(100vw - 20px)!important;height:calc(100vh - 20px)!important;max-height:calc(100vh - 20px)!important;border-radius:17px!important}html body .role-access-modal .role-access-modal-head{padding:20px 18px 17px!important;gap:10px!important}html body .role-access-modal .role-access-modal-head h2{font-size:20px!important}html body .role-access-modal .role-access-modal-body{padding:14px 18px 8px!important}html body .role-access-modal .role-access-toolbar{grid-template-columns:1fr!important}html body .role-access-modal .role-access-toolbar #createRoleButton{width:100%!important}html body .role-access-modal .role-access-row{grid-template-columns:1fr!important;gap:10px!important;padding:12px!important}html body .role-access-modal .role-access-row select{width:100%!important}html body .role-access-modal .role-access-modal-footer{align-items:stretch!important;flex-direction:column!important;padding:13px 18px 16px!important}html body .role-access-modal .role-access-modal-footer .admin-edit-actions,html body .role-access-modal .role-access-modal-footer .admin-edit-actions button{width:100%!important}}
  `;document.head.appendChild(s);
}
installRoleAccessLauncherStyles();


}



function installChatPolishStyles(){
  if(document.getElementById("kedoChatPolishStyles"))return;
  const s=document.createElement("style");s.id="kedoChatPolishStyles";s.textContent=`
    .chat-contact{transition:transform .18s ease,background .18s ease,box-shadow .18s ease}
    .chat-contact[data-chat-user]{will-change:transform}
    .chat-contact.chat-moved{animation:kedoChatMove .28s ease}
    @keyframes kedoChatMove{0%{transform:translateY(8px);opacity:.55}100%{transform:translateY(0);opacity:1}}
    .chat-live-dot{box-shadow:0 0 0 4px rgba(72,187,120,.08)}
  `;document.head.appendChild(s);
}
installChatPolishStyles();



function installLeaderControlStyles(){
  if(document.getElementById("kedoLeaderControlStyles"))return;
  const s=document.createElement("style");s.id="kedoLeaderControlStyles";s.textContent=`
    .leader-control-card{overflow:hidden}.leader-control-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.leader-control-grid>div{border:1px solid #e1e9ef;border-radius:11px;padding:10px 11px;background:#fbfdff}.leader-control-grid span,.leader-control-grid small{display:block;color:#8095a6;font-size:10px}.leader-control-grid b{display:block;font-size:21px;color:#214d6b;margin:3px 0}.leader-control-grid .danger b{color:#c44b4b}@media(max-width:760px){.leader-control-grid{grid-template-columns:repeat(2,1fr)}}
  `;document.head.appendChild(s);
}
installLeaderControlStyles();

function installInboxUxStyles(){
  if(document.getElementById("kedoInboxUxStyles"))return;
  const s=document.createElement("style");s.id="kedoInboxUxStyles";s.textContent=`
    .inbox-page{max-width:1180px;margin:0 auto}.inbox-hero{display:flex;justify-content:space-between;align-items:center;gap:18px;margin-bottom:18px}
    .inbox-hero-count{min-width:132px;padding:15px 18px;border:1px solid #dce8f2;border-radius:16px;background:#fff;text-align:center;box-shadow:0 5px 18px rgba(25,67,101,.05)}
    .inbox-hero-count strong{display:block;font-size:28px;color:#1d618f}.inbox-hero-count span{font-size:11px;color:#7a91a5}.inbox-hero-count.danger{border-color:#f0caca}.inbox-hero-count.danger strong{color:#c44b4b}
    .inbox-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:14px}.inbox-stat{border:1px solid #dfe8ef;background:#fff;border-radius:13px;padding:12px 14px;text-align:left;cursor:pointer}.inbox-stat span{display:block;color:#7890a5;font-size:11px}.inbox-stat b{font-size:21px;color:#173b5f}.inbox-stat.danger b{color:#c44b4b}
    .inbox-section{margin-bottom:14px}.inbox-section-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:9px}.inbox-section-head h2{margin:2px 0 0}
    .inbox-list{display:flex;flex-direction:column;gap:6px}.inbox-item{width:100%;border:1px solid #e0e8ef;border-radius:12px;background:#fff;padding:11px 12px;display:grid;grid-template-columns:34px minmax(0,1fr) auto;gap:11px;align-items:center;text-align:left;cursor:pointer;transition:transform .15s,box-shadow .15s,border-color .15s}.inbox-item:hover{transform:translateY(-1px);border-color:#c7dbe8;box-shadow:0 4px 14px rgba(24,64,96,.06)}.inbox-item.overdue{border-color:#edc7c7;background:#fffafa}.inbox-item-icon{width:34px;height:34px;border-radius:10px;background:#edf5fb;display:grid;place-items:center;color:#216c9f;font-weight:700}.inbox-item-copy{min-width:0}.inbox-item-copy strong,.inbox-item-copy small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.inbox-item-copy strong{color:#173b5f;font-size:13px}.inbox-item-copy small{color:#8094a6;font-size:10px;margin-top:3px}.inbox-item-action{font-size:11px;color:#3a79a5;white-space:nowrap}.inbox-empty{padding:22px;text-align:center;color:#7890a5}.inbox-empty b{display:block;color:#46657c;margin-bottom:4px}.inbox-empty span{font-size:12px}
    .inbox-drafts{display:flex;flex-direction:column;gap:6px}.inbox-draft{display:grid;grid-template-columns:30px minmax(0,1fr) auto;gap:10px;align-items:center;border:1px solid #e3eaf0;border-radius:11px;background:#fbfdff;padding:9px 11px;text-align:left;cursor:pointer}.inbox-draft>span{width:30px;height:30px;border-radius:9px;background:#eef4f8;display:grid;place-items:center;color:#66859c}.inbox-draft strong,.inbox-draft small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.inbox-draft strong{font-size:12px;color:#274d69}.inbox-draft small{font-size:10px;color:#8a9baa;margin-top:2px}
    @media(max-width:760px){.inbox-hero{align-items:flex-start}.inbox-stats{grid-template-columns:repeat(2,1fr)}.inbox-item{grid-template-columns:30px minmax(0,1fr)}.inbox-item-action{display:none}.inbox-hero-count{min-width:90px}}
  `;document.head.appendChild(s);
}
installInboxUxStyles();

function installMinimalAdminUiStyles(){
  if(document.getElementById("kedoMinimalAdminUi"))return;
  const s=document.createElement("style");s.id="kedoMinimalAdminUi";s.textContent=`
    .admin-section-count{display:inline-flex;min-width:30px;height:30px;padding:0 9px;align-items:center;justify-content:center;border-radius:999px;background:#eef5fb;color:#1769aa;font-weight:700}
    .employee-section-actions{display:flex;align-items:center;gap:8px}.employee-list{display:flex;flex-direction:column;gap:5px;max-height:520px;overflow:auto;padding:2px 3px 5px 0;transition:max-height .34s ease,opacity .25s ease,margin-top .25s ease}.employee-list.is-collapsed{max-height:0;opacity:0;overflow:hidden;padding-top:0;padding-bottom:0;margin-top:0;pointer-events:none}.employee-toggle{min-height:32px;padding:6px 10px;font-size:12px}
    .employee-row{display:grid;grid-template-columns:minmax(270px,1.45fr) minmax(210px,.9fr) minmax(380px,1.55fr);gap:12px;align-items:center;min-height:64px;padding:9px 11px;border:1px solid #e2e9f0;border-radius:10px;background:#fff;box-sizing:border-box;transition:box-shadow .16s ease,border-color .16s ease,transform .16s ease}
    .employee-row:hover{box-shadow:0 4px 14px rgba(31,55,79,.06);border-color:#d2e0eb;transform:translateY(-1px)}
    .employee-main{display:flex;align-items:center;gap:10px;min-width:0}.employee-avatar{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#eaf3fa;color:#1769aa;font-weight:700;flex:0 0 auto;font-size:12px}
    .employee-identity{display:grid;gap:3px;min-width:0}.employee-identity strong{font-size:14px}.employee-identity span,.employee-identity small{color:#718197;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .employee-access{display:flex;align-items:center;gap:7px;flex-wrap:wrap}
    .employee-actions{display:flex;justify-content:flex-end;gap:5px;flex-wrap:wrap}.employee-actions button{min-height:30px;padding:5px 8px;font-size:12px}
    .audit-filter-minimal{display:flex;gap:6px;flex-wrap:wrap;margin:14px 0}.audit-filter-minimal button{min-height:32px;padding:5px 10px;border-radius:8px}
    .audit-list{display:flex;flex-direction:column;gap:5px}.audit-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:12px;align-items:center;min-height:52px;box-sizing:border-box;padding:8px 11px;border:1px solid #e5ebf1;border-radius:10px;background:#fff}
    .audit-row-top{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.audit-row-top strong{font-size:13px}.audit-row-meta{display:flex;gap:12px;flex-wrap:wrap;margin-top:4px;color:#78889b;font-size:11px}
    .audit-details summary{cursor:pointer;color:#1769aa;font-size:11px;list-style:none}.audit-details summary::-webkit-details-marker{display:none}.audit-details pre{margin:7px 0 0;max-width:480px;max-height:180px;overflow:auto;padding:8px;border-radius:8px;background:#f5f8fb;color:#506174;font-size:10px;white-space:pre-wrap}
    .delegation-card-actions{display:flex;justify-content:flex-end;margin-top:10px;padding-top:10px;border-top:1px solid #edf1f5}.delegation-status.cancelled{background:#f2f3f5;color:#697586}
    @media(max-width:1100px){.employee-row{grid-template-columns:1fr}.employee-actions{justify-content:flex-start}}
    /* 5.29.8 — compact branch picker + admin navigation */
    .group-deps-label{display:flex;align-items:end;justify-content:space-between;gap:10px;margin-top:12px}
    .group-deps-label>div{min-width:0;flex:1}.group-deps-label label{margin:0!important}.group-deps-label small{display:block;color:#8191a2;font-size:10px;margin-top:3px}
    .group-select-all{font-size:11px!important;padding:6px 9px!important;white-space:nowrap}
    .org-group-modal-deps{max-height:230px!important;padding:6px!important;gap:4px!important}
    .group-department-item{min-height:42px!important;height:42px!important;box-sizing:border-box!important;padding:7px 9px!important;border-radius:8px!important;grid-template-columns:18px minmax(0,1fr)!important}
    .group-department-item input{width:16px!important;height:16px!important}
    .group-department-item span{font-size:12px!important;line-height:1.2!important}
    .group-create-dep{margin-top:7px!important;padding-top:7px!important}.group-create-dep input{min-height:38px!important}.group-create-dep button{min-height:38px!important}
    .group-management-modal{width:min(620px,calc(100vw - 34px))!important}
    #adminNav{margin-left:auto!important;position:relative!important}
    #adminNav:before{content:"";position:absolute;left:-8px;top:7px;bottom:7px;width:1px;background:#cfdae4}
    .user-menu-button{background:rgba(255,255,255,.08)!important;color:#fff!important;border:1px solid rgba(255,255,255,.22)!important;box-shadow:none!important}
    @media(max-width:700px){.org-group-buttons{grid-template-columns:1fr}.admin-org-head-actions .primary{font-size:12px;padding:7px 9px}.group-deps-label{align-items:flex-start;flex-direction:column}.group-select-all{align-self:flex-start}#adminNav:before{display:none}}
  `;document.head.appendChild(s);
}
installMinimalAdminUiStyles();

function installAdminEmployeesV2Styles(){}

function installRbacUiStyles(){if(document.getElementById("kedoRbacStyles"))return;const st=document.createElement("style");st.id="kedoRbacStyles";st.textContent=`.role-stack{display:flex;flex-wrap:wrap;gap:4px}.role-badge{display:inline-flex;align-items:center;padding:4px 7px;border-radius:999px;background:#edf5fb;color:#1b638f;font-size:11px;font-weight:700}.role-picker{display:grid;gap:8px;margin:15px 0}.role-option{display:flex;align-items:center;gap:10px;padding:11px 12px;border:1px solid #dbe5ee;border-radius:10px;background:#f9fbfd;cursor:pointer}.role-option input{width:18px;height:18px}.role-option span{display:flex;flex-direction:column;gap:2px}.role-option small{color:#7b8b9b;font-size:11px}`;document.head.appendChild(st);}installRbacUiStyles();
function installAdminEditStyles(){
const old=document.getElementById("kedoAdminEditStyles"); if(old) old.remove();
const old2=document.getElementById("kedoAdminEditStylesV2"); if(old2) old2.remove();
const s=document.createElement("style");s.id="kedoAdminEditStylesV2";s.textContent=`
html body .admin-edit-overlay{
  position:fixed !important;
  left:0 !important; top:0 !important; right:0 !important; bottom:0 !important;
  width:100vw !important; height:100vh !important;
  margin:0 !important; padding:20px !important;
  display:flex !important; align-items:center !important; justify-content:center !important;
  box-sizing:border-box !important;
  background:rgba(15,23,42,.62) !important;
  z-index:2147483000 !important;
}
html body .admin-edit-overlay .admin-edit-modal{
  position:relative !important;
  display:block !important;
  width:min(560px,calc(100vw - 40px)) !important;
  max-height:calc(100vh - 40px) !important;
  overflow:auto !important;
  margin:0 !important; padding:24px !important;
  box-sizing:border-box !important;
  background:#fff !important;
  color:#172033 !important;
  border-radius:14px !important;
  box-shadow:0 25px 70px rgba(0,0,0,.38) !important;
}
html body .admin-edit-overlay .admin-edit-modal h2{margin:0 0 6px !important;color:#173b62 !important}
html body .admin-edit-overlay .admin-edit-modal label{display:block !important;font-weight:600 !important;margin:12px 0 0 !important}
html body .admin-edit-overlay .admin-edit-modal input,
html body .admin-edit-overlay .admin-edit-modal select{
  display:block !important;width:100% !important;box-sizing:border-box !important;
  margin-top:6px !important;padding:10px !important;
  border:1px solid #cbd5e1 !important;border-radius:7px !important;background:#fff !important;
}
html body .admin-edit-overlay .admin-edit-actions{
  display:flex !important;justify-content:flex-end !important;gap:8px !important;margin-top:20px !important;
}
html body .admin-edit-overlay .admin-edit-actions button{width:auto !important;display:inline-block !important}
html body .admin-edit-overlay .admin-edit-modal.kb-access-builder-modal{
  width:min(1050px,calc(100vw - 32px)) !important;
  max-width:min(1050px,calc(100vw - 32px)) !important;
  max-height:min(90vh,780px) !important;
  padding:0 !important;
  overflow:hidden !important;
}
html body .admin-edit-overlay .admin-edit-modal.knowledge-edit-modal{
  width:min(760px,calc(100vw - 32px)) !important;
  max-width:min(760px,calc(100vw - 32px)) !important;
}
html body .admin-edit-overlay.kb-video-dialog-overlay,
html body .admin-edit-overlay.kb-link-dialog-overlay{
  position:fixed !important;
  inset:0 !important;
  left:0 !important; top:0 !important; right:0 !important; bottom:0 !important;
  width:100vw !important; height:100vh !important;
  margin:0 !important; padding:20px !important;
  display:flex !important; align-items:center !important; justify-content:center !important;
  overflow:auto !important; box-sizing:border-box !important;
  background:rgba(15,23,42,.62) !important;
  z-index:2147483000 !important;
}
html body .admin-edit-overlay .kb-video-dialog,
html body .admin-edit-overlay .kb-link-dialog{
  margin:auto !important;
  align-self:center !important;
  flex-shrink:0 !important;
  max-height:calc(100vh - 40px) !important;
}
html body .admin-edit-overlay .kb-video-dialog [data-kb-video-pane][hidden],
html body .admin-edit-overlay .kb-video-dialog [hidden]{
  display:none !important;
}
html body .kedo-workflow-overlay{backdrop-filter:blur(3px) !important;background:rgba(10,27,45,.58) !important;align-items:center !important;justify-content:center !important}
html body .kedo-workflow-modal{width:min(620px,calc(100vw - 32px)) !important;border-radius:18px !important;padding:24px !important;animation:kedoModalIn .24s cubic-bezier(.2,.8,.2,1) both !important}
html body .kedo-workflow-modal .workflow-modal-head{display:flex;align-items:flex-start;justify-content:space-between;gap:14px;margin-bottom:16px}
html body .kedo-workflow-modal .workflow-modal-head h2{font-size:23px !important;margin:2px 0 5px !important}
html body .kedo-workflow-modal .workflow-modal-icon{width:40px;height:40px;border-radius:12px;background:#edf6ff;color:#1769a5;display:grid;place-items:center;font-weight:800;font-size:20px;margin-bottom:10px}
html body .kedo-workflow-modal .workflow-close{border:0;background:#f3f6f9;color:#60748a;width:34px;height:34px;border-radius:50%;font-size:22px;cursor:pointer}
html body .kedo-workflow-modal .workflow-info{margin-top:14px;padding:12px 14px;border:1px solid #dbe8f2;border-radius:11px;background:#f7fbfe;color:#526b82;font-size:13px;line-height:1.45}
html body .kedo-workflow-modal .workflow-recipient-summary{display:flex;gap:12px;align-items:flex-start;margin-top:14px;padding:14px;border:1px solid #dbe8f2;border-radius:11px;background:#f8fbfd}
html body .workflow-recipient-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px}
html body .workflow-recipient-grid>div{min-width:0}
html body .workflow-recipient-grid .workflow-recipient-users{grid-column:1/-1}
html body .workflow-recipient-grid select{width:100%;box-sizing:border-box;min-height:112px;border:1px solid #cbd8e5;border-radius:10px;padding:7px;background:#fff;color:#20364f}
html body .workflow-recipient-grid select:focus{outline:none;border-color:#1976b8;box-shadow:0 0 0 3px rgba(25,118,184,.12)}
@media(max-width:700px){html body .workflow-recipient-grid{grid-template-columns:1fr}html body .workflow-recipient-grid .workflow-recipient-users{grid-column:auto}}
html body .kedo-workflow-modal .workflow-summary-icon{width:30px;height:30px;border-radius:50%;background:#e8f6ee;color:#2c7c50;display:grid;place-items:center;font-weight:800;flex:0 0 auto}
@keyframes kedoModalIn{from{opacity:0;transform:translateY(12px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}
`;
document.head.appendChild(s);
}

function installAdminPolishedStyles(){
  if(document.getElementById("kedoAdminPolishedStyles"))return;
  const s=document.createElement("style");s.id="kedoAdminPolishedStyles";s.textContent=`
  /* =============================
     5.53.23 ADMIN UI POLISH
     FAQ + Audit Journal
     ============================= */
  html body.kedo-admin-modal-lock,html body.kedo-audit-open{overflow:hidden!important}
  html.kedo-admin-modal-lock,html.kedo-audit-open{overflow:hidden!important}

  /* FAQ */
  html body .admin-faq-overlay{
    position:fixed!important;inset:0!important;display:grid!important;place-items:center!important;
    padding:24px!important;background:rgba(15,34,53,.60)!important;
    backdrop-filter:blur(6px)!important;z-index:2147483000!important;
  }
  html body .admin-faq-modal{
    width:min(1240px,calc(100vw - 48px))!important;
    height:min(860px,calc(100vh - 48px))!important;
    max-height:calc(100vh - 48px)!important;
    display:flex!important;flex-direction:column!important;overflow:hidden!important;
    border:1px solid rgba(184,204,221,.9)!important;border-radius:22px!important;
    background:#f7fafc!important;box-shadow:0 28px 90px rgba(10,29,48,.32)!important;
  }
  html body .admin-faq-head{
    flex:0 0 auto!important;padding:22px 26px!important;
    background:linear-gradient(180deg,#ffffff 0%,#f8fbfd 100%)!important;
    border-bottom:1px solid #dde7ef!important;
  }
  html body .admin-faq-head h2{font-size:25px!important;letter-spacing:-.02em!important;color:#153e63!important}
  html body .admin-faq-head .muted{font-size:13px!important;color:#71859a!important}
  html body .admin-faq-layout{grid-template-columns:248px minmax(0,1fr)!important;min-height:0!important;flex:1 1 auto!important;overflow:hidden!important}
  html body .admin-faq-nav{
    padding:16px!important;background:#f3f7fa!important;border-right:1px solid #dde7ef!important;
    overflow-y:auto!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important;
  }
  html body .admin-faq-nav button{
    width:100%!important;padding:11px 13px!important;margin:0 0 6px!important;
    border:1px solid transparent!important;border-radius:11px!important;background:transparent!important;
    color:#36536c!important;font-size:12px!important;font-weight:600!important;transition:.18s ease!important;
  }
  html body .admin-faq-nav button:hover{background:#eaf3f9!important;border-color:#d4e4ef!important;transform:none!important}
  html body .admin-faq-nav button.active{background:linear-gradient(135deg,#1675b8,#17679e)!important;color:#fff!important;border-color:transparent!important;box-shadow:0 7px 18px rgba(23,105,158,.20)!important}
  html body .admin-faq-content{
    min-width:0!important;min-height:0!important;padding:18px 24px 30px!important;
    overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;
    scrollbar-gutter:stable!important;background:#fff!important;scroll-behavior:smooth!important;
  }
  html body .admin-faq-search{
    position:sticky!important;top:0!important;z-index:30!important;padding:0 0 16px!important;
    background:linear-gradient(#fff 74%,rgba(255,255,255,0))!important;
  }
  html body .admin-faq-search:before{content:'⌕';position:absolute;left:13px;top:11px;color:#7b90a4;font-size:16px;pointer-events:none;z-index:2}
  html body .admin-faq-search input{
    min-height:44px!important;padding:10px 13px 10px 35px!important;border:1px solid #cbd9e5!important;
    border-radius:12px!important;background:#fbfdff!important;color:#20364f!important;font-size:13px!important;
    box-shadow:0 2px 8px rgba(27,65,95,.04)!important;outline:none!important;
  }
  html body .admin-faq-search input:focus{border-color:#6ea8cd!important;box-shadow:0 0 0 4px rgba(44,125,179,.12)!important;background:#fff!important}
  html body .admin-faq-section{scroll-margin-top:76px!important;margin:0 0 30px!important}
  html body .admin-faq-section h3{
    margin:0!important;padding:0 0 4px!important;font-size:18px!important;letter-spacing:-.01em!important;color:#173f66!important;
  }
  html body .admin-faq-section-intro{margin:0 0 12px!important;color:#7890a4!important;font-size:12px!important}
  html body .admin-faq-section h3:after{content:'';display:block;width:34px;height:3px;margin-top:8px;border-radius:99px;background:#2a82ba}
  html body .admin-faq-item{
    margin:8px 0!important;border:1px solid #dce7ef!important;border-radius:13px!important;
    background:linear-gradient(180deg,#fff 0%,#fbfdff 100%)!important;overflow:hidden!important;
    box-shadow:0 2px 10px rgba(23,61,91,.03)!important;transition:.18s ease!important;
  }
  html body .admin-faq-item:hover{border-color:#bed3e2!important;box-shadow:0 8px 22px rgba(23,61,91,.07)!important;transform:translateY(-1px)!important}
  html body .admin-faq-item[open]{border-color:#a9c8dd!important;box-shadow:0 9px 26px rgba(22,91,136,.09)!important}
  html body .admin-faq-item summary{padding:14px 16px!important;font-size:13px!important;color:#27435c!important;gap:11px!important}
  html body .admin-faq-item summary:before{width:24px!important;height:24px!important;border-radius:8px!important;background:#eef6fb!important;color:#1776b4!important;font-size:17px!important;font-weight:700!important}
  html body .admin-faq-item[open] summary:before{background:#e2f1fa!important}
  html body .admin-faq-answer{padding:0 18px 16px 51px!important;color:#5a7186!important;font-size:12.5px!important;line-height:1.7!important}
  html body .admin-faq-path{background:#f3f8fb!important;border:1px solid #d7e6ef!important;border-radius:8px!important;color:#2b6389!important;padding:6px 9px!important}
  html body .admin-faq-empty{margin:24px 0!important;padding:34px!important;border:1px dashed #ccdbe7!important;border-radius:14px!important;background:#f9fbfd!important}

  /* Audit Journal */
  html body .audit-journal-overlay{
    position:fixed!important;inset:0!important;display:flex!important;align-items:center!important;justify-content:center!important;
    padding:24px!important;background:rgba(15,34,53,.60)!important;backdrop-filter:blur(6px)!important;
    z-index:2147483001!important;overflow:hidden!important;box-sizing:border-box!important;
  }
  html body .audit-journal-modal{
    width:min(1240px,calc(100vw - 48px))!important;height:min(860px,calc(100vh - 48px))!important;
    max-height:calc(100vh - 48px)!important;display:flex!important;flex-direction:column!important;
    min-height:0!important;overflow:hidden!important;padding:24px!important;
    border:1px solid rgba(184,204,221,.95)!important;border-radius:22px!important;
    background:#f7fafc!important;box-shadow:0 28px 90px rgba(10,29,48,.32)!important;
  }
  html body .audit-journal-head{
    flex:0 0 auto!important;margin:0!important;padding:0 0 14px!important;
    align-items:flex-start!important;border-bottom:1px solid #e0e9f0!important;
  }
  html body .audit-journal-head h2{font-size:25px!important;letter-spacing:-.02em!important;color:#153e63!important}
  html body .audit-journal-head .muted{font-size:13px!important;color:#71859a!important}
  html body .audit-journal-modal .audit-modal-search{
    flex:0 0 auto!important;position:relative!important;margin:14px 0 9px!important;z-index:20!important;
  }
  html body .audit-modal-search:before{content:'⌕';position:absolute;left:13px;top:11px;color:#7b90a4;font-size:16px;pointer-events:none;z-index:2}
  html body .audit-modal-search input{
    width:100%!important;min-height:44px!important;box-sizing:border-box!important;
    padding:10px 13px 10px 35px!important;border:1px solid #cbd9e5!important;border-radius:12px!important;
    background:#fbfdff!important;color:#20364f!important;font-size:13px!important;outline:none!important;
  }
  html body .audit-modal-search input:focus{border-color:#6ea8cd!important;box-shadow:0 0 0 4px rgba(44,125,179,.12)!important;background:#fff!important}
  html body .audit-modal-filters{
    flex:0 0 auto!important;display:flex!important;align-items:center!important;gap:7px!important;
    flex-wrap:nowrap!important;overflow-x:auto!important;overflow-y:hidden!important;white-space:nowrap!important;
    padding:2px 2px 11px!important;scrollbar-gutter:stable!important;
  }
  html body .audit-modal-filters button{
    flex:0 0 auto!important;min-height:36px!important;padding:7px 13px!important;border-radius:999px!important;
    font-size:12px!important;font-weight:700!important;white-space:nowrap!important;
  }
  html body .audit-modal-filters button.secondary{background:#fff!important;border:1px solid #ccdbe7!important;color:#3a5670!important}
  html body .audit-modal-filters button.secondary:hover{background:#eef6fb!important;border-color:#b8d0e0!important}
  html body .audit-modal-filters button.primary{background:linear-gradient(135deg,#1776b6,#1d6da3)!important;border-color:transparent!important;box-shadow:0 4px 12px rgba(22,104,157,.16)!important}
  html body .audit-modal-list{
    flex:1 1 auto!important;min-height:0!important;max-height:none!important;height:auto!important;
    overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;
    scrollbar-gutter:stable!important;padding:2px 6px 8px 0!important;
  }
  html body .audit-modal-list .audit-row{
    display:grid!important;grid-template-columns:minmax(0,1fr) auto!important;gap:16px!important;align-items:center!important;
    min-height:64px!important;padding:11px 14px!important;margin:7px 0!important;
    border:1px solid #dce7ef!important;border-radius:13px!important;
    background:linear-gradient(180deg,#fff 0%,#fbfdff 100%)!important;
    box-shadow:0 2px 10px rgba(23,61,91,.03)!important;transition:.18s ease!important;
  }
  html body .audit-modal-list .audit-row:hover{border-color:#bcd2e1!important;box-shadow:0 8px 22px rgba(23,61,91,.07)!important;transform:translateY(-1px)!important}
  html body .audit-modal-list .audit-row-top{display:flex!important;align-items:center!important;gap:9px!important;min-width:0!important}
  html body .audit-modal-list .audit-row-top strong{font-size:13px!important;color:#193d5c!important;letter-spacing:.01em!important}
  html body .audit-modal-list .audit-row-meta{display:flex!important;align-items:center!important;gap:10px!important;margin-top:5px!important;color:#7a8ea1!important;font-size:11px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}
  html body .audit-modal-list .audit-category-badge{display:inline-flex!important;align-items:center!important;min-height:22px!important;padding:4px 8px!important;border-radius:999px!important;background:#edf5fa!important;color:#2a6b96!important;font-size:10px!important;font-weight:800!important;letter-spacing:.02em!important}
  html body .audit-modal-list .audit-details{flex:0 0 auto!important;min-width:74px!important}
  html body .audit-modal-list .audit-details summary{display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:34px!important;padding:7px 10px!important;border-radius:9px!important;background:#f4f8fb!important;border:1px solid #d4e2eb!important;color:#266b98!important;font-size:11px!important;font-weight:700!important;cursor:pointer!important}
  html body .audit-modal-list .audit-details summary:hover{background:#eaf4fa!important;border-color:#bed4e3!important}
  html body .audit-modal-list .audit-details pre{max-width:min(620px,70vw)!important;max-height:240px!important;margin:8px 0 0!important;padding:10px!important;border-radius:10px!important;background:#f4f8fb!important;color:#314b63!important;border:1px solid #d4e2eb!important;overflow:auto!important;font-size:10px!important}
  html body .audit-modal-list .audit-payload,html body .audit-details .audit-payload{
    margin:8px 0 0;display:grid;gap:6px;min-width:min(420px,70vw);max-width:min(620px,78vw);
    padding:10px 12px;border:1px solid #d4e2eb;border-radius:10px;background:#f7fbff;color:#314b63;font-size:12px
  }
  html body .audit-payload>div{display:grid;grid-template-columns:minmax(120px,.4fr) minmax(0,1fr);gap:8px;align-items:start}
  html body .audit-payload dt{color:#6d8296;font-weight:600}
  html body .audit-payload dd{margin:0;color:#1d3d58;word-break:break-word}
  html body .audit-payload-empty{margin:8px 0 0;color:#7a8ea1;font-size:12px}
  html body .audit-search-empty,html body .audit-loading,html body .audit-empty{margin:24px 0!important;padding:34px!important;border:1px dashed #ccdbe7!important;border-radius:14px!important;background:#f9fbfd!important;color:#7a8ea1!important;text-align:center!important}
  @media(max-width:820px){
    html body .admin-faq-modal,html body .audit-journal-modal{width:calc(100vw - 24px)!important;height:calc(100vh - 24px)!important;max-height:none!important}
    html body .admin-faq-layout{grid-template-columns:1fr!important}
    html body .admin-faq-nav{display:flex!important;gap:6px!important;overflow-x:auto!important;overflow-y:hidden!important;border-right:0!important;border-bottom:1px solid #dde7ef!important;padding:10px!important}
    html body .admin-faq-nav button{width:auto!important;white-space:nowrap!important;margin:0!important}
  }
  @media(max-width:640px){
    html body .audit-modal-list .audit-row{grid-template-columns:1fr!important}
    html body .audit-modal-list .audit-details{justify-self:start!important}
  }
  `;document.head.appendChild(s);
}
installAdminPolishedStyles();

function installAdminUiStabilityStyles(){
if(document.getElementById("kedoAdminUiStabilityStyles"))return;
const s=document.createElement("style");s.id="kedoAdminUiStabilityStyles";s.textContent=`
.admin-actions{display:grid!important;grid-template-columns:repeat(2,minmax(130px,1fr));gap:7px!important;min-width:280px}
.admin-actions button{width:100%!important;min-width:0!important}
.admin-users-table{table-layout:auto}
.task-create .doc-actions,.card>.doc-actions{display:flex;flex-wrap:wrap;gap:8px}
.nav button{min-height:40px;white-space:nowrap}
@media(max-width:900px){.admin-actions{grid-template-columns:1fr}}
`;
document.head.appendChild(s);
}
function installAdminStyles(){
if(document.getElementById("kedoAdminStyles"))return;
const s=document.createElement("style");s.id="kedoAdminStyles";s.textContent=`
.admin-stats{display:flex;gap:12px;margin:0 0 18px;flex-wrap:wrap}
 .admin-stat{background:#fff;border:1px solid #e3e9f0;border-radius:10px;padding:12px 20px;min-width:120px}
 .admin-stat b{display:block;font-size:22px;color:#173b62}
 .admin-stat span{font-size:12px;color:#718096}
 .admin-stat small{display:block;margin-top:3px;font-size:10px;color:#98a2b3}.admin-stat-online{border-color:#c8eadb;background:linear-gradient(145deg,#fff,#f4fcf8)}.admin-stat-online b{color:#188255}.admin-stat-online span{color:#23734f}
.admin-departments{display:flex;gap:7px;flex-wrap:wrap;margin-top:14px}.admin-department-chip{display:flex;align-items:center;gap:5px;background:#eef4fa;border:1px solid #dbe5ef;border-radius:15px;padding:4px 5px 4px 10px;font-size:12px;color:#344054}.admin-department-chip button{width:22px;height:22px;border:0;border-radius:50%;background:#fff;color:#98a2b3;cursor:pointer;font-size:16px;line-height:20px}.admin-department-chip button:hover{background:#fff1f0;color:#b42318}
.admin-departments-panel{margin-top:14px;border:1px solid #e2e9f0;border-radius:14px;background:#fbfdff;overflow:hidden;transition:max-height .3s ease,opacity .25s ease}
.admin-departments-panel.is-collapsed{max-height:0;opacity:0;overflow:hidden;margin-top:0;border-color:transparent;pointer-events:none}
.admin-departments-panel:not(.is-collapsed){max-height:520px;opacity:1}
.admin-departments-toolbar{display:flex;align-items:center;gap:10px;padding:12px 14px;border-bottom:1px solid #e8edf3;background:#f7fafc}
.admin-departments-toolbar input[type=search]{flex:1;min-width:0}
.admin-departments-count{flex:none;padding:4px 10px;border-radius:999px;background:#eaf3fb;color:#1769aa;font-size:11px;font-weight:700}
.admin-departments-table-wrap{max-height:380px;overflow:auto}
.admin-departments-table{width:100%;border-collapse:collapse;font-size:13px}
.admin-departments-table th{padding:10px 14px;text-align:left;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:#7d8fa3;background:#f4f8fb;border-bottom:1px solid #e8edf3;position:sticky;top:0}
.admin-departments-table td{padding:11px 14px;border-bottom:1px solid #eef2f6;color:#344054;vertical-align:middle}
.admin-departments-table tr:last-child td{border-bottom:0}
.admin-departments-table tr:hover td{background:#f8fbfe}
.admin-departments-table td:last-child{text-align:right}
.admin-dept-del{min-height:30px;padding:5px 10px;font-size:12px}.admin-requests-card{margin:18px 0}.request-count{background:#eaf3fb;color:#1769aa;border-radius:999px;padding:6px 10px;font-size:12px;font-weight:700}.account-request-row{display:flex;justify-content:space-between;gap:18px;padding:15px 0;border-top:1px solid #e8edf3;align-items:center}.account-request-row.pending{background:#fbfdff}.account-request-main{min-width:0}.request-id{font-size:11px;color:#8a97a6;margin-bottom:5px}.account-request-main strong{display:block;color:#20364f;font-size:15px;margin-bottom:4px}.request-status{margin-top:7px;font-size:12px;color:#667085}.account-request-row .doc-actions{flex:0 0 auto}@media(max-width:700px){.account-request-row{flex-direction:column;align-items:stretch}.account-request-row .doc-actions{justify-content:flex-start}}

.admin-departments span{background:#eef4fa;border-radius:15px;padding:5px 10px;font-size:12px}
.admin-section-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}
.admin-users-table th{white-space:nowrap}
.admin-users-table td{vertical-align:middle}
.admin-users-table .actions-col{min-width:300px}
.admin-actions{display:flex;gap:6px;flex-wrap:wrap;align-items:center}
.admin-actions button{margin:0;white-space:nowrap}
.role-badge{display:inline-block;padding:4px 8px;border-radius:6px;background:#f1f5f9;font-size:12px}
.status-badge{display:inline-block;padding:4px 8px;border-radius:6px;font-size:12px}
.status-badge.active{background:#e8f7ee;color:#18794e}
.status-badge.blocked{background:#fff4df;color:#9a6700}
.status-badge.deleted{background:#f3f4f6;color:#6b7280}
.danger-outline{border:1px solid #cf3030;background:#fff;color:#b42323;border-radius:7px;padding:8px 10px;cursor:pointer}
.deleted-user{opacity:.6}.task-card{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:18px;padding:16px 0;border-top:1px solid #e8edf3}.task-card:first-child{border-top:0}.task-title{font-weight:700;font-size:16px;color:#20364f;margin-bottom:5px}.task-meta{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:10px;font-size:12px;color:#667085}.task-status{display:inline-flex;align-items:center;padding:5px 9px;border-radius:999px;font-weight:600;background:#eef2f6}.status-open{background:#eaf3fb;color:#1769aa}.status-in_progress{background:#fff4df;color:#9a6700}.status-done{background:#e8f7ee;color:#18794e}.status-cancelled{background:#f3f4f6;color:#667085}.task-doc{display:inline-block;margin-top:8px;padding:7px 10px;border-radius:8px;background:#f5f8fb;border:1px solid #e0e7ef;font-size:13px}.task-actions{justify-content:flex-end}.section-head{display:flex;justify-content:space-between;align-items:flex-start;gap:15px}.access-modal{width:min(700px,calc(100vw - 40px))!important}@media(max-width:700px){.task-card{grid-template-columns:1fr}.task-actions{justify-content:flex-start}}
.admin-password-note{margin-top:12px;padding:10px 12px;background:#f8fafc;border-radius:7px;color:#64748b;font-size:12px}
@media(max-width:1100px){.admin-users-table .actions-col{min-width:220px}.admin-actions{flex-direction:column;align-items:stretch}.admin-actions button{width:100%}}
`;
document.head.appendChild(s);
}

function installAdminLoadWarningStyles(){
  if(document.getElementById("kedoAdminLoadWarningStyles"))return;
  const s=document.createElement("style");s.id="kedoAdminLoadWarningStyles";s.textContent=`.admin-load-warning{display:flex;gap:10px;align-items:flex-start;padding:11px 13px;margin:10px 0 14px;border:1px solid #f0d7a7;border-radius:10px;background:#fffaf0;color:#5f4a24;font-size:12px}.admin-load-warning span{color:#7c6b4e}.admin-load-warning strong{white-space:nowrap}@media(max-width:760px){.admin-load-warning{display:grid}}`;document.head.appendChild(s);
}
installAdminLoadWarningStyles();

function installPolishStyles(){
  if(document.getElementById("kedoPolishStyles"))return;
  const s=document.createElement("style");s.id="kedoPolishStyles";s.textContent=`
    button,.nav button,.primary,.secondary,.danger,.danger-outline{
      transition:transform .14s ease,box-shadow .18s ease,background-color .18s ease,border-color .18s ease,color .18s ease,opacity .18s ease!important;
    }
    button:hover{transform:translateY(-1px)}
    button:active{transform:translateY(0) scale(.98)}
    button:focus-visible{outline:3px solid rgba(23,105,170,.18);outline-offset:2px}
    .card,.task-card,.account-request-row,.admin-department-chip,.org-group-row{
      transition:box-shadow .18s ease,border-color .18s ease,background-color .18s ease;
    }
    .card:hover{box-shadow:0 5px 18px rgba(30,60,90,.05)}
    .task-archive-collapsible{margin:18px 0;border:1px solid #dfe7ef;border-radius:12px;background:#fff;overflow:hidden}
    .task-archive-collapsible summary,.admin-collapsible-summary{
      list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:14px;
      padding:15px 17px;color:#173b62;user-select:none;
    }
    .task-archive-collapsible summary::-webkit-details-marker,.admin-collapsible-summary::-webkit-details-marker{display:none}
    .task-archive-collapsible summary:before,.admin-collapsible-summary:before{
      content:"›";font-size:22px;color:#7890a5;transform:rotate(0deg);transition:transform .18s ease;
    }
    .task-archive-collapsible[open] summary:before,.admin-collapsible[open] .admin-collapsible-summary:before{transform:rotate(90deg)}
    .task-archive-collapsible summary>span,.admin-collapsible-summary>span:first-child{display:flex;flex-direction:column;gap:3px;flex:1}
    .task-archive-collapsible summary small,.admin-collapsible-summary small{font-size:12px;font-weight:400;color:#738397}
    .task-archive-collapsible summary>b{min-width:28px;height:28px;border-radius:999px;background:#edf5fb;color:#1769aa;display:grid;place-items:center;font-size:12px}
    .task-archive-body{padding:0 17px 17px;border-top:1px solid #edf1f5;animation:kedoReveal .18s ease}
    .admin-collapsible{padding:0;overflow:hidden}
    .admin-collapsible-body{padding:0 17px 17px;border-top:1px solid #edf1f5;animation:kedoReveal .18s ease}
    .admin-org-groups{overflow:visible}.quarantine-list{display:grid;gap:8px}.quarantine-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 12px;border:1px solid #f0d4d4;border-radius:10px;background:#fff8f8}.role-access-toolbar{display:flex;align-items:end;gap:14px;margin:14px 0}.role-access-toolbar label{display:grid;gap:6px;min-width:260px}.role-access-toolbar select{padding:9px 10px;border:1px solid #ccd8e4;border-radius:8px;background:#fff}.role-access-grid{display:grid;gap:7px}.role-access-row{display:grid;grid-template-columns:1fr 190px;gap:16px;align-items:center;padding:11px 12px;border:1px solid #e1e8ef;border-radius:9px;background:#f9fbfd}.role-access-row>div{display:grid;gap:3px}.role-access-row small{color:#718096;font-size:11px}.role-access-row select{padding:8px 10px;border:1px solid #ccd8e4;border-radius:8px;background:#fff}@media(max-width:700px){.role-access-row{grid-template-columns:1fr}.role-access-toolbar{align-items:stretch;flex-direction:column}.quarantine-row{align-items:stretch;flex-direction:column}}
    .admin-org-head-actions{display:flex;align-items:center;gap:8px}.admin-org-head-actions .primary{white-space:nowrap}
    .admin-page-top{display:flex;align-items:flex-end;justify-content:space-between;gap:14px;margin-bottom:10px}.admin-page-top .page-title{margin-bottom:0}.admin-build-info{display:flex;align-items:center;gap:7px;margin-bottom:4px;padding:5px 9px;border:1px solid #dce7ef;border-radius:999px;background:#f8fbfd;color:#7a8d9e;font-size:10px;white-space:nowrap}.admin-build-info strong{color:#236d9c;font-size:11px}.admin-build-info code{padding:2px 5px;border-radius:5px;background:#eaf3f8;color:#55748a;font:10px ui-monospace,SFMono-Regular,Consolas,monospace}.admin-version-list{display:grid;gap:0;margin-top:14px}.admin-version-row{display:flex;align-items:flex-start;gap:11px;padding:11px 0;border-top:1px solid #edf2f6}.admin-version-row:first-child{border-top:0}.admin-version-index{display:grid;place-items:center;flex:0 0 24px;width:24px;height:24px;border-radius:8px;background:#eaf3f8;color:#236d9c;font-size:10px;font-weight:800}.admin-version-main{min-width:0;flex:1}.admin-version-main>div{display:flex;align-items:center;gap:7px;flex-wrap:wrap}.admin-version-main strong{color:#294861;font-size:12px}.admin-version-main code{padding:3px 6px;border-radius:5px;background:#f1f6f9;color:#5b788c;font:10px ui-monospace,SFMono-Regular,Consolas,monospace}.admin-version-main small{display:block;margin-top:4px;color:#8293a2;font-size:10px}.admin-version-history .admin-section-head{align-items:flex-start}@media(max-width:700px){.admin-page-top{align-items:flex-start;flex-direction:column;gap:5px}.admin-build-info{margin-bottom:0}}
    .org-group-buttons{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:7px;margin-top:12px}
    .org-group-button{width:100%;display:flex;align-items:center;justify-content:space-between;gap:12px;text-align:left;padding:11px 13px;border:1px solid #dfe7ef;border-radius:10px;background:#fff;color:#173b62;cursor:pointer}
    .org-group-button:hover{border-color:#bcd3e5;background:#f9fcff;box-shadow:0 3px 10px rgba(28,68,103,.05)}
    .org-group-button-main{display:flex;flex-direction:column;gap:3px;min-width:0}.org-group-button-main strong{font-size:13px}.org-group-button-main small{font-size:11px;color:#7a8a9c;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.org-group-button-arrow{font-size:22px;color:#7890a5;line-height:1}.org-group-button-actions{display:flex;align-items:center;gap:6px;flex:none}.org-group-button-actions button{min-height:30px!important;padding:5px 8px!important;font-size:11px!important}
    .org-group-modal-deps{display:grid;gap:6px;max-height:260px;overflow:auto;margin-top:7px;padding:7px;border:1px solid #e1e8ef;border-radius:10px;background:#f8fafc}
    .org-group-create{padding:14px;background:#f8fafc;border:1px solid #e5ebf2;border-radius:10px}
    .org-group-list{display:grid;gap:0;margin-top:12px}
    .org-group-row{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:14px 0;border-top:1px solid #e8edf3}
    .org-group-deps{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px}
    .org-group-deps span{font-size:11px;padding:4px 7px;border-radius:999px;background:#eef5fb;color:#4a647d}
    .org-group-edit-picker{max-height:260px;overflow:auto}.workflow-modal{width:min(520px,calc(100vw - 40px))!important}.workflow-modal select{width:100%;min-height:42px}
    .recipient-option .recipient-sub{display:block;color:#8492a1;font-size:10px;margin-top:2px}
    /* Branch cards: keep long names readable and prevent grid row stretching. */
    #main .org-group-buttons{grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr));gap:12px;align-items:start}
    #main .org-group-button{box-sizing:border-box;min-width:0;min-height:0;height:auto;display:flex!important;flex-direction:column!important;align-items:stretch!important;justify-content:flex-start!important;gap:12px;padding:15px;overflow:hidden}
    #main .org-group-button-main{box-sizing:border-box;display:flex!important;flex-direction:column!important;min-width:0!important;width:100%!important;max-width:100%!important}
    #main .org-group-button-title,#main .org-group-button-meta{box-sizing:border-box;display:block!important;max-width:100%!important;white-space:normal!important;word-break:normal!important;overflow-wrap:break-word!important;hyphens:auto}
    #main .org-group-button-title{min-height:20px!important;color:#173b62!important;font-size:14px!important;font-weight:700!important;line-height:1.3!important}
    #main .org-group-button-meta{margin-top:5px!important;color:#7a8a9c!important;font-size:11px!important;line-height:1.35!important}
    #main .org-group-button-actions{display:flex;align-items:center;flex-wrap:wrap;gap:6px;width:100%;min-width:0}
    .org-group-button-actions button{min-height:32px!important;padding:6px 9px!important;font-size:11px!important}
    @media(max-width:700px){.org-group-buttons{grid-template-columns:1fr}}
    @keyframes kedoReveal{from{opacity:0;transform:translateY(-3px)}to{opacity:1;transform:translateY(0)}}
  `;
  document.head.appendChild(s);
}

(function installFilePreviewStyles(){
  if(document.getElementById("kedoFilePreviewStyles"))return;
  const s=document.createElement("style");s.id="kedoFilePreviewStyles";s.textContent=`
    .kedo-file-preview-overlay{position:fixed;inset:0;z-index:10050;background:rgba(13,27,42,.56);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;padding:22px;animation:kedoPreviewFade .16s ease;overscroll-behavior:contain;touch-action:none}
    .kedo-file-preview-modal{width:min(1180px,96vw);height:min(88vh,900px);background:#fff;border:1px solid #dbe5ee;border-radius:16px;box-shadow:0 24px 70px rgba(17,45,72,.25);overflow:hidden;display:flex;flex-direction:column}
    .kedo-file-preview-head{min-height:64px;display:flex;align-items:center;justify-content:space-between;gap:14px;padding:10px 16px;border-bottom:1px solid #e6edf3;background:#fbfdff}.kedo-file-preview-actions{display:flex;gap:8px}.kedo-file-preview-body{flex:1;min-height:0;background:#eef3f7;display:grid;place-items:stretch;overflow:hidden}.kedo-file-preview-body iframe{width:100%;height:100%;border:0;display:block;overscroll-behavior:contain;touch-action:auto}
    .kedo-preview-loading,.kedo-preview-error{display:grid;place-content:center;justify-items:center;text-align:center;gap:10px;height:100%;padding:24px;color:#5a7186}
    .kedo-preview-spinner{width:34px;height:34px;border:3px solid #d7e4ed;border-top-color:#1976b8;border-radius:50%;animation:kedoSpin .8s linear infinite}
    .kedo-preview-error-icon{font-size:34px;line-height:1}.kedo-preview-error strong{font-size:18px;color:#173f58}.kedo-preview-error p{max-width:420px;margin:0;font-size:13px;line-height:1.5;color:#6b8296}
    @keyframes kedoSpin{to{transform:rotate(360deg)}}
    @keyframes kedoPreviewFade{from{opacity:0}to{opacity:1}}
    @media(max-width:700px){.kedo-file-preview-overlay{padding:8px}.kedo-file-preview-modal{width:100%;height:94vh;border-radius:12px}.kedo-file-preview-head{padding:8px 10px}.kedo-file-preview-actions .secondary{padding:8px 10px}}
  `;document.head.appendChild(s);
})();
installPolishStyles();

async function createEmployee(){
try{
  const requestedRole=$("eRole").value;
  const fullName=$("eName").value.trim(),login=$("eLogin").value.trim(),password=$("ePassword").value;
  const trainingExitPassword=requestedRole==="new_employee"?$("eTrainingExitPassword")?.value||"":"";
  if(!fullName||!login||!password){msg("eMsg","Заполните ФИО, логин и пароль аккаунта.");return;}
  if(password.length<8){msg("eMsg","Пароль аккаунта должен содержать минимум 8 символов.");return;}
  if(requestedRole==="new_employee"&&trainingExitPassword.length<8){msg("eMsg","Специальный пароль выхода должен содержать минимум 8 символов.");return;}
  const created=await api("/api/admin/employees",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
    fullName,login,password,
    position:$("ePosition").value,orgGroupId:$("eGroup").value?Number($("eGroup").value):null,departmentId:$("eDep").value?Number($("eDep").value):null,supervisorId:$("eSupervisor").value?Number($("eSupervisor").value):null,
    role:requestedRole,
    trainingExitPassword:requestedRole==="new_employee"?trainingExitPassword:null
  })});
  document.querySelector(".admin-create-employee-overlay")?.remove();
  renderAdmin();
}catch(e){msg("eMsg",e.message);}
}
async function createDepartment(){
try{await api("/api/admin/departments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:$("dName").value})});document.querySelector(".admin-departments-overlay")?.remove();renderAdmin();}catch(e){msg("dMsg",e.message);}
}
async function editEmployee(id){
try{
const employees=await api("/api/admin/employees");const e=employees.find(x=>x.id===id);if(!e)return;
const [deps,groups]=await Promise.all([api("/api/admin/departments"),api("/api/admin/org-groups")]);
document.querySelectorAll(".admin-edit-overlay").forEach(x=>x.remove());
const overlay=document.createElement("div");overlay.className="admin-edit-overlay";
overlay.innerHTML=`<div class="admin-edit-modal">
<h2>Изменить профиль</h2>
<div class="muted" style="margin-bottom:14px">${esc(e.full_name)} · ${esc(e.login)}</div>
<label>ФИО<input id="editFullName" value="${esc(e.full_name)}"></label>
<label>Логин<input id="editLogin" value="${esc(e.login)}"></label>
<label>Должность<input id="editPosition" value="${esc(e.position||"")}"></label>
<label>Филиал<select id="editGroup"><option value="">Основное здание / без филиала</option>${groups.map(g=>`<option value="${g.id}" ${String(g.id)===String(e.org_group_id)?"selected":""}>${esc(g.name)}</option>`).join("")}</select></label>
<label>Подразделение<select id="editDepartment"><option value="">Без подразделения</option>${deps.map(d=>`<option value="${d.id}" ${String(d.id)===String(e.department_id)?"selected":""}>${esc(d.name)}</option>`).join("")}</select></label>
<label>Непосредственный руководитель<select id="editSupervisor"><option value="">Не назначен</option></select><small class="muted">Можно выбрать сотрудника из того же филиала. Ручной выбор сохраняется и имеет приоритет над автоматической иерархией.</small></label>
<p class="muted">Роли меняются отдельной кнопкой «Роли», а не через профиль.</p>
<div class="admin-edit-actions"><button class="secondary" id="editCancel">Отмена</button><button class="primary" id="editSave">Сохранить</button></div>
</div>`;
document.body.appendChild(overlay);
installAdminEditStyles();
const supervisorSelect=overlay.querySelector("#editSupervisor"),groupSelect=overlay.querySelector("#editGroup");
const drawSupervisorOptions=()=>{
  const groupValue=groupSelect.value||"";
  const options=employees.filter(item=>item.is_active&&Number(item.id)!==Number(id)&&String(item.org_group_id||"")===groupValue);
  supervisorSelect.innerHTML='<option value="">Не назначен</option>'+options.map(item=>`<option value="${item.id}" ${String(item.id)===String(e.supervisor_id||"")?"selected":""}>${esc(item.full_name)}${item.position?` · ${esc(item.position)}`:""}</option>`).join("");
};
drawSupervisorOptions();groupSelect.addEventListener("change",drawSupervisorOptions);
const close=()=>{overlay.remove();document.removeEventListener("keydown",onKey);};
const onKey=(ev)=>{if(ev.key==="Escape")close();};
document.addEventListener("keydown",onKey);
overlay.querySelector("#editCancel").onclick=close;
overlay.addEventListener("click",ev=>{if(ev.target===overlay)close();});
overlay.querySelector("#editSave").onclick=async()=>{
try{
const body={full_name:overlay.querySelector("#editFullName").value.trim(),login:overlay.querySelector("#editLogin").value.trim(),position:overlay.querySelector("#editPosition").value.trim(),org_group_id:overlay.querySelector("#editGroup").value?Number(overlay.querySelector("#editGroup").value):null,department_id:overlay.querySelector("#editDepartment").value?Number(overlay.querySelector("#editDepartment").value):null,supervisor_id:overlay.querySelector("#editSupervisor").value?Number(overlay.querySelector("#editSupervisor").value):null};
if(!body.full_name||!body.login)return kedoAlert("ФИО и логин обязательны.");
await api("/api/admin-tools/employees/"+id,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
close();renderAdmin();
}catch(err){kedoAlert(err.message);}
};
}catch(err){kedoAlert(err.message);}
}
async function editEmployeeRoles(id){try{const [employees,roles]=await Promise.all([api("/api/admin/employees"),api("/api/admin/roles")]);const e=employees.find(x=>Number(x.id)===Number(id));if(!e)return;const selected=new Set(Array.isArray(e.roles)&&e.roles.length?e.roles:[e.role]);document.querySelectorAll(".admin-edit-overlay").forEach(x=>x.remove());const overlay=document.createElement("div");overlay.className="admin-edit-overlay";overlay.innerHTML=`<div class="admin-edit-modal"><h2>Роли пользователя</h2><p class="muted">${esc(e.full_name)} · ${esc(e.login)}</p><div class="role-picker">${roles.map(r=>`<label class="role-option"><input type="checkbox" value="${esc(r.code)}" ${selected.has(r.code)?"checked":""}><span><strong>${esc(r.name)}</strong><small>Уровень ${r.rank}</small></span></label>`).join("")}</div><p class="muted">«Учебный аккаунт» оставляет только базу знаний, одну учебную папку и требует отдельный пароль для выхода.</p><div class="admin-edit-actions"><button class="secondary" id="roleCancel">Отмена</button><button class="primary" id="roleSave">Сохранить роли</button></div><p id="roleMsg" class="muted"></p></div>`;document.body.appendChild(overlay);installAdminEditStyles();const close=()=>overlay.remove();overlay.querySelector("#roleCancel").onclick=close;overlay.addEventListener("click",ev=>{if(ev.target===overlay)close();});overlay.querySelector("#roleSave").onclick=async()=>{let chosen=[...overlay.querySelectorAll("input[type=checkbox]:checked")].map(x=>x.value);if(chosen.includes("new_employee"))chosen=["new_employee"];if(!chosen.length){overlay.querySelector("#roleMsg").textContent="Нужно оставить хотя бы одну роль.";return;}try{await api("/api/admin-utils/employees/"+id+"/roles",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({roles:chosen})});close();renderAdmin();}catch(err){overlay.querySelector("#roleMsg").textContent=err.message;}};}catch(e){kedoAlert(e.message);}}
async function setTrainingExitPassword(id){
  const first=await kedoPrompt("Введите новый специальный пароль выхода из учебного аккаунта.","","Пароль выхода из обучения");
  if(first===null)return;
  const second=await kedoPrompt("Повторите специальный пароль.","","Подтверждение пароля");
  if(second===null)return;
  if(first!==second){await kedoAlert("Пароли не совпадают.");return;}
  try{await api(`/api/admin/employees/${id}/training-exit-password`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:first})});await kedoAlert("Специальный пароль выхода сохранён.");}catch(e){kedoAlert(e.message);}
}
async function resetEmployeePassword(id){
try{
  const employees=await api("/api/admin/employees");
  const e=employees.find(x=>x.id===id);
  if(!e)return;
  document.querySelectorAll(".admin-edit-overlay").forEach(x=>x.remove());
  const overlay=document.createElement("div");
  overlay.className="admin-edit-overlay";
  overlay.innerHTML=`<div class="admin-edit-modal admin-password-modal">
    <div class="eyebrow">БЕЗОПАСНОСТЬ</div>
    <h2>Пароль сотрудника</h2>
    <p class="muted">${esc(e.full_name)} · <code>${esc(e.login)}</code></p>
    <div class="admin-password-tip">Пароль в базе не хранится — только хэш. После смены передайте новый пароль сотруднику лично.</div>
    <div class="admin-password-generate">
      <button type="button" class="primary" id="generateUserPassword">Сгенерировать надёжный пароль</button>
      <small>Либо введите свой пароль — минимум 8 любых символов</small>
    </div>
    <label>Новый пароль
      <div class="admin-password-field">
        <input id="newUserPassword" type="password" minlength="8" autocomplete="new-password" placeholder="Минимум 8 символов">
        <button type="button" class="secondary" id="toggleUserPassword" aria-label="Показать пароль">👁</button>
        <button type="button" class="secondary" id="copyUserPassword" aria-label="Скопировать">Копировать</button>
      </div>
    </label>
    <label>Подтверждение
      <input id="newUserPassword2" type="password" minlength="8" autocomplete="new-password" placeholder="Повторите пароль">
    </label>
    <div class="admin-edit-actions">
      <button type="button" class="secondary" id="passwordCancel">Отмена</button>
      <button type="button" class="primary" id="passwordSave">Сохранить пароль</button>
    </div>
    <p id="passwordMsg" class="muted admin-password-msg"></p>
  </div>`;
  document.body.appendChild(overlay);
  installAdminEditStyles();
  installAdminEmployeesV2Styles();
  const close=()=>overlay.remove();
  const pass1=overlay.querySelector("#newUserPassword");
  const pass2=overlay.querySelector("#newUserPassword2");
  const msgEl=overlay.querySelector("#passwordMsg");
  overlay.querySelector("#passwordCancel").onclick=close;
  overlay.addEventListener("click",ev=>{if(ev.target===overlay)close();});
  overlay.querySelector("#toggleUserPassword").onclick=()=>{
    const show=pass1.type==="password";
    pass1.type=show?"text":"password";
    pass2.type=show?"text":"password";
  };
  overlay.querySelector("#copyUserPassword").onclick=async()=>{
    const v=pass1.value;
    if(!v){msgEl.textContent="Сначала введите или сгенерируйте пароль.";return;}
    try{
      await navigator.clipboard.writeText(v);
      msgEl.textContent="Пароль скопирован в буфер обмена.";
    }catch{
      pass1.type="text";
      pass1.select();
      document.execCommand("copy");
      msgEl.textContent="Пароль выделен — скопируйте вручную (Ctrl+C).";
    }
  };
  overlay.querySelector("#generateUserPassword").onclick=async()=>{
    try{
      const r=await api("/api/admin-tools/employees/"+id+"/generate-password",{method:"POST"});
      pass1.value=r.password;
      pass2.value=r.password;
      pass1.type="text";
      pass2.type="text";
      msgEl.textContent="Пароль сгенерирован. Сохраните его до закрытия окна и передайте сотруднику.";
    }catch(err){
      const alphabet="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%";
      let out="";
      for(let i=0;i<14;i++) out+=alphabet[Math.floor(Math.random()*alphabet.length)];
      pass1.value=out;
      pass2.value=out;
      pass1.type="text";
      pass2.type="text";
      msgEl.textContent="Сгенерирован локально (сервер недоступен). Сохраните до закрытия окна.";
    }
  };
  overlay.querySelector("#passwordSave").onclick=async()=>{
    const p=pass1.value;
    const p2=pass2.value;
    if(p.length<8){msgEl.textContent="Пароль должен содержать минимум 8 символов.";return;}
    if(p!==p2){msgEl.textContent="Пароли не совпадают.";return;}
    try{
      await api("/api/admin-tools/employees/"+id+"/password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:p})});
      kedoAlert("Пароль изменён. Передайте его сотруднику лично.");
      close();
      await renderAdmin();
    }catch(err){msgEl.textContent=err.message;}
  };
}catch(e){kedoAlert(e.message);}
}

async function deleteEmployee(id){
if(!await kedoConfirm("Удалить учетную запись?\n\nСотрудник будет перемещён в архив и заблокирован. Документы, подписи, задачи и история действий сохранятся."))return;
try{
  await api("/api/admin-tools/employees/"+id,{method:"DELETE"});
  kedoAlert("Учетная запись архивирована. Документы и история сохранены.");
  renderAdmin();
}catch(e){kedoAlert(e.message);renderAdmin();}
}

async function openOrgGroupCreate(){
  document.querySelectorAll(".admin-edit-overlay").forEach(x=>x.remove());
  let depsForGroup=[], employeesForGroup=[];
  try { [depsForGroup,employeesForGroup]=await Promise.all([api("/api/admin/departments"),api("/api/admin/employees")]); } catch(e) { kedoAlert(e.message||"Не удалось загрузить данные филиала."); return; }
  const pendingNewDepartments=[];
  const overlay=document.createElement("div");overlay.className="admin-edit-overlay";
  overlay.innerHTML=`<div class="admin-edit-modal group-management-modal">
    <div class="eyebrow">Структура организации</div>
    <h2>Новый филиал</h2>
    <p class="muted">Создайте филиал. Подразделения можно выбрать из существующих или создать прямо здесь.</p>
    <label>Название филиала <span class="required-mark">обязательно</span><input id="gNameModal" placeholder="Например, Демо-филиал"></label>
    <label>Описание <span class="optional-mark">необязательно</span><input id="gDescriptionModal" placeholder="Например, производственная площадка"></label>
    <div class="group-deps-label"><div><label>Подразделения филиала <span class="required-mark">обязательно</span></label><small id="groupDepsCount">Выбрано: 0</small></div><button type="button" class="secondary group-select-all" id="groupSelectAll">Выбрать все</button></div>
    <div class="org-group-modal-deps" id="newGroupDepsList">${depsForGroup.map(d=>`<label class="group-department-item"><input type="checkbox" value="${d.id}"><span>${esc(d.name)}</span></label>`).join("")||'<div class="recipient-empty">Пока нет подразделений.</div>'}</div>
    <div class="group-create-dep"><input id="newCreateGroupDepartment" placeholder="Например, Отдел продаж"><button type="button" class="secondary" id="createNewGroupDepartment">＋ Создать подразделение</button></div>
    <label>Руководитель филиала <span class="optional-mark">можно назначить после создания филиала</span><select id="gHeadModal"><option value="">Не назначен</option>${employeesForGroup.filter(u=>u.is_active && !u.deleted_at).map(u=>`<option value="${u.id}">${esc(u.full_name)}${u.position?` — ${esc(u.position)}`:""}</option>`).join("")}</select></label>
    <div class="admin-edit-actions"><button class="secondary" id="groupCreateCancel">Отмена</button><button class="primary" id="groupCreateSave">Создать филиал</button></div>
    <p id="groupCreateMsg" class="muted"></p>
  </div>`;
  document.body.appendChild(overlay);installAdminEditStyles();
  const close=()=>overlay.remove();overlay.querySelector("#groupCreateCancel").onclick=close;overlay.addEventListener("click",e=>{if(e.target===overlay)close();});
  const refreshGroupSelection=()=>{
    const checked=[...overlay.querySelectorAll("#newGroupDepsList input:checked:not(:disabled)")];
    const total=checked.length+pendingNewDepartments.length;
    overlay.querySelector("#groupDepsCount").textContent=`Выбрано: ${total}`;
    const all=overlay.querySelectorAll("#newGroupDepsList input:not(:disabled)");
    overlay.querySelector("#groupSelectAll").textContent=all.length&&checked.length===all.length?"Снять все":"Выбрать все";
    overlay.querySelectorAll("#newGroupDepsList .group-department-item").forEach(row=>row.classList.toggle("included",row.querySelector("input").checked));
  };
  overlay.querySelectorAll("#newGroupDepsList input").forEach(x=>x.addEventListener("change",refreshGroupSelection));
  overlay.querySelector("#groupSelectAll").onclick=()=>{
    const all=[...overlay.querySelectorAll("#newGroupDepsList input")], shouldCheck=all.some(x=>!x.checked);
    all.forEach(x=>x.checked=shouldCheck); refreshGroupSelection();
  };
  refreshGroupSelection();
  const renderPendingDepartments=()=>{
    const list=overlay.querySelector("#newGroupDepsList");
    list.querySelectorAll(".pending-department").forEach(x=>x.remove());
    pendingNewDepartments.forEach((name,index)=>{
      list.insertAdjacentHTML("beforeend",`<label class="group-department-item included pending-department"><input type="checkbox" checked disabled><span>${esc(name)} <small>будет создано</small></span><button type="button" class="secondary pending-dep-remove" data-index="${index}">×</button></label>`);
    });
    list.querySelectorAll(".pending-dep-remove").forEach(btn=>btn.onclick=()=>{pendingNewDepartments.splice(Number(btn.dataset.index),1);renderPendingDepartments();refreshGroupSelection();});
  };
  overlay.querySelector("#createNewGroupDepartment").onclick=()=>{
    const input=overlay.querySelector("#newCreateGroupDepartment"),name=input.value.trim(); if(!name)return;
    if(pendingNewDepartments.some(x=>x.toLowerCase()===name.toLowerCase()))return;
    pendingNewDepartments.push(name); input.value=""; renderPendingDepartments(); refreshGroupSelection();
  };
  overlay.querySelector("#groupCreateSave").onclick=async()=>{
    const msgEl=overlay.querySelector("#groupCreateMsg");
    try{
      const name=overlay.querySelector("#gNameModal").value.trim(),description=overlay.querySelector("#gDescriptionModal").value.trim();
      const departmentIds=[...overlay.querySelectorAll("#newGroupDepsList input:checked:not(:disabled)")].map(x=>Number(x.value));
      if(!name)throw Error("Введите название филиала."); if(!departmentIds.length && !pendingNewDepartments.length)throw Error("Выберите или создайте хотя бы одно подразделение.");
      const headUserId=overlay.querySelector("#gHeadModal").value||null;
      await api("/api/admin/org-groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,description,departmentIds,newDepartmentNames:pendingNewDepartments,headUserId})});
      close();await renderAdmin();
    }catch(e){msgEl.textContent=e.message;msgEl.style.color="#b42318";}
  };
}
async function createOrgGroup(){
  try{
    const name=$("gName").value.trim();
    const description=$("gDescription").value.trim();
    const departmentIds=getRecipientDropdownValues("adminOrgGroupDepartments");
    if(!name)throw Error("Введите название группы.");
    if(!departmentIds.length)throw Error("Выберите хотя бы одно подразделение.");
    await api("/api/admin/org-groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,description,departmentIds})});
    await renderAdmin();
  }catch(e){msg("gMsg",e.message);}
}
async function editOrgGroup(id){
  try{
    const [groups,deps,employees]=await Promise.all([api("/api/admin/org-groups"),api("/api/admin/departments"),api("/api/admin/employees")]);
    const g=groups.find(x=>Number(x.id)===Number(id)); if(!g)return;
    const selected=new Set((g.departments||[]).map(d=>Number(d.id)));
    document.querySelectorAll(".admin-edit-overlay").forEach(x=>x.remove());
    const overlay=document.createElement("div");overlay.className="admin-edit-overlay";
    overlay.innerHTML=`<div class="admin-edit-modal group-management-modal">
      <div class="eyebrow">Филиал / организационная группа</div>
      <h2>Филиал / ${esc(g.name)}</h2>
      <p class="muted">Здесь можно управлять составом филиала: добавлять существующие подразделения, создавать новые и убирать подразделения из филиала. Само удаление подразделения из системы остаётся отдельным действием администратора.</p>
      <label>Название филиала<input id="editGroupName" value="${esc(g.name)}"></label>
      <label>Описание<input id="editGroupDescription" value="${esc(g.description||"")}"></label>
      <label>Руководитель филиала <span class="optional-mark">необязательно</span><select id="editGroupHead"><option value="">Не назначен</option>${employees.filter(u=>Number(u.org_group_id)===Number(id)&&u.is_active).map(u=>`<option value="${u.id}" ${Number(u.id)===Number(g.head_user_id)?"selected":""}>${esc(u.full_name)}${u.position?` — ${esc(u.position)}`:""}</option>`).join("")}</select></label>
      <div class="group-department-manager">
        <div class="group-manager-head"><strong>Подразделения филиала</strong><span class="muted">${selected.size} подключено</span></div>
        <div id="groupDepartmentsList" class="group-department-list">
          ${deps.map(d=>`<label class="group-department-item ${selected.has(Number(d.id))?"included":""}">
            <input type="checkbox" value="${d.id}" ${selected.has(Number(d.id))?"checked":""}>
            <span>${esc(d.name)}</span><button type="button" class="secondary group-dep-rename" data-dep-id="${d.id}" data-dep-name="${esc(d.name)}">Изменить</button>
          </label>`).join("")}
        </div>
        <div class="group-create-dep"><input id="newGroupDepartment" placeholder="Новое подразделение"><button class="secondary" id="createGroupDepartment">Добавить в филиал</button></div>
      </div>
      <div class="admin-edit-actions"><button class="secondary" id="groupEditCancel">Закрыть</button><button class="primary" id="groupEditSave">Сохранить изменения</button></div>
      <p id="groupEditMsg" class="muted"></p>
    </div>`;
    document.body.appendChild(overlay);installAdminEditStyles();
    const close=()=>overlay.remove();
    overlay.querySelector("#groupEditCancel").onclick=close;
    overlay.addEventListener("click",ev=>{if(ev.target===overlay)close();});
    const refreshList=()=>{
      overlay.querySelectorAll(".group-department-item").forEach(x=>x.classList.toggle("included",x.querySelector("input").checked));
    };
    overlay.querySelectorAll(".group-department-item input").forEach(x=>x.addEventListener("change",refreshList));
    overlay.querySelectorAll(".group-dep-rename").forEach(btn=>btn.addEventListener("click",async()=>{
      const name=await kedoPrompt("Новое название подразделения:",btn.dataset.depName||"");
      if(!name||!name.trim())return;
      try{
        await api("/api/admin/departments/"+btn.dataset.depId,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:name.trim()})});
        btn.dataset.depName=name.trim();btn.parentElement.querySelector("span").textContent=name.trim();
        overlay.querySelector("#groupEditMsg").textContent="Подразделение переименовано.";
      }catch(e){overlay.querySelector("#groupEditMsg").textContent=e.message;}
    }));
    overlay.querySelector("#createGroupDepartment").onclick=async()=>{
      const input=overlay.querySelector("#newGroupDepartment"),name=input.value.trim();
      if(!name)return;
      try{
        const dep=await api("/api/admin/departments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name})});
        const list=overlay.querySelector("#groupDepartmentsList");
        list.insertAdjacentHTML("beforeend",`<label class="group-department-item included"><input type="checkbox" value="${dep.id}" checked><span>${esc(dep.name)}</span><button type="button" class="secondary group-dep-rename" data-dep-id="${dep.id}" data-dep-name="${esc(dep.name)}">Изменить</button></label>`);
        list.lastElementChild.querySelector("input").addEventListener("change",refreshList);
        list.lastElementChild.querySelector(".group-dep-rename").addEventListener("click",async(ev)=>{const b=ev.currentTarget;const name=await kedoPrompt("Новое название подразделения:",b.dataset.depName||"");if(!name||!name.trim())return;try{await api("/api/admin/departments/"+b.dataset.depId,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:name.trim()})});b.dataset.depName=name.trim();b.parentElement.querySelector("span").textContent=name.trim();}catch(e){overlay.querySelector("#groupEditMsg").textContent=e.message;}});
        input.value="";
      }catch(e){overlay.querySelector("#groupEditMsg").textContent=e.message;}
    };
    overlay.querySelector("#groupEditSave").onclick=async()=>{
      try{
        const departmentIds=[...overlay.querySelectorAll("#groupDepartmentsList input:checked")].map(x=>Number(x.value));
        if(!departmentIds.length)throw Error("Филиал должен содержать хотя бы одно подразделение.");
        await api("/api/admin/org-groups/"+id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({
          name:overlay.querySelector("#editGroupName").value.trim(),
          description:overlay.querySelector("#editGroupDescription").value.trim(),
          headUserId:overlay.querySelector("#editGroupHead").value||null,
          departmentIds
        })});
        close();await renderAdmin();
      }catch(e){overlay.querySelector("#groupEditMsg").textContent=e.message;}
    };
  }catch(e){kedoAlert(e.message);}
}
async function openAdminBranch(id){
  if(!isAdminUser())return;
  state.adminBranchId=Number(id);
  await setPage("adminBranch");
}
async function deleteOrgGroup(id){
  if(!await kedoConfirm("Удалить этот филиал? Документы и история не будут удалены. Если на филиал назначены активные задачи, система попросит сначала переназначить их."))return;
  try{
    await api("/api/admin/org-groups/"+id,{method:"DELETE"});
    await renderAdmin();
  }catch(e){
    kedoAlert(e.message||"Не удалось удалить филиал.");
  }
}

async function deleteDepartment(id){
  const d=(await api("/api/admin/departments")).find(x=>Number(x.id)===Number(id));
  if(!d)return;
  if(!await kedoConfirm(`Удалить подразделение «${d.name}»?\n\nУдаление возможно только если в нём нет активных сотрудников, документов и материалов Базы знаний.`))return;
  try{await api("/api/admin/departments/"+id,{method:"DELETE"});renderAdmin();}
  catch(e){kedoAlert(e.message);}
}
async function createAccountFromRequest(id){
  try{
    const [requests,deps]=await Promise.all([api("/api/account-requests"),api("/api/admin/departments")]);
    const r=requests.find(x=>Number(x.id)===Number(id));
    if(!r)return;
    document.querySelectorAll(".admin-edit-overlay").forEach(x=>x.remove());
    const overlay=document.createElement("div");overlay.className="admin-edit-overlay";
    overlay.innerHTML=`<div class="admin-edit-modal">
      <h2>Создание аккаунта</h2>
      <p class="muted">Заявка №${r.id} · ${esc(r.full_name)}</p>
      <label>ФИО<input id="reqFullName" value="${esc(r.full_name)}"></label>
      <label>Логин <span class="required-mark">обязательно</span><input id="reqLogin" placeholder="например, ivanov_i"></label>
      <label>Должность<input id="reqPosition" value="${esc(r.position||"")}"></label>
      <label>Подразделение<select id="reqDepartment"><option value="">Без подразделения</option>${deps.map(d=>`<option value="${d.id}" ${String(d.id)===String(r.department_id)?"selected":""}>${esc(d.name)}</option>`).join("")}</select></label>
    <label>Роль<select id="reqRole"><option value="new_employee">Учебный аккаунт</option><option value="employee">Сотрудник</option><option value="document_uploader">Загрузчик документов</option><option value="department_head">Руководитель подразделения</option><option value="director">Директор</option><option value="moderator">Модератор</option><option value="admin">Администратор</option></select></label>
      <label>Пароль <span class="required-mark">обязательно</span><input id="reqPassword" type="password" minlength="8" placeholder="Минимум 8 символов"></label>
      <label>Пароль выхода из учебного режима <span class="required-mark">для учебного аккаунта</span><input id="reqTrainingExitPassword" type="password" minlength="8" autocomplete="new-password" placeholder="Только для учебного аккаунта"></label>
      <p class="muted" style="margin:-6px 0 10px;font-size:12px">Минимум 8 любых символов.</p>
      <div class="admin-edit-actions"><button class="secondary" id="reqCancel">Отмена</button><button class="primary" id="reqSave">Создать аккаунт</button></div>
      <p id="reqMsg" class="muted"></p>
    </div>`;
    document.body.appendChild(overlay);installAdminEditStyles();
    const reqRoleSelect=overlay.querySelector("#reqRole"),reqExitField=overlay.querySelector("#reqTrainingExitPassword")?.closest("label");if(reqRoleSelect&&reqExitField){const syncReqExit=()=>{reqExitField.hidden=reqRoleSelect.value!=="new_employee";};reqRoleSelect.addEventListener("change",syncReqExit);syncReqExit();}
    const close=()=>overlay.remove();overlay.querySelector("#reqCancel").onclick=close;overlay.addEventListener("click",e=>{if(e.target===overlay)close();});
    overlay.querySelector("#reqSave").onclick=async()=>{
      const btn=overlay.querySelector("#reqSave"),msgEl=overlay.querySelector("#reqMsg");
      try{
        btn.disabled=true;btn.textContent="Создание...";
        const requestedRole=overlay.querySelector("#reqRole").value;
        const fullName=overlay.querySelector("#reqFullName").value.trim(),login=overlay.querySelector("#reqLogin").value.trim(),password=overlay.querySelector("#reqPassword").value;
        const trainingExitPassword=requestedRole==="new_employee"?overlay.querySelector("#reqTrainingExitPassword").value:"";
        if(!fullName||!login||!password)throw Error("Заполните ФИО, логин и пароль аккаунта.");
        if(password.length<8)throw Error("Пароль аккаунта должен содержать минимум 8 символов.");
        if(requestedRole==="new_employee"&&trainingExitPassword.length<8)throw Error("Специальный пароль выхода должен содержать минимум 8 символов.");
        const created=await api("/api/admin/employees",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
          fullName,login,password,
          position:overlay.querySelector("#reqPosition").value.trim(),
          departmentId:overlay.querySelector("#reqDepartment").value||null,
          role:requestedRole,
          trainingExitPassword:requestedRole==="new_employee"?trainingExitPassword:""
        })});
        await api("/api/account-requests/"+id+"/link-user",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:created.id})});
        close();renderAdmin();
      }catch(e){msgEl.textContent=e.message;btn.disabled=false;btn.textContent="Создать аккаунт";}
    };
  }catch(e){kedoAlert(e.message);}
}
async function rejectAccountRequest(id){
  if(!await kedoConfirm("Отклонить эту заявку?"))return;
  try{await api("/api/account-requests/"+id+"/status",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:"REJECTED"})});renderAdmin();}
  catch(e){kedoAlert(e.message);}
}

async function toggleEmployee(id,isActive){
try{await api("/api/admin/employees/"+id+"/status",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({isActive})});renderAdmin();}catch(e){kedoAlert(e.message);}
}
async function unblockIp(id){
try{await api("/api/admin/security/ip-blocks/"+id,{method:"DELETE"});renderAdmin();}catch(e){kedoAlert(e.message);}
}
async function updateAdminTicket(id,status,select){
  const previous=select.dataset.currentStatus||select.value;
  try{
    select.disabled=true;
    const updated=await api("/api/my-branch/tickets/"+id,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status})});
    select.dataset.currentStatus=updated.status||status;
    await renderAdmin();
  }catch(e){
    select.value=previous;
    select.dataset.currentStatus=previous;
    select.disabled=false;
    kedoAlert(`Не удалось изменить статус заявки №${id}: ${e.message}`);
  }
}
async function archiveBranchTicket(id,archived=true){
  const action=archived?"убрать заявку в архив":"вернуть заявку из архива";
  if(!await kedoConfirm(`Точно ${action}?`))return;
  try{
    await api(`/api/my-branch/tickets/${id}/archive`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({archived})});
    await renderAdmin();
  }catch(e){kedoAlert(`Не удалось изменить архив заявки №${id}: ${e.message}`);}
}
async function archiveAccountRequest(id,archived=true){
  const action=archived?"убрать заявку в архив":"вернуть заявку из архива";
  if(!await kedoConfirm(`Точно ${action}?`))return;
  try{
    await api(`/api/account-requests/${id}/archive`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({archived})});
    await renderAdmin();
  }catch(e){kedoAlert(`Не удалось изменить архив заявки №${id}: ${e.message}`);}
}
function openAdminArchiveTab(target){
  const archive=document.getElementById(target);
  if(!archive)return;
  document.querySelectorAll("#branchTicketsArchive,#accountRequestsArchive").forEach(x=>{if(x!==archive)x.open=false;});
  archive.open=true;
  archive.scrollIntoView({behavior:"smooth",block:"start"});
}
async function editDocumentAccess(id,context={}){
try{
  const [current,options]=await Promise.all([
    api("/api/documents/"+id+"/access"),
    api("/api/knowledge/access/options")
  ]);
  const overlay=document.createElement("div");
  overlay.className="admin-edit-overlay";
  overlay.innerHTML=`<div class="admin-edit-modal access-modal access-modal-wide access-modal-v45">
    <div class="access-modal-head">
      <div>
        <div class="eyebrow">Настройка видимости</div>
        <h2>Доступ к документу</h2>
        <p class="muted">Выберите, кому будет доступен документ. Можно открыть его всей организации или настроить доступ для конкретных получателей.</p>
      </div>
      <button class="icon-close" id="documentAccessClose" type="button" aria-label="Закрыть">×</button>
    </div>

    <div class="access-mode-stack">
      <label class="access-mode-card" id="accessModeAllCard">
        <span class="access-mode-icon">👥</span>
        <span class="access-mode-copy">
          <strong>Всем сотрудникам</strong>
          <small>Документ будет доступен всем сотрудникам организации.</small>
        </span>
        <span class="access-mode-switch">
          <input id="accessAllToggle" type="checkbox">
          <span></span>
        </span>
      </label>

      <label class="access-mode-card" id="accessModeSpecificCard">
        <span class="access-mode-icon">◉</span>
        <span class="access-mode-copy">
          <strong>Кому-то конкретным</strong>
          <small>Выберите роли, подразделения, должности или отдельных сотрудников.</small>
        </span>
        <span class="access-mode-switch">
          <input id="accessSpecificToggle" type="checkbox">
          <span></span>
        </span>
      </label>
    </div>

    <div id="specificAccessArea" class="specific-access-area">
      <div class="access-simple-panel">
        <div class="builder-title-row">
          <div>
            <div class="builder-title">Кому предоставить доступ</div>
            <div class="builder-subtitle">Выберите категорию получателей и отметьте нужных людей или группы.</div>
          </div>
          <span class="builder-hint">Можно выбрать несколько</span>
        </div>

        <div class="access-type-row">
          <label class="access-type-label" for="accessTypeSelect">Категория получателей</label>
          <select id="accessTypeSelect" class="access-type-select">
            <option value="ROLE">Роли</option>
            <option value="DEPARTMENT">Подразделения</option>
            <option value="GROUP">Филиалы / группы</option>
            <option value="POSITION">Должности</option>
            <option value="USER">Сотрудники</option>
          </select>
        </div>

        <div class="access-search-wrap-v45">
          <span>⌕</span>
          <input id="accessSearch" placeholder="Начните вводить для поиска..." autocomplete="off">
        </div>

        <div id="documentAccessValues" class="access-checklist-v45"></div><div id="documentGroupScope" style="display:none;margin-top:10px"></div>

        <div class="access-builder-actions-v45">
          <button class="secondary" id="selectAllAccess" type="button">Выбрать все</button>
          <button class="secondary" id="clearSelectionAccess" type="button">Снять выбор</button>
          <button class="primary" id="addDocumentRule" type="button">Добавить выбранных</button>
        </div>
      </div>

      <div class="access-selected-panel-v45">
        <div class="selected-panel-head">
          <div>
            <div class="builder-title">Выбранные получатели</div>
            <div class="builder-subtitle">Доступ получат все отмеченные здесь получатели.</div>
          </div>
          <span id="accessRuleCount" class="selection-count-v45">0</span>
        </div>
        <div id="documentRules" class="selected-rules-v45"></div>
      </div>
    </div>

    <div id="accessSpecificEmpty" class="specific-empty-v45">
      <div class="specific-empty-icon">◉</div>
      <strong>Выберите «Кому-то конкретным»</strong>
      <span>После включения появится выбор ролей, подразделений, должностей и сотрудников.</span>
    </div>

    <div class="admin-edit-actions access-modal-actions-v45">
      <button class="secondary" id="documentAccessCancel" type="button">Отмена</button>
      <button class="primary" id="documentAccessSave" type="button">Сохранить доступ</button>
    </div>
  </div>`;

  document.body.appendChild(overlay);
  installAdminEditStyles();
  installMultiAccessStyles();

  let working=current.map(r=>({
    principal_type:String(r.principal_type||"").toUpperCase(),
    principal_value:String(r.principal_value??"")
  }));

  const valuesEl=overlay.querySelector("#documentAccessValues");
  const groupScopeEl=overlay.querySelector("#documentGroupScope");
  const box=overlay.querySelector("#documentRules");
  const search=overlay.querySelector("#accessSearch");
  const allToggle=overlay.querySelector("#accessAllToggle");
  const specificToggle=overlay.querySelector("#accessSpecificToggle");
  const specificArea=overlay.querySelector("#specificAccessArea");
  const specificEmpty=overlay.querySelector("#accessSpecificEmpty");

  let activeType="ROLE";

  const optionSets={
    ROLE:(options.roles||[]).map(x=>({value:x,label:roleLabel(x)})),
    POSITION:(options.positions||[]).map(x=>({value:x,label:x})),
    DEPARTMENT:(options.departments||[]).map(x=>({value:x.value,label:x.name})),
    GROUP:(options.groups||[]).map(x=>({value:x.value,label:x.name})),
    USER:(options.users||[]).map(x=>({
      value:x.value,
      label:x.name+(x.position?" — "+x.position:"")+(x.department_name?" · "+x.department_name:"")
    }))
  };

  const renderGroupScope=()=>{
    const gid=overlay.querySelector("#documentGroupSelect")?.value;
    const g=(options.groups||[]).find(x=>String(x.value)===String(gid));
    if(!g){groupScopeEl.style.display="none";groupScopeEl.innerHTML="";return;}
    const depIds=(g.departments||[]).map(d=>String(d.id));
    const members=(options.users||[]).filter(u=>depIds.includes(String(u.department_id)));
    groupScopeEl.style.display="";
    groupScopeEl.innerHTML=`<div class="group-scope-grid"><div><label>Подразделения «${esc(g.name)}»</label><div class="recipient-dropdown" id="docGroupDeps"><button type="button" class="recipient-dropdown-toggle"><span class="recipient-dropdown-label">Все подразделения</span><span>⌄</span></button><div class="recipient-dropdown-menu"><div class="recipient-dropdown-tools"><span>Выберите подразделения</span><button type="button" class="recipient-dropdown-clear">Сбросить</button></div>${(g.departments||[]).map(d=>`<label class="recipient-option"><input type="checkbox" value="${d.id}" data-label="${esc(d.name)}"><span>${esc(d.name)}</span></label>`).join("")||'<div class="recipient-empty">Нет подразделений</div>'}</div></div></div><div><label>Люди внутри выбранных подразделений</label><div class="recipient-dropdown" id="docGroupUsers"><button type="button" class="recipient-dropdown-toggle"><span class="recipient-dropdown-label">Все сотрудники</span><span>⌄</span></button><div class="recipient-dropdown-menu"><div class="recipient-dropdown-tools"><span>Выберите сотрудников</span><button type="button" class="recipient-dropdown-clear">Сбросить</button></div><div id="docGroupUserOptions"></div></div></div></div></div>`;
    setupRecipientDropdown("docGroupDeps","Все подразделения");
    const renderUsers=()=>{
      const selected=getRecipientDropdownValues("docGroupDeps").map(String);
      const allowed=new Set(selected.length?selected:depIds);
      const list=members.filter(u=>allowed.has(String(u.department_id)));
      overlay.querySelector("#docGroupUserOptions").innerHTML=list.length?list.map(u=>`<label class="recipient-option"><input type="checkbox" value="${u.value}" data-label="${esc(u.name)}"><span>${esc(u.name)}${u.position?` — ${esc(u.position)}`:""}${u.department_name?` · ${esc(u.department_name)}`:""}</span></label>`).join(""):'<div class="recipient-empty">Нет сотрудников</div>';
      setupRecipientDropdown("docGroupUsers","Все сотрудники");
    };
    overlay.querySelector("#docGroupDeps .recipient-dropdown-menu")?.addEventListener("change",renderUsers);
    renderUsers();
  };
  const renderChoices=()=>{
    const q=search.value.trim().toLowerCase();
    if(activeType==="GROUP"){
      const items=(options.groups||[]).filter(x=>!q||String(x.name).toLowerCase().includes(q));
      valuesEl.innerHTML=items.length?`<label>Выберите филиал / группу<select id="documentGroupSelect">${items.map(x=>`<option value="${esc(x.value)}">${esc(x.name)}</option>`).join("")}</select></label>`:'<div class="empty compact-empty">Филиалов не найдено</div>';
      valuesEl.querySelector("#documentGroupSelect")?.addEventListener("change",renderGroupScope);
      renderGroupScope();
      return;
    }
    groupScopeEl.style.display="none";groupScopeEl.innerHTML="";
    const items=(optionSets[activeType]||[]).filter(x=>!q||x.label.toLowerCase().includes(q));
    valuesEl.innerHTML=items.length
      ?items.map(x=>`<label class="access-choice-v45"><input type="checkbox" class="document-access-choice" value="${esc(x.value)}"><span class="access-choice-box"></span><span class="access-choice-label">${esc(x.label)}</span></label>`).join("")
      :'<div class="empty compact-empty">Ничего не найдено</div>';
  };

  const label=r=>accessRuleLabel(r,options);

  const drawRules=()=>{
    box.innerHTML=working.length
      ?working.map((r,i)=>`<div class="selected-rule-v45">
          <span class="rule-type-icon">${r.principal_type==="ROLE"?"R":r.principal_type==="DEPARTMENT"?"П":r.principal_type==="POSITION"?"Д":"С"}</span>
          <div class="selected-rule-copy">
            <strong>${esc(label(r))}</strong>
            <small>${r.principal_type==="ROLE"?"Роль":r.principal_type==="DEPARTMENT"?"Подразделение":r.principal_type==="GROUP"?"Филиал / группа":r.principal_type==="POSITION"?"Должность":"Сотрудник"}</small>
          </div>
          <button class="rule-remove-v45" data-r="${i}" type="button" aria-label="Удалить">×</button>
        </div>`).join("")
      :'<div class="selected-empty-v45"><div class="selected-empty-icon-v45">✓</div><strong>Получатели не выбраны</strong><span>Добавьте роли, подразделения, должности или сотрудников.</span></div>';
    overlay.querySelector("#accessRuleCount").textContent=String(working.length);
  };

  const setMode=(mode)=>{
    const all=mode==="ALL";
    const specific=mode==="SPECIFIC";
    allToggle.checked=all;
    specificToggle.checked=specific;
    overlay.querySelector("#accessModeAllCard").classList.toggle("active",all);
    overlay.querySelector("#accessModeSpecificCard").classList.toggle("active",specific);
    specificArea.classList.toggle("visible",specific);
    specificEmpty.classList.toggle("visible",!specific);
    if(all){
      working=[{principal_type:"ALL",principal_value:""}];
    }else if(specific){
      working=working.filter(r=>r.principal_type!=="ALL");
    }
    drawRules();
  };

  const hasAll=working.some(r=>r.principal_type==="ALL");
  const hasSpecific=working.some(r=>r.principal_type!=="ALL");
  setMode(hasAll?"ALL":(hasSpecific?"SPECIFIC":"ALL"));
  if(!hasAll&&!hasSpecific) working=[{principal_type:"ALL",principal_value:""}];

  const typeSelect=overlay.querySelector("#accessTypeSelect");

  const setType=t=>{
    activeType=t;
    typeSelect.value=t;
    search.value="";
    renderChoices();
  };

  typeSelect.onchange=()=>setType(typeSelect.value);
  search.oninput=renderChoices;

  overlay.querySelector("#selectAllAccess").onclick=()=>{
    overlay.querySelectorAll(".document-access-choice").forEach(x=>x.checked=true);
  };
  overlay.querySelector("#clearSelectionAccess").onclick=()=>{
    overlay.querySelectorAll(".document-access-choice").forEach(x=>x.checked=false);
  };

  allToggle.onchange=()=>{
    if(allToggle.checked) setMode("ALL");
    else setMode("SPECIFIC");
  };
  specificToggle.onchange=()=>{
    if(specificToggle.checked) setMode("SPECIFIC");
    else setMode("ALL");
  };

  overlay.querySelector("#addDocumentRule").onclick=()=>{
    setMode("SPECIFIC");
    if(activeType==="GROUP"){
      const gid=overlay.querySelector("#documentGroupSelect")?.value;
      if(!gid){kedoAlert("Выберите филиал / группу.");return;}
      const deps=getRecipientDropdownValues("docGroupDeps"),users=getRecipientDropdownValues("docGroupUsers");
      if(deps.length||users.length){
        for(const did of deps)if(!working.some(r=>r.principal_type==="DEPARTMENT"&&String(r.principal_value)===String(did)))working.push({principal_type:"DEPARTMENT",principal_value:String(did)});
        for(const uid of users)if(!working.some(r=>r.principal_type==="USER"&&String(r.principal_value)===String(uid)))working.push({principal_type:"USER",principal_value:String(uid)});
      }else if(!working.some(r=>r.principal_type==="GROUP"&&String(r.principal_value)===String(gid))){
        working.push({principal_type:"GROUP",principal_value:String(gid)});
      }
    }else{
      const selected=[...overlay.querySelectorAll(".document-access-choice:checked")].map(x=>x.value);
      if(!selected.length){kedoAlert("Выберите хотя бы одного получателя.");return;}
      for(const value of selected)if(!working.some(r=>r.principal_type===activeType&&String(r.principal_value)===String(value)))working.push({principal_type:activeType,principal_value:value});
      overlay.querySelectorAll(".document-access-choice").forEach(x=>x.checked=false);
    }
    drawRules();
  };

  box.onclick=e=>{
    const b=e.target.closest("[data-r]");
    if(b){
      working.splice(Number(b.dataset.r),1);
      if(!working.length) setMode("ALL");
      else drawRules();
    }
  };

  const close=()=>overlay.remove();
  overlay.querySelector("#documentAccessCancel").onclick=close;
  overlay.querySelector("#documentAccessClose").onclick=close;
  overlay.addEventListener("click",e=>{if(e.target===overlay)close();});

  overlay.querySelector("#documentAccessSave").onclick=async()=>{
    const btn=overlay.querySelector("#documentAccessSave");
    try{
      btn.disabled=true;
      btn.textContent="Сохранение...";
      const rules=allToggle.checked?[{principal_type:"ALL",principal_value:""}]:working.filter(r=>r.principal_type!=="ALL");
      if(!allToggle.checked&&!rules.length){
        throw Error("Выберите хотя бы одного получателя или включите «Всем сотрудникам».");
      }
      const saved=await api("/api/documents/"+id+"/access",{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({rules})
      });
      if(!saved?.ok) throw Error("Сервер не подтвердил сохранение доступа.");
       close();
       if(context.returnToAccess) await renderAdminAccess();
       else await openDocument(id);
    }catch(e){
      kedoAlert(e.message||"Не удалось сохранить доступ.");
    }finally{
      btn.disabled=false;
      btn.textContent="Сохранить доступ";
    }
  };

  setType("ROLE");
  renderChoices();
  drawRules();
}catch(e){
  kedoAlert(e.message||"Не удалось открыть настройки доступа.");
}
}
function installMultiAccessStyles(){
  if(document.getElementById("kedoMultiAccessStyles"))return;
  const s=document.createElement("style");
  s.id="kedoMultiAccessStyles";
  s.textContent=`
    .access-modal-wide{width:min(760px,calc(100vw - 28px))!important}
    .access-modal-v45{padding:0!important;overflow:hidden;border-radius:18px!important}
    .access-modal-head{display:flex;justify-content:space-between;gap:18px;padding:24px 26px 18px;border-bottom:1px solid #e6edf4}
    .access-modal-head h2{margin:2px 0 6px;font-size:24px;line-height:1.12;color:#173c61}
    .access-modal-head p{margin:0;max-width:620px;line-height:1.45;font-size:12px}
    .icon-close{width:36px!important;height:36px!important;min-height:36px!important;border:0;background:#f2f6fa;border-radius:10px;color:#6c7f92;font-size:22px;cursor:pointer;flex:0 0 auto}
    .icon-close:hover{background:#e8f0f6;color:#1b5f8e}

    .access-mode-stack{display:grid;gap:9px;padding:16px 26px 10px}
    .access-mode-card{display:flex;align-items:center;gap:12px;padding:13px 15px;border:1px solid #dfe8ef;border-radius:12px;background:#fbfcfd;cursor:pointer;transition:.15s}
    .access-mode-card:hover{border-color:#c9dbe8;background:#f8fbfd}
    .access-mode-card.active{border-color:#2b7bb5;background:#f5faff;box-shadow:0 0 0 2px rgba(43,123,181,.07)}
    .access-mode-icon{width:34px;height:34px;border-radius:10px;background:#eaf3fa;color:#1d6da5;display:grid;place-items:center;font-size:17px;flex:0 0 auto}
    .access-mode-copy{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1}
    .access-mode-copy strong{font-size:14px;color:#243d56}
    .access-mode-copy small{font-size:11px;color:#73869a;line-height:1.35}
    .access-mode-switch{position:relative;width:44px;height:24px;display:block;flex:0 0 auto}
    .access-mode-switch input{position:absolute;opacity:0;width:0;height:0}
    .access-mode-switch>span{position:absolute;inset:0;background:#d7e0e8;border-radius:20px;transition:.18s}
    .access-mode-switch>span:after{content:"";position:absolute;width:18px;height:18px;left:3px;top:3px;background:#fff;border-radius:50%;box-shadow:0 1px 4px rgba(25,52,75,.22);transition:.18s}
    .access-mode-switch input:checked+span{background:#2174ae}
    .access-mode-switch input:checked+span:after{transform:translateX(20px)}

    .specific-access-area{display:grid;grid-template-columns:1fr;gap:12px;padding:8px 26px 18px}
    .specific-access-area:not(.visible){display:none}
    .specific-empty-v45{margin:10px 26px 18px;padding:24px 18px;border:1px dashed #d6e2eb;border-radius:12px;background:#fafcfd;text-align:center}
    .specific-empty-v45:not(.visible){display:none}
    .specific-empty-icon{width:36px;height:36px;margin:0 auto 8px;border-radius:50%;display:grid;place-items:center;background:#eaf3fa;color:#2372a7}
    .specific-empty-v45 strong{display:block;color:#3d566e;font-size:13px;margin-bottom:4px}
    .specific-empty-v45 span{display:block;color:#8493a1;font-size:11px;line-height:1.45}

    .access-simple-panel,.access-selected-panel-v45{border:1px solid #e0e8ef;border-radius:13px;background:#fff;padding:15px}
    .builder-title-row,.selected-panel-head{display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:10px}
    .builder-title{font-size:13px;font-weight:750;color:#304a62}
    .builder-subtitle{font-size:10px;color:#8796a5;margin-top:3px;line-height:1.4}
    .builder-hint{font-size:9px;color:#6e8294;background:#f2f6f9;border-radius:999px;padding:5px 8px;white-space:nowrap}

    .access-type-row{display:flex;align-items:center;gap:10px;margin:2px 0 9px}
    .access-type-label{font-size:11px;font-weight:650;color:#536b81;white-space:nowrap}
    .access-type-select{flex:1;min-width:0;height:38px;border:1px solid #d8e2eb;border-radius:9px;background:#fff;padding:0 11px;color:#30485f;font-size:12px;outline:none}
    .access-type-select:focus{border-color:#7fb0d0;box-shadow:0 0 0 3px rgba(33,116,174,.08)}

    .access-search-wrap-v45{display:flex;align-items:center;gap:7px;border:1px solid #d8e2eb;border-radius:9px;padding:0 10px;margin-bottom:9px;background:#fff}
    .access-search-wrap-v45:focus-within{border-color:#7fb0d0;box-shadow:0 0 0 3px rgba(33,116,174,.08)}
    .access-search-wrap-v45 input{border:0!important;outline:0!important;padding:9px 2px!important;box-shadow:none!important;width:100%;background:transparent;font-size:12px}

    .access-checklist-v45{max-height:190px;overflow-y:auto;overflow-x:hidden;display:flex;flex-direction:column;gap:5px;padding:1px 3px 1px 1px}
    .access-choice-v45{position:relative;display:flex;align-items:center;gap:10px;width:100%;min-height:40px;box-sizing:border-box;padding:7px 10px;border:1px solid #e2e9ef;border-radius:9px;background:#fff;cursor:pointer;transition:.15s}
    .access-choice-v45:hover{border-color:#b9d2e2;background:#f8fbfd}
    .access-choice-v45:has(input:checked){border-color:#6ea7cd;background:#f3f9fd}
    .access-choice-v45 input{position:absolute;opacity:0;pointer-events:none}
    .access-choice-box{width:17px;height:17px;border:1.5px solid #b7c5d1;border-radius:5px;background:#fff;flex:0 0 auto;position:relative}
    .access-choice-v45 input:checked+.access-choice-box{background:#2174ae;border-color:#2174ae}
    .access-choice-v45 input:checked+.access-choice-box:after{content:"✓";position:absolute;color:#fff;font-size:11px;left:3px;top:0;font-weight:700}
    .access-choice-label{font-size:11px;color:#30485f;line-height:1.3;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    .access-choice-v45:after{content:"";width:5px;height:5px;border-right:1px solid #b7c5d1;border-top:1px solid #b7c5d1;transform:rotate(45deg);margin-right:2px;opacity:.45}

    .access-builder-actions-v45{display:flex;gap:6px;flex-wrap:wrap;margin-top:9px}
    .access-builder-actions-v45 button{font-size:10px!important;min-height:32px!important;padding:6px 10px!important}

    .access-selected-panel-v45{min-height:0}
    .selection-count-v45{min-width:23px;height:23px;padding:0 6px;border-radius:999px;background:#eaf3fa;color:#1b679d;display:grid;place-items:center;font-size:10px;font-weight:750}
    .selected-rules-v45{max-height:150px;overflow:auto;display:flex;flex-wrap:wrap;gap:6px;padding:1px 1px 2px}
    .selected-rule-v45{display:flex;align-items:center;gap:7px;padding:7px 9px;border:1px solid #e2e9ef;border-radius:9px;background:#fafcfd;max-width:100%}
    .rule-type-icon{width:22px;height:22px;border-radius:6px;background:#e9f3fa;color:#1c6b9f;display:grid;place-items:center;flex:0 0 auto;font-size:9px;font-weight:750}
    .selected-rule-copy{min-width:0;max-width:420px}
    .selected-rule-copy strong{display:block;font-size:10px;color:#2e475f;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    .selected-rule-copy small{color:#8291a0;font-size:9px}
    .rule-remove-v45{border:0;background:#f7eaea;color:#a65151;width:22px;height:22px;border-radius:6px;cursor:pointer;font-size:14px;flex:0 0 auto}
    .selected-empty-v45{text-align:center;padding:20px 12px;color:#7a8b9b;width:100%}
    .selected-empty-icon-v45{margin:0 auto 8px;width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:#eaf6ef;color:#3d8b5e;font-weight:700}
    .selected-empty-v45 strong{display:block;color:#455c71;font-size:12px;margin-bottom:3px}
    .selected-empty-v45 span{display:block;font-size:10px;line-height:1.4}

    .access-checklist-v45::-webkit-scrollbar,.selected-rules-v45::-webkit-scrollbar{width:6px}
    .access-checklist-v45::-webkit-scrollbar-thumb,.selected-rules-v45::-webkit-scrollbar-thumb{background:#d4e0e8;border-radius:10px}
    .access-checklist-v45::-webkit-scrollbar-track,.selected-rules-v45::-webkit-scrollbar-track{background:transparent}

    .access-modal-actions-v45{padding:14px 26px 20px!important;border-top:1px solid #e6edf4!important}
    .access-modal-actions-v45 button{min-width:108px}

    @media(max-width:620px){
      .access-modal-wide{width:calc(100vw - 18px)!important}
      .access-modal-head,.access-mode-stack,.specific-access-area{padding-left:16px;padding-right:16px}
      .access-modal-actions-v45{padding-left:16px!important;padding-right:16px!important}
      .access-type-row{align-items:stretch;flex-direction:column;gap:5px}
      .access-type-select{width:100%}
      .builder-hint{display:none}
    }
  `;
  document.head.appendChild(s);
}
// Legacy collapsible panels (tasks/materials/etc.). Document and order upload panels use native <details>
// so browser click handling is deterministic and the action button can never escape the collapsed body.
document.addEventListener("click",e=>{
  const head=e.target.closest(".kedo-form-panel-head.kedo-collapsible-head");
  if(!head)return;
  const panel=head.closest(".kedo-form-panel");
  if(!panel || panel.tagName === "DETAILS") return;
  const body=panel.querySelector(":scope > .kedo-form-panel-body");
  if(!body)return;
  e.preventDefault();
  e.stopPropagation();
  const collapsed=!panel.classList.contains("is-collapsed");
  panel.classList.toggle("is-collapsed",collapsed);
  body.hidden=collapsed;
  head.setAttribute("aria-expanded",String(!collapsed));
  const small=head.querySelector("small");
  if(small) small.textContent=collapsed ? "Нажмите, чтобы развернуть поля" : "Нажмите, чтобы свернуть форму";
});

document.addEventListener("click",e=>{
  const el=e.target.closest("[data-action]");
  if(!el)return;
  const action=el.dataset.action;
  if(action==="editEmployee"){e.preventDefault();e.stopPropagation();editEmployee(Number(el.dataset.id));}
  else if(action==="editEmployeeRoles"){e.preventDefault();e.stopPropagation();editEmployeeRoles(Number(el.dataset.id));}
},true);

// All portal pages render controls dynamically. Keep one delegated action
// router for those controls; without it buttons added after the first render
// have no target handler and appear clickable while doing nothing.
if(!window.__kedoActionDispatcherInstalled){
  window.__kedoActionDispatcherInstalled=true;
  document.addEventListener("click",async e=>{
    const el=e.target?.closest?.("[data-action]");
    if(!el||el.disabled)return;
    const action=el.dataset.action;
    // These are handled by the dedicated capture/bubble handlers above.
    if(action==="editEmployee"||action==="editEmployeeRoles")return;
    const id=Number(el.dataset.id||0),folderId=Number(el.dataset.folderId||0);
    const run=async()=>{
      switch(action){
        case "setPage": return setPage(el.dataset.page||"dashboard");
        case "openDocument": return openDocument(id);
        case "previewDoc": return previewDoc(id,false);
        case "previewApproved": return previewApproved(id);
        case "previewSigned": return previewDoc(id,true);
        case "downloadDoc": return downloadDoc(id,false);
        case "downloadApproved": return downloadDoc(id,false,true);
        case "downloadSigned": return downloadDoc(id,true);
        case "toggleFavorite": return toggleFavorite(id);
        case "submitApproval": return submitApproval(id);
        case "approveDocument": return approveDocument(id);
        case "rejectDocument": return rejectDocument(id);
        case "signDocument": return signDocument(id);
        case "acknowledgeOrder": return acknowledgeOrder(id);
        case "archiveOrder": return archiveOrder(id);
        case "addComment": return addComment(id);
        case "deleteComment": return deleteComment(id,Number(el.dataset.commentId||0));
        case "deleteDocument": return deleteDocument(id);
         case "editDocumentAccess": return editDocumentAccess(id,{returnToAccess:el.dataset.returnTo==="access"});
        case "uploadDocument": return uploadDocument();
        case "uploadOrder": return uploadOrder();
        case "prepareSigningKey": return prepareSigningKey();
        case "searchDocs": return searchDocs();
        case "searchOrders": return searchOrders();
        case "openOrderFolder": state.orderFolderId=id||null; state.orderFoldersOpen=true; return renderOrders();
        case "createOrderFolder": {
          state.orderFoldersOpen=true;
          const name=await kedoPrompt("Название новой папки:");
          if(!name?.trim())return;
          await api("/api/documents/order-folders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:name.trim(),parentId:state.orderFolderId||null})});
          return renderOrders();
        }
        case "renameOrderFolder": {
          state.orderFoldersOpen=true;
          const folder=(state.orderFolders||[]).find(item=>Number(item.id)===id),name=await kedoPrompt("Новое название папки:",folder?.name||"");
          if(!name?.trim())return;
          await api(`/api/documents/order-folders/${id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:name.trim()})});
          return renderOrders();
        }
        case "deleteOrderFolder":
          state.orderFoldersOpen=true;
          if(!await kedoConfirm("Удалить папку? Приказы останутся в системе."))return;
          await api(`/api/documents/order-folders/${id}`,{method:"DELETE"});
          if(Number(state.orderFolderId)===id)state.orderFolderId=null;
          return renderOrders();
        case "orderFolderAccess": return orderFolderAccess(id);
        case "saveOrderFolderAccess": return saveOrderFolderAccess(id,el);
        case "addOrderFolder": return chooseOrderFolder(id);
        case "removeOrderFolder": return removeOrderFolder(id,folderId);
        case "closeOrderFolderModal": return el.closest(".archive-modal")?.remove();
        case "saveOrderFolder": return saveOrderFolder(id,el);
        case "copyPublicLink": return navigator.clipboard.writeText(el.dataset.url||"");
        case "insertPublicLinkReport": return window.insertDocumentIntoReport?.(id,el.dataset.title||"Документ",el.dataset.url||"");
        case "revokePublicLink": if(await kedoConfirm("Старый адрес сразу перестанет работать. Отозвать ссылку?")){await api(`/api/public-links/documents/${id}/revoke`,{method:"POST"});return openDocument(id);} return;
        case "reissuePublicLink": await api(`/api/public-links/documents/${id}/reissue`,{method:"POST"}); return openDocument(id);
        case "previewKnowledgePdf": return previewKnowledgePdf(Number(el.dataset.articleId||0),id,el.dataset.title||"PDF");
        case "addKnowledge": return addKnowledge();
        case "deleteKnowledge": return deleteKnowledge(id);
        case "editKnowledge": return editKnowledge(id);
         case "editKnowledgeAccess": return editKnowledgeAccess(id,{returnToAccess:el.dataset.returnTo==="access"});
        case "toggleTaskCreate": return toggleTaskCreate();
        case "createTask": return createTask();
        case "confirmTask": return confirmTask(id);
        case "openTaskDetails": return openTaskDetails(id);
        case "updateTask": return updateTask(id,el.dataset.status||"");
        case "updateTaskPriority": return updateTaskPriority(id,el.dataset.priority||"NORMAL");
        case "removeAvatar": await removeMyAvatar(); return renderProfile();
        case "setProfileSetting": return setProfileSetting(el.dataset.key||"",el.dataset.value||"");
        case "openEmployeeDirectory": return openEmployeeDirectory();
        case "closeEmployeeDirectory": return closeEmployeeDirectory();
        case "openProfileCard": return openProfileCard(id);
        case "switchProfile": return switchProfile(id);
        case "openProfileContacts": return openProfileContacts();
        case "backToMyProfile": return backToMyProfile();
        case "openChatWithUser": return openChatWithUser(id);
        case "assignProfileTeam": return assignProfileTeam(id);
        case "removeProfileTeam": return removeProfileTeam(id);
        case "closeProfileCard": return el.closest(".profile-person-modal")?.remove();
        case "returnProfile": return returnProfile();
        case "openNotificationPanel": return openNotificationPanel();
        case "openAdminAccess": return renderAdminAccess();
        case "openAdminVersions": return renderAdminVersions();
        case "openAdminTools": return openAdminTools();
        case "openAdminFaq": return openAdminFaq();
        case "openAdminImpersonationModal": return openAdminImpersonationModal();
        case "openOrgGroupCreate": return openOrgGroupCreate();
        case "openAdminBranch": return openAdminBranch(id);
        case "editOrgGroup": return editOrgGroup(id);
        case "deleteOrgGroup": return deleteOrgGroup(id);
        case "createEmployee": return createEmployee();
        case "createDepartment": return createDepartment();
        case "deleteDepartment": return deleteDepartment(id);
        case "deleteEmployee": return deleteEmployee(id);
        case "setTrainingExitPassword": return setTrainingExitPassword(id);
        case "resetEmployeePassword": return resetEmployeePassword(id);
        case "createAccountFromRequest": return createAccountFromRequest(id);
        case "rejectAccountRequest": return rejectAccountRequest(id);
        case "toggleEmployee": return toggleEmployee(id,el.dataset.active==="true");
        case "unblockIp": return unblockIp(id);
        case "archiveBranchTicket": return archiveBranchTicket(id,el.dataset.archived!=="false");
        case "archiveAccountRequest": return archiveAccountRequest(id,el.dataset.archived!=="false");
        case "openAdminArchiveTab": return openAdminArchiveTab(el.dataset.target||"");
        default: return undefined;
      }
    };
    // Let controls that have their own listener continue normally; the
    // dispatcher only owns the declared data-action contract.
    if(["editEmployee","editEmployeeRoles"].includes(action))return;
    e.preventDefault();
    try{await run();}catch(err){kedoAlert(err?.message||"Не удалось выполнить действие.");}
  });
}
(async()=>{
  if(window.__KEDO_PUBLIC_VIEW)return;
  try{
    // Check the session first. A short upstream 502 while obtaining CSRF
    // must not turn a valid session into a fake logout screen.
    let me=null,lastError=null;
    for(let attempt=0;attempt<3&&!me;attempt++){
      try{me=await api("/api/auth/me");}
      catch(e){lastError=e;if(e.code==="SESSION_EXPIRED")throw e;await new Promise(resolve=>setTimeout(resolve,300*(attempt+1)));}
    }
    if(!me)throw lastError||Error("SESSION_NOT_FOUND");
    try{await ensureCsrfToken();}catch(e){
      if(e.code==="SESSION_EXPIRED")throw e;
      console.warn("[KEDO] CSRF temporarily unavailable; it will be retried on the first action.",e);
    }
    await showApp(me);

  }catch(e){
    console.warn("[KEDO] Bootstrap failed:",e);
    $("app").classList.add("hidden");
    $("loginPage").classList.remove("hidden");
    document.documentElement.classList.remove("kedo-booting");
  }
})();


// --- Internal KEDO legal footer / privacy policy ---


(()=>{const s=document.createElement("style");s.textContent=`.group-department-manager{border:1px solid #dfe7ef;border-radius:10px;padding:12px;margin:12px 0}.group-manager-head{display:flex;justify-content:space-between;margin-bottom:8px}.group-department-list{display:grid;gap:6px;max-height:260px;overflow:auto}.group-department-item{display:flex;align-items:center;gap:9px;padding:9px 10px;border:1px solid #e4eaf0;border-radius:8px;background:#fff}.group-department-item.included{background:#f3f8fc;border-color:#cfe1ef}.group-department-item input{margin:0}.group-create-dep{display:flex;gap:8px;margin-top:10px}.group-create-dep input{flex:1}.group-management-modal{max-width:720px}`;document.head.appendChild(s);})();

(()=>{const s=document.createElement("style");s.id="kedoBranchAndTopPolish";s.textContent=`
  /* Верхняя панель: имя и поиск — одна визуальная система. */
  .user-menu-button,.global-search-button{
    height:38px!important;min-height:38px!important;display:inline-flex!important;align-items:center!important;
    padding:0 13px!important;border:1px solid rgba(255,255,255,.26)!important;
    background:rgba(255,255,255,.07)!important;color:#fff!important;border-radius:9px!important;
    box-shadow:inset 0 1px 0 rgba(255,255,255,.06)!important;
  }
  .user-menu-button{max-width:330px!important;font-weight:600!important;text-overflow:clip!important;white-space:normal!important}
  .global-search-button{font-weight:500!important;gap:6px!important}
  .user-menu-button:hover,.global-search-button:hover{background:rgba(255,255,255,.13)!important;border-color:rgba(255,255,255,.38)!important}

  /* В модале филиала глобальное правило label раньше превращало строки в огромные блоки. */
  html body .admin-edit-overlay .admin-edit-modal .group-department-item{
    display:grid!important;grid-template-columns:18px minmax(0,1fr) auto!important;align-items:center!important;
    gap:8px!important;width:100%!important;min-height:42px!important;margin:0!important;padding:8px 10px!important;
    border:1px solid #dfe7ef!important;border-radius:9px!important;background:#fff!important;
    font-weight:500!important;cursor:pointer!important;
  }
  html body .admin-edit-overlay .admin-edit-modal .group-department-item.included{background:#f4f9fd!important;border-color:#c7ddec!important}
  html body .admin-edit-overlay .admin-edit-modal .group-department-item>input[type="checkbox"]{
    display:block!important;width:16px!important;height:16px!important;margin:0!important;padding:0!important;accent-color:#1769aa;
  }
  html body .admin-edit-overlay .admin-edit-modal .group-department-item>span{
    min-width:0!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;
  }
  html body .admin-edit-overlay .admin-edit-modal .group-department-item .group-dep-rename,
  html body .admin-edit-overlay .admin-edit-modal .group-department-item .pending-dep-remove{
    width:auto!important;min-height:30px!important;height:30px!important;padding:5px 9px!important;margin:0!important;
    border-radius:7px!important;font-size:12px!important;
  }
  html body .admin-edit-overlay .admin-edit-modal .org-group-modal-deps,
  html body .admin-edit-overlay .admin-edit-modal .group-department-list{
    display:grid!important;gap:7px!important;max-height:250px!important;overflow:auto!important;
    padding:7px!important;border:1px solid #dce6ef!important;border-radius:10px!important;background:#f7fafc!important;
  }
  html body .admin-edit-overlay .admin-edit-modal .group-create-dep{
    display:grid!important;grid-template-columns:minmax(0,1fr) auto!important;gap:8px!important;align-items:center!important;margin-top:9px!important;
  }
  html body .admin-edit-overlay .admin-edit-modal .group-create-dep button{width:auto!important;min-height:38px!important;padding:8px 12px!important}
  html body .admin-edit-overlay .admin-edit-modal .group-deps-label{display:flex!important;justify-content:space-between!important;align-items:end!important;gap:10px!important;margin-top:14px!important}
  html body .admin-edit-overlay .admin-edit-modal .group-deps-label>div>label{display:inline!important;margin:0!important}
  html body .admin-edit-overlay .admin-edit-modal .group-select-all{width:auto!important;min-height:34px!important;padding:7px 10px!important;font-size:12px!important}
  @media(max-width:620px){
    html body .admin-edit-overlay .admin-edit-modal .group-department-item{grid-template-columns:18px minmax(0,1fr)!important}
    html body .admin-edit-overlay .admin-edit-modal .group-department-item .group-dep-rename{grid-column:2;justify-self:start}
    html body .admin-edit-overlay .admin-edit-modal .group-create-dep{grid-template-columns:1fr!important}
    html body .admin-edit-overlay .admin-edit-modal .group-create-dep button{width:100%!important}
  }
`;document.head.appendChild(s);})();

(()=>{const s=document.createElement("style");s.textContent=`.group-scope-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:9px}.group-scope-grid>div{min-width:0}.order-group-scopes{display:grid;gap:8px;margin-top:8px}.order-group-scope-card{padding:10px;border:1px solid #dce6ef;border-radius:9px;background:#f8fafc}.order-group-scope-card>strong{color:#183b60}.order-group-scope-card>.muted{font-size:11px}@media(max-width:700px){.group-scope-grid{grid-template-columns:1fr}}`;document.head.appendChild(s);})();


document.getElementById("globalSearchButton")?.addEventListener("click",openGlobalSearch);



(function(){
  if (window.__KEDO_KB_AUDIENCE_FINAL_533) return;
  window.__KEDO_KB_AUDIENCE_FINAL_533 = true;

  const escHtml = (typeof esc === 'function')
    ? esc
    : (v => String(v ?? '').replace(/[&<>"']/g, m => ({
        '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
      }[m])));

  const normalizeRules = (rules) => (Array.isArray(rules) ? rules : [])
    .map(r => ({
      principal_type: String(r?.principal_type ?? r?.principalType ?? '').toUpperCase(),
      principal_value: String(r?.principal_value ?? r?.principalValue ?? '')
    }))
    .filter(r => r.principal_type);

  const getOptions = async () => {
    let options = window.__kedoKnowledgeOptions;
    if (!options || !Array.isArray(options.departments)) {
      options = await api('/api/knowledge/access/options');
      window.__kedoKnowledgeOptions = options;
    }
    return options;
  };

  const labelFor = (r, options) => {
    const type = r.principal_type;
    const value = String(r.principal_value ?? '');
    if (type === 'ALL') return 'Все сотрудники';

    if (type === 'GROUP') {
      const x = (options.groups || []).find(v => String(v.value) === value);
      return x?.name || value;
    }
    if (type === 'DEPARTMENT') {
      const x = (options.departments || []).find(v => String(v.value) === value);
      return x?.name || value;
    }
    if (type === 'USER') {
      const x = (options.users || []).find(v => String(v.value) === value);
      return x?.name || value;
    }
    if (type === 'ROLE') {
      return (typeof roleLabel === 'function' ? roleLabel(value) : value);
    }
    if (type === 'POSITION') return value;
    return value;
  };

  const metaFor = (r, options) => {
    const type = r.principal_type;
    const value = String(r.principal_value ?? '');
    if (type === 'ALL') return 'Вся организация';
    if (type === 'GROUP') {
      const x = (options.groups || []).find(v => String(v.value) === value);
      return `${(x?.departments || []).length || 0} подразделений`;
    }
    if (type === 'DEPARTMENT') return 'Подразделение';
    if (type === 'USER') {
      const x = (options.users || []).find(v => String(v.value) === value);
      return [x?.position, x?.department_name].filter(Boolean).join(' · ') || 'Сотрудник';
    }
    if (type === 'ROLE') return 'Роль сотрудника';
    if (type === 'POSITION') return 'Должность';
    return '';
  };

  const scopeTitle = {
    GROUP:'Филиалы / группы',
    DEPARTMENT:'Подразделения',
    USER:'Сотрудники',
    ROLE:'Роли',
    POSITION:'Должности'
  };

  const icon = {
    ALL:'◎', GROUP:'▥', DEPARTMENT:'▦', USER:'●', ROLE:'R', POSITION:'Д'
  };

  function renderDraftChips(container, rules, options) {
    const rows = rules.length ? rules : [{principal_type:'ALL', principal_value:''}];
    container.innerHTML = rows.map((r, i) => `
      <div class="kb33-chip">
        <span class="kb33-chip-icon">${icon[r.principal_type] || '•'}</span>
        <span class="kb33-chip-text">
          <b>${escHtml(labelFor(r, options))}</b>
          <small>${escHtml(metaFor(r, options))}</small>
        </span>
        <button type="button" class="kb33-chip-remove" data-kb33-remove="${i}" aria-label="Удалить правило">×</button>
      </div>
    `).join('');
  }

  function openAudienceBuilder(){
    document.querySelectorAll('.kb33-overlay,.kb-fixed-builder-overlay').forEach(el => el.remove());

    Promise.resolve().then(async () => {
      let options;
      try {
        options = await getOptions();
      } catch (e) {
        kedoAlert(e?.message || 'Не удалось загрузить варианты доступа.');
        return;
      }

      let working = normalizeRules(window.__kedoKnowledgeDraftRules);
      if (!working.length) working = [{principal_type:'ALL', principal_value:''}];

      const overlay = document.createElement('div');
      overlay.className = 'kb33-overlay';
      overlay.innerHTML = `
        <div class="kb33-modal" role="dialog" aria-modal="true" aria-labelledby="kb33Title">
          <header class="kb33-head">
            <div>
              <div class="kb33-eyebrow">ДОСТУП К МАТЕРИАЛУ</div>
              <h2 id="kb33Title">Настройка аудитории</h2>
              <p>Соберите правило доступа — от всей организации до конкретных сотрудников.</p>
            </div>
            <button type="button" class="kb33-close" data-kb33-close>Закрыть</button>
          </header>

          <div class="kb33-body">
            <aside class="kb33-sidebar">
              <button type="button" class="kb33-nav active" data-kb33-scope="ALL">
                <span class="kb33-nav-icon">◎</span><span><b>Все сотрудники</b><small>Вся организация</small></span>
              </button>
              <button type="button" class="kb33-nav" data-kb33-scope="GROUP">
                <span class="kb33-nav-icon">▥</span><span><b>Филиалы</b><small>Группы и филиалы</small></span>
              </button>
              <button type="button" class="kb33-nav" data-kb33-scope="DEPARTMENT">
                <span class="kb33-nav-icon">▦</span><span><b>Подразделения</b><small>Один или несколько</small></span>
              </button>
              <button type="button" class="kb33-nav" data-kb33-scope="USER">
                <span class="kb33-nav-icon">●</span><span><b>Сотрудники</b><small>Точный список</small></span>
              </button>
              <button type="button" class="kb33-nav" data-kb33-scope="ROLE">
                <span class="kb33-nav-icon">R</span><span><b>Роли</b><small>По полномочиям</small></span>
              </button>
              <button type="button" class="kb33-nav" data-kb33-scope="POSITION">
                <span class="kb33-nav-icon">Д</span><span><b>Должности</b><small>По должности</small></span>
              </button>
            </aside>

            <main class="kb33-main">
              <section class="kb33-summary">
                <div class="kb33-section-label">ВЫБРАННАЯ АУДИТОРИЯ</div>
                <div class="kb33-chip-grid" data-kb33-summary></div>
              </section>

              <section class="kb33-picker" data-kb33-picker></section>
            </main>
          </div>

          <footer class="kb33-foot">
            <span>Достаточно совпадения хотя бы с одним правилом.</span>
            <div>
              <button type="button" class="kb33-btn kb33-btn-light" data-kb33-close>Отмена</button>
              <button type="button" class="kb33-btn kb33-btn-primary" data-kb33-save>Сохранить аудиторию →</button>
            </div>
          </footer>
        </div>
      `;
      document.body.appendChild(overlay);
      lock();

      const summary = overlay.querySelector('[data-kb33-summary]');
      const picker = overlay.querySelector('[data-kb33-picker]');
      const close = () => { overlay.remove(); unlock(); };

      overlay.querySelectorAll('[data-kb33-close]').forEach(b => b.onclick = close);
      overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

      const available = scope => {
        if (scope === 'GROUP') return (options.groups || []).map(v => ({
          value:v.value, label:v.name, sub:`${(v.departments || []).length || 0} подразделений`
        }));
        if (scope === 'DEPARTMENT') return (options.departments || []).map(v => ({
          value:v.value, label:v.name, sub:'Подразделение'
        }));
        if (scope === 'USER') return (options.users || []).map(v => ({
          value:v.value, label:v.name, sub:[v.position,v.department_name].filter(Boolean).join(' · ') || 'Сотрудник'
        }));
        if (scope === 'ROLE') return (options.roles || []).map(v => ({
          value:v, label:typeof roleLabel === 'function' ? roleLabel(v) : v, sub:'Роль сотрудника'
        }));
        if (scope === 'POSITION') return (options.positions || []).map(v => ({
          value:v, label:v, sub:'Должность'
        }));
        return [];
      };

      function drawSummary() {
        renderDraftChips(summary, working, options);
        summary.querySelectorAll('[data-kb33-remove]').forEach(btn => {
          btn.onclick = () => {
            working.splice(Number(btn.dataset.kb33Remove),1);
            if (!working.length) working = [{principal_type:'ALL',principal_value:''}];
            drawSummary();
          };
        });
      }

      function chooseAll() {
        working = [{principal_type:'ALL',principal_value:''}];
        drawSummary();
      }

      function renderScope(scope) {
        overlay.querySelectorAll('[data-kb33-scope]').forEach(b => {
          b.classList.toggle('active', b.dataset.kb33Scope === scope);
        });

        if (scope === 'ALL') {
          picker.innerHTML = `
            <div class="kb33-hero">
              <div class="kb33-hero-icon">◎</div>
              <div class="kb33-hero-kicker">ОТКРЫТЬ ДЛЯ ВСЕХ</div>
              <h3>Вся организация</h3>
              <p>Материал будет доступен каждому активному сотруднику.</p>
              <button type="button" class="kb33-btn kb33-btn-primary" data-kb33-all>Открыть всем</button>
            </div>
          `;
          picker.querySelector('[data-kb33-all]').onclick = chooseAll;
          return;
        }

        const items = available(scope);
        picker.innerHTML = `
          <div class="kb33-picker-top">
            <div><b>${scopeTitle[scope]}</b><small>Можно выбрать несколько вариантов</small></div>
            <span class="kb33-count" data-kb33-count>0 выбрано</span>
          </div>
          <label class="kb33-search">
            <span>⌕</span>
            <input type="search" autocomplete="off" placeholder="Поиск по списку...">
          </label>
          <div class="kb33-list" data-kb33-list></div>
        `;

        const search = picker.querySelector('input');
        const list = picker.querySelector('[data-kb33-list]');
        const count = picker.querySelector('[data-kb33-count]');

        function renderList() {
          const q = search.value.trim().toLowerCase();
          const filtered = items.filter(x => `${x.label} ${x.sub || ''}`.toLowerCase().includes(q));
          list.innerHTML = filtered.length ? filtered.map(x => {
            const checked = working.some(r => r.principal_type === scope && String(r.principal_value) === String(x.value));
            return `
              <label class="kb33-option">
                <input type="checkbox" value="${escHtml(x.value)}" ${checked ? 'checked' : ''}>
                <span class="kb33-box"></span>
                <span class="kb33-option-text"><b>${escHtml(x.label)}</b><small>${escHtml(x.sub || '')}</small></span>
              </label>
            `;
          }).join('') : `<div class="kb33-empty">По вашему запросу ничего не найдено.</div>`;

          const checkedCount = working.filter(r => r.principal_type === scope).length;
          count.textContent = `${checkedCount} выбрано`;

          list.querySelectorAll('input').forEach(input => {
            input.onchange = () => {
              working = working.filter(r => r.principal_type !== scope && r.principal_type !== 'ALL');
              list.querySelectorAll('input:checked').forEach(ch => {
                working.push({principal_type:scope, principal_value:String(ch.value)});
              });
              if (!working.length) working = [{principal_type:'ALL',principal_value:''}];
              drawSummary();
              renderList();
            };
          });
        }

        search.oninput = renderList;
        renderList();
      }

      overlay.querySelectorAll('[data-kb33-scope]').forEach(btn => {
        btn.onclick = () => renderScope(btn.dataset.kb33Scope);
      });

      overlay.querySelector('[data-kb33-save]').onclick = () => {
        window.__kedoKnowledgeDraftRules = working.length ? working : [{principal_type:'ALL',principal_value:''}];
        if (typeof window.__kedoRenderKnowledgeDraft === 'function') window.__kedoRenderKnowledgeDraft();
        else if (typeof window.renderKnowledgeDraftRules === 'function') window.renderKnowledgeDraftRules();
        close();
      };

      drawSummary();
      renderScope(working[0]?.principal_type || 'ALL');
      setTimeout(() => overlay.querySelector('[data-kb33-close]')?.focus(), 0);
    });
  }

  document.addEventListener('click', function(e){
    const target = e.target.closest('#kbOpenBuilder, .kb-access-builder-trigger');
    if (!target) return;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    document.querySelectorAll('.kb-fixed-builder-overlay,.kb33-overlay').forEach(el => el.remove());
    openAudienceBuilder();
  }, true);

  const style = document.createElement('style');
  style.id = 'kedoKnowledgeAudience533';
  style.textContent = `
body.kb33-lock{overflow:hidden!important}
.kb33-overlay{position:fixed!important;inset:0!important;display:grid!important;place-items:center!important;padding:24px!important;background:rgba(11,29,46,.58)!important;backdrop-filter:blur(10px)!important;z-index:2147483647!important}
.kb33-modal{width:min(1120px,calc(100vw - 40px))!important;height:min(780px,calc(100vh - 48px))!important;max-height:calc(100vh - 48px)!important;display:grid!important;grid-template-rows:auto minmax(0,1fr) auto!important;overflow:hidden!important;border-radius:26px!important;background:#f8fbfd!important;box-shadow:0 34px 110px rgba(0,0,0,.28)!important;border:1px solid rgba(255,255,255,.8)!important}
.kb33-head{display:flex;justify-content:space-between;align-items:flex-start;gap:20px;padding:26px 30px 22px;background:linear-gradient(135deg,#ffffff 0%,#eef7fc 100%);border-bottom:1px solid #dfe9f0}
.kb33-eyebrow{font-size:11px;line-height:1;font-weight:900;letter-spacing:.12em;color:#6b8194;text-transform:uppercase;margin-bottom:7px}.kb33-head h2{margin:0;color:#123e66;font-size:29px;letter-spacing:-.03em}.kb33-head p{margin:7px 0 0;color:#71869a;font-size:13px}
.kb33-close{border:1px solid #c9dae7;background:#fff;color:#224a68;border-radius:12px;padding:11px 16px;cursor:pointer;font-weight:700}.kb33-close:hover{background:#f3f8fb}
.kb33-body{display:grid;grid-template-columns:286px minmax(0,1fr);min-height:0;overflow:hidden}
.kb33-sidebar{padding:18px;background:linear-gradient(180deg,#f4f9fc,#edf4f8);border-right:1px solid #dce7ee;overflow:auto}
.kb33-nav{width:100%;display:grid;grid-template-columns:44px 1fr;gap:11px;align-items:center;padding:11px;margin:0 0 8px;border:1px solid transparent;border-radius:15px;background:transparent;text-align:left;color:#244761;cursor:pointer}
.kb33-nav-icon{width:44px;height:44px;display:grid;place-items:center;border-radius:13px;background:#fff;color:#1974a8;font-weight:900;box-shadow:0 4px 14px rgba(26,86,121,.06)}
.kb33-nav b{display:block;font-size:14px}.kb33-nav small{display:block;margin-top:3px;color:#8a9dac;font-size:11px}.kb33-nav:hover{background:#e9f4fa}.kb33-nav.active{background:#e0f0f8;border-color:#bed9e8;box-shadow:inset 3px 0 #1577b4}
.kb33-main{min-width:0;display:grid;grid-template-rows:auto minmax(0,1fr);padding:20px;overflow:hidden;background:#fff}
.kb33-summary{min-height:0}.kb33-section-label{font-size:11px;font-weight:900;letter-spacing:.1em;color:#8496a6;margin-bottom:9px}
.kb33-chip-grid{display:grid;gap:8px;max-height:150px;overflow:auto;padding-right:3px}.kb33-chip{display:grid;grid-template-columns:34px minmax(0,1fr) auto;align-items:center;gap:10px;padding:9px 11px;border:1px solid #dbe6ed;background:#fbfdff;border-radius:13px}.kb33-chip-icon{width:30px;height:30px;border-radius:9px;background:#e8f4fa;color:#136d9e;display:grid;place-items:center;font-weight:900}.kb33-chip b{display:block;color:#23455e;font-size:13px}.kb33-chip small{display:block;color:#899aaa;margin-top:2px;font-size:11px}.kb33-chip-remove{border:0;background:transparent;color:#96a5b0;font-size:20px;cursor:pointer}
.kb33-picker{margin-top:16px;min-height:0;display:flex;flex-direction:column;border:1px solid #dbe7ef;border-radius:18px;background:#f7fbfd;overflow:hidden}
.kb33-picker-top{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:16px 17px 12px}.kb33-picker-top b{display:block;color:#254760;font-size:15px}.kb33-picker-top small{display:block;color:#8a9aa8;margin-top:3px}.kb33-count{padding:6px 9px;border-radius:999px;background:#e7f3fa;color:#176c9c;font-size:11px;font-weight:900}
.kb33-search{display:flex;align-items:center;gap:8px;margin:0 14px 12px;padding:0 12px;border:1px solid #cfdfe8;border-radius:12px;background:#fff}.kb33-search span{font-size:19px;color:#6e8799}.kb33-search input{width:100%;border:0!important;outline:0!important;background:transparent!important;box-shadow:none!important;padding:12px 0!important}
.kb33-list{min-height:0;overflow:auto;padding:0 14px 14px;display:grid;gap:7px}.kb33-option{display:grid;grid-template-columns:18px 1fr;gap:10px;align-items:center;padding:10px 12px;border:1px solid #dce7ed;border-radius:12px;background:#fff;cursor:pointer}.kb33-option:hover{border-color:#b8d3e1;transform:translateY(-1px)}.kb33-option input{position:absolute;opacity:0}.kb33-box{width:18px;height:18px;border:2px solid #b9ccd8;border-radius:5px;background:#fff}.kb33-option input:checked+.kb33-box{background:#1675ae;border-color:#1675ae;box-shadow:inset 0 0 0 3px #fff}.kb33-option-text b{display:block;color:#294a62;font-size:13px}.kb33-option-text small{display:block;color:#8a9aa8;margin-top:2px;font-size:11px}.kb33-empty{display:grid;place-items:center;min-height:180px;color:#8596a4}
.kb33-hero{display:grid;place-items:center;align-content:center;min-height:100%;padding:40px;text-align:center}.kb33-hero-icon{width:74px;height:74px;display:grid;place-items:center;border-radius:24px;background:#e6f4fb;color:#1873a8;font-size:40px;margin-bottom:12px;box-shadow:0 16px 40px rgba(30,120,170,.12)}.kb33-hero-kicker{font-size:10px;font-weight:900;letter-spacing:.12em;color:#6c8497;margin-bottom:5px}.kb33-hero h3{margin:0;color:#1e4964;font-size:20px}.kb33-hero p{max-width:430px;margin:8px 0 18px;color:#7d8f9d;line-height:1.5}
.kb33-foot{display:flex;justify-content:space-between;align-items:center;gap:18px;padding:14px 20px;border-top:1px solid #dfe8ef;background:#fff}.kb33-foot>span{font-size:12px;color:#7f919f}.kb33-foot>div{display:flex;gap:8px}.kb33-btn{border-radius:12px;padding:11px 16px;font-weight:800;cursor:pointer}.kb33-btn-light{background:#fff;border:1px solid #c9dae5;color:#294b65}.kb33-btn-light:hover{background:#f4f8fb}.kb33-btn-primary{border:1px solid #116fa8;background:linear-gradient(135deg,#1679b5,#0f6399);color:#fff;box-shadow:0 8px 20px rgba(15,101,153,.18)}.kb33-btn-primary:hover{transform:translateY(-1px);filter:brightness(1.03)}
.kedo-new-material-badge{display:inline-flex!important;align-items:center!important;gap:7px!important;padding:6px 11px!important;border-radius:999px!important;background:#eaf5fb!important;color:#176da5!important;font-size:10px!important;font-weight:900!important;letter-spacing:.09em!important;text-transform:uppercase!important}
.knowledge-compose-head{position:relative;overflow:hidden}.knowledge-compose-head:after{content:'';position:absolute;inset:auto 0 0 0;height:2px;background:linear-gradient(90deg,#1b77ad,transparent 65%)}
@media(max-width:900px){.kb33-modal{width:calc(100vw - 24px)!important;height:calc(100vh - 24px)!important;max-height:calc(100vh - 24px)!important}.kb33-body{grid-template-columns:1fr}.kb33-sidebar{display:flex;overflow:auto;border-right:0;border-bottom:1px solid #dce7ee}.kb33-nav{min-width:210px;margin:0}.kb33-foot{flex-direction:column;align-items:stretch}.kb33-foot>div{justify-content:flex-end}}
  `;
  document.head.appendChild(style);

  const lock = () => document.body.classList.add('kb33-lock');
  const unlock = () => document.body.classList.remove('kb33-lock');

  const observer = new MutationObserver(() => {
    document.querySelectorAll('.kb33-overlay').forEach(() => lock());
  });
  observer.observe(document.body, {childList:true});

  const originalRemove = Element.prototype.remove;
  // Keep body unlocked after this modal closes without touching unrelated dialogs.
  const watchClose = () => {
    if (!document.querySelector('.kb33-overlay')) unlock();
  };

})();
/* KEDO_SUBSTITUTIONS_BEAUTY_540 */
(function(){
  if (window.__KEDO_SUBS_BEAUTY_540) return;
  window.__KEDO_SUBS_BEAUTY_540 = true;

  const esc = v => String(v ?? '').replace(/[&<>"']/g, m => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[m]));

  function findCreateCard(){
    const h=[...document.querySelectorAll('h1,h2,h3,strong')].find(x => (x.textContent||'').trim()==='Создать замещение');
    if(!h) return null;
    let el=h;
    for(let i=0;i<10 && el;i++,el=el.parentElement){
      const selects=el.querySelectorAll('select');
      const btn=[...el.querySelectorAll('button')].find(b=>/создать замещение/i.test(b.textContent||''));
      if(selects.length>=2 && btn) return el;
    }
    return null;
  }

  function parsePeople(select){
    return [...select.options].filter(o=>o.value).map(o=>{
      const raw=o.textContent.trim();
      const parts=raw.split(/\s+—\s+|\s+·\s+/).map(s=>s.trim()).filter(Boolean);
      return {value:o.value,name:parts[0]||raw,meta:parts.slice(1).join(' · ')||'Сотрудник'};
    });
  }

  function openPicker(select, heading){
    const old=document.querySelector('.kedo540-overlay');
    if(old) old.remove();

    const people=parsePeople(select);
    const deps=[...new Set(people.map(p=>p.meta).filter(Boolean))].map(name=>({
      name,count:people.filter(p=>p.meta===name).length
    }));

    let mode='people', query='', selected=String(select.value||'');

    const overlay=document.createElement('div');
    overlay.className='kedo540-overlay';
    overlay.innerHTML=`
      <div class="kedo540-modal" role="dialog" aria-modal="true">
        <header class="kedo540-modal-head">
          <div><span class="kedo540-kicker">НАСТРОЙКА ЗАМЕЩЕНИЯ</span>
          <h2>${esc(heading)}</h2><p>Выберите сотрудника или сначала уточните подразделение.</p></div>
          <button type="button" class="kedo540-close">Закрыть</button>
        </header>
        <div class="kedo540-modal-body">
          <aside class="kedo540-sidebar">
            <button class="kedo540-tab active" data-mode="people" type="button"><span>●</span><div><b>Сотрудники</b><small>${people.length} в списке</small></div></button>
            <button class="kedo540-tab" data-mode="departments" type="button"><span>▦</span><div><b>Подразделения</b><small>${deps.length} найдено</small></div></button>
          </aside>
          <section class="kedo540-picker">
            <div class="kedo540-toolbar"><div class="kedo540-search"><span>⌕</span><input type="search" placeholder="Поиск по имени, должности или подразделению..."></div><span class="kedo540-count"></span></div>
            <div class="kedo540-list"></div>
          </section>
        </div>
        <footer class="kedo540-modal-foot">
          <span class="kedo540-selected">Сотрудник не выбран</span>
          <div><button type="button" class="kedo540-cancel">Отмена</button><button type="button" class="kedo540-choose">Выбрать сотрудника <b>→</b></button></div>
        </footer>
      </div>`;

    document.body.appendChild(overlay);
    document.body.classList.add('kedo540-lock');

    const search=overlay.querySelector('input');
    const list=overlay.querySelector('.kedo540-list');
    const count=overlay.querySelector('.kedo540-count');
    const chosen=overlay.querySelector('.kedo540-selected');

    const close=()=>{overlay.remove();document.body.classList.remove('kedo540-lock');};

    function render(){
      const q=query.toLowerCase();
      if(mode==='people'){
        const rows=people.filter(p=>`${p.name} ${p.meta}`.toLowerCase().includes(q));
        count.textContent=`${rows.length} сотрудников`;
        list.innerHTML=rows.length?rows.map(p=>`
          <button type="button" class="kedo540-row ${String(p.value)===selected?'active':''}" data-value="${esc(p.value)}">
            <span class="kedo540-avatar">●</span><span class="kedo540-info"><b>${esc(p.name)}</b><small>${esc(p.meta)}</small></span><i>${String(p.value)===selected?'✓':'→'}</i>
          </button>`).join(''):'<div class="kedo540-empty"><b>Сотрудник не найден</b><span>Попробуйте другой запрос.</span></div>';
      }else{
        const rows=deps.filter(d=>d.name.toLowerCase().includes(q));
        count.textContent=`${rows.length} подразделений`;
        list.innerHTML=rows.length?rows.map(d=>`
          <button type="button" class="kedo540-row" data-department="${esc(d.name)}">
            <span class="kedo540-avatar">▦</span><span class="kedo540-info"><b>${esc(d.name)}</b><small>${d.count} сотрудников</small></span><i>→</i>
          </button>`).join(''):'<div class="kedo540-empty"><b>Подразделения не найдены</b><span>Данные о подразделениях не указаны у сотрудников.</span></div>';
      }

      list.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{
        selected=String(b.dataset.value);
        const p=people.find(x=>String(x.value)===selected);
        chosen.textContent=p?`Выбран: ${p.name}`:'Сотрудник не выбран';
        render();
      });
      list.querySelectorAll('[data-department]').forEach(b=>{
        b.onclick=()=>{
          mode='people'; query=b.dataset.department; search.value=query;
          overlay.querySelectorAll('[data-mode]').forEach(x=>x.classList.toggle('active',x.dataset.mode==='people'));
          render();
        };
      });
    }

    overlay.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{
      mode=b.dataset.mode; query=''; search.value='';
      overlay.querySelectorAll('[data-mode]').forEach(x=>x.classList.toggle('active',x===b));
      render();
    });
    search.oninput=()=>{query=search.value;render();};
    overlay.querySelector('.kedo540-close').onclick=close;
    overlay.querySelector('.kedo540-cancel').onclick=close;
    overlay.addEventListener('click',e=>{if(e.target===overlay)close();});
    overlay.querySelector('.kedo540-choose').onclick=()=>{
      if(!selected){kedoAlert('Выберите сотрудника.');return;}
      select.value=selected;
      select.dispatchEvent(new Event('change',{bubbles:true}));
      close();
    };
    render();
  }

  function decorate(label,select,title,num){
    if(label.dataset.kedo540Decorated==='1') return;
    label.dataset.kedo540Decorated='1';
    const current=select.options[select.selectedIndex];
    label.classList.add('kedo540-field');
    label.innerHTML=`
      <span class="kedo540-number">${String(num).padStart(2,'0')}</span>
      <span class="kedo540-field-label">${esc(title)} <b>*</b></span>
      <button type="button" class="kedo540-select-card">
        <span class="kedo540-select-icon">●</span>
        <span class="kedo540-select-copy"><strong>${esc(current?.textContent||'Выберите сотрудника')}</strong><small>${select.value?'Сотрудник выбран':'Нажмите, чтобы выбрать'}</small></span>
        <span class="kedo540-select-arrow">→</span>
      </button>`;
    label.appendChild(select);
    select.style.display='none';
    const trigger=label.querySelector('.kedo540-select-card');
    trigger.onclick=()=>openPicker(select,title);
    select.addEventListener('change',()=>{
      const o=select.options[select.selectedIndex];
      trigger.querySelector('strong').textContent=o?.textContent||'Выберите сотрудника';
      trigger.querySelector('small').textContent=select.value?'Сотрудник выбран':'Нажмите, чтобы выбрать';
    });
  }

  function apply(){
    const main=document.querySelector('main');
    if(!main) return;
    const h=[...main.querySelectorAll('h1')].find(x=>(x.textContent||'').trim()==='Замещения');
    if(!h) return;

    const card=findCreateCard();
    if(!card) return;

    if(card.dataset.kedo540Openable!=='1'){
      card.dataset.kedo540Openable='1';
      card.classList.add('kedo540-create-card');
      const children=[...card.children];
      const body=document.createElement('div');
      body.className='kedo540-form-body';
      children.forEach(c=>body.appendChild(c));
      const hero=document.createElement('button');
      hero.type='button'; hero.className='kedo540-hero';
      hero.innerHTML='<span><em>✦ НОВОЕ ЗАМЕЩЕНИЕ</em><strong>Создать замещение</strong><small>Передайте рабочие полномочия на выбранный период</small></span><b class="kedo540-hero-icon">＋</b>';
      card.append(hero,body);
      body.hidden=true;
      hero.onclick=()=>{
        const open=!body.hidden; body.hidden=!open; card.classList.toggle('open',open);
        hero.querySelector('.kedo540-hero-icon').textContent=open?'×':'＋';
      };
    }

    const labels=[...card.querySelectorAll('label')].filter(l=>l.querySelector('select') && /кого замещать|кто замещает/i.test(l.textContent||''));
    if(labels.length>=2){
      decorate(labels[0],labels[0].querySelector('select'),'Кого заменить',1);
      decorate(labels[1],labels[1].querySelector('select'),'Кто замещает',2);
    }

    const createBtn=[...card.querySelectorAll('button')].find(b=>/создать замещение/i.test(b.textContent||'') && !b.classList.contains('kedo540-hero'));
    if(createBtn){
      createBtn.classList.add('kedo540-submit');
      createBtn.innerHTML='Создать замещение <b>→</b>';
    }
  }

  function watch(){
    const main=document.querySelector('main');
    if(!main){setTimeout(watch,400);return;}
    let timer=0;
    const run=()=>{clearTimeout(timer);timer=setTimeout(apply,70);};
    new MutationObserver(run).observe(main,{childList:true,subtree:true});
    run();
  }

  if(!document.getElementById('kedo540Style')){
    const s=document.createElement('style');
    s.id='kedo540Style';
    s.textContent=`
      body.kedo540-lock{overflow:hidden!important}
      .kedo540-create-card{padding:0!important;overflow:hidden!important;border:1px solid #d3e3ec!important;border-radius:24px!important;background:#fff!important;box-shadow:0 16px 42px rgba(21,65,90,.08)!important}
      .kedo540-hero{width:100%;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:24px 26px;border:0;border-left:5px solid #1675aa;background:linear-gradient(135deg,#fff,#edf7fb);text-align:left;cursor:pointer}
      .kedo540-hero:hover{background:linear-gradient(135deg,#fff,#e7f3f9)}
      .kedo540-hero em{display:inline-flex;padding:6px 10px;border-radius:999px;background:#e3f3fa;color:#156c9c;font-style:normal;font-size:10px;font-weight:900;letter-spacing:.09em}
      .kedo540-hero strong{display:block;margin-top:8px;color:#123e60;font-size:22px;letter-spacing:-.02em}
      .kedo540-hero small{display:block;margin-top:4px;color:#778d9c;font-size:12px}
      .kedo540-hero-icon{width:44px;height:44px;display:grid;place-items:center;border-radius:15px;background:#e4f4fb;color:#1671a4;font-size:26px;font-weight:400}
      .kedo540-create-card.open .kedo540-hero-icon{background:#1674a8;color:#fff}
      .kedo540-form-body{padding:24px 26px 28px}
      .kedo540-field{display:block!important;position:relative!important;padding:13px 13px 13px 53px!important;border:1px solid #d8e6ed!important;border-radius:16px!important;background:#fbfdfe!important}
      .kedo540-number{position:absolute;left:13px;top:13px;width:30px;height:30px;display:grid;place-items:center;border-radius:10px;background:#e6f4fa;color:#176f9f;font-size:10px;font-weight:900}
      .kedo540-field-label{display:block!important;color:#24475e;font-weight:800}.kedo540-field-label b{color:#d54b4b;margin-left:3px}
      .kedo540-select-card{margin-top:8px!important;width:100%!important;display:grid!important;grid-template-columns:35px 1fr 22px!important;gap:10px!important;align-items:center!important;padding:10px 12px!important;border:1px solid #cbdde7!important;border-radius:12px!important;background:#fff!important;text-align:left!important;cursor:pointer!important}
      .kedo540-select-card:hover{border-color:#8ebbd2!important;box-shadow:0 9px 20px rgba(28,76,101,.07)!important}
      .kedo540-select-icon{width:32px;height:32px;display:grid;place-items:center;border-radius:10px;background:#edf7fb;color:#1973a6}
      .kedo540-select-copy strong{display:block;color:#294a60;font-size:13px}.kedo540-select-copy small{display:block;margin-top:2px;color:#889aa6;font-size:11px}.kedo540-select-arrow{color:#1872a4;font-size:18px}
      .kedo540-submit{border:1px solid #116da3!important;border-radius:12px!important;background:linear-gradient(135deg,#197cb8,#0d6599)!important;color:#fff!important;padding:12px 18px!important;font-weight:800!important;box-shadow:0 9px 20px rgba(18,105,157,.18)!important}.kedo540-submit b{margin-left:8px}
      .kedo540-overlay{position:fixed;inset:0;z-index:2147483647;display:grid;place-items:center;padding:22px;background:rgba(11,28,46,.58);backdrop-filter:blur(9px)}
      .kedo540-modal{width:min(1000px,calc(100vw - 34px));height:min(720px,calc(100vh - 38px));display:grid;grid-template-rows:auto minmax(0,1fr) auto;overflow:hidden;border-radius:26px;background:#f7fbfd;box-shadow:0 30px 100px rgba(0,0,0,.30);border:1px solid rgba(255,255,255,.9)}
      .kedo540-modal-head{display:flex;justify-content:space-between;gap:20px;padding:25px 28px;background:linear-gradient(135deg,#fff,#edf7fb);border-bottom:1px solid #dce8ef}.kedo540-kicker{font-size:10px;font-weight:900;letter-spacing:.11em;color:#8294a1}.kedo540-modal-head h2{margin:6px 0 0;color:#123e60;font-size:28px}.kedo540-modal-head p{margin:6px 0 0;color:#758a99;font-size:13px}.kedo540-close{border:1px solid #cadae5;border-radius:11px;background:#fff;padding:10px 14px;color:#294b61;cursor:pointer}
      .kedo540-modal-body{display:grid;grid-template-columns:245px 1fr;min-height:0}.kedo540-sidebar{padding:16px;background:#eef6fa;border-right:1px solid #dce8ef}.kedo540-tab{width:100%;display:grid;grid-template-columns:34px 1fr;align-items:center;gap:9px;padding:12px;border:1px solid transparent;border-radius:14px;background:transparent;text-align:left;cursor:pointer;color:#284b62}.kedo540-tab.active{background:#e1f2fa;border-color:#bfd9e6;box-shadow:inset 3px 0 #1874aa}.kedo540-tab span{width:32px;height:32px;display:grid;place-items:center;border-radius:10px;background:#fff;color:#1772a4}.kedo540-tab b{display:block}.kedo540-tab small{display:block;color:#8da0ab;margin-top:2px}
      .kedo540-picker{min-width:0;display:grid;grid-template-rows:auto 1fr;padding:18px;background:#fff}.kedo540-toolbar{display:flex;align-items:center;gap:12px;margin-bottom:12px}.kedo540-search{flex:1;display:flex;align-items:center;gap:7px;padding:0 12px;border:1px solid #c9dbe6;border-radius:12px;background:#fbfdff}.kedo540-search span{font-size:20px;color:#718a9b}.kedo540-search input{flex:1;border:0!important;outline:0!important;background:transparent!important;box-shadow:none!important;padding:12px 0!important}.kedo540-count{font-size:11px;color:#8698a4;white-space:nowrap}
      .kedo540-list{min-height:0;overflow:auto;display:grid;gap:8px;padding-right:4px}.kedo540-row{display:grid;grid-template-columns:36px 1fr 20px;align-items:center;gap:10px;padding:11px;border:1px solid #d9e5ec;border-radius:13px;background:#fff;text-align:left;cursor:pointer}.kedo540-row:hover,.kedo540-row.active{border-color:#9bc4d9;background:#f4fbfe}.kedo540-avatar{width:34px;height:34px;display:grid;place-items:center;border-radius:10px;background:#edf7fb;color:#1973a5}.kedo540-info b{display:block;color:#294a60}.kedo540-info small{display:block;color:#8a9ba6;margin-top:2px}.kedo540-row i{font-style:normal;color:#1973a5}.kedo540-empty{display:grid;place-items:center;align-content:center;min-height:170px;text-align:center;color:#899ba7}.kedo540-empty b{display:block;color:#3b5a6d}.kedo540-empty span{display:block;margin-top:5px;font-size:12px}
      .kedo540-modal-foot{display:flex;justify-content:space-between;align-items:center;gap:15px;padding:14px 20px;border-top:1px solid #dce8ef;background:#fff}.kedo540-selected{font-size:12px;color:#738793}.kedo540-modal-foot>div{display:flex;gap:8px}.kedo540-cancel,.kedo540-choose{border-radius:11px;padding:11px 15px;cursor:pointer}.kedo540-cancel{border:1px solid #ccdde6;background:#fff;color:#294b61}.kedo540-choose{border:1px solid #126da4;background:linear-gradient(135deg,#197bb6,#0f6598);color:#fff;font-weight:800}.kedo540-choose b{margin-left:6px}
      @media(max-width:800px){.kedo540-modal-body{grid-template-columns:1fr}.kedo540-sidebar{display:flex;overflow:auto;border-right:0;border-bottom:1px solid #dce8ef}.kedo540-tab{min-width:190px}.kedo540-modal-foot{flex-direction:column;align-items:stretch}.kedo540-modal-foot>div{justify-content:flex-end}}
    `;
    document.head.appendChild(s);
  }

  watch();
})();

/* KEDO_SUBSTITUTIONS_EXPAND_FIX_541 */
(function(){
  if (window.__KEDO_SUBS_EXPAND_FIX_541) return;
  window.__KEDO_SUBS_EXPAND_FIX_541 = true;

  function findCard(){
    const main=document.querySelector('main');
    if(!main) return null;
    const h=[...main.querySelectorAll('h1,h2,h3,strong')].find(x=>
      (x.textContent||'').trim()==='Создать замещение'
    );
    if(!h) return null;
    let el=h;
    for(let i=0;i<10 && el;i++,el=el.parentElement){
      if(el.querySelector('select') && /кого замещать|кто замещает/i.test(el.textContent||'')) return el;
    }
    return null;
  }

  function ensure(){
    const card=findCard();
    if(!card) return;

    const hero=card.querySelector('.kedo540-hero');
    const body=card.querySelector('.kedo540-form-body');
    if(!hero || !body) return;

    hero.type='button';
    hero.dataset.kedoExpand541='1';

    if(!window.__KEDO_SUBS_EXPAND_DELEGATE_541){
      window.__KEDO_SUBS_EXPAND_DELEGATE_541=true;
      document.addEventListener('click',function(e){
        const btn=e.target.closest('.kedo540-hero');
        if(!btn || !btn.dataset.kedoExpand541) return;

        const c=btn.closest('.kedo540-create-card');
        if(!c) return;
        const b=c.querySelector('.kedo540-form-body');
        if(!b) return;

        e.preventDefault();
        e.stopPropagation();

        const open=b.hidden;
        b.hidden=!open;
        c.classList.toggle('open',open);

        const icon=btn.querySelector('.kedo540-hero-icon');
        if(icon) icon.textContent=open?'×':'＋';
        btn.setAttribute('aria-expanded',String(open));
      },true);
    }
  }

  if(!document.getElementById('kedo541Style')){
    const style=document.createElement('style');
    style.id='kedo541Style';
    style.textContent=`
      .kedo540-hero{cursor:pointer!important;pointer-events:auto!important;user-select:none!important}
      .kedo540-hero *{pointer-events:none!important}
      .kedo540-form-body[hidden]{display:none!important}
    `;
    document.head.appendChild(style);
  }

  ensure();

  const main=document.querySelector('main');
  if(main && !window.__KEDO_SUBS_EXPAND_OBSERVER_541){
    window.__KEDO_SUBS_EXPAND_OBSERVER_541=true;
    let timer=0;
    new MutationObserver(()=>{
      clearTimeout(timer);
      timer=setTimeout(ensure,60);
    }).observe(main,{childList:true,subtree:true});
  }

  [150,400,900].forEach(ms=>setTimeout(ensure,ms));
})();



/* KEDO_SUBSTITUTIONS_REFINE_542 */
(function(){
  if (window.__KEDO_SUBS_REFINE_542) return;
  window.__KEDO_SUBS_REFINE_542 = true;

  function refine(){
    const overlay=document.querySelector('.kedo540-overlay');
    if(!overlay) return;

    const close=overlay.querySelector('.kedo540-close');
    if(close) close.classList.add('kedo542-close');

    overlay.querySelectorAll('.kedo540-row').forEach(row=>{
      row.classList.add('kedo542-row');
    });
  }

  if(!document.getElementById('kedo542Style')){
    const style=document.createElement('style');
    style.id='kedo542Style';
    style.textContent=`
      /* Более спокойная кнопка "Закрыть" */
      .kedo540-close.kedo542-close{
        border:1px solid #d5e1e8!important;
        background:transparent!important;
        color:#5d7282!important;
        border-radius:9px!important;
        padding:8px 11px!important;
        font-size:12px!important;
        font-weight:600!important;
        min-width:0!important;
        height:auto!important;
        box-shadow:none!important;
        transition:background .16s ease,border-color .16s ease,color .16s ease!important;
      }
      .kedo540-close.kedo542-close:hover{
        background:#f4f8fa!important;
        border-color:#c2d4df!important;
        color:#35576d!important;
      }

      /* Сотрудники — спокойнее и компактнее */
      .kedo540-row.kedo542-row{
        min-height:68px!important;
        padding:9px 11px!important;
        border:1px solid #e2e9ee!important;
        border-radius:11px!important;
        background:#fff!important;
        box-shadow:none!important;
        transition:background .14s ease,border-color .14s ease!important;
      }
      .kedo540-row.kedo542-row:hover{
        border-color:#cadce6!important;
        background:#fbfdfe!important;
      }
      .kedo540-row.kedo542-row.active{
        border-color:#b8d3e0!important;
        background:#f6fbfd!important;
        box-shadow:inset 3px 0 #7eb2cb!important;
      }
      .kedo540-row.kedo542-row .kedo540-avatar{
        width:30px!important;
        height:30px!important;
        border-radius:9px!important;
        background:#f1f7fa!important;
        color:#6c9bb3!important;
        font-size:11px!important;
      }
      .kedo540-row.kedo542-row .kedo540-info b{
        color:#355267!important;
        font-size:13px!important;
        font-weight:700!important;
      }
      .kedo540-row.kedo542-row .kedo540-info small{
        color:#8a9ba6!important;
        font-size:11px!important;
      }
      .kedo540-row.kedo542-row i{
        color:#8ba5b3!important;
        font-size:15px!important;
      }
      .kedo540-row.kedo542-row.active i{
        color:#4d8da8!important;
      }

      /* Чуть спокойнее сам список */
      .kedo540-list{
        gap:6px!important;
      }
      .kedo540-toolbar{
        margin-bottom:10px!important;
      }
    `;
    document.head.appendChild(style);
  }

  refine();
  const observer=new MutationObserver(refine);
  observer.observe(document.body,{childList:true,subtree:true});
  setTimeout(()=>observer.disconnect(),4000);
})();
/* KEDO_SUBSTITUTIONS_AUDIENCE_545 */
(function(){
  if(window.__KEDO_SUBS_AUDIENCE_545) return;
  window.__KEDO_SUBS_AUDIENCE_545=true;

  const esc=v=>String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

  async function loadData(){
    const isAdmin=typeof state!=="undefined" && state.user?.role==="admin";
    const [employees,departments,groups,roles]=isAdmin
      ? await Promise.all([
          api('/api/admin/employees'),
          api('/api/admin/departments'),
          api('/api/admin/org-groups'),
          api('/api/admin/roles')
        ])
      : await Promise.all([
          api('/api/directory/users'),
          api('/api/directory/departments'),
          api('/api/directory/org-groups'),
          Promise.resolve([])
        ]);

    const emps=Array.isArray(employees)?employees:[];
    const deps=Array.isArray(departments)?departments:[];
    const grps=Array.isArray(groups)?groups:[];
    const rls=Array.isArray(roles)?roles:[];

    const deptMap=new Map(deps.map(x=>[String(x.id),x.name]));
    const groupMap=new Map(grps.map(x=>[String(x.id),x.name]));
    const roleMap=new Map(rls.map(x=>[String(x.code),x.name]));

    const people=emps.filter(e=>e.deleted_at==null && e.is_active!==false).map(e=>{
      const codes=Array.isArray(e.roles)&&e.roles.length?e.roles:[e.role].filter(Boolean);
      return {
        value:String(e.id),
        name:e.full_name||e.login||'Сотрудник',
        position:e.position||'',
        departmentId:e.department_id==null?'':String(e.department_id),
        departmentName:e.department_name||deptMap.get(String(e.department_id||''))||'',
        branchId:e.org_group_id==null?'':String(e.org_group_id),
        branchName:groupMap.get(String(e.org_group_id||''))||'',
        roleCodes:codes.map(String),
        roleNames:codes.map(c=>roleMap.get(String(c))||String(c))
      };
    });

    const depRows=deps.map(x=>({
      id:String(x.id),
      name:String(x.name||''),
      count:people.filter(p=>p.departmentId===String(x.id)).length
    })).filter(x=>x.name);

    const groupRows=grps.map(x=>({
      id:String(x.id),
      name:String(x.name||''),
      count:people.filter(p=>p.branchId===String(x.id)).length
    })).filter(x=>x.name);

    const roleRows=rls.map(x=>({
      code:String(x.code),
      name:String(x.name||x.code||''),
      count:people.filter(p=>p.roleCodes.includes(String(x.code))).length
    })).filter(x=>x.name);

    const posMap=new Map();
    people.forEach(p=>{if(p.position)posMap.set(p.position,(posMap.get(p.position)||0)+1);});
    const positionRows=[...posMap.entries()].map(([name,count])=>({name,count}));

    return {people,departments:depRows,groups:groupRows,roles:roleRows,positions:positionRows};
  }

  function openAudience(select,heading){
    document.querySelectorAll('.kedo545-overlay').forEach(x=>x.remove());

    const overlay=document.createElement('div');
    overlay.className='kedo545-overlay';
    overlay.innerHTML=`
      <div class="kedo545-modal" role="dialog" aria-modal="true">
        <header class="kedo545-head">
          <div><span class="kedo545-kicker">НАСТРОЙКА ЗАМЕЩЕНИЯ</span>
          <h2>${esc(heading)}</h2>
          <p>Выберите сотрудника через структуру организации.</p></div>
          <button type="button" class="kedo545-close">Закрыть</button>
        </header>
        <div class="kedo545-body">
          <aside class="kedo545-side">
            <button class="kedo545-tab active" data-cat="all" type="button"><span>⌘</span><div><b>Все</b><small>Вся организация</small></div></button>
            <button class="kedo545-tab" data-cat="groups" type="button"><span>▤</span><div><b>Филиалы</b><small>Загрузка…</small></div></button>
            <button class="kedo545-tab" data-cat="departments" type="button"><span>▦</span><div><b>Подразделения</b><small>Загрузка…</small></div></button>
            <button class="kedo545-tab" data-cat="people" type="button"><span>●</span><div><b>Сотрудники</b><small>Загрузка…</small></div></button>
            <button class="kedo545-tab" data-cat="roles" type="button"><span>R</span><div><b>Роли</b><small>Загрузка…</small></div></button>
            <button class="kedo545-tab" data-cat="positions" type="button"><span>Д</span><div><b>Должности</b><small>Загрузка…</small></div></button>
          </aside>
          <main class="kedo545-main">
            <div class="kedo545-toolbar">
              <div class="kedo545-search"><span>⌕</span><input type="search" placeholder="Поиск по списку..." disabled></div>
              <span class="kedo545-count">Загрузка…</span>
            </div>
            <div class="kedo545-list"><div class="kedo545-loading"><span></span><b>Загружаем организационную структуру…</b></div></div>
          </main>
        </div>
        <footer class="kedo545-foot">
          <span class="kedo545-picked">Сотрудник не выбран</span>
          <div><button type="button" class="kedo545-cancel">Отмена</button><button type="button" class="kedo545-choose">Выбрать сотрудника <b>→</b></button></div>
        </footer>
      </div>`;

    document.body.appendChild(overlay);
    document.body.classList.add('kedo545-lock');

    const list=overlay.querySelector('.kedo545-list');
    const search=overlay.querySelector('input');
    const count=overlay.querySelector('.kedo545-count');
    const picked=overlay.querySelector('.kedo545-picked');
    let state={people:[],groups:[],departments:[],roles:[],positions:[],filtered:null};
    let category='all',query='',selected=String(select.value||'');

    const close=()=>{overlay.remove();document.body.classList.remove('kedo545-lock');};
    overlay.querySelector('.kedo545-close').onclick=close;
    overlay.querySelector('.kedo545-cancel').onclick=close;
    overlay.addEventListener('click',e=>{if(e.target===overlay)close();});

    function peopleRows(rows){
      return rows.filter(p=>{
        const t=`${p.name} ${p.position} ${p.departmentName} ${p.branchName} ${p.roleNames.join(' ')}`.toLowerCase();
        return t.includes(query.toLowerCase());
      }).map(p=>({type:'person',value:p.value,title:p.name,meta:[p.position,p.departmentName,p.branchName].filter(Boolean).join(' · ')}));
    }

    function render(){
      let rows=[];
      if(state.filtered){
        rows=peopleRows(state.filtered);
      }else if(category==='all'||category==='people'){
        rows=peopleRows(state.people);
      }else if(category==='groups'){
        rows=state.groups.filter(x=>x.name.toLowerCase().includes(query.toLowerCase())).map(x=>({type:'group',value:x.id,title:x.name,meta:`${x.count} сотрудников`}));
      }else if(category==='departments'){
        rows=state.departments.filter(x=>x.name.toLowerCase().includes(query.toLowerCase())).map(x=>({type:'department',value:x.id,title:x.name,meta:`${x.count} сотрудников`}));
      }else if(category==='roles'){
        rows=state.roles.filter(x=>x.name.toLowerCase().includes(query.toLowerCase())).map(x=>({type:'role',value:x.code,title:x.name,meta:`${x.count} сотрудников`}));
      }else{
        rows=state.positions.filter(x=>x.name.toLowerCase().includes(query.toLowerCase())).map(x=>({type:'position',value:x.name,title:x.name,meta:`${x.count} сотрудников`}));
      }

      const label=state.filtered||category==='people'||category==='all'?'сотрудников':category==='groups'?'филиалов':category==='departments'?'подразделений':category==='roles'?'ролей':'должностей';
      count.textContent=`${rows.length} ${label}`;

      if(!rows.length){
        list.innerHTML='<div class="kedo545-empty"><b>Ничего не найдено</b><span>Попробуйте другой запрос или раздел.</span></div>';
        return;
      }

      list.innerHTML=rows.map(r=>{
        const active=r.type==='person'&&String(r.value)===selected;
        const icon=r.type==='person'?'●':r.type==='group'?'▤':r.type==='department'?'▦':r.type==='role'?'R':'Д';
        return `<button type="button" class="kedo545-row ${active?'active':''}" data-type="${r.type}" data-value="${esc(r.value)}">
          <span class="kedo545-avatar">${icon}</span><span class="kedo545-copy"><b>${esc(r.title)}</b><small>${esc(r.meta)}</small></span><i>${active?'✓':'→'}</i>
        </button>`;
      }).join('');

      list.querySelectorAll('[data-type]').forEach(btn=>btn.onclick=()=>{
        const type=btn.dataset.type, value=btn.dataset.value;
        if(type==='person'){
          selected=value;
          const p=state.people.find(x=>String(x.value)===selected);
          picked.textContent=p?`Выбран: ${p.name}`:'Сотрудник не выбран';
          render();
          return;
        }

        state.filtered=state.people.filter(p=>{
          if(type==='group') return p.branchId===value;
          if(type==='department') return p.departmentId===value;
          if(type==='role') return p.roleCodes.includes(value);
          if(type==='position') return p.position===value;
          return true;
        });
        category='people';
        query='';
        search.value='';
        overlay.querySelectorAll('[data-cat]').forEach(x=>x.classList.toggle('active',x.dataset.cat==='people'));
        render();
      });
    }

    overlay.querySelectorAll('[data-cat]').forEach(btn=>btn.onclick=()=>{
      category=btn.dataset.cat;
      state.filtered=null;
      query='';
      search.value='';
      overlay.querySelectorAll('[data-cat]').forEach(x=>x.classList.toggle('active',x===btn));
      render();
    });

    search.oninput=()=>{query=search.value;render();};

    overlay.querySelector('.kedo545-choose').onclick=()=>{
      if(!selected){kedoAlert('Выберите сотрудника.');return;}
      select.value=selected;
      select.dispatchEvent(new Event('change',{bubbles:true}));
      close();
    };

    loadData().then(data=>{
      state={...data,filtered:null};
      const smalls={
        groups:`${state.groups.length} доступно`,
        departments:`${state.departments.length} доступно`,
        people:`${state.people.length} в списке`,
        roles:`${state.roles.length} доступно`,
        positions:`${state.positions.length} доступно`
      };
      overlay.querySelectorAll('[data-cat]').forEach(btn=>{
        const s=btn.querySelector('small');
        if(smalls[btn.dataset.cat]) s.textContent=smalls[btn.dataset.cat];
      });
      search.disabled=false;
      render();
    }).catch(err=>{
      count.textContent='Ошибка';
      list.innerHTML=`<div class="kedo545-empty"><b>Не удалось загрузить данные</b><span>${esc(err?.message||'Проверьте права доступа.')}</span></div>`;
    });
  }

  document.addEventListener('click',function(e){
    const trigger=e.target.closest('.kedo540-select-card');
    if(!trigger) return;
    const label=trigger.closest('.kedo540-field');
    const select=label?.querySelector('select');
    if(!select) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    const title=(label.querySelector('.kedo540-field-label')?.textContent||'Выбор сотрудника').replace('*','').trim();
    openAudience(select,title);
  },true);

  if(!document.getElementById('kedo545Style')){
    const s=document.createElement('style');
    s.id='kedo545Style';
    s.textContent=`
      body.kedo545-lock{overflow:hidden!important}
      .kedo545-overlay{position:fixed;inset:0;z-index:2147483647;display:grid;place-items:center;padding:20px;background:rgba(12,30,46,.48);backdrop-filter:blur(7px)}
      .kedo545-modal{width:min(900px,calc(100vw - 36px));height:min(620px,calc(100vh - 40px));display:grid;grid-template-rows:auto minmax(0,1fr) auto;overflow:hidden;border-radius:20px;background:#fafcfd;box-shadow:0 25px 80px rgba(0,0,0,.24)}
      .kedo545-head{display:flex;justify-content:space-between;gap:18px;padding:20px 23px;background:linear-gradient(135deg,#fff,#f1f8fb);border-bottom:1px solid #dfe9ee}.kedo545-kicker{font-size:9px;font-weight:900;letter-spacing:.11em;color:#8497a4}.kedo545-head h2{margin:4px 0 0;color:#173f5f;font-size:23px}.kedo545-head p{margin:4px 0 0;color:#7d919e;font-size:11px}.kedo545-close{border:1px solid #d3e0e7;background:transparent;color:#637885;border-radius:8px;padding:7px 10px;font-size:11px;font-weight:600;height:max-content;cursor:pointer}
      .kedo545-body{display:grid;grid-template-columns:200px 1fr;min-height:0}.kedo545-side{padding:10px;background:#f1f7fa;border-right:1px solid #dfe9ee;overflow:auto}.kedo545-tab{width:100%;display:grid;grid-template-columns:29px 1fr;gap:7px;align-items:center;padding:8px 9px;margin-bottom:4px;border:1px solid transparent;border-radius:10px;background:transparent;text-align:left;cursor:pointer;color:#355365}.kedo545-tab.active{background:#e5f2f8;border-color:#c5dce7;box-shadow:inset 2px 0 #2a7c9f}.kedo545-tab:hover{background:#f8fbfc}.kedo545-tab-icon{width:28px;height:28px;display:grid;place-items:center;border-radius:8px;background:#fff;color:#6090a5;font-size:11px}.kedo545-tab b{display:block;font-size:11px}.kedo545-tab small{display:block;margin-top:2px;color:#91a1aa;font-size:9px}
      .kedo545-main{min-width:0;display:grid;grid-template-rows:auto 1fr;padding:13px;background:#fff}.kedo545-toolbar{display:flex;align-items:center;gap:10px;margin-bottom:8px}.kedo545-search{flex:1;display:flex;align-items:center;gap:6px;border:1px solid #d5e1e7;border-radius:10px;padding:0 9px;background:#fcfdfe}.kedo545-search span{font-size:16px;color:#829aa6}.kedo545-search input{width:100%;border:0!important;outline:0!important;background:transparent!important;box-shadow:none!important;padding:9px 0!important;font-size:11px}.kedo545-count{font-size:9px;color:#8c9ca7;white-space:nowrap}
      .kedo545-list{min-height:0;overflow:auto;display:grid;align-content:start;gap:5px;padding-right:2px}.kedo545-row{width:100%;display:grid;grid-template-columns:31px 1fr 16px;gap:8px;align-items:center;padding:8px 9px;border:1px solid #e2e9ed;border-radius:9px;background:#fff;text-align:left;cursor:pointer}.kedo545-row:hover{border-color:#ccdce3;background:#fbfdfe}.kedo545-row.active{border-color:#bfd4de;background:#f8fbfc;box-shadow:inset 2px 0 #6d9caf}.kedo545-avatar{width:29px;height:29px;border-radius:8px;background:#f1f7fa;color:#719aab;display:grid;place-items:center;font-size:10px}.kedo545-copy b{display:block;color:#365568;font-size:11px}.kedo545-copy small{display:block;color:#8c9da7;font-size:9px;margin-top:2px}.kedo545-row i{font-style:normal;color:#8ca4b0;font-size:12px}.kedo545-loading,.kedo545-empty{display:grid;place-items:center;align-content:center;min-height:150px;text-align:center;color:#8799a4}.kedo545-loading b,.kedo545-empty b{font-size:11px;color:#4c6879}.kedo545-loading span{width:24px;height:24px;border:2px solid #d7e7ee;border-top-color:#4e94af;border-radius:50%;animation:kedo545spin .8s linear infinite;margin-bottom:8px}.kedo545-empty span{display:block;margin-top:4px;font-size:9px}@keyframes kedo545spin{to{transform:rotate(360deg)}}
      .kedo545-foot{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:10px 14px;border-top:1px solid #dfe9ee;background:#fff}.kedo545-picked{font-size:10px;color:#758893}.kedo545-foot>div{display:flex;gap:6px}.kedo545-cancel,.kedo545-choose{border-radius:8px;padding:8px 11px;font-size:10px;cursor:pointer}.kedo545-cancel{border:1px solid #d2dfe6;background:#fff;color:#516a79}.kedo545-choose{border:1px solid #2b7899;background:#2b7899;color:#fff;font-weight:700}.kedo545-choose b{margin-left:4px}
      @media(max-width:720px){.kedo545-modal{height:calc(100vh - 20px)}.kedo545-body{grid-template-columns:1fr}.kedo545-side{display:flex;overflow:auto;border-right:0;border-bottom:1px solid #dfe9ee}.kedo545-tab{min-width:135px;margin:0 4px 0 0}.kedo545-foot{flex-direction:column;align-items:stretch}.kedo545-foot>div{justify-content:flex-end}}
    `;
    document.head.appendChild(s);
  }
})();


/* KEDO_HOME_CLEAN_UI_577 */
/* KEDO_HOME_CLEAN_UI_577 */
(function(){
  if(window.__KEDO_HOME_CLEAN_UI_577) return;
  window.__KEDO_HOME_CLEAN_UI_577=true;

  const STORE='kedo-home-layout-v577';
  const DEFAULTS={today:true,metrics:true,work:true,quick:true,profile:true,tips:true};

  function state(){
    try{return {...DEFAULTS,...JSON.parse(localStorage.getItem(STORE)||'{}')};}
    catch{return {...DEFAULTS};}
  }

  function findBlock(main, text, selector){
    if(!main) return null;
    if(selector){
      const direct=main.querySelector(selector);
      if(direct) return direct;
    }
    const h=[...main.querySelectorAll('h2,h3,strong')]
      .find(x=>(x.textContent||'').trim()===text);
    if(!h) return null;
    let el=h;
    for(let i=0;i<8 && el;i++,el=el.parentElement){
      if(el.matches('section,article,.card,.panel')) return el;
      const t=(el.textContent||'').trim();
      if(t.length<1000 && el.children.length>=2) return el;
    }
    return h.parentElement;
  }

  function blocks(){
    const main=document.querySelector('main');
    if(!main) return {};
    return {
      today:findBlock(main,'Что нужно сделать'),
      metrics:findBlock(main,'','.home-metrics'),
      work:findBlock(main,'Рабочая картина'),
      quick:findBlock(main,'Что хотите сделать?','.home-quick-card'),
      profile:findBlock(main,'Ваш профиль','.home-profile-card'),
      tips:findBlock(main,'','.home-tip-premium')
    };
  }

  function apply(saved){
    const b=blocks();
    Object.entries(b).forEach(([k,el])=>{
      if(!el) return;
      const hidden=!saved[k];
      el.classList.toggle('home-layout-hidden',hidden);
      el.toggleAttribute('hidden',hidden);
      if(hidden){
        el.style.setProperty('display','none','important');
      }else{
        el.style.removeProperty('display');
      }
    });
  }

  function openCustomizer(){
    const old=document.querySelector('.home-customizer-overlay');
    if(old) old.remove();

    const saved=state();
    const defs=[
      ['today','Сегодня','Что нужно сделать'],
      ['metrics','Показатели','Сводные показатели'],
      ['work','Рабочая картина','Документы, задачи и уведомления'],
      ['quick','Быстрый доступ','Частые рабочие действия'],
      ['profile','Ваш профиль','Личные данные и роли'],
      ['tips','Быстрые советы','Подсказки на каждый день']
    ];

    const overlay=document.createElement('div');
    overlay.className='home-customizer-overlay';
    overlay.innerHTML=`
      <div class="home-customizer-modal" role="dialog" aria-modal="true">
        <header class="home-customizer-head">
          <div>
            <span>ПЕРСОНАЛИЗАЦИЯ</span>
            <h2>Настроить главную</h2>
            <p>Выберите блоки, которые нужны именно вам.</p>
          </div>
          <button type="button" class="home-customizer-close">Закрыть</button>
        </header>
        <div class="home-customizer-list">
          ${defs.map(d=>`
            <button type="button" class="home-customizer-row ${saved[d[0]]?'is-on':''}" data-id="${d[0]}">
              <span class="home-customizer-check">${saved[d[0]]?'✓':'○'}</span>
              <span class="home-customizer-copy"><b>${d[1]}</b><small>${d[2]}</small></span>
              <em>${saved[d[0]]?'Включён':'Скрыт'}</em>
            </button>`).join('')}
        </div>
        <footer class="home-customizer-foot">
          <button type="button" class="home-customizer-reset">Сбросить</button>
          <button type="button" class="home-customizer-save">Сохранить</button>
        </footer>
      </div>`;

    document.body.appendChild(overlay);
    document.body.classList.add('home-customizer-lock');

    const redraw=()=>{
      overlay.querySelectorAll('[data-id]').forEach(row=>{
        const on=!!saved[row.dataset.id];
        row.classList.toggle('is-on',on);
        row.querySelector('.home-customizer-check').textContent=on?'✓':'○';
        row.querySelector('em').textContent=on?'Включён':'Скрыт';
      });
    };

    overlay.querySelectorAll('[data-id]').forEach(row=>{
      row.addEventListener('click',()=>{
        saved[row.dataset.id]=!saved[row.dataset.id];
        redraw();
      });
    });

    const close=()=>{
      overlay.remove();
      document.body.classList.remove('home-customizer-lock');
    };

    overlay.querySelector('.home-customizer-close').addEventListener('click',close);
    overlay.addEventListener('click',e=>{
      if(e.target===overlay) close();
    });

    overlay.querySelector('.home-customizer-reset').addEventListener('click',()=>{
      Object.keys(DEFAULTS).forEach(k=>saved[k]=true);
      redraw();
    });

    overlay.querySelector('.home-customizer-save').addEventListener('click',()=>{
      localStorage.setItem(STORE,JSON.stringify(saved));
      apply(saved);
      close();
    });
  }

  // Event delegation: the button can be rendered at any time.
  document.addEventListener('click',e=>{
    const button=e.target && e.target.closest ? e.target.closest('#homeCustomizeButton') : null;
    if(!button) return;
    e.preventDefault();
    e.stopPropagation();
    openCustomizer();
  },true);

  function mountState(){
    const main=document.querySelector('main');
    if(!main) return;
    apply(state());
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',mountState,{once:true});
  }else{
    mountState();
  }

  const observerHost=document.querySelector('main');
  if(observerHost){
    let timer=0;
    new MutationObserver(()=>{
      clearTimeout(timer);
      timer=setTimeout(mountState,40);
    }).observe(observerHost,{childList:true,subtree:true});
  }
})();


/* KEDO_HOME_CLEAN_STYLE_577 */
(function(){if(document.getElementById('kedo577Style'))return;const st=document.createElement('style');st.id='kedo577Style';st.textContent="/* KEDO_HOME_CLEAN_STYLE_577 */\n.home-welcome{\n  position:relative!important;\n  width:100%!important;\n  box-sizing:border-box!important;\n  display:flex!important;\n  align-items:center!important;\n  justify-content:space-between!important;\n  gap:24px!important;\n  padding:20px!important;\n  overflow:visible!important\n}\n.home-welcome>div:first-child{\n  min-width:0!important;\n  flex:1 1 auto!important\n}\n#homeCustomizeButton{\n  position:static!important;\n  inset:auto!important;\n  top:auto!important;\n  right:auto!important;\n  bottom:auto!important;\n  left:auto!important;\n  transform:none!important;\n  flex:0 0 auto!important;\n  align-self:center!important;\n  z-index:100!important;\n  pointer-events:auto!important;\n  visibility:visible!important;\n  opacity:1!important;\n  margin:0!important;\n  height:38px!important;\n  min-width:150px!important;\n  padding:0 13px!important;\n  display:inline-flex!important;\n  align-items:center!important;\n  justify-content:center!important;\n  gap:7px!important;\n  border:1px solid #c4dae4!important;\n  border-radius:10px!important;\n  background:#fff!important;\n  color:#315b70!important;\n  font:700 11px/1 \"Segoe UI\",Arial,sans-serif!important;\n  cursor:pointer!important;\n  box-shadow:0 6px 16px rgba(28,70,90,.06)!important\n}\n#homeCustomizeButton:hover{transform:translateY(-1px)!important}\n#homeCustomizeButton span{\n  width:21px!important;height:21px!important;display:grid!important;place-items:center!important;\n  border-radius:7px!important;background:#edf6fa!important;color:#3e7d98!important\n}\n\n.home-tip-premium{\n  display:block!important;width:100%!important;box-sizing:border-box!important;\n  margin-top:14px!important;padding:15px 16px!important;\n  border:1px solid #d9e6ec!important;border-radius:16px!important;\n  background:linear-gradient(135deg,#fff 0%,#f6fafc 100%)!important\n}\n.home-tip-premium .home-tip-head{\n  display:flex!important;align-items:flex-end!important;justify-content:space-between!important;\n  width:100%!important;margin:0 0 11px!important;gap:16px!important\n}\n.home-tip-premium .home-tip-head>div{min-width:0!important}\n.home-tip-premium .home-tip-head h3{\n  margin:4px 0 0!important;color:#1a425f!important;font-size:17px!important;line-height:1.2!important\n}\n.home-tip-premium .home-tip-head p{\n  margin:3px 0 0!important;color:#8396a1!important;font-size:10px!important;line-height:1.3!important\n}\n.home-tip-premium .home-tip-count{\n  flex:none!important;color:#718894!important;font-size:10px!important;white-space:nowrap!important\n}\n.home-tip-premium .home-tip-count b{color:#1d648b!important;font-size:15px!important}\n.home-tip-premium .home-tip-grid{\n  display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;\n  width:100%!important;gap:8px!important;align-items:stretch!important\n}\n.home-tip-premium .home-tip-item{\n  min-width:0!important;min-height:68px!important;width:100%!important;box-sizing:border-box!important;\n  display:flex!important;align-items:flex-start!important;gap:8px!important;padding:10px!important;\n  margin:0!important;border:1px solid #dfe8ed!important;border-radius:10px!important;background:#fff!important;\n  overflow:hidden!important\n}\n.home-tip-premium .home-tip-icon{\n  width:26px!important;height:26px!important;min-width:26px!important;flex:0 0 26px!important;\n  display:grid!important;place-items:center!important;border-radius:7px!important;\n  background:#edf6fa!important;color:#4a8ba4!important\n}\n.home-tip-premium .home-tip-copy{min-width:0!important;flex:1 1 auto!important}\n.home-tip-premium .home-tip-copy strong{\n  display:block!important;color:#35586c!important;font-size:10px!important;line-height:1.25!important\n}\n.home-tip-premium .home-tip-copy small{\n  display:block!important;margin-top:3px!important;color:#899ba5!important;font-size:9px!important;line-height:1.3!important\n}\n\n.home-customizer-lock{overflow:hidden!important}\n.home-customizer-overlay{\n  position:fixed!important;inset:0!important;z-index:2147483647!important;display:grid!important;place-items:center!important;\n  padding:20px!important;background:rgba(12,30,46,.48)!important;backdrop-filter:blur(8px)!important\n}\n.home-customizer-modal{\n  width:min(670px,calc(100vw - 30px))!important;max-height:min(680px,calc(100vh - 30px))!important;\n  display:grid!important;grid-template-rows:auto minmax(0,1fr) auto!important;overflow:hidden!important;\n  border-radius:18px!important;background:#fff!important;box-shadow:0 28px 90px rgba(0,0,0,.24)!important\n}\n.home-customizer-head{\n  display:flex!important;align-items:flex-start!important;justify-content:space-between!important;gap:15px!important;\n  padding:20px 22px!important;border-bottom:1px solid #e0e8ed!important;background:linear-gradient(135deg,#fff,#f2f8fb)!important\n}\n.home-customizer-head>div>span{\n  font-size:8px!important;font-weight:900!important;letter-spacing:.12em!important;color:#8095a2!important\n}\n.home-customizer-head h2{margin:5px 0 0!important;color:#183f5e!important;font-size:22px!important}\n.home-customizer-head p{margin:4px 0 0!important;color:#7f919c!important;font-size:10px!important}\n.home-customizer-close{\n  padding:8px 10px!important;border:1px solid #d2dfe6!important;border-radius:8px!important;\n  background:#fff!important;color:#58707e!important;cursor:pointer!important\n}\n.home-customizer-list{\n  padding:12px!important;display:grid!important;gap:7px!important;overflow:auto!important;background:#fbfdfe!important\n}\n.home-customizer-row{\n  width:100%!important;display:grid!important;grid-template-columns:28px minmax(0,1fr) auto!important;\n  align-items:center!important;gap:9px!important;padding:10px!important;box-sizing:border-box!important;text-align:left!important;\n  border:1px solid #e0e9ed!important;border-radius:10px!important;background:#fff!important;cursor:pointer!important\n}\n.home-customizer-row.is-on{border-color:#bfd7e3!important;background:#f2f8fb!important}\n.home-customizer-check{\n  width:27px!important;height:27px!important;display:grid!important;place-items:center!important;border-radius:7px!important;\n  background:#edf6fa!important;color:#3d809a!important\n}\n.home-customizer-copy{min-width:0!important}\n.home-customizer-copy b{display:block!important;color:#355568!important;font-size:11px!important}\n.home-customizer-copy small{display:block!important;margin-top:2px!important;color:#899ba5!important;font-size:9px!important}\n.home-customizer-row em{font-style:normal!important;color:#8295a0!important;font-size:9px!important;white-space:nowrap!important}\n.home-customizer-foot{\n  display:flex!important;justify-content:flex-end!important;gap:7px!important;padding:10px 13px!important;\n  border-top:1px solid #e0e8ed!important;background:#fff!important\n}\n.home-customizer-reset,.home-customizer-save{border-radius:8px!important;padding:8px 12px!important;cursor:pointer!important}\n.home-customizer-reset{border:1px solid #d5e1e7!important;background:#fff!important;color:#637884!important}\n.home-customizer-save{border:1px solid #2b789d!important;background:#2b789d!important;color:#fff!important;font-weight:700!important}\n\n@media(max-width:800px){\n  .home-tip-premium .home-tip-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}\n}\n@media(max-width:700px){\n  .home-welcome{display:block!important}\n  #homeCustomizeButton{margin-top:12px!important}\n}\n@media(max-width:600px){\n  .home-tip-premium .home-tip-grid{grid-template-columns:1fr!important}\n}";document.head.appendChild(st);})();


/* KEDO_HOME_BUTTON_STICKY_REPAIR_578 */
(function(){
  if(window.__KEDO_HOME_BUTTON_STICKY_REPAIR_578) return;
  window.__KEDO_HOME_BUTTON_STICKY_REPAIR_578=true;

  function homeWelcome(){
    return document.querySelector('main .home-welcome') || document.querySelector('.home-welcome');
  }

  function repair(){
    const host=homeWelcome();
    if(!host) return;

    const buttons=[...document.querySelectorAll('#homeCustomizeButton')];
    let button=buttons[0];

    if(!button){
      button=document.createElement('button');
      button.type='button';
      button.id='homeCustomizeButton';
      button.innerHTML='<span class="home-customize-icon" aria-hidden="true">⚙</span><span>Настроить главную</span>';
    }

    /* There must be exactly one button, and it must physically live in home-welcome. */
    buttons.slice(1).forEach(b=>b.remove());

    if(button.parentElement!==host){
      host.appendChild(button);
    }

    button.removeAttribute('style');
    button.style.position='static';
    button.style.top='auto';
    button.style.right='auto';
    button.style.bottom='auto';
    button.style.left='auto';
    button.style.inset='auto';
    button.style.transform='none';
    button.style.float='none';
    button.style.pointerEvents='auto';
    button.style.zIndex='2';

    if(button.dataset.kedoRepairBound!=='1'){
      button.dataset.kedoRepairBound='1';
      button.addEventListener('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        if(typeof window.__kedoOpenHomeCustomizer==='function'){
          window.__kedoOpenHomeCustomizer();
          return;
        }
        if(typeof window.openHomeCustomizer578==='function'){
          window.openHomeCustomizer578();
        }
      });
    }
  }

  function exposeCustomizer(){
    if(typeof window.openHomeCustomizer578==='function') return;
    if(typeof window.renderHomeCustomizer!=='function') return;
    window.openHomeCustomizer578=window.renderHomeCustomizer;
  }

  function boot(){
    exposeCustomizer();
    repair();
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',boot,{once:true});
  }else{
    boot();
  }

  let timer=0;
  const observer=new MutationObserver(()=>{
    clearTimeout(timer);
    timer=setTimeout(()=>{
      exposeCustomizer();
      repair();
    },80);
  });
  observer.observe(document.body,{childList:true,subtree:true});

  window.addEventListener('scroll',repair,{passive:true});
  window.addEventListener('resize',repair,{passive:true});
})();

/* KEDO_HOME_BUTTON_FINAL_POLISH_631 — keep the action inside the welcome panel. */
(function(){
  if(document.getElementById('kedo631HomeButtonStyle')) return;
  const style=document.createElement('style');
  style.id='kedo631HomeButtonStyle';
  style.textContent=`
    .home-page>.home-welcome{
      width:100%!important;
      min-height:92px!important;
      box-sizing:border-box!important;
      padding:20px 24px!important;
      border:1px solid #d7e5ec!important;
      border-radius:16px!important;
      background:linear-gradient(135deg,#fff 0%,#f7fbfc 100%)!important;
      box-shadow:0 8px 24px rgba(27,67,88,.06)!important;
    }
    .home-welcome>#homeCustomizeButton{
      box-sizing:border-box!important;
      width:max-content!important;
      max-width:100%!important;
      min-width:174px!important;
      height:40px!important;
      margin:0!important;
      padding:0 15px!important;
      display:inline-flex!important;
      flex:0 0 auto!important;
      align-items:center!important;
      justify-content:center!important;
      gap:8px!important;
      overflow:hidden!important;
      white-space:nowrap!important;
      vertical-align:middle!important;
    }
    .home-welcome>#homeCustomizeButton>.premium-icon,
    .home-welcome>#homeCustomizeButton>.home-customize-icon{
      width:18px!important;
      height:18px!important;
      min-width:18px!important;
      flex:0 0 18px!important;
      display:grid!important;
      place-items:center!important;
      box-sizing:content-box!important;
      margin:0!important;
      padding:2px!important;
      border-radius:6px!important;
      background:#edf6fa!important;
      color:#2f789c!important;
      line-height:1!important;
    }
    .home-welcome>#homeCustomizeButton>.premium-icon{
      display:block!important;
      stroke:currentColor!important;
      fill:none!important;
      stroke-width:2!important;
      stroke-linecap:round!important;
      stroke-linejoin:round!important;
    }
    .home-welcome>#homeCustomizeButton>span:last-child{
      width:auto!important;
      height:auto!important;
      min-width:0!important;
      display:inline-block!important;
      padding:0!important;
      border-radius:0!important;
      background:transparent!important;
      color:inherit!important;
      overflow:hidden!important;
      text-overflow:ellipsis!important;
      white-space:nowrap!important;
      line-height:1!important;
    }
    @media(max-width:700px){
      .home-welcome>#homeCustomizeButton{
        width:100%!important;
        max-width:100%!important;
        margin-top:12px!important;
      }
    }
  `;
  document.head.appendChild(style);
})();


/* KEDO_HOME_BUTTON_STICKY_STYLE_578 */
(function(){if(document.getElementById('kedo578Style'))return;const st=document.createElement('style');st.id='kedo578Style';st.textContent="/* KEDO_HOME_BUTTON_STICKY_STYLE_578 */\n.home-welcome{\n  position:relative!important;\n  display:flex!important;\n  align-items:center!important;\n  justify-content:space-between!important;\n  gap:24px!important;\n  width:100%!important;\n  box-sizing:border-box!important;\n  overflow:visible!important;\n}\n.home-welcome>div:first-child{\n  min-width:0!important;\n  flex:1 1 auto!important;\n}\n.home-welcome>#homeCustomizeButton{\n  position:static!important;\n  top:auto!important;\n  right:auto!important;\n  bottom:auto!important;\n  left:auto!important;\n  inset:auto!important;\n  float:none!important;\n  clear:none!important;\n  transform:none!important;\n  flex:0 0 auto!important;\n  align-self:center!important;\n  margin:0!important;\n  z-index:2!important;\n  pointer-events:auto!important;\n  visibility:visible!important;\n  opacity:1!important;\n}\n#homeCustomizeButton{\n  position:static!important;\n  top:auto!important;\n  right:auto!important;\n  bottom:auto!important;\n  left:auto!important;\n  inset:auto!important;\n  float:none!important;\n  transform:none!important;\n}\n@media(max-width:700px){\n  .home-welcome{\n    display:block!important;\n    padding-bottom:18px!important;\n  }\n  .home-welcome>#homeCustomizeButton{\n    display:inline-flex!important;\n    margin-top:12px!important;\n  }\n}";document.head.appendChild(st);})();


/* KEDO_HOME_PERSONALIZATION_HIDE_FIX_579 */
(function(){
  if(document.getElementById('kedo579HideStyle')) return;
  const st=document.createElement('style');
  st.id='kedo579HideStyle';
  st.textContent='.home-layout-hidden{display:none!important}';
  document.head.appendChild(st);
})();


/* KEDO_HOME_PERSONALIZATION_STORE_579 */
(function(){
  try{
    const old=localStorage.getItem('kedo-home-layout-v577');
    const current=localStorage.getItem('kedo-home-layout-v579');
    if(!current && old) localStorage.setItem('kedo-home-layout-v579',old);
  }catch(_){ }
})();


/* KEDO_HOME_CUSTOMIZER_PRO_580 */
(function(){
  if(window.__KEDO_HOME_CUSTOMIZER_PRO_580) return;
  window.__KEDO_HOME_CUSTOMIZER_PRO_580=true;

  const STORE='kedo-home-layout-pro-v580';
  const LEGACY='kedo-home-layout-v579';

  const DEFAULT={
    density:'normal',
    blocks:[
      {id:'today',name:'Сегодня',enabled:true},
      {id:'metrics',name:'Показатели',enabled:true},
      {id:'work',name:'Рабочая картина',enabled:true},
      {id:'quick',name:'Быстрый доступ',enabled:true},
      {id:'profile',name:'Ваш профиль',enabled:true},
      {id:'tips',name:'Быстрые советы',enabled:true}
    ],
    quick:[
      {page:'documents',name:'Документ',enabled:true},
      {page:'orders',name:'Приказ',enabled:true},
      {page:'tasks',name:'Задача',enabled:true},
      {page:'messages',name:'Сообщение',enabled:true},
      {page:'delegations',name:'Замещение',enabled:true},
      {page:'help',name:'Помощь',enabled:true}
    ]
  };

  function cloneDefault(){
    return JSON.parse(JSON.stringify(DEFAULT));
  }

  function load(){
    try{
      const raw=localStorage.getItem(STORE)||localStorage.getItem(LEGACY);
      if(!raw) return cloneDefault();
      const saved=JSON.parse(raw);
      const d=cloneDefault();
      return {
        density:['compact','normal','comfortable'].includes(saved.density)?saved.density:d.density,
        blocks:Array.isArray(saved.blocks)&&saved.blocks.length?saved.blocks:d.blocks,
        quick:Array.isArray(saved.quick)&&saved.quick.length?saved.quick:d.quick
      };
    }catch(_){
      return cloneDefault();
    }
  }

  function save(state){
    localStorage.setItem(STORE,JSON.stringify(state));
  }

  function main(){
    return document.querySelector('main');
  }

  function findBlock(id){
    const root=main();
    if(!root) return null;
    const selectors={
      today:['.home-focus'],
      metrics:['.home-metrics'],
      work:['.leader-control-card'],
      quick:['.home-quick-card'],
      profile:['.home-profile-card'],
      tips:['.home-tip-premium']
    };
    const direct=selectors[id] ? root.querySelector(selectors[id].join(',')) : null;
    if(direct) return direct;

    const text={
      today:'Что нужно сделать',
      work:'Рабочая картина',
      quick:'Что хотите сделать?',
      profile:'Ваш профиль'
    }[id];
    if(text){
      const h=[...root.querySelectorAll('h2,h3,strong')].find(x=>(x.textContent||'').trim()===text);
      if(h){
        let el=h;
        for(let i=0;i<8&&el;i++,el=el.parentElement){
          if(el.matches('section,article,.card,.panel')) return el;
        }
      }
    }
    if(id==='metrics'){
      return [...root.querySelectorAll('section,.card,article,div')].find(el=>{
        const t=(el.textContent||'').trim();
        return /Требуют действия/.test(t)&&/Просрочено/.test(t)&&/Новые уведомления/.test(t);
      })||null;
    }
    return null;
  }

  function apply(state){
    const root=main();
    if(!root) return;

    const blocks=state.blocks||[];
    blocks.forEach(b=>{
      const el=findBlock(b.id);
      if(el) el.classList.toggle('home-pro-hidden',!b.enabled);
    });

    const quick=findBlock('quick');
    if(quick){
      const grid=quick.querySelector('.home-quick-grid');
      const actions=[...quick.querySelectorAll('.home-quick-grid [data-page]')];
      const byPage={};
      actions.forEach(a=>{byPage[a.getAttribute('data-page')]=a;});
      const order=state.quick||[];
      const frag=document.createDocumentFragment();
      order.forEach(q=>{
        const el=byPage[q.page];
        if(el){
          el.classList.toggle('home-pro-hidden',!q.enabled);
          frag.appendChild(el);
        }
      });
      actions.forEach(a=>{if(!frag.contains(a)) frag.appendChild(a);});
      if(grid) grid.appendChild(frag);
    }

    root.classList.remove('home-density-compact','home-density-normal','home-density-comfortable');
    root.classList.add('home-density-'+state.density);
  }

  function open(){
    const existing=document.querySelector('.home-pro-overlay');
    if(existing) existing.remove();

    const state=load();
    const overlay=document.createElement('div');
    overlay.className='home-pro-overlay';

    const blockNames=Object.fromEntries(state.blocks.map(x=>[x.id,x.name]));
    const quickNames=Object.fromEntries(state.quick.map(x=>[x.page,x.name]));

    overlay.innerHTML=`
      <div class="home-pro-modal" role="dialog" aria-modal="true" aria-label="Настройка главной">
        <header class="home-pro-head">
          <div>
            <span class="home-pro-kicker">ПЕРСОНАЛИЗАЦИЯ</span>
            <h2>Настроить главную</h2>
            <p>Соберите рабочий стол под свой сценарий: блоки, порядок, быстрые действия и плотность.</p>
          </div>
          <button type="button" class="home-pro-close">Закрыть</button>
        </header>

        <div class="home-pro-body">
          <section class="home-pro-section">
            <div class="home-pro-section-head">
              <div><span>01</span><div><b>Блоки главной</b><small>Включайте нужное и меняйте порядок.</small></div></div>
            </div>
            <div class="home-pro-block-list"></div>
          </section>

          <section class="home-pro-section">
            <div class="home-pro-section-head">
              <div><span>02</span><div><b>Быстрые действия</b><small>Оставьте только те действия, которыми пользуетесь.</small></div></div>
            </div>
            <div class="home-pro-quick-list"></div>
          </section>

          <section class="home-pro-section home-pro-density-section">
            <div class="home-pro-section-head">
              <div><span>03</span><div><b>Плотность интерфейса</b><small>Сделайте главную компактнее или свободнее.</small></div></div>
            </div>
            <div class="home-pro-density">
              <button type="button" data-density="compact">Компактная</button>
              <button type="button" data-density="normal">Обычная</button>
              <button type="button" data-density="comfortable">Свободная</button>
            </div>
          </section>
        </div>

        <footer class="home-pro-foot">
          <button type="button" class="home-pro-reset">Сбросить</button>
          <button type="button" class="home-pro-save">Сохранить изменения</button>
        </footer>
      </div>`;

    document.body.appendChild(overlay);
    document.body.classList.add('home-pro-lock');

    const render=()=>{
      const bl=overlay.querySelector('.home-pro-block-list');
      bl.innerHTML=state.blocks.map((b,i)=>`
        <div class="home-pro-row ${b.enabled?'is-on':''}" data-b="${b.id}">
          <button type="button" class="home-pro-check" data-toggle-block="${b.id}">${b.enabled?'✓':'○'}</button>
          <div class="home-pro-copy"><b>${b.name}</b><small>${b.enabled?'Показывается на главной':'Скрыт на главной'}</small></div>
          <div class="home-pro-arrows">
            <button type="button" data-up-block="${i}" ${i===0?'disabled':''}>↑</button>
            <button type="button" data-down-block="${i}" ${i===state.blocks.length-1?'disabled':''}>↓</button>
          </div>
        </div>`).join('');

      const ql=overlay.querySelector('.home-pro-quick-list');
      ql.innerHTML=state.quick.map((q,i)=>`
        <div class="home-pro-row ${q.enabled?'is-on':''}" data-q="${q.page}">
          <button type="button" class="home-pro-check" data-toggle-quick="${q.page}">${q.enabled?'✓':'○'}</button>
          <div class="home-pro-copy"><b>${q.name}</b><small>${q.enabled?'Доступно в быстром доступе':'Скрыто из быстрого доступа'}</small></div>
          <div class="home-pro-arrows">
            <button type="button" data-up-quick="${i}" ${i===0?'disabled':''}>↑</button>
            <button type="button" data-down-quick="${i}" ${i===state.quick.length-1?'disabled':''}>↓</button>
          </div>
        </div>`).join('');

      overlay.querySelectorAll('[data-density]').forEach(b=>b.classList.toggle('active',b.dataset.density===state.density));
    };

    render();

    overlay.querySelectorAll('[data-toggle-block]').forEach(b=>{
      b.addEventListener('click',()=>{const id=b.dataset.toggleBlock;const x=state.blocks.find(v=>v.id===id);if(x)x.enabled=!x.enabled;render();});
    });

    overlay.addEventListener('click',e=>{
      const up=e.target.closest('[data-up-block]');
      const down=e.target.closest('[data-down-block]');
      const qup=e.target.closest('[data-up-quick]');
      const qdown=e.target.closest('[data-down-quick]');
      const tq=e.target.closest('[data-toggle-quick]');
      const den=e.target.closest('[data-density]');
      if(up){const i=+up.dataset.upBlock;if(i>0)[state.blocks[i-1],state.blocks[i]]=[state.blocks[i],state.blocks[i-1]];render();}
      else if(down){const i=+down.dataset.downBlock;if(i<state.blocks.length-1)[state.blocks[i+1],state.blocks[i]]=[state.blocks[i],state.blocks[i+1]];render();}
      else if(qup){const i=+qup.dataset.upQuick;if(i>0)[state.quick[i-1],state.quick[i]]=[state.quick[i],state.quick[i-1]];render();}
      else if(qdown){const i=+qdown.dataset.downQuick;if(i<state.quick.length-1)[state.quick[i+1],state.quick[i]]=[state.quick[i],state.quick[i+1]];render();}
      else if(tq){const x=state.quick.find(v=>v.page===tq.dataset.toggleQuick);if(x)x.enabled=!x.enabled;render();}
      else if(den){state.density=den.dataset.density;render();}
    });

    const close=()=>{
      overlay.remove();
      document.body.classList.remove('home-pro-lock');
    };

    overlay.querySelector('.home-pro-close').onclick=close;
    overlay.addEventListener('click',e=>{if(e.target===overlay)close();});

    overlay.querySelector('.home-pro-reset').onclick=()=>{
      const fresh=cloneDefault();
      state.density=fresh.density;
      state.blocks=fresh.blocks;
      state.quick=fresh.quick;
      render();
    };

    overlay.querySelector('.home-pro-save').onclick=()=>{
      save(state);
      apply(state);
      close();
    };
  }

  function boot(){
    document.addEventListener('click',function(e){
      const b=e.target && e.target.closest ? e.target.closest('#homeCustomizeButton') : null;
      if(!b) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      open();
    },true);
    apply(load());
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();


/* KEDO_HOME_CUSTOMIZER_PRO_STYLE_580 */
(function(){if(document.getElementById('kedo580Style'))return;const st=document.createElement('style');st.id='kedo580Style';st.textContent="/* KEDO_HOME_CUSTOMIZER_PRO_STYLE_580 */\n.home-pro-hidden{display:none!important}\n.home-density-compact .home-quick-grid{gap:6px!important}\n.home-density-compact .home-metrics{gap:6px!important}\n.home-density-compact .card{padding-top:12px!important;padding-bottom:12px!important}\n.home-density-comfortable .home-quick-grid{gap:12px!important}\n.home-density-comfortable .home-metrics{gap:12px!important}\n.home-density-comfortable .card{padding-top:18px!important;padding-bottom:18px!important}\n\n.home-pro-lock{overflow:hidden!important}\n.home-pro-overlay{\n  position:fixed!important;inset:0!important;z-index:2147483647!important;\n  display:grid!important;place-items:center!important;padding:20px!important;\n  background:rgba(12,30,46,.48)!important;backdrop-filter:blur(8px)!important;\n}\n.home-pro-modal{\n  width:min(780px,calc(100vw - 28px))!important;\n  max-height:min(760px,calc(100vh - 28px))!important;\n  display:grid!important;grid-template-rows:auto minmax(0,1fr) auto!important;\n  overflow:hidden!important;background:#fff!important;border-radius:18px!important;\n  box-shadow:0 30px 100px rgba(0,0,0,.25)!important;\n}\n.home-pro-head{\n  display:flex!important;align-items:flex-start!important;justify-content:space-between!important;gap:18px!important;\n  padding:20px 22px!important;border-bottom:1px solid #e1e9ee!important;\n  background:linear-gradient(135deg,#fff,#f2f8fb)!important;\n}\n.home-pro-kicker{\n  font-size:8px!important;font-weight:900!important;letter-spacing:.14em!important;color:#8195a3!important;\n}\n.home-pro-head h2{margin:5px 0 0!important;color:#183f5e!important;font-size:23px!important}\n.home-pro-head p{margin:4px 0 0!important;color:#7f929f!important;font-size:10px!important;max-width:520px!important}\n.home-pro-close{\n  flex:none!important;border:1px solid #d1dfe6!important;border-radius:9px!important;\n  background:#fff!important;color:#59707e!important;padding:8px 10px!important;cursor:pointer!important;\n}\n.home-pro-body{overflow:auto!important;padding:14px!important;background:#fbfdfe!important}\n.home-pro-section{\n  border:1px solid #dde7ec!important;border-radius:14px!important;background:#fff!important;\n  padding:12px!important;margin-bottom:10px!important;\n}\n.home-pro-section-head{margin-bottom:9px!important}\n.home-pro-section-head>div{display:flex!important;align-items:center!important;gap:9px!important}\n.home-pro-section-head>div>span{\n  width:25px!important;height:25px!important;display:grid!important;place-items:center!important;\n  border-radius:7px!important;background:#edf6fa!important;color:#3c819c!important;font-size:9px!important;font-weight:800!important;\n}\n.home-pro-section-head b{display:block!important;color:#31576b!important;font-size:11px!important}\n.home-pro-section-head small{display:block!important;margin-top:2px!important;color:#899ba5!important;font-size:9px!important}\n.home-pro-row{\n  display:grid!important;grid-template-columns:29px minmax(0,1fr) auto!important;\n  gap:9px!important;align-items:center!important;padding:9px!important;\n  border:1px solid #e0e9ed!important;border-radius:10px!important;margin-top:6px!important;background:#fff!important;\n}\n.home-pro-row.is-on{background:#f4f9fb!important;border-color:#c5dbe5!important}\n.home-pro-check{\n  width:27px!important;height:27px!important;display:grid!important;place-items:center!important;\n  border:0!important;border-radius:7px!important;background:#edf6fa!important;color:#3c819c!important;cursor:pointer!important;\n}\n.home-pro-copy{min-width:0!important}\n.home-pro-copy b{display:block!important;color:#35586c!important;font-size:10px!important}\n.home-pro-copy small{display:block!important;margin-top:2px!important;color:#8a9ca7!important;font-size:9px!important}\n.home-pro-arrows{display:flex!important;gap:4px!important}\n.home-pro-arrows button{\n  width:27px!important;height:27px!important;border:1px solid #d8e4ea!important;border-radius:7px!important;\n  background:#fff!important;color:#527486!important;cursor:pointer!important;\n}\n.home-pro-arrows button:hover:not(:disabled){background:#edf6fa!important;border-color:#bfd6e1!important}\n.home-pro-arrows button:disabled{opacity:.35!important;cursor:default!important}\n.home-pro-density{display:grid!important;grid-template-columns:repeat(3,1fr)!important;gap:7px!important}\n.home-pro-density button{\n  padding:10px 8px!important;border:1px solid #dfe8ed!important;border-radius:9px!important;\n  background:#fff!important;color:#56707f!important;font-size:10px!important;font-weight:700!important;cursor:pointer!important;\n}\n.home-pro-density button.active{\n  border-color:#9fc3d4!important;background:#edf7fb!important;color:#24688b!important;\n}\n.home-pro-foot{\n  display:flex!important;justify-content:flex-end!important;gap:7px!important;\n  padding:10px 13px!important;border-top:1px solid #e1e9ee!important;background:#fff!important;\n}\n.home-pro-reset,.home-pro-save{\n  border-radius:9px!important;padding:9px 13px!important;cursor:pointer!important;\n}\n.home-pro-reset{border:1px solid #d4e0e6!important;background:#fff!important;color:#637884!important}\n.home-pro-save{border:1px solid #2a789f!important;background:#2a789f!important;color:#fff!important;font-weight:700!important}\n@media(max-width:600px){\n  .home-pro-density{grid-template-columns:1fr!important}\n  .home-pro-row{grid-template-columns:29px minmax(0,1fr) auto!important}\n}";document.head.appendChild(st);})();


/* KEDO_MESSAGES_BITRIX_STYLE_615 */
(function(){if(document.getElementById("kedo615Style"))return;const st=document.createElement("style");st.id="kedo615Style";st.textContent="/* KEDO_MESSAGES_BITRIX_STYLE_615 */\nhtml.bxm-page,body.bxm-page{height:100%!important;overflow:hidden!important}\nbody.bxm-page main{height:calc(100vh - 92px)!important;max-height:calc(100vh - 92px)!important;min-height:0!important;overflow:hidden!important}\n.bxm-shell{width:min(1380px,calc(100vw - 24px));height:calc(100vh - 108px);max-height:calc(100vh - 108px);margin:10px auto;display:grid;grid-template-columns:330px minmax(0,1fr);overflow:hidden;border:1px solid #d9e6eb;border-radius:20px;background:#fff;box-shadow:0 18px 50px rgba(18,57,77,.075),0 2px 8px rgba(18,57,77,.035)}\n.bxm-sidebar{min-height:0;background:linear-gradient(180deg,#fbfdfe,#f6fafb);border-right:1px solid #e1eaee;display:flex;flex-direction:column}\n.bxm-sidebar-head{padding:20px 18px 13px;display:flex;align-items:flex-start;justify-content:space-between}\n.bxm-sidebar-head h1{margin:3px 0 0;font-size:24px;color:#163f58;letter-spacing:-.025em}\n.bxm-new{width:34px;height:34px;border:1px solid #d4e2e8;border-radius:10px;background:#fff;color:#347792;font-size:18px;cursor:pointer}\n.bxm-new:hover{background:#edf6f8}\n.bxm-search-wrap{position:relative;padding:0 14px 12px}\n.bxm-search-wrap input{width:100%;height:42px;box-sizing:border-box;padding:0 12px 0 35px;border:1px solid #d5e2e8;border-radius:12px;background:#fff;color:#274a5c;outline:none}\n.bxm-search-wrap input:focus{border-color:#76aabe;box-shadow:0 0 0 3px rgba(77,146,175,.09)}\n.bxm-search-icon{position:absolute;left:26px;top:12px;color:#8ba0aa;font-size:15px}\n.bxm-tabs{display:flex;gap:4px;padding:0 14px 11px;overflow:auto}\n.bxm-tabs button{height:30px;padding:0 10px;border:1px solid transparent;border-radius:9px;background:transparent;color:#738891;font-size:10px;font-weight:700;white-space:nowrap;cursor:pointer}\n.bxm-tabs button:hover{background:#edf5f8}\n.bxm-tabs button.active{background:#eaf5f8;color:#2b728e;border-color:#d0e3e9}\n.bxm-list-meta{display:flex;justify-content:space-between;align-items:center;padding:0 16px 8px;color:#8b9ca5;font-size:9px;text-transform:uppercase;letter-spacing:.1em;font-weight:800}\n.bxm-contacts{min-height:0;overflow:auto;padding:0 9px 12px}\n.bxm-contact{width:100%;display:flex;gap:10px;align-items:center;text-align:left;margin:2px 0;padding:9px;border:1px solid transparent;border-radius:13px;background:transparent;cursor:pointer}\n.bxm-contact:hover{background:#f0f7f9}\n.bxm-contact.active{background:#e8f4f8;border-color:#cfe3ea;box-shadow:inset 3px 0 #4d98b5}\n.bxm-avatar{width:40px;height:40px;min-width:40px;border-radius:11px;display:grid;place-items:center;background:#e8f3f7;color:#2d738e;font-size:11px;font-weight:800}\n.bxm-avatar.big{width:42px;height:42px;min-width:42px;border-radius:12px}\n.bxm-contact-body{min-width:0;flex:1}\n.bxm-contact-top,.bxm-contact-bottom{display:flex;align-items:center;gap:8px;min-width:0}\n.bxm-contact-top strong{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#21485d;font-size:12px}\n.bxm-contact-top small{flex:none;color:#95a5ad;font-size:8px}\n.bxm-contact-bottom{margin-top:3px}\n.bxm-contact-bottom>span:first-child{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#8c9da5;font-size:9px}\n.bxm-contact-flags{display:flex;align-items:center;gap:5px}\n.bxm-contact-flags i{font-style:normal;color:#6c98a9;font-size:10px}\n.bxm-contact-flags b{width:7px;height:7px;border-radius:50%;background:#277bb0}\n.bxm-empty-list{padding:28px 16px;text-align:center;color:#80929b}.bxm-empty-list small{display:block;margin-top:5px;color:#a0adb3}\n.bxm-main{min-width:0;min-height:0;position:relative;background:#f3f7f9}\n.bxm-chat{height:100%;min-height:0;display:flex;flex-direction:column;position:relative}\n.bxm-chat-head{height:68px;min-height:68px;flex:0 0 68px;display:flex;align-items:center;justify-content:space-between;padding:10px 15px;border-bottom:1px solid #e0eaee;background:#fff}\n.bxm-title{display:flex;align-items:center;gap:10px;min-width:0}.bxm-title>div:last-child{min-width:0}\n.bxm-title strong{display:block;color:#173e58;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.bxm-title small{display:block;margin-top:3px;color:#8b9ca5;font-size:9px}\n.bxm-head-actions{display:flex;gap:5px}.bxm-head-actions button{width:33px;height:33px;border:1px solid #d6e3e8;border-radius:10px;background:#fbfdfe;color:#69828e;cursor:pointer}\n.bxm-head-actions button:hover,.bxm-head-actions button.active{background:#edf6f9;color:#2f728f;border-color:#c8dce4}\n.bxm-find{height:42px;display:flex;align-items:center;gap:8px;padding:5px 10px;border-bottom:1px solid #e1eaee;background:#fff}.bxm-find input{flex:1;border:0;outline:none;font-size:12px}.bxm-find button{border:0;background:transparent;color:#8b9aa2;font-size:17px;cursor:pointer}\n.bxm-messages{flex:1 1 auto;min-height:0;overflow:auto;padding:22px 34px 22px;background:radial-gradient(circle at 0 0,rgba(208,233,241,.22),transparent 33%),linear-gradient(180deg,#f8fbfc,#f2f6f8)}\n.bxm-messages::-webkit-scrollbar{width:9px}.bxm-messages::-webkit-scrollbar-thumb{background:#c6d6dd;border:2px solid transparent;background-clip:padding-box;border-radius:999px}.bxm-messages::-webkit-scrollbar-track{background:transparent}\n.bxm-date-divider{display:flex;align-items:center;gap:10px;margin:14px 0 9px;color:#8c9ca4;font-size:8px;text-transform:uppercase;letter-spacing:.1em;font-weight:800}.bxm-date-divider:before,.bxm-date-divider:after{content:\"\";height:1px;background:#dce7eb;flex:1}.bxm-date-divider span{padding:0 3px}\n.bxm-messages .chat-row{margin:2px 0}.bxm-messages .chat-bubble{max-width:min(72%,700px);min-width:54px;padding:10px 13px 8px;border:1px solid #dce7ec;border-radius:17px;background:#fff;color:#29495a;box-shadow:0 2px 8px rgba(18,57,77,.03)}.bxm-messages .chat-row.own .chat-bubble{border-color:#2f7cad;background:linear-gradient(180deg,#397fad,#2f74a4);color:#fff;box-shadow:0 4px 12px rgba(41,105,147,.10)}\n.bxm-messages .chat-text{font-size:13px;line-height:1.52;word-break:break-word}.bxm-messages .chat-time{margin-top:5px;font-size:8px;color:#92a2aa}.bxm-messages .chat-row.own .chat-time{color:rgba(255,255,255,.70)}\n.bxm-messages .chat-file-attachment{border:1px solid #d8e5eb;border-radius:11px;background:#f8fbfc}.bxm-messages .chat-row.own .chat-file-attachment{background:rgba(255,255,255,.13);border-color:rgba(255,255,255,.22)}\n.bxm-messages .chat-reply-quote{display:block;width:100%;box-sizing:border-box;margin:0 0 7px;padding:7px 9px;border:0;border-left:3px solid #68a6ba;border-radius:8px;background:#f1f7f9;text-align:left;overflow:hidden;cursor:pointer}.bxm-messages .chat-reply-quote small,.bxm-messages .chat-reply-quote span{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bxm-messages .chat-reply-quote small{font-size:8px;font-weight:760;color:#61808d}.bxm-messages .chat-reply-quote span{margin-top:3px;font-size:9px;color:#728893}.bxm-messages .chat-row.own .chat-reply-quote{background:rgba(255,255,255,.12);border-left-color:rgba(255,255,255,.78)}.bxm-messages .chat-row.own .chat-reply-quote small,.bxm-messages .chat-row.own .chat-reply-quote span{color:rgba(255,255,255,.86)}\n.bxm-selected .chat-bubble{box-shadow:0 0 0 2px rgba(73,146,173,.18),0 7px 18px rgba(18,57,77,.07)!important}\n.bxm-hit .chat-bubble{box-shadow:0 0 0 3px rgba(69,148,177,.18)!important}\n.bxm-context{position:fixed;z-index:2147483647;width:210px;padding:6px;border:1px solid #d9e5ea;border-radius:14px;background:rgba(255,255,255,.985);box-shadow:0 18px 42px rgba(16,47,64,.14),0 2px 8px rgba(16,47,64,.04);backdrop-filter:blur(14px);opacity:0;transform:translateY(4px) scale(.985);transition:opacity .13s ease,transform .13s ease}.bxm-context.open{opacity:1;transform:none}.bxm-context button{width:100%;height:38px;padding:0 10px;border:0;border-radius:9px;display:flex;align-items:center;gap:10px;background:transparent;color:#385766;font-size:12px;font-weight:600;text-align:left;cursor:pointer}.bxm-context button:hover{background:#edf6f9;color:#276b88}.bxm-context button span{width:24px;height:24px;display:grid;place-items:center;border-radius:7px;background:#f1f7f9;color:#5d8190}.bxm-context .danger{color:#9d6464}.bxm-context .danger:hover{background:#fff1f1;color:#b34f4f}.bxm-context>div{height:1px;margin:5px 7px;background:#e6edf0}\n.bxm-reactions{position:fixed;z-index:2147483647;display:flex;gap:2px;padding:5px;border:1px solid #d9e5ea;border-radius:13px;background:rgba(255,255,255,.985);box-shadow:0 14px 34px rgba(16,47,64,.13);backdrop-filter:blur(14px)}.bxm-reactions button{width:31px;height:31px;border:0;border-radius:8px;background:transparent;font-size:16px;cursor:pointer}.bxm-reactions button:hover{background:#f0f6f8}\n.bxm-composer{flex:0 0 auto;display:flex;align-items:flex-end;gap:8px;padding:9px 11px 10px;border-top:1px solid #dce7eb;background:#fff;box-shadow:0 -6px 16px rgba(18,57,77,.04)}.bxm-composer-main{min-width:0;flex:1}.bxm-composer textarea{width:100%;box-sizing:border-box;height:40px;min-height:40px;max-height:116px;resize:none;padding:10px 13px;border:1px solid #cedee5;border-radius:11px;background:#fbfdfe;outline:none;font:inherit;font-size:13px}.bxm-composer textarea:focus{border-color:#75a9bf;box-shadow:0 0 0 3px rgba(76,145,174,.09);background:#fff}.bxm-attach{width:40px;height:40px;min-width:40px;border:1px solid #d3e1e7;border-radius:11px;background:#fafcfd;color:#3f819b;font-size:19px;cursor:pointer}.bxm-send{height:40px;min-width:86px;border:0;border-radius:11px;background:#2f78a7;color:#fff;font-weight:700;cursor:pointer;box-shadow:0 3px 9px rgba(40,105,145,.10)}.bxm-send:hover{filter:brightness(1.03)}.bxm-send:disabled{opacity:.6;cursor:default}.bxm-hint{padding:2px 2px 0;color:#91a0a7;font-size:8px}.bxm-file{display:inline-flex;align-items:center;gap:7px;margin:0 4px 5px 0;padding:4px 7px;border:1px solid #d6e3e8;border-radius:8px;background:#f4f9fa;font-size:9px;color:#526f7c}.bxm-file small{color:#91a0a7}.bxm-file button{border:0;background:transparent;color:#82939b;cursor:pointer}\n.bxm-reply,.bxm-edit{display:flex;align-items:center;gap:7px;width:100%;height:30px;box-sizing:border-box;padding:3px 7px;border:1px solid #d6e3e8;border-bottom:0;border-radius:9px 9px 0 0;background:#f4f8fa}.bxm-reply>span{width:2px;height:19px;background:#5d9db7;border-radius:2px}.bxm-reply>div,.bxm-edit>div{min-width:0;flex:1;overflow:hidden}.bxm-reply small,.bxm-edit small{font-size:6.5px;letter-spacing:.1em;text-transform:uppercase;color:#8a9aa3}.bxm-reply b{margin-left:6px;font-size:8.5px;color:#385766;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.bxm-reply button,.bxm-edit button{width:21px;height:21px;border:0;border-radius:7px;background:transparent;color:#87959d;cursor:pointer}.bxm-edit>span{color:#647385}\n.bxm-composer-main:has(.bxm-reply:not([hidden])) #bxmInput,.bxm-composer-main:has(.bxm-edit:not([hidden])) #bxmInput{border-top-left-radius:0;border-top-right-radius:0}\n.bxm-details{position:absolute;top:68px;right:0;bottom:0;width:270px;background:#fff;border-left:1px solid #dce7eb;box-shadow:-12px 0 30px rgba(20,57,76,.07);z-index:4;padding:14px}.bxm-details-head{display:flex;justify-content:space-between;align-items:center;color:#355769;font-size:12px}.bxm-details-head button{border:0;background:transparent;color:#85959d;font-size:18px;cursor:pointer}.bxm-details-person{text-align:center;padding:20px 0 14px;border-bottom:1px solid #e5ecef}.bxm-details-person .bxm-avatar{margin:0 auto 8px}.bxm-details-person strong,.bxm-details-person span{display:block}.bxm-details-person strong{color:#1d455a;font-size:13px}.bxm-details-person span{margin-top:4px;color:#8b9ca5;font-size:9px}.bxm-detail-row{display:flex;justify-content:space-between;gap:10px;padding:12px 0;border-bottom:1px solid #edf1f3;font-size:9px}.bxm-detail-row span{color:#8b9ca5}.bxm-detail-row b{color:#486775;text-align:right}\n.bxm-empty{height:100%;display:grid;place-items:center;align-content:center;text-align:center;padding:30px;color:#8b9ca5}.bxm-empty-icon{font-size:42px;margin-bottom:10px}.bxm-empty h2{margin:0 0 7px;color:#294d61;font-size:21px}.bxm-empty p{max-width:380px;margin:0;line-height:1.5;font-size:12px}.bxm-no-messages{height:100%;display:grid;place-items:center;align-content:center;text-align:center;color:#93a2aa}.bxm-no-messages>div{font-size:34px;margin-bottom:8px}.bxm-no-messages strong{display:block;color:#36596a;font-size:13px}.bxm-no-messages span{display:block;margin-top:5px;font-size:10px}\n@media(max-width:1050px){.bxm-shell{width:calc(100vw - 12px);grid-template-columns:285px minmax(0,1fr)}.bxm-messages{padding-left:20px;padding-right:20px}.bxm-messages .chat-bubble{max-width:80%}}\n@media(max-width:700px){html.bxm-page,body.bxm-page{overflow:hidden!important}.bxm-shell{width:100%;height:100vh;max-height:100vh;margin:0;border-radius:0;grid-template-columns:1fr}.bxm-sidebar{display:none}.bxm-messages{padding:14px 12px 18px}.bxm-messages .chat-bubble{max-width:88%}.bxm-details{display:none}}\n";document.head.appendChild(st);})();


/* KEDO_MESSAGES_ROUTE_VIEWPORT_FIX_625 — disabled layout overrides (5.53.11 uses messages.css) */
(function(){
  if(window.__kedoMessagesRouteViewport625)return;
  window.__kedoMessagesRouteViewport625=true;
  const originalFetch=window.fetch.bind(window);
  window.fetch=function(input,init){
    try{
      const url=typeof input==="string"?input:(input&&input.url)||"";
      if(/^\/api\/messages\/null(?:$|\/)/.test(url)){
        return Promise.resolve(new Response(
          JSON.stringify({messages:[],contacts:[],ok:false,ignored:true}),
          {status:200,headers:{"Content-Type":"application/json"}}
        ));
      }
    }catch{}
    return originalFetch(input,init);
  };
})();

/* KEDO_MESSAGES_SCROLL_SCOPE_FIX_630 */
(function(){
  if(window.__kedoMessagesScrollScope630)return;
  window.__kedoMessagesScrollScope630=true;

  function inMessages(){
    try{return typeof state!=="undefined" && state?.page==="messages";}
    catch{return document.body.classList.contains("kedoOnePage");}
  }

  function unlockGlobalScroll(){
    try{
      document.documentElement.style.removeProperty("overflow");
      document.documentElement.style.removeProperty("overflow-y");
      document.documentElement.style.removeProperty("overflow-x");
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("overflow-y");
      document.body.style.removeProperty("overflow-x");
      document.documentElement.classList.remove("kedoOnePage");
      document.body.classList.remove("kedoOnePage");
      const main=document.querySelector("main");
      if(main){
        main.style.removeProperty("overflow");
        main.style.removeProperty("height");
        main.style.removeProperty("max-height");
        main.style.removeProperty("width");
        main.style.removeProperty("margin-left");
        main.style.removeProperty("margin-right");
      }
    }catch{}
  }

  function lockMessagesScroll(){
    try{
      document.documentElement.style.setProperty("overflow","hidden");
      document.body.style.setProperty("overflow","hidden");
      document.documentElement.classList.add("kedoOnePage");
      document.body.classList.add("kedoOnePage");
      const main=document.querySelector("main");
      if(main) main.style.setProperty("overflow","hidden");
    }catch{}
  }

  function sync(){
    if(inMessages()) lockMessagesScroll();
    else unlockGlobalScroll();
  }

  sync();
  window.__kedoSyncMessagesScroll=sync;
  document.addEventListener("click",()=>{
    setTimeout(sync,0);
    setTimeout(sync,80);
    setTimeout(sync,300);
  },true);
  window.addEventListener("popstate",()=>setTimeout(sync,0));
  window.addEventListener("hashchange",()=>setTimeout(sync,0));
})();
