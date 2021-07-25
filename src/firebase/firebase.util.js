import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCLrLiYofTqVMsyAvOcgXasBFEsuK3WHOQ",
    authDomain: "king-clothing-10cac.firebaseapp.com",
    projectId: "king-clothing-10cac",
    storageBucket: "king-clothing-10cac.appspot.com",
    messagingSenderId: "955023518126",
    appId: "1:955023518126:web:3ee23b60d574ce5f39003f",
    measurementId: "G-FYWPWJLZ09"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const filestore = firebase.firestore();


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = filestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();
    if(!snapShot.exists) 
    {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(e) {
            console.log('error creating user', e.message);
        }
    }
    return userRef;
}




const provider = new firebase.auth.GoogleAuthProvider();


// const newProvider = new firebase.auth.TwitterAuthProvider();
// newProvider.setCustomParameters({ prompt: 'sele' })


provider.setCustomParameters({ prompt: 'select_account' });

// newProvider.setCustomParameters({ prompt: 'select_account' })

// export const signInWithTwitter = () => auth.signInWithPopup(newProvider)

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;