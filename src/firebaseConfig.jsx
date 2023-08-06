import { initializeApp } from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCvV_GXBCQNHve2lIwYGsLO28k8CzvkOhA",
    authDomain: "apps-dist-grupo-1.firebaseapp.com",
    projectId: "apps-dist-grupo-1",
    storageBucket: "apps-dist-grupo-1.appspot.com",
    messagingSenderId: "611129270040",
    appId: "1:611129270040:web:971d00d008a5f512e8c86d",
    measurementId: "G-HEB8Q9WH97",
};

var app = initializeApp(firebaseConfig);

export default app;
