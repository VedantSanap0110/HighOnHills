"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    collegeId: "",
    gender: "Male",
    emergencyContact: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate backend call
    setTimeout(() => {
      alert("Form submitted! Redirecting to payment...");
      window.location.href = "/payment"; // Or trigger Razorpay here
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4">
      <input
        type="text"
        name="name"
        required
        placeholder="Full Name"
        onChange={handleChange}
        className="w-full border rounded px-4 py-2"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        onChange={handleChange}
        className="w-full border rounded px-4 py-2"
      />
      <input
        type="tel"
        name="phone"
        required
        placeholder="Phone Number"
        onChange={handleChange}
        className="w-full border rounded px-4 py-2"
      />
      <input
        type="text"
        name="collegeId"
        required
        placeholder="College ID / PRN"
        onChange={handleChange}
        className="w-full border rounded px-4 py-2"
      />
      <select
        name="gender"
        onChange={handleChange}
        className="w-full border rounded px-4 py-2"
      >
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
      <input
        type="tel"
        name="emergencyContact"
        required
        placeholder="Emergency Contact Number"
        onChange={handleChange}
        className="w-full border rounded px-4 py-2"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded hover:bg-purple-700"
      >
        {isSubmitting ? "Processing..." : "Submit & Proceed to Payment"}
      </button>
    </form>
  );
}
