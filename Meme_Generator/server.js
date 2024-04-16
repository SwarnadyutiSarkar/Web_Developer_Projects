const express = require('express');
const multer = require('multer');
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Multer configuration for file upload
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

app.post('/generate', upload.single('image'), async (req, res) => {
    try {
        const { topText, bottomText } = req.body;
        const imagePath = path.join(__dirname, req.file.path);

        const img = await loadImage(imagePath);
        const canvas = createCanvas(img.width, img.height);
        const ctx = canvas.getContext('2d');

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

        const generatedMemePath = path.join(__dirname, 'public', 'generated-meme.png');
        const out = fs.createWriteStream(generatedMemePath);
        const stream = canvas.createPNGStream();

        stream.pipe(out);
        out.on('finish', () => {
            res.json({ success: true, memePath: '/generated-meme.png' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
