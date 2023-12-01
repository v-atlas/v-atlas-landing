const Services = () => {
  return (
    <section className='py-20'>
      <div className='sm:w-[80vw] lg:w-full max-w-6xl mx-auto px-5'>
        <h2 className='font-bold text-3xl lg:text-5xl lg:leading-tight mb-5'>
          V-Atlas for <span className='text-dogwood-rose'>Enterprise</span>
        </h2>
        <p className='mb-10'>Manage all your identities in one place</p>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
          <div className='space-y-5 py-10 px-4 rounded-lg border-2 bg-canary bg-opacity-20 border-canary '>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                fill='#c62e65'
                viewBox='0 0 256 256'
                xmlSpace='preserve'
              >
                <path
                  d='M200,32H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V40A8,8,0,0,0,200,32ZM128,168a32,32,0,1,1,32-32A32,32,0,0,1,128,168Z'
                  opacity='0.2'
                ></path>
                <path d='M75.19,198.4a8,8,0,0,0,11.21-1.6,52,52,0,0,1,83.2,0,8,8,0,1,0,12.8-9.6A67.88,67.88,0,0,0,155,165.51a40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,73.6,187.2,8,8,0,0,0,75.19,198.4ZM128,112a24,24,0,1,1-24,24A24,24,0,0,1,128,112Zm72-88H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm0,192H56V40H200ZM88,64a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,64Z'></path>
              </svg>
            </div>
            <h3 className='font-semibold'>Decentralized Identity</h3>
            <p className='w-[80%]'>
              Own and control your unique online identifier.
            </p>
          </div>
          <div className='space-y-5 py-10 px-4 rounded-lg border-2 bg-emerald bg-opacity-20 border-emerald '>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                fill='#c62e65'
                viewBox='0 0 256 256'
                xmlSpace='preserve'
              >
                <path
                  d='M216,152v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8H208A8,8,0,0,1,216,152ZM208,48H48a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V56A8,8,0,0,0,208,48Z'
                  opacity='0.2'
                ></path>
                <path d='M208,136H48a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136Zm0,64H48V152H208v48Zm0-160H48A16,16,0,0,0,32,56v48a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40Zm0,64H48V56H208v48ZM192,80a12,12,0,1,1-12-12A12,12,0,0,1,192,80Zm0,96a12,12,0,1,1-12-12A12,12,0,0,1,192,176Z'></path>
              </svg>
            </div>
            <h3 className='font-semibold'>Secure Data Storage</h3>
            <p className='w-[80%]'>
              Store your data on a secure decentralized spaces.
            </p>
          </div>
          <div className='space-y-5 py-10 px-4 rounded-lg border-2 bg-honolulu-blue bg-opacity-20 border-honolulu-blue '>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                fill='#c62e65'
                viewBox='0 0 256 256'
                xmlSpace='preserve'
              >
                <path
                  d='M208,200a32,32,0,1,1-32-32A32,32,0,0,1,208,200ZM176,88a32,32,0,1,0-32-32A32,32,0,0,0,176,88Z'
                  opacity='0.2'
                ></path>
                <path d='M176,160a39.89,39.89,0,0,0-28.62,12.09l-46.1-29.63a39.8,39.8,0,0,0,0-28.92l46.1-29.63a40,40,0,1,0-8.66-13.45l-46.1,29.63a40,40,0,1,0,0,55.82l46.1,29.63A40,40,0,1,0,176,160Zm0-128a24,24,0,1,1-24,24A24,24,0,0,1,176,32ZM64,152a24,24,0,1,1,24-24A24,24,0,0,1,64,152Zm112,72a24,24,0,1,1,24-24A24,24,0,0,1,176,224Z'></path>
              </svg>
            </div>
            <h3 className='font-semibold'>Selective Data Sharing</h3>
            <p className='w-[80%]'>Choose what data to share and with whom.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
