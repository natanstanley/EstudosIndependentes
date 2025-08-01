document.addEventListener('DOMContentLoaded', () => {
    const cssInput = document.getElementById('css-input');
    const flexContainer = document.getElementById('flex-container');

    function updateFlexStyles() {
        flexContainer.style.cssText = cssInput.value;
    }

    cssInput.addEventListener('input', updateFlexStyles);

    // Inicializa com o valor padrão da textarea
    updateFlexStyles();
});
