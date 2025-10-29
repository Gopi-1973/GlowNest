import { useState } from "react";
import AppointmentModal from "../components/AppointmentModal";

import bridal from "../assets/services/bridal.jpg";
import artmakeup from "../assets/services/artmakeup.jpg";
import facial from "../assets/services/facial.jpg";
import hairstyle from "../assets/services/hairstyle.jpeg";
import nailextension from "../assets/services/nailextension.jpeg";
import eyelashes from "../assets/services/eyelashes.webp";
import botox from "../assets/services/botox.webp";
import mehendi from "../assets/services/mehendi.webp";
import mani_pedi from "../assets/services/mani_pedi.jpeg";
import SEO from "../components/SEO";

 const whatsappNumber = "9779818142024"

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { name: "Bridal Makeup", price: "Rs. 8,000", img: bridal },
    { name: "Art Makeup", price: "Rs. 1,000", img: artmakeup },
    { name: "Facial", price: "Rs. 1,500", img: facial },
    { name: "Hair Styling", price: "Rs. 500", img: hairstyle },
    { name: "Nail Extension", price: "Rs. 1,500", img: nailextension },
    { name: "Eye Lashes Extension", price: "Rs. 1,000", img: eyelashes },
    { name: "Hair Botox", price: "Rs. 3500", img: botox },
    { name: "Bridal Mehendi", price: "Rs. 4,000", img: mehendi },
    { name: "Manicure & Pedicure", price: "Rs. 1000", img: mani_pedi },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
       <SEO title='Salon Services at Glownest' description='Choose from professional beauty services including bridal makeup, hair styling, facial, nail extension, eyelashes, hair botox, and manicure & pedicure.'/>
      <h2 className="text-4xl font-bold text-gray-600 text-center mb-10">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        { services.map((service) => (
          <div
            key={service.name}
            className="border rounded-lg shadow-md overflow-hidden hover:scale-105 duration-600"
          >
            <img
              src={service.img}
              alt={service.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-6 text-center">
  <h3 className="text-xl font-semibold">{service.name}</h3>
  <p className="text-pink-600 font-bold mt-2">{service.price}</p>

  
  {/* WhatsApp Booking Button */}
  <button
    className="mt-3 w-full border bg-pink-600 border-pink-600 text-white py-2 rounded hover:bg-pink-300 hover:text-black duration-300 cursor"
    onClick={() => {
      const message = `Hello! I would like to book an appointment for *${service.name}*. Please share available times.`;
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  }}
  >
    Book on WhatsApp
  </button>
</div>
</div>
 ))} 
 </div>   

       {selectedService && (
        <AppointmentModal
          service={selectedService}
          closeModal={() => setSelectedService(null)}
        />
      )}
  </div>
  );
};

export default Services;
