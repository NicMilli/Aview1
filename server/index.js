require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost${PORT}`);
});
