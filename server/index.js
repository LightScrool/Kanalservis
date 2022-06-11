const express = require('express');
const itemsRouter = require('./routes');
const cors = require('cors');

const PORT = process.env.PORT || 8080;

const app = express()
app.use(cors());
app.use('/api', itemsRouter);

app.listen(PORT, () => console.log('server is working'));
