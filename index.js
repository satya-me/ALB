const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 80;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: "server running...." });
});

app.get('/srv/hi', (req, res) => {
    res.send({
        message: "Hello I am Testing Server, Happy To See You.."
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
