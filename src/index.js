import express from 'express';
const app = express();

app.get('/', (_req, res) => {
  res.send('hello');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
