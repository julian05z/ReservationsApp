import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../FireBase";
import "./HomePage.css";

function HomePage() {
  function handleSubmit(e) {
    e.preventDefault();
    addDoc(collection(db, "reservations"), {
      name: e.currentTarget.name.value,
      email: e.currentTarget.email.value,
      date: new Date(
        `${e.currentTarget.date.value}T${e.currentTarget.time.value}:00`
      ),
      number: e.currentTarget.number.value,
    });
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Reservation</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="date">Datum</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div>
          <label htmlFor="time">Zeit</label>
          <input type="time" id="time" name="time" required />
        </div>
        <div>
          <label htmlFor="number">Anzahl Personen</label>
          <input type="number" id="number" name="number" min={0} required />
        </div>
        <div>
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button>Bestätigen</button>
      </form>
    </div>
  );
}

export default HomePage;
