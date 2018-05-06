const hidden = document.querySelector('#hidden');
const check = document.querySelector('#check');
const role = document.querySelector('#role');
if(check){
  hidden.style.display = 'none'
  check.addEventListener('click',(e) => {
    e.preventDefault();
    if (hidden.style.display === 'none') {
      hidden.style.display = 'block';
      role.value = 'employee';
    } else {
      hidden.style.display = 'none'
      role.value = 'employer';

    }
  })
}
