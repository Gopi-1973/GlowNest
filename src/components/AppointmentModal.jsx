import { useState } from "react";

const AppointmentModal = ({ service, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.date) {
      alert("Please fill out all fields.");
      return;
    }

    alert(
      `Appointment confirmed for ${service.name}\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}`
    );

    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        
        <h2 className="text-2xl font-bold mb-4 text-pink-600 text-center">
          Book Appointment
        </h2>

        <p className="text-center mb-4 font-semibold">
          Service: {service.name}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Your Full Name"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="date"
            type="date"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <button className="w-full bg-pink-600 text-white py-3 rounded hover:bg-pink-700 duration-300">
            Confirm Appointment
          </button>
        </form>

        <button
          onClick={closeModal}
          className="w-full mt-3 text-gray-600 hover:text-black"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AppointmentModal;
