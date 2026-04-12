import express from 'express';
import routes from './routes.js';
import helmet from 'helmet';

//const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.use(helmet());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});