import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCXs2qMUazezjisKUS2ICNAKbasCkJdGDQ",
    authDomain: "react-sample-17caa.firebaseapp.com",
    databaseURL: "https://react-sample-17caa.firebaseio.com",
    storageBucket: "react-sample-17caa.appspot.com",
    messagingSenderId: "411422279834"
};
firebase.initializeApp(config);

export class FirebaseService {

    static firebaseTimeStamp = firebase.database['ServerValue'].TIMESTAMP;
    static ref = firebase.database().ref();
    // static storage = firebase.storage().ref();
    static auth = firebase.auth();

    // constructor() { }

    static saveMultipath(multipath) {
        return this.ref.update(multipath);
    } // saveMultipath

    static customAuth(user) {
        return this.auth.createUserWithEmailAndPassword(user.email, user.pass);
    } //AuthNewUser

    static customLogin(user) {
        return this.auth.signInWithEmailAndPassword(user.email, user.pass);
    } //loginUser

    static addNewUser(user) {
        return this.ref.child(user).set();
    } //AuthNewUser

    static getPushRef(path) {
        return this.ref.child(path).push();
    }
    // static uploadImageOnStorageBlob(path, blob) {
    //     return new Promise(res => {
    //         this.storage.child(path).put(blob).then((snapshot) => {
    //             console.log('Uploaded a blob or file!');
    //             // The promise will resolve with a Download URL provided by Firebase Storage
    //             res(snapshot.downloadURL);
    //         })
    //     });
    // }

}