'use client';
import { useState } from 'react';
import ContactModal from '../Modal/ContactModal';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <footer className='py-20'>
      <div className='sm:w-[90vw] lg:w-full max-w-6xl mx-auto px-5'>
        <div className='pt-16 pb-12 px-5 md:px-12 bg-black text-antiflash-white rounded-3xl mb-20 w-full'>
          <div>
            <h2 className='mb-10 text-3xl md:text-6xl font-bold'>
              Get Started Today!
            </h2>
            <div className='border px-3 py-6 hover:bg-honolulu-blue cursor-pointer transition duration-300 ease-in-out'>
              <h4 className='text-lg font-semibold'>Individuals</h4>
              <p className='text-sm md:text-base'>
                Get started with VAtlas today and experience the power of data
                ownership.
              </p>
            </div>
            <div className='border px-3 py-6 hover:bg-honolulu-blue cursor-pointer transition duration-300 ease-in-out'>
              <h4 className='text-lg font-semibold'>Businesses</h4>
              <p className='text-sm md:text-base'>
                Contact us to schedule a personalized demo and discover how
                VAtlas can transform your data management strategy.
              </p>
            </div>
            <div className='border px-3 py-6 hover:bg-honolulu-blue cursor-pointer transition duration-300 ease-in-out'>
              <h4 className='text-lg font-semibold'>Explore our resources</h4>
              <p className='text-sm md:text-base'>
                Learn more about VAtlas features, benefits, and success stories.
              </p>
            </div>
            <div className='border px-3 py-6 hover:bg-honolulu-blue cursor-pointer transition duration-300 ease-in-out'>
              <h4 className='text-lg font-semibold'>Join our community</h4>
              <p className='text-sm md:text-base'>
                Connect with other VAtlas users and experts to share experiences
                and ask questions.
              </p>
            </div>
          </div>

          <div className='mt-10 flex justify-center'>
            <button
              className='p-6 bg-honolulu-blue border border-antiflash-white rounded-lg hover:bg-honolulu-blue cursor-pointer text-lg transition duration-300 ease-in-out w-1/2'
              onClick={handleModalToggle}>
              Contact Us
            </button>
          </div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 border-t pt-8 border-antiflash-white'>
          <div>
            VAtlas
            <div className='mt-8 space-y-3'>
              <div>Privacy policy</div>
              <div>Terms of service</div>
            </div>
          </div>
          <div>
            251 Little Falls Drive, Wilmington, New Castle County, Delaware.
          </div>
          <div>hello@VAtlas.com</div>
          <div className='flex gap-4 flex-wrap'>
            <div>X</div>
            <div>Instagram</div>
            <div>LinkedIn</div>
          </div>
        </div>
      </div>

      {showModal && <ContactModal handleModalToggle={handleModalToggle} />}
    </footer>
  );
};

export default Footer;
