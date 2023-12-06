import Image from "next/image";
import { Permanent_Marker } from "next/font/google";

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  return (
    <section className='min-h-[90vh] py-10 lg:mt-0 grid place-content-center bg-denim text-antiflash-white text-center'>
      <div className='relative sm:w-[80vw] lg:w-full max-w-6xl mx-auto px-5 lg:pr-0'>
        <div className=''>
          <h1 className='font-bold text-2xl md:text-4xl lg:text-5xl lg:leading-tight'>
            <span className='text-dogwood-rose'>Reimagine</span> Data Ownership.
            <br />
            <span className='text-dogwood-rose'>Control</span> Your Digital
            Identity with{" "}
            <span className='relative'>
              VAtlas.
              <Image
                className='absolute -bottom-2 left-0'
                src={"/curve.svg"}
                width={200}
                height={200}
                alt='lock'
              />
            </span>
          </h1>
          <p className='mt-4 text-sm sm:text-base lg:text-lg mb-10 md:w-3/4 mx-auto'>
            Unlock the full potential of your online presence with a secure,
            decentralized platform that puts you in control.
          </p>
          <button className='p-2 text-sm md:text-base md:p-4 bg-black border border-antiflash-white rounded-lg hover:bg-honolulu-blue cursor-pointer transition duration-300 ease-in-out flex mx-auto items-center gap-4'>
            Watch the Video
            <Image src={"/play.svg"} width={30} height={30} alt='play' />
          </button>
        </div>
        <div className='absolute -bottom-30 left-[40%] md:rotate-45'>
          <Image src={"/arrow.svg"} width={100} height={100} alt='arrow' />
          <p className={`${permanentMarker.className} text-xs`}>Learn more</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
