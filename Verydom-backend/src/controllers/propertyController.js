import admin from '../config/firebaseConfig.js';

const db = admin.firestore();

export const getProperties = async (req, res) => {
  try {
    const snapshot = await db.collection('properties').get();
    const properties = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addProperty = async (req, res) => {
  try {
    const newProperty = req.body;
    const docRef = await db.collection('properties').add(newProperty);
    res.status(201).json({ id: docRef.id, ...newProperty });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};