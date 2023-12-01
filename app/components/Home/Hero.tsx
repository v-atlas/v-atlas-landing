import Image from "next/image";

const Hero = () => {
  return (
    <section className='min-h-[90vh] pt-10 lg:mt-0 grid place-content-center bg-black text-antiflash-white'>
      <div className='flex flex-col lg:flex-row items-center sm:w-[80vw] lg:w-full max-w-6xl mx-auto px-5 lg:pr-0 justify-between gap-5'>
        <div className='lg:basis-1/2'>
          <h1 className='font-bold text-3xl lg:text-6xl lg:leading-tight'>
            <span className='text-dogwood-rose'>Secure</span> decentralized data
            management for everyone.
          </h1>
          <p className='mt-4 text-sm sm:text-base lg:text-lg mb-10'>
            A secure decentralized that gives individuals and businesses control
            over their identity and data. Take charge of your digital presence
            effortlessly, ensuring security and autonomy in the online sphere.
          </p>
          <h3 className='pb-2 font-semibold'>
            Get started with V-Atlas today!
          </h3>
          <div className='p-2 flex flex-col md:flex-row gap-2 w-full border-2 border-honolulu-blue rounded-lg shadow-lg'>
            <div className='md:w-[70%]'>
              <input
                name='email'
                className='w-full h-full text-black p-4 md:p-2 bg-antiflash-white border rounded-lg border-honolulu-blue'
                type='email'
                inputMode='email'
                placeholder='Please enter your email address'
              />
            </div>
            <button className='p-4 md:w-[30%] bg-honolulu-blue text-antiflash-white rounded-lg'>
              Get Started
            </button>
          </div>
        </div>
        <div>
          <Image src={"/lock.png"} width={500} height={500} alt='lock' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
