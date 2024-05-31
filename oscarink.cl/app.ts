const ctaButtons = document.querySelectorAll('.cta-button');

ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Gracias por tu interés! Pronto seras redirigido a una conversación por Whatsapp con Oscar.');
    });
});
