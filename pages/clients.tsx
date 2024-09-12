import React from 'react';

const Clients = () => {
  return (
    <section id='clients' className="flex flex-col items-center justify-center pb-24">
      {/* Vertical Line */}
      <div className="relative flex flex-col items-center mb-6">
        <div className="w-px h-16 bg-gray-300"></div>
        <h3 className="text-[#8a8989] text-lg italic font-light font-serif tracking-wide mt-2">
          03 <span className="ml-2">Clients</span>
        </h3>
      </div>


      <p className="max-w-xl text-center text-gray-500 text-xl">
      I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.
      </p>
    </section>
  );
};

export default Clients;
