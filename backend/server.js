const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { OAuth2Client } = require('google-auth-library');
const admin = require('firebase-admin');
require('dotenv').config();


const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Google OAuth client
const CLIENT_ID = '459741616357-k1h92ul4h6q33rp7v28eud7fepmfjnp7.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

console.log(process.env.FIREBASE_ADMIN_SDK_CREDENTIALS + 'here')
// Initialize Firebase Admin SDK
const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_SDK_CREDENTIALS);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://programmerbubble-424508-default-rtdb.firebaseio.com/' // Replace with your Firestore database URL
});

app.post('/api/signup', async (req, res) => {
    const { email, firstName, lastName } = req.body;

    try {
        await admin.firestore().collection('users').doc(email).set({
            firstName: firstName,
            lastName: lastName,
            // Add more user data as needed
        });
        res.status(200).send({ message: 'User signed up successfully' });
    } catch (error) {
        res.status(400).send({ message: 'Error signing up user', error });
    }
});

// Other routes...

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
