import { initializeApp } from "@firebase/app";


const firebaseConfig = initializeApp({
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID
    apiKey: "AIzaSyAfKJXdvVVJ5v7Lo53QaCuhlo2MhnFAqz4",
    authDomain: "newsportal-e77da.firebaseapp.com",
    projectId: "newsportal-e77da",
    storageBucket: "newsportal-e77da.appspot.com",
    messagingSenderId: "862945533918",
    appId: "1:862945533918:web:49ce1da5a3d02c5b21c74f"
    
  })

  export default firebaseConfig;