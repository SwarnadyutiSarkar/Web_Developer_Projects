function generateMeme() {
    const imageInput = document.getElementById('imageInput');
    const topText = document.getElementById('topText').value;
    const bottomText = document.getElementById('bottomText').value;
    const memeContainer = document.getElementById('memeImage');

    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const img = new Image();
            img.src = event.target.result;

            img.onload = function() {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                canvas.width = img.width;
                canvas.height = img.height;

                ctx.drawImage(img, 0, 0);

                ctx.fillStyle = 'white';
                ctx.strokeStyle = 'black';
                ctx.textAlign = 'center';
                ctx.font = '30px Impact';

                // Top text
                ctx.fillText(topText, canvas.width / 2, 40);
                ctx.strokeText(topText, canvas.width / 2, 40);

                // Bottom text
                ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
                ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20);

                memeContainer.src = canvas.toDataURL();
            };
        };

        reader.readAsDataURL(imageInput.files[0]);
    }
}
