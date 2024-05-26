const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { OAuth2Client } = require('google-auth-library');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Google OAuth client
const CLIENT_ID = '459741616357-k1h92ul4h6q33rp7v28eud7fepmfjnp7.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

app.post('/api/signup', (req, res) => {
    const { email, firstName, lastName, password } = req.body;
    // Save user to the database (mocked here)
    res.status(200).send({ message: 'User signed up successfully' });
});

app.post('/api/google-signin', async (req, res) => {
    const { token } = req.body;
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        // Save user to the database (mocked here)
        res.status(200).send({ message: 'Google sign-in successful', user: payload });
    } catch (error) {
        res.status(400).send({ message: 'Google sign-in failed', error });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
