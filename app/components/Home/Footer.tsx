const Footer = () => {
  return (
    <footer className='py-20'>
      <div className='sm:w-[80vw] lg:w-full max-w-6xl mx-auto px-5'>
        <div className='pt-16 pb-12 px-5 md:px-12 bg-black text-antiflash-white rounded-3xl mb-20'>
          <h2 className='mb-7 text-3xl md:text-6xl font-bold'>Join the waitlist</h2>
          <p className='mb-12 md:text-lg md:w-2/3'>
            Enter your email address to join our mailing list and be the first
            to know when V-ATLAS is ready
          </p>
          <div className='p-2 flex flex-col md:flex-row gap-2 md:w-2/3 rounded-lg shadow-lg'>
            <div className='md:w-[70%]'>
              <input
                className='w-full h-full text-black p-4 md:p-2 bg-antiflash-white border rounded-lg border-honolulu-blue'
                type='text'
                placeholder='Please enter your email address'
              />
            </div>
            <button className='p-4 md:w-[30%] bg-honolulu-blue text-antiflash-white rounded-lg'>
              Join the waitlist
            </button>
          </div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 border-t pt-8 border-antiflash-white'>
          <div>V-Atlas</div>
          <div>
            251 Little Falls Drive, Wilmington, New Castle County, Delaware.
          </div>
          <div>hello@v-atlas.com</div>
          <div className='flex gap-4'>
            <div>X</div>
            <div>Instagram</div>
            <div>LinkedIn</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
