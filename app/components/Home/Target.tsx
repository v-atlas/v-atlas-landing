import Image from "next/image";

const Target = () => {
  return (
    <section className='py-20 bg-denim text-antiflash-white'>
      <div className='sm:w-[80vw] lg:w-full max-w-6xl mx-auto px-5'>
        <h2 className='font-bold text-3xl lg:text-5xl lg:leading-tight mb-14'>
          Why Choose <span className='text-dogwood-rose'>V-Atlas?</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='space-y-5 py-10 px-4 rounded-lg border-2 bg-canary bg-opacity-20 border-canary '>
            <div>
            <Image src={'/internet.svg'} width={50} height={50} alt="decorative icon" />
            </div>
            <h3 className='font-semibold'>Built on the future of the internet</h3>
            <p>
            V-Atlas utilizes Web5 technology, ensuring a secure and scalable foundation for data management.
            </p>
          </div>
          <div className='space-y-5 py-10 px-4 rounded-lg border-2 bg-emerald bg-opacity-20 border-emerald '>
            <div>
            <Image src={'/userFriendly.svg'} width={50} height={50} alt="decorative icon" />
            </div>
            <h3 className='font-semibold'>Designed for everyone</h3>
            <p>
            V-Atlas offers a user-friendly interface that is easy to use for both individuals and businesses.
            </p>
          </div>
          <div className='space-y-5 py-10 px-4 rounded-lg border-2 bg-honolulu-blue bg-opacity-20 border-honolulu-blue '>
            <div>
            <Image src={'/integration.svg'} width={50} height={50} alt="decorative icon" />
            </div>
            <h3 className='font-semibold'>Seamless Integrations</h3>
            <p>Connect with all your favorite services and applications with V-Atlas&lsquo;s integrated ecosystem</p>
          </div>
          <div className='space-y-5 py-10 px-4 rounded-lg border-2 bg-canary bg-opacity-20 border-canary '>
            <div>
            <Image src={'/globe.svg'} width={50} height={50} alt="decorative icon" />

            </div>
            <h3 className='font-semibold'>Trusted by leading organizations</h3>
            <p>V-Atlas is the chosen data management solution for businesses and governments worldwide.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Target;
