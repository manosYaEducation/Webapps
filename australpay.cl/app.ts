document.addEventListener('DOMContentLoaded', () => {
    console.log('AustralPay - Botón Transfronterizo está listo.');

    // Objeto con los textos
    const texts = {
        title: 'AustralPay',
        slogan: 'Facilitando transacciones financieras transfronterizas',
        welcomeTitle: 'Bienvenido al Botón Transfronterizo (BPT)',
        welcomeText: 'Unificando y mejorando la calidad de los pagos transfronterizos entre Argentina y Chile.',
        features: [
            { title: 'Integración Económica', description: 'Facilita la integración económica regional entre Argentina y Chile.' },
            { title: 'Seguridad', description: 'Implementa medidas de seguridad robustas para proteger las transacciones.' },
            { title: 'Velocidad y Eficiencia', description: 'Optimiza la velocidad y eficiencia de las operaciones financieras.' },
            { title: 'Soporte Técnico', description: 'Ofrece soporte técnico confiable para garantizar un funcionamiento continuo.' }
        ],
        footerText: '2024 AustralPay. una iniciativa de MEB Patagonia SPA Todos los derechos reservados.'
    };

    // Mostrar los textos en el HTML
    document.getElementById('title')!.innerText = texts.title;
    document.getElementById('slogan')!.innerText = texts.slogan;
    document.getElementById('welcomeTitle')!.innerText = texts.welcomeTitle;
    document.getElementById('welcomeText')!.innerText = texts.welcomeText;
    document.getElementById('footerText')!.innerText = texts.footerText;

    // Crear elementos HTML para las características y agregarlos al DOM
    const featuresContainer = document.getElementById('features');
    texts.features.forEach(feature => {
        const featureElement = document.createElement('div');
        featureElement.classList.add('col-md-3', 'feature');
        featureElement.innerHTML = `
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        featuresContainer!.appendChild(featureElement);
    });

    // Función para desplazamiento suave al hacer clic en enlaces del menú
    const scrollSmoothHandler = (event: Event) => {
        event.preventDefault();
        const targetId = (event.target as HTMLAnchorElement).getAttribute('href') ?? '';
        const targetElement = document.querySelector(targetId);
        if (targetElement !== null) {
            window.scrollTo({
                top: targetElement.getBoundingClientRect().top + window.pageYOffset,
                behavior: 'smooth'
            });
        }
    };

    // Agregar eventos de clic suave a los enlaces del menú
    const menuLinks = document.querySelectorAll('.nav-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', scrollSmoothHandler);
    });
});
