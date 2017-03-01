import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDd6Rt8INnhP-jXxiL7Z7JAlHOIEKavRkU",
    authDomain: "signup-in-react.firebaseapp.com",
    databaseURL: "https://signup-in-react.firebaseio.com",
    storageBucket: "signup-in-react.appspot.com",
    messagingSenderId: "98996124308"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
