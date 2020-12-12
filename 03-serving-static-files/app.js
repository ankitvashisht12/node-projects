const path = require('path');

const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname , 'views', 'index.html'));
});

app.get('/users', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'users.html'));
});

app.listen(3000);