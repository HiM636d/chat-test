

/**
 * importing firebase
 */
import firebase from 'firebase'


/**
 * setting configurations for the database
 */    


const firebaseConfig = {
  apiKey: "AIzaSyB_OMXcgsVNOKBGyLGNBKZPGzE-fFaj5qU",
  authDomain: "chattesttask-6cb22.firebaseapp.com",
  databaseURL: "https://chattesttask-6cb22-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chattesttask-6cb22",
  storageBucket: "chattesttask-6cb22.appspot.com",
  messagingSenderId: "812188145619",
  appId: "1:812188145619:web:25388b47104455b2870126",
  measurementId: "G-903YB6XTV1"
};
/**
 * initializing the firebaseapp
 */
const firebaseApp=firebase.initializeApp(firebaseConfig);
/**
 * setting the database to a const
 */
const db=firebaseApp.database()

/**
 * exporting the const pointing to the database after initialization so we can import it all over the project
 */
export default db;