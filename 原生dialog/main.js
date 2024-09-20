/** dialog */
const dialog = document.querySelector('dialog');
dialog.addEventListener('close', () => {
  console.log('dialog关闭了');
})
// 拦截 esc
dialog.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    e.preventDefault();

    closeDialog();
  }
})
function openModalDialog() {
  dialog.showModal();
}
function openDialog() {
  dialog.show();
}
function closeDialog() {
  let animationend = () => {
    dialog.close();
    dialog.classList.remove('dialog-close-animate');
    dialog.removeEventListener('animationend', animationend)
  }
  dialog.classList.add('dialog-close-animate');
  dialog.addEventListener('animationend', animationend)
}