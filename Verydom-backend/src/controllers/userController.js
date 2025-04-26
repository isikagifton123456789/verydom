import admin from '../config/firebaseConfig.js';

const auth = admin.auth();
const db = admin.firestore(); 

export const registerUser = async (req, res) => {
  const { email, password, displayName } = req.body;

  try {
    // Create user in Firebase Auth
    const userRecord = await auth.createUser({
      email,
      password,
      displayName,
    });

    // Create user profile in Firestore
    await db.collection('users').doc(userRecord.uid).set({
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        uid: userRecord.uid,
        email: userRecord.email,
        displayName: userRecord.displayName,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const registerWithGoogle = async (req, res) => {
  const { idToken } = req.body;

  try {
    // Verify Google ID token
    const decodedToken = await auth.verifyIdToken(idToken);
    const { uid, email, name, picture } = decodedToken;

    // Check if user exists in Auth
    let userRecord;
    try {
      userRecord = await auth.getUser(uid);
    } catch (error) {
      // If user doesn't exist, create in Auth
      userRecord = await auth.createUser({
        uid,
        email,
        displayName: name,
        photoURL: picture,
      });
    }

    // Create or update Firestore profile
    const userDocRef = db.collection('users').doc(uid);
    const doc = await userDocRef.get();
    if (!doc.exists) {
      await userDocRef.set({
        uid,
        email,
        displayName: name,
        photoURL: picture,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    }

    res.status(200).json({
      message: 'User registered successfully with Google',
      user: {
        uid: userRecord.uid,
        email: userRecord.email,
        displayName: userRecord.displayName,
        photoURL: userRecord.photoURL,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
