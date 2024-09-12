import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className="flex flex-col items-center justify-center pb-32 sm:pb-24 px-4 sm:px-8">
      {/* Vertical Line */}
      <div className="relative flex flex-col items-center mb-6">
        <div className="w-px h-16 bg-gray-300"></div>
        <h3 className="text-[#8a8989] text-lg sm:text-xl italic font-light font-serif tracking-wide mt-2">
          04 <span className="ml-2">Contact</span>
        </h3>
      </div>

      {/* Mailing List Header */}
      <h3 className="text-lg sm:text-xl font-light mb-4">Join our mailing list</h3>

      {/* Mailing List Form */}
      <div className="flex flex-col items-center w-full max-w-md">
        <form className="flex flex-col space-y-4 w-full">
          <label htmlFor="email" className="text-gray-600 italic text-sm sm:text-base">
            Enter your email here<span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2 w-full">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-300"
              required
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300 w-full sm:w-auto"
            >
              Subscribe Now
            </button>
          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="newsletter"
              className="h-4 w-4 border border-gray-300 rounded-sm text-gray-800 focus:ring-gray-300"
            />
            <label htmlFor="newsletter" className="text-gray-600 text-sm sm:text-base">
              Yes, subscribe me to your newsletter.
            </label>
          </div>
        </form>
      </div>

      {/* Contact Info */}
      <div className="text-center mt-10 text-gray-600 text-sm sm:text-base">
        <p>benlucy658@gmail.com</p>
        <p>Tel: 234-906-5822-557</p>
        <p>1, Otunla str. Ogba, Lagos</p>
      </div>
    </section>
  );
};

export default Contact;
