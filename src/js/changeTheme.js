const refs = {
    body: document.querySelector('body'),
    switch: document.querySelector('#theme-switch-toggle')
}
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switch.addEventListener('click', onClickEl);
 
function onClickEl(e) {
  const check = refs.switch.checked;

  if (check) {
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK)

  } else {
     refs.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT)
  }
}

const themeInLocal = localStorage.getItem('theme') || Theme.LIGHT
// if (themeInLocal === Theme.DARK) {
//   refs.body.classList.add(Theme.DARK);
//   refs.switch.checked = true;
// }
 refs.body.classList.add(themeInLocal);
 refs.switch.checked = themeInLocal === Theme.DARK;