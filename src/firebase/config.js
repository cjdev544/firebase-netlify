import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADhEJAg1DPGx3JfBU4SPURkWsHLVhLOgc",
  authDomain: "orderscf-60400.firebaseapp.com",
  projectId: "orderscf-60400",
  storageBucket: "orderscf-60400.appspot.com",
  messagingSenderId: "942547821211",
  appId: "1:942547821211:web:143d0ca0aed3ebd0d2dc3e",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const ordersRef = db.collection("orders");

export const listendChange = async (userId) => {
  const array = [];
  return await ordersRef.where("userId", "==", userId).onSnapshot((snap) => {
    snap.forEach((order) => {
      array.push({ id: order.id, order: order.data() });
      console.log(array);
    });
  });
};

export const uploadOrder = async (order, state, setState) => {
  try {
    const myOrder = await ordersRef.add(order);
    setState(state + 1);
    return myOrder;
  } catch (err) {
    console.log(err);
    return null;
  }
};
