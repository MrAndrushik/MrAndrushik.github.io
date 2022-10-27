document.addEventListener('DOMContentLoaded', () => {
    // SENDED WINDOW START
    const submitForm = document.querySelector('.ln-form__submit');
    const formBlock = document.querySelector('.ln-form__wrapper');
    const sendedBlock = document.querySelector('.ln-sended');
    submitForm.onclick = (e) => {
        e.preventDefault();
        sendedBlock.classList.add('ln-sended--active');
        formBlock.classList.add('ln-form__wrapper--hidden');
    };
    // SENDED WINDOW END

    // MODALS START
    const modalOverlay = document.querySelector('.ln-overlay');
    const modalOpen = document.querySelector('.ln-sended__accounting');
    const modalClose = document.querySelector('.ln-overlay__close');
    modalOpen.onclick = (e) => {
        e.preventDefault();
        modalOverlay.classList.add('ln-overlay--active');
    };
    modalClose.onclick = () => {
        modalOverlay.classList.remove('ln-overlay--active');
    };
    // MODALS END

    // COPY LINK TO CLIPBOARD START
    const copyBtn = document.querySelector('.ln-payment__copy');
    const copyLink = document.querySelector('.ln-payment__link');
    copyBtn.onclick = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(copyLink.innerText);
        copyBtn.innerHTML = 'Ссылка скопирована';
        copyBtn.classList.add('ln-payment__copy--active');
        setTimeout(() => {
            copyBtn.innerHTML = 'Скопировать ссылку';
            copyBtn.classList.remove('ln-payment__copy--active');
        }, 2000);
    };

    // COPY LINK TO CLIPBOARD END

    // RECEIVING-CLASS START
    document.querySelectorAll('.ln-receiving').forEach((tag) => {
        const input = tag.querySelector('input');
        input.onclick = () => {
            document
                .querySelectorAll('.ln-receiving')
                .forEach((tag) => tag.classList.remove('ln-receiving--active'));
            tag.classList.add('ln-receiving--active');
        };
    });
    // RECEIVING-CLASS END

    // FORM-OPERATOR-LIST START
    const operatorBtn = document.querySelector('#ln-operators-btn');
    const operatorsList = document.querySelector('#ln-operators-list');

    operatorBtn.onclick = (e) => {
        e.preventDefault();
        operatorBtn.classList.toggle('ln-operator__btn--active');
        operatorsList.classList.toggle('ln-operator__list--active');
    };

    operatorsList.querySelectorAll('.ln-operator__item').forEach(
        (operator) =>
            (operator.onclick = () => {
                operatorsList.classList.remove('ln-operator__list--active');
                operatorBtn.classList.remove('ln-operator__btn--active');
                operatorBtn.innerHTML = operator.innerHTML;
            })
    );
    // FORM-OPERATOR-LIST END
});
