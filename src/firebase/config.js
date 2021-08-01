import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCgYx1-pO-JNg_JObzvW2LjcGIkHN6xYmM",
    authDomain: "portfolio-react-9cd0d.firebaseapp.com",
    projectId: "portfolio-react-9cd0d",
    storageBucket: "portfolio-react-9cd0d.appspot.com",
    messagingSenderId: "477872378930",
    appId: "1:477872378930:web:fd7ff634f4e4246831582b"
  };
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export {projectFirestore, projectStorage, timestamp};
export default firebase;