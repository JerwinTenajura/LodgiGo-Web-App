// Add these imports at the top of your server file
const express = require('express');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK with your service account key
const serviceAccount = require('./path/to/your/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://lodgigo-ab58e.firebaseio.com' // Replace with your database URL
});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Read data from Realtime Database
app.get('/api/items', (req, res) => {
  const ref = admin.database().ref('items');
  ref.once('value', (snapshot) => {
    const items = snapshot.val();
    res.json(items);
  })
  .catch((error) => {
    res.status(500).json({ error: 'Error getting items' });
  });
});

// Update data in Realtime Database
app.put('/api/items/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedItemData = req.body;

  const ref = admin.database().ref(`items/${itemId}`);
  ref.update(updatedItemData)
    .then(() => {
      res.json({ message: 'Item updated successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error updating item' });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
