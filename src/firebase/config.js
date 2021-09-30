// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
  doc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADhEJAg1DPGx3JfBU4SPURkWsHLVhLOgc",
  authDomain: "orderscf-60400.firebaseapp.com",
  projectId: "orderscf-60400",
  storageBucket: "orderscf-60400.appspot.com",
  messagingSenderId: "942547821211",
  appId: "1:942547821211:web:143d0ca0aed3ebd0d2dc3e",
};

// !firebase.apps.length && firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();

// const ordersRef = db.collection("dataBase/orders");

const firebaseApp = initializeApp(firebaseConfig);
// const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export const listendChange = async (orderId) => {
  // const array = [];
  // return await ordersRef.where("id", "==", orderId).onSnapshot((snap) => {
  //   snap.forEach((order) => {
  //     array.push({ id: order.id, order: order.data() });
  //     console.log(array);
  //   });
  // });
  const q = query(collection(db, "orders"), where("id", "==", "orderId"));
  onSnapshot(q, (querySnapshot) => {
    const array = [];
    querySnapshot.forEach((doc) => {
      array.push({ id: doc.id, order: doc.data() });
      console.log(array);
    });
  });
};

export const uploadOrder = async (order, state, setState) => {
  // try {
  //   const myOrder = await ordersRef.add(order);
  //   setState(state + 1);
  //   return myOrder;
  // } catch (err) {
  //   console.log(err);
  //   return null;
  // }
  const myOrder = await setDoc(doc(db, "order", `Primero`, order));
  setState(state + 1);
  return myOrder;
};
