const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionContent = header.nextElementSibling;
        if (accordionContent) {
            accordionContent.classList.toggle('active');
        }
    });
});
