import React from 'react';
import Image from '../assets/img2.jpg';

const About = () => (
  <div className="container mx-auto py-20 px-4">
   <div className="flex flex-col md:flex-row justify-between items-center">
    <div className="mb-10 flex flex-col items-center  space-y-6"> 
    <h2 className="text-4xl font-bold text-center mb-6 text-gray-600">About Us</h2>
    <p className=" max-w-2xl mx-auto text-gray-600 text-center">
      We are a professional beauty parlor in Kathmandu located in Amrit Nagar,<br />opposite road of Bhatbhateni Kalanki. We  offer premium skin care,
      Simple <br />Makeup , Bridal Makeup , Hair Services , Facial , Hair Botox , Nail Extension,<br />Eye Lashes Extension , Manicure & Pedicure and Mehendi and many more. <br />
    </p>
    <p className=" max-w-2xl mx-auto text-gray-600 text-center">
     Our mission is to enhance your natural beauty and boost your confidence <br />through our exceptional beauty services.We believe in using high-quality <br />products and the latest techniques to ensure you receive the best care. <br />We have training facilities by our  teams and we provide certificate too. <br />
    </p>
     <div>
      <em className='text-xl text-gray-600 font-medium'> "Customer satisfaction is our top priority ."</em>
    </div>
     
    </div>
    <img src={Image} alt="" className="w-[350px] h-[500px] rounded-xl pr-8 "/>
    </div>
  </div>
);
export default About;
