import { useState } from "react";

const Contact = () => {
const whatsappNumber = "9779818142024"

const [formData,setFormData]=useState({
  name: "",
  phone:"",
  service:"",
  date:"",
  message:"",
})

const handleChange=(e)=>{
  setFormData({...formData, [e.target.name] : e.target.value})
};

const handleSendToWhatsApp = () => {
  const{ name,phone,service,date,message} = formData;
  
  const whatsappMessage = `
  Name: ${name}
  Phone: ${phone}
  Service: ${service}
  Preferred Date: ${date}
  Message: ${message}
  `.trim();

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
  )
}
  
return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-pink-500 text-center mb-10">
        Contact Us
      </h2>

      <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="service"
            placeholder="Service you want"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full border p-3 rounded h-24"
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          onClick={handleSendToWhatsApp}
          className="w-full mt-5 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 duration-300"
        >
          Send on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Contact;













  
  
