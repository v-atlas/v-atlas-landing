import Image from "next/image";
import Link from "next/link";
import { Permanent_Marker } from "next/font/google";

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});

const Header = () => {
  return (
    <header className='h-20 pt-3 bg-denim text-antiflash-white'>
      <div className='flex justify-between items-center max-w-6xl mx-auto px-5'>
        <h2 className='font-bold text-3xl italic'>VAtlas</h2>
        <div className='flex flex-col text-xs md:text-base md:flex-row gap-3'>
          <Link
            href='https://my.vatlas.dev'
            className='relative p-4 bg-honolulu-blue text-antiflash-white rounded-lg text-center hover:bg-antiflash-white hover:text-honolulu-blue cursor-pointer transition duration-300 ease-in-out'
          >
            Create DID / Login with DID
            <div className='hidden md:block absolute top-14 -left-5 rotate-45'>
              <Image src={"/arrow.svg"} width={70} height={70} alt='lock' />
              <p className={`${permanentMarker.className} text-xs`}>
                For individuals
              </p>
            </div>
          </Link>

          <Link
            href='/'
            className='relative p-4 border border-honolulu-blue text-antiflash-white rounded-lg text-center hover:bg-honolulu-blue cursor-pointer transition duration-300 ease-in-out'
          >
            Contact Us for a Demo
            <div className='hidden md:block absolute top-10 right-0 -rotate-45'>
              <Image
                src={"/arrow-right.svg"}
                width={70}
                height={70}
                alt='lock'
              />
              <p className={`${permanentMarker.className} text-xs`}>
                For Businesses
              </p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
