
import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; 

function App() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleRunCode = async () => {
    try {
      const response = await axios.post('http://localhost:8000/execute', { code });
      setOutput(response.data.output);
    } catch (error) {
      setOutput('Error executing code');
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Python Code Runner</h1>
      <textarea
        rows="15"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write Python Code here "
        className="textarea"
      />

      <button onClick={handleRunCode} className="button">
        Run
      </button>
      <pre className="output">
        {output}
      </pre>
    </div>
  );
}

export default App;
