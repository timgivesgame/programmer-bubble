// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

app.use(cors());
app.use(bodyParser.json());

const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_SDK_CREDENTIALS);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://programmerbubble-424508-default-rtdb.firebaseio.com/'
});

app.post('/api/signup', async (req, res) => {
  const { email, firstName, lastName, password, username } = req.body;
  try {
    await admin.firestore().collection('users').doc(email).set({
      firstName,
      lastName,
      username,
    });
    res.status(200).send({ message: 'User signed up successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error signing up user', error });
  }
});

app.post('/api/google-login', async (req, res) => {
  const { idToken } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID
    });
    const payload = ticket.getPayload();
    const { email, given_name: firstName, family_name: lastName } = payload;

    await admin.firestore().collection('users').doc(email).set({
      firstName,
      lastName
    }, { merge: true });

    res.status(200).send({ message: 'Google login successful' });
  } catch (error) {
    res.status(400).send({ message: 'Google login failed', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
