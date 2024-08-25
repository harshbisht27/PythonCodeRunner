const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
require('dotenv').config(); 

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/execute', (req, res) => {
  const { code } = req.body;

  exec(`python3 -c "${code}"`, (error, stdout, stderr) => {
    if (error) {
      res.json({ output: stderr });
    } else {
      res.json({ output: stdout });
    }
  });
});

const PORT = process.env.PORT || 8000; 
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
);
