document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('uploadForm');
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');

    uploadForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', fileInput.files[0]);

        try {
            const response = await fetch('/upload', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            displayUploadedFile(data);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    });

    async function displayUploadedFile(file) {
        const fileItem = document.createElement('div');
        fileItem.classList.add('file-item');
        fileItem.textContent = file.originalname;
        fileList.appendChild(fileItem);
    }
});
