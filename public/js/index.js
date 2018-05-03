const hidden = document.querySelector('#hidden');
const check = document.querySelector('#check');

check.addEventListener('click',(e) => {
  e.preventDefault();
  if (!hidden.style.display || hidden.style.display === 'none') {
    hidden.style.display = 'block';
  } else {
    hidden.style.display = 'none'
  }
})
