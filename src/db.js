// Conveniently import this file anywhere to use db

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'
import store from './store'
import router from './router'
import { OnlineListener } from './utils/online-activity'

const app = firebase
    .initializeApp({
        apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
        authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.VUE_APP_FIREBASE_APP_ID,
        measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
        databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL
    });

export const auth = app.auth()

export const db = app.firestore()

export const rtdb = app.database()


// Export types that exists in Firestore - Uncomment if you need them in your app
const { Timestamp, GeoPoint, FieldValue } = firebase.firestore
export { Timestamp, GeoPoint, FieldValue }

var onlineListener;

auth.onAuthStateChanged((user) => {
    console.log("Auth state changed", user);
    const currentUser = store.getters.currentUser;
    setTimeout(() => {
        store.state.authLoading = false;
    }, 100);
    if (user) {
        console.log('User Logged in', user);
        store.commit('setUser', user);
        router.push('/chats');
        onlineListener = new OnlineListener(user);
    } else {
        if (currentUser == null) {
            return;
        }
        store.commit('setUser', null);
        router.push('/login')
        if(onlineListener) onlineListener.dispose();
    }
});