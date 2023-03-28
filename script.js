const backgroundEl = document.querySelector('.container');
const numberEl = document.querySelector('.number');
const btnsEl = document.querySelectorAll('.counter_btn');
let valueNum = +numberEl.textContent;
let count = 0;

btnsEl.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('up')) {
      count++;
      numberEl.textContent = count;
    }
    if (+numberEl.textContent > 0) {
      numberEl.style.color = 'lightgreen';
      backgroundEl.style.boxShadow = '1px 1px 80px 40px lightgreen';
    }

    if (btn.classList.contains('down')) {
      count--;
      numberEl.textContent = count;
    }
    if (+numberEl.textContent < 0) {
      numberEl.style.color = 'red';
      backgroundEl.style.boxShadow = '1px 1px 80px 40px red';
    }
    if (+numberEl.textContent == 0) {
      numberEl.removeAttribute('style');
      backgroundEl.removeAttribute('style');
    }
  });
});
