import Image from "../assets/img1.jpg";

const Hero = () => {
  const whatsappNumber = "9779818142024";

  const handleBooking = () => {
    const message = `Hello! I would like to book an appointment at Glow Nest Beauty Home & Cosmetics. Please share available times.`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="bg-pink-100 py-14 text-center">
      <img
        src={Image}
        alt="Glow Nest"
        className="w-[900px] mx-auto rounded-xl shadow-lg border-none mb-12 hover:scale-105 duration-700"
      />
      <h2 className="text-4xl font-bold text-pink-700">
        Welcome to Glow Nest <br /> Beauty Home & Cosmetics
      </h2>
      <p className="mt-4 text-lg text-gray-700">
        Finest beauty care and makeup services in Kathmandu.
      </p>
      <button 
      onClick={handleBooking}
      className="mt-8 bg-pink-600 text-white py-2 px-6 rounded-lg hover:bg-pink-400 duration-300 cursor-pointer">
        Book Appointment
      </button>
    </section>
  );
};
export default Hero;
