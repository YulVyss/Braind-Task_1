window.onload = function () {

    const photos = document.querySelectorAll('.review__image, .popup__close');
    const popup = document.querySelector('.popup');

    function showPopup(buttons, popup) {
        for (let button of buttons) {
            button.addEventListener('click', function () {
                popup.classList.toggle('popup_active');
                document.body.classList.toggle('fixed');
            })
        }
    }
    showPopup(photos, popup);
}

function readMore() {
    let dots = document.getElementById('dots');
    let more = document.querySelector('.review__text_hidden');
    let btn = document.querySelector('.text__more');

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        btn.innerHTML = 'Подробнее';
        more.style.display = 'none';
        btn.classList.remove('active');
    } else {
        dots.style.display = 'none';
        btn.innerHTML = 'Скрыть';
        more.style.display = 'inline';
        btn.classList.add('active');
    }
}