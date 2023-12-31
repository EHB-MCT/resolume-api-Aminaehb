document.addEventListener('DOMContentLoaded', function () {
    const resolumeButton = document.getElementById('resolumeButton1');
    const clickText = document.querySelector('.click-text'); // Select the "Press for Help" text element

    resolumeButton.addEventListener('click', function () {
        // Hide the button
        resolumeButton.style.display = 'none';

        selectColumn(3);

        function selectColumn(column) {
            for (let layer = 1; layer <= 3; layer++) {
                (function (layer, column) {
                    const command = `http://10.2.88.168:4000/api/v1/composition/layers/${layer}/clips/${column}/connect`;

                    fetch(command, {
                        method: 'POST',
                    })
                    .then(response => {
                        if (response.ok) {
                            console.log(`Resolume clip ${column} selected successfully for layer ${layer}.`);
                        } else {
                            console.error(`Failed to select Resolume clip ${column} for layer ${layer}.`);
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
                })(layer, column);
            }

            // Hide the "Press for Help" text
            clickText.style.display = 'none';

            // Show the thank-you message in full screen
            showFullScreenMessage();
        }

        function showFullScreenMessage() {
            const message = document.getElementById('message');
            message.innerText = 'By clicking that button, you just saved a life';
            message.style.fontSize = '48px';
            message.style.color = 'white';
            message.style.backgroundColor = 'red';
            message.style.fontFamily = 'sans-serif';
            message.style.textAlign = 'center';
            message.style.position = 'fixed';
            message.style.top = '50%';
            message.style.left = '50%';
            message.style.transform = 'translate(-50%, -50%)';
        
            // Create a full-screen message div
            const fullscreenMessage = document.createElement('div');
            fullscreenMessage.classList.add('fullscreen-message');
            fullscreenMessage.appendChild(message);
            document.body.appendChild(fullscreenMessage);
        }
        
    });
});
