import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className="flex flex-col items-center justify-center pb-24">
      {/* Vertical Line */}
      <div className="relative flex flex-col items-center mb-6">
        <div className="w-px h-16 bg-gray-300"></div>
        {/* Section Title */}
        <h3 className="text-[#8a8989] text-lg italic font-light font-serif tracking-wide mt-2">
          04 <span className="ml-2">Contact</span>
        </h3>
      </div>

      {/* Join Mailing List */}
      <h3 className="text-xl font-light mb-4">Join our mailing list</h3>

      {/* Mailing List Form */}
      <div className="flex flex-col items-center">
        <form className="flex flex-col space-y-4">
          <label htmlFor="email" className="text-gray-600 italic">
            Enter your email here<span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-gray-300"
              required
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
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
            <label htmlFor="newsletter" className="text-gray-600 text-sm">
              Yes, subscribe me to your newsletter.
            </label>
          </div>
        </form>
      </div>

      {/* Contact Info */}
      <div className="text-center mt-10 text-gray-600">
        <p>info@mysite.com</p>
        <p>Tel: 123-456-7890</p>
        <p>500 Terry Francine St. San Francisco, CA 94158</p>
      </div>
    </section>
  );
};

export default Contact;
