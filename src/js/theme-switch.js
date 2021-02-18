const bodyRef = document.querySelector('body');
const checkboxRef = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const savedTheme = localStorage.getItem('theme');
checkboxRef.addEventListener('change', themeSwitcher);

if (localStorage.getItem('theme') === Theme.DARK) {
  checkboxRef.checked = 'true';
  darkTheme();
}

function lightTheme() {
  bodyRef.classList.add(Theme.LIGHT);
  bodyRef.classList.remove(Theme.DARK);
  localStorage.removeItem('theme');
  localStorage.setItem('theme', Theme.LIGHT);
}

function darkTheme() {
  bodyRef.classList.remove(Theme.LIGHT);
  bodyRef.classList.add(Theme.DARK);
  localStorage.removeItem('theme');
  localStorage.setItem('theme', Theme.DARK);
}

function themeSwitcher() {
  if (!checkboxRef.checked) {
    lightTheme();
  } else {
    darkTheme();
  }
}
