document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll('.preference-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('input', checkUniqueRank);
    });

    function checkUniqueRank(event) {
        const selectedRank = event.target.value;

        toggles.forEach(toggle => {
            if (toggle !== event.target && toggle.value === selectedRank) {
                alert('Please select a unique rank for each option.');
                event.target.value = 0;
            }
        });
    }
});
