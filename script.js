document.addEventListener('DOMContentLoaded', function () {
    const buttons = [
        { button: document.getElementById('resolumeButton1'), command: 'http://192.168.129.11:8080/api/v1/composition/layers/1/clips/1/select' },
        { button: document.getElementById('resolumeButton2'), command: 'http://192.168.129.11:8080/api/v1/composition/layers/1/clips/2/select' },
    ];

    buttons.forEach(({ button, command }, index) => {
        button.addEventListener('click', function () {
            fetch(command, {
                method: 'POST',
            })
            .then(response => {
                if (response.ok) {
                    console.log(`Resolume button ${index + 1} pressed successfully.`);
                } else {
                    console.error(`Failed to trigger Resolume button ${index + 1}. Status: ${response.status}`);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    });
  // slider = midi keyboard
});