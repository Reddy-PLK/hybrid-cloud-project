const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json({ message: "Hello from Local Backend 🚀" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
