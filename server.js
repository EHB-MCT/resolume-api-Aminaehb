const express = require('express');
const app = express();
const port = 8888;

app.use(express.static(__dirname)); // Serve static files from the current directory

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
