const backgroundEl = document.querySelector('.container-counter');
const numberEl = document.querySelector('.counter_number');
const btnsEl = document.querySelectorAll('.counter_btn');
let valueNum = numberEl.value;
console.log(valueNum);

btnsEl.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('up')) {
      valueNum++;
      numberEl.value = valueNum;
    }
    if (numberEl.value > 0) {
      numberEl.style.color = 'lightgreen';
      backgroundEl.style.boxShadow = '1px 1px 100px lightgreen';
    }

    if (btn.classList.contains('down')) {
      valueNum--;
      numberEl.value = valueNum;
    }
    if (numberEl.value < 0) {
      numberEl.style.color = 'red';
      backgroundEl.style.boxShadow = '1px 1px 100px red';
    }
    if (numberEl.value == 0) {
      numberEl.removeAttribute('style');
      backgroundEl.removeAttribute('style');
    }
  });
});
