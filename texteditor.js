document.getElementById('run').addEventListener('click', () => {
    const sourceCode = document.getElementById('code').value;
    
    // Substitute with your actual endpoint and API key
    const endpoint = 'https://api.judge0.com/submissions/?base64_encoded=false&wait=true';
    const apiKey = 'YOUR_API_KEY'; // Replace with your Judge0 API key
  
    const data = {
      source_code: sourceCode,
      language_id: 52, // This is the language ID for Python. Change it according to the language you want to use.
    };
  
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
        'x-rapidapi-key': apiKey // Use your actual API key here
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      const output = data.stdout || data.stderr || data.compile_output;
      document.getElementById('output').textContent = output;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('output').textContent = 'An error occurred while executing the code.';
    });
  });
  