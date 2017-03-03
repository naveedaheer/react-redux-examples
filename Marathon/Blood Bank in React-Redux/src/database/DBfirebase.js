import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyANVd2tCthuOMltArH-QO3FV3TIhaAd36Q",
    authDomain: "aheer-blood-bank.firebaseapp.com",
    databaseURL: "https://aheer-blood-bank.firebaseio.com",
    storageBucket: "aheer-blood-bank.appspot.com",
    messagingSenderId: "507562351854"
};
firebase.initializeApp(config);
export class DBfirebase {

    static ref = firebase.database().ref();
    static storage = firebase.storage().ref();
    static auth = firebase.auth();

    static refDonors = firebase.database().ref('donors');

    static saveMultipath(multipath) {
        return this.ref.update(multipath);
    } // saveMultipath

    static customAuth(user) {
        return this.auth.createUserWithEmailAndPassword(user.email, user.password);
    } //AuthNewUser

    static customLogin(user) {
        return this.auth.signInWithEmailAndPassword(user.email, user.password);
    } //loginUser

    static addNewUser(user) {
        return this.ref.child(user).set();
    } //AuthNewUser


    static getPushRef(path) {
        return this.ref.child(path).push();
    }

// static Logout(){
//     return this.auth.signOut()
//         console.log("Signed out");
// }


}