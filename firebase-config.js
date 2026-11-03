// استيراد مكتبات Firebase عبر CDN لتطبيقات الويب
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// إعدادات مشروعك السحابي
const firebaseConfig = {
  apiKey: "AIzaSyCGbp7GwcE1ELk3PH2FMpvMQJ_KLliZg2s",
  authDomain: "motaofer.firebaseapp.com",
  projectId: "motaofer",
  storageBucket: "motaofer.firebasestorage.app",
  messagingSenderId: "59793803045",
  appId: "1:59793803045:web:2ab6c2c2091568bbc83ccc"
};

// تهيئة Firebase و Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, doc, updateDoc, deleteDoc };
