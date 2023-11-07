document.addEventListener('DOMContentLoaded', function () {
    const buttons = [
        { button: document.getElementById('resolumeButton1'), column: 1 },
        { button: document.getElementById('resolumeButton2'), column: 2 },
    ];

    buttons.forEach(({ button, column }, index) => {
        button.addEventListener('click', function () {
            selectColumn(column);
        });
    });

    function selectColumn(column) {
        for (let layer = 1; layer <= 3; layer++) {
            (function (layer, column) {
                const command = `http://10.2.88.168:4000/api/v1/composition/layers/${layer}/clips/${column}/connect`;

                fetch(command, {
                    method: 'POST',
                })
                .then(response => {
                    if (response.ok) {
                        console.log(`Resolume button ${index + 1} pressed successfully for layer ${layer}, column ${column}.`);
                    } else {
                        console.error(`Failed to trigger Resolume button ${index + 1} for layer ${layer}, column ${column}. Status: ${response.status}`);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            })(layer, column);
        }
    }
});
