# Kobo Developer Test

This Node.js app uses both HTML and server-side validation. Type the 12-digit product ID with a format of `XXXX-YYYY-ZZZZ` into the form and submit.

## Getting Started

1. `npm install`

2. Please run `npm start` to start project. Then click the link in the terminal.

## Testing

Testing is done using [JEST](https://jestjs.io/ 'JEST Homepage'). Please run `npm test`

## Bonus

You can add a param to URL to dynamically validate Product IDs. For example: `http://localhost:3000/process?productid=1234-1234-1234` will be checked by NodeJS and response with a valid ID.
