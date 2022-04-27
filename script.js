// initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
       const styles = event.currentTarget.classList;
       if(styles.contains('btn-decrease')) {
           count--;
       } else if(styles.contains('btn-increase')) {
           count++;
       } else {
           count = 0;
       }

       value.textContent = count;
    });
});