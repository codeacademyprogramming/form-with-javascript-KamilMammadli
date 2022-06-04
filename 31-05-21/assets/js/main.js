const input = document.querySelector(`#my-input`);
const button = document.querySelector('.my-custom-button');
const errorText = document.querySelector('.firstname-error');

button.onclick = function () {
    if (input.value.length < 3 || input.value.length > 50) {

        errorText.classList.remove('d-none');
        alert('Adiniz uygun deyil');
        input.value = '';
        window.location.href = 'home.html';

    } else {
        errorText.classList.add('d-none');

    }
}
const input2 = document.querySelector(`#my-input2`);
const errorText2 = document.querySelector('.lastname-error');
button.onclick = function () {
    if (input2.value.length < 3 || input2.value.length > 50) {

        errorText2.classList.remove('d-none');
        alert('Soyadiniz uygun deyil');
        input2.value = '';
        window.location.href = 'home.html';

    } else {
        errorText2.classList.add('d-none');

    }
}

const input3 = document.querySelector(`#my-input3`);
const errorText3 = document.querySelector('.email-error');

button.onclick = function () {
    if (input3.value.length < 3 || input3.value.length > 100 && (!input.value.includes('@'))) {

        errorText3.classList.remove('d-none');
        alert('emailiniz uygun deyil');
        input3.value = '';
        window.location.href = 'home.html';

    } else {
        errorText3.classList.add('d-none');

    }
}