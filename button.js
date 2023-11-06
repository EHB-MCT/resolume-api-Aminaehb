
document.addEventListener('DOMContentLoaded', function () {
    const resolumeButton = document.getElementById('resolumeButton1');

    resolumeButton.addEventListener('click', function () {
        // Hide the button
        resolumeButton.style.display = 'none';

        fetch('http://192.168.129.11:8080/api/v1/composition/layers/1/clips/3/select', {
            method: 'POST',
        })
        .then(response => {
            if (response.ok) {
                console.log('Resolume clip 4 selected successfully.');
                // Show the thank-you message in full screen
                showFullScreenMessage();
            } else {
                console.error('Failed to select Resolume clip 4.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    function showFullScreenMessage() {
        const message = document.getElementById('message');
        message.innerText = 'By clicking that button, you just saved a life';
        message.style.fontSize = '48px';
        message.style.color = 'white';

        // Create a full-screen message div
        const fullscreenMessage = document.createElement('div');
        fullscreenMessage.classList.add('fullscreen-message');
        fullscreenMessage.appendChild(message);
        document.body.appendChild(fullscreenMessage);
    }
});

