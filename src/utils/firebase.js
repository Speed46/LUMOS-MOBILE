import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase config here
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

export const getItemsFromFirestore = async () => {
  const snapshot = await firestore.collection('items').get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
