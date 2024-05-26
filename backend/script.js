const http = require('http');

const postData = JSON.stringify({
  email: 'test@example.com',
  firstName: 'John',
  lastName: 'Doe'
});

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/signup',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': postData.length
  }
};

const req = http.request(options, res => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(JSON.parse(data));
  });
});

req.on('error', error => {
  console.error('Error:', error);
});

req.write(postData);
req.end();
