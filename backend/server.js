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


app.post('/api/google-signin', async (req, res) => {
    const { token } = req.body;

    try {
        // Verify Google token...
        // Assuming you have obtained user data from the token
        const userData = {
            email: 'example@gmail.com',
            firstName: 'John',
            lastName: 'Doe',
            // Add more user data as needed
        };

        // Check if user already exists in Firestore
        const userDoc = await admin.firestore().collection('users').doc(userData.email).get();
        if (!userDoc.exists) {
            // If user doesn't exist, create new user document
            await admin.firestore().collection('users').doc(userData.email).set({
                firstName: userData.firstName,
                lastName: userData.lastName,
                // Add more user data as needed
            });
        }

        res.status(200).send({ message: 'Google sign-in successful', user: userData });
    } catch (error) {
        res.status(400).send({ message: 'Error signing in with Google', error });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



//Firebase

const admin = require('firebase-admin');

const serviceAccount = require('./path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://programmerbubble-424508-default-rtdb.firebaseio.com/' // Replace with your Firestore database URL
});
