const express = require('express');
const app = express();
const PORT = process.env.PORT || 3004;

app.get('/', (req, res) => {
//   res.send('Backend is working!');
  res.json({ message: 'Hello from backend!' });
});

app.listen(PORT, () => console.log(`API running on port ${PORT}`));
