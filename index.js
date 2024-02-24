const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('HomePage');
});

app.get('/page2', (req, res) => {
    res.render('SearchPage');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
