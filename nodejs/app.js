const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello-RB 15-52025, Node.js!');
});

app.listen(port, () => {
    console.log(`Node.js app listening at http://localhost:${port}`);
});