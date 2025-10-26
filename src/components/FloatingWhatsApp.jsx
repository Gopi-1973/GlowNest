const FloatingWhatsApp = () => {
  const whatsappNumber = "9779812345678"; // Replace with your parlor's number
  const message = "Hello! I would like to book an appointment at Glow Nest Beauty Home & Cosmetics.";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl animate-pulse"
      style={{ boxShadow: "0 0 15px rgba(0, 255, 0, 0.6)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.921 11.921 0 0012 0C5.373 0 0 5.373 0 12c0 2.12.556 4.094 1.518 5.805L0 24l6.473-1.513A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12 0-3.182-1.24-6.168-3.48-8.52zM12 22c-1.988 0-3.843-.613-5.387-1.645l-.386-.23-3.849.899.816-3.743-.25-.392A9.944 9.944 0 012 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.36-7.232c-.272-.136-1.608-.792-1.858-.88-.25-.088-.432-.136-.615.136-.181.272-.697.88-.854 1.062-.157.181-.315.204-.587.068-.272-.136-1.146-.421-2.182-1.35-.807-.718-1.352-1.603-1.51-1.875-.157-.272-.016-.42.12-.556.123-.123.272-.315.408-.473.136-.157.181-.272.272-.454.088-.181.044-.34-.022-.476-.068-.136-.615-1.48-.842-2.02-.222-.531-.448-.459-.615-.468l-.528-.009c-.181 0-.476.068-.727.34-.25.272-.955.933-.955 2.277 0 1.343.978 2.642 1.115 2.828.136.181 1.926 2.942 4.668 4.123.653.281 1.161.448 1.558.573.654.21 1.25.181 1.719.11.525-.079 1.608-.657 1.834-1.292.227-.635.227-1.18.159-1.293-.068-.114-.25-.181-.522-.318z"/>
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;
