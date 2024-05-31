var ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        alert('Gracias por tu interés! Pronto seras redirigido a una conversación por Whatsapp con Oscar.');
    });
});
