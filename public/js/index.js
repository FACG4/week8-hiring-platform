const hidden = document.getElementById('hidden');
const check = document.getElementById('check');
hidden.style.display = 'none';

check.addEventListener('click',(e) => {
if (hidden.style.display=='none') {
  hidden.style.display='block'
  console.log(1);
}
else {
  console.log(2);
  hidden.style.display='none'

}

})
