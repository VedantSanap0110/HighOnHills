"use client";

import { useState, useEffect } from "react";

export default function SeatCounter() {
  // Replace with dynamic count from backend later
  const TOTAL_SEATS = 40;
  const [registeredSeats, setRegisteredSeats] = useState(27); // Example: 27 booked
  const seatsLeft = TOTAL_SEATS - registeredSeats;

  // Animate the number (optional)
  useEffect(() => {
    // You can fetch data here from Firebase later
  }, []);

  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-10 px-6 text-center">
      <h2 className="text-3xl font-bold mb-2">🎟️ Seats Left: {seatsLeft} / {TOTAL_SEATS}</h2>
      <p className="text-lg mb-4">Hurry! Limited spots remaining for this unforgettable journey.</p>
      <a href="/register" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-md transition">
        Book Your Seat Now
      </a>
    </section>
  );
}
