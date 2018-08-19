const express = require('express');

const app = express();

app.use(express.static('resources'));

app.listen(4000, () => console.log('Server on 4000 port'));
