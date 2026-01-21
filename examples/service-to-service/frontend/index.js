const express = require('express');
const app = express();
const port = 80;

app.get('/', async (req, res) => {
  console.log('Frontend received request, calling backend...');

  try {
    // This is the magic! Using the service name as hostname
    const response = await fetch('http://backend:80');
    const data = await response.json();

    console.log('Received from backend:', data);

    res.send(`
      <html>
        <head><title>Service-to-Service Demo</title></head>
        <body style="font-family: system-ui; max-width: 600px; margin: 50px auto; padding: 20px;">
          <h1>Frontend Service</h1>
          <p>Successfully called backend service!</p>
          <h2>Response from backend:</h2>
          <pre style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${JSON.stringify(data, null, 2)}</pre>
          <hr>
          <p style="color: #666; font-size: 14px;">
            The frontend fetched this data from <code>http://backend:80</code> using an internal service call.
          </p>
        </body>
      </html>
    `);
  } catch (error) {
    console.error('Error calling backend:', error);
    res.status(500).send(`
      <html>
        <head><title>Error</title></head>
        <body style="font-family: system-ui; max-width: 600px; margin: 50px auto; padding: 20px;">
          <h1>Error</h1>
          <p style="color: red;">Failed to call backend service: ${error.message}</p>
          <p>Make sure the backend service is running with <code>--name backend</code></p>
        </body>
      </html>
    `);
  }
});

app.listen(port, () => {
  console.log(`Frontend listening on port ${port}`);
});
