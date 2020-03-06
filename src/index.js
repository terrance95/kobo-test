import 'dotenv/config';
import express from 'express';
import path from 'path';
import { json, urlencoded } from 'body-parser';
import { readFileSync } from 'fs';
import { validateInput } from './utils/';
const app = express();
const PORT = process.env.PORT || 3000;

const successMessage = `<p class="success-text">Product ID is valid.</p>`;
const errorMessage = `<p class="error-text">Product ID is invalid. Try again!</p>`;

// Dynamically render message on the Frontend when user submits ID
const createHTML = message => {
  return readFileSync(__dirname + '/public/index.html')
    .toString()
    .replace(
      '<p class="intro-text">This uses HTML and server-side validation to confirm product ID.</p>',
      message
    );
};

// parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: false }));

// parse application/json
app.use(json());

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('/process', (req, res) => {
  if (validateInput(req.query.productid)) {
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(createHTML(successMessage)));
    res.end();
  } else {
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(createHTML(errorMessage)));
    res.end();
  }
});

// Start App
app.listen(PORT, () => {
  console.log(`The App is running on http://localhost:${PORT}`);
});
