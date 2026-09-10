const firebaseConfig = {
    apiKey: "AIzaSyBkHt5Hqzg9FxcQXAzyx7M4OFEtmz1nBeo",
    authDomain: "joiadeouro-15c11.firebaseapp.com",
    projectId: "joiadeouro-15c11",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const storage = firebase.storage();