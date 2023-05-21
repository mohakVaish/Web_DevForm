import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAWBg3ZpkbvVj5pr4jZNIhrWjMOv7TTjiQ",
  authDomain: "surveyform-2188f.firebaseapp.com",
  projectId: "surveyform-2188f",
  storageBucket: "surveyform-2188f.appspot.com",
  messagingSenderId: "579168167791",
  appId: "1:579168167791:web:86a478429cc85ea68d2a9a",
  measurementId: "G-Y5LNCFZ4XK",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "formdata");
const form = document.querySelector(".input-fields");
const name = document.querySelector("#name");
const DOB = document.querySelector("#DOB");
const email = document.querySelector("#email");
const curKnowledge = document.querySelector("#curKnowledge");
const aim = document.querySelector("#aim");
const dreamProject = document.querySelector("#dreamProject");
const preferredLocation = document.querySelector("#location");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  let selectedRadioValue;

  // Find the selected radio button value
  radioButtons.forEach((radioButton) => {
    if (radioButton.checked) {
      selectedRadioValue = radioButton.value;
    }
  });

  const checkboxElements = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  const selectedCheckboxValues = [];
  checkboxElements.forEach((checkbox) => {
    selectedCheckboxValues.push(checkbox.value);
  });

  addDoc(colRef, {
    name: name.value,
    DOB: DOB.value,
    email: email.value,
    curKnowleadge: curKnowledge.value,
    aim: aim.value,
    dreamProject: dreamProject.value,
    domain: selectedRadioValue,
    languages: selectedCheckboxValues,
    preferredLocation: preferredLocation.value,
  })
    .then((result) => {
      form.reset();
      alert("your data was successfully stores to the database");
    })
    .catch((err) => {
      alert(err);
    });
});
