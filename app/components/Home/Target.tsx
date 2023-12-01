const Target = () => {
  return (
    <section className='py-20 bg-black text-antiflash-white'>
      <div className='sm:w-[80vw] lg:w-full max-w-6xl mx-auto px-5'>
        <h2 className='font-bold text-3xl lg:text-5xl lg:leading-tight mb-5'>
          For Users who prioritize <span className='text-dogwood-rose'>Privacy</span>
        </h2>
        <p className='mb-10'>Manage all your identities in one place</p>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
          <div className='space-y-5 py-10 px-4 rounded-lg border-2 bg-canary bg-opacity-20 border-canary '>
          <p>icon</p>
            <h3 className="font-semibold">Identity</h3>
            <p className='w-[80%]'>
              We manage all your identities for you in a single storage space
              only you have the key to
            </p>
          </div>
          <div className='space-y-5 py-10 px-4 rounded-lg border-2 bg-emerald bg-opacity-20 border-emerald '>
           <p>icon</p>
            <h3 className="font-semibold">Identity</h3>
            <p className='w-[80%]'>
              We manage all your identities for you in a single storage space
              only you have the key to
            </p>
          </div>
          <div className='space-y-5 py-10 px-4 rounded-lg border-2 bg-honolulu-blue bg-opacity-20 border-honolulu-blue '>
           <p>icon</p>
            <h3 className="font-semibold">Identity</h3>
            <p className='w-[80%]'>
              We manage all your identities for you in a single storage space
              only you have the key to
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Target;
