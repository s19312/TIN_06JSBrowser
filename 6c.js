const age = document.getElementById('age');
const email = document.getElementById('email');

email.addEventListener('change', (event) => {
    if (email.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm)) {
        email.classList.add('correctInput');
    } else {
        email.classList.add('incorrectInput');
    }
});

age.addEventListener('change', (event) => {
    if (event.value <= 0) {
        age.classList.add('incorrectInput');
    } else {
        age.classList.add('correctInput');
    }
});

function isFormCorrect() {
    if (!email.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm) || age.value <= 0) {
        console.log('Incorrect');
        return false;
    }
    console.log('correct');
    return true;
}