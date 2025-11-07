const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/projects', (req, res) => {
    // Return project list
    res.json({ message: 'Danh sách dự án' });
});

app.post('/api/projects', (req, res) => {
    // Create a new project
    const project = req.body;
    res.status(201).json({ message: 'Dự án đã được tạo', project });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});