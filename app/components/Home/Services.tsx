import Image from "next/image";

const Services = () => {
  return (
    <section className='py-20 space-y-10'>
      <div className='sm:w-[80vw] flex flex-col lg:flex-row items-center gap-4 lg:w-full max-w-6xl mx-auto px-5'>
        <div className='w-[80%] lg:w-full basis-1/2'>
          <Image
            src='/data.jpg'
            width={1000}
            height={700}
            alt='manage data across platforms'
          />
        </div>
        <div className='basis-1/2'>
          <h2 className='font-bold text-2xl lg:text-4xl lg:leading-tight mb-5'>
            What is <span className='text-dogwood-rose'>VAtlas?</span>
          </h2>
          <p className='mb-10'>
            VAtlas is a Web5-based application that empowers you to create a
            secure, decentralized identity and manage your data across different
            platforms and services.
          </p>
          <h3 className='text-2xl font-semibold mb-5'>Benefits</h3>
          <div className='space-y-3'>
            <div className='flex gap-3 items-center'>
              <div className='border rounded-full p-3'>
                <Image
                  src={"/owner.svg"}
                  width={30}
                  height={30}
                  alt='decorative icon'
                />
              </div>
              <div>
                <h4 className='font-medium'>Data Ownership</h4>
                <p className='text-sm text-gray-400'>
                  You own and control your data, not tech giants.
                </p>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='border rounded-full p-3'>
                <Image
                  src={"/share-black.svg"}
                  width={30}
                  height={30}
                  alt='decorative icon'
                />
              </div>
              <div>
                <h4 className='font-medium'>Enhanced Privacy</h4>
                <p className='text-sm text-gray-400'>
                  Share your data selectively and securely.
                </p>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='border rounded-full p-3'>
                <Image
                  src={"/management.svg"}
                  width={30}
                  height={30}
                  alt='decorative icon'
                />
              </div>
              <div>
                <h4 className='font-medium'>Simplified Data Management</h4>
                <p className='text-sm text-gray-400'>
                  Access and manage your data from one central location.
                </p>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='border rounded-full p-3'>
                <Image
                  src={"/network.svg"}
                  width={30}
                  height={30}
                  alt='decorative icon'
                />
              </div>
              <div>
                <h4 className='font-medium'>Streamlined Data Sharing</h4>
                <p className='text-sm text-gray-400'>
                  Easily import and export data between various services.
                </p>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='border rounded-full p-3'>
                <Image
                  src={"/privacy.svg"}
                  width={30}
                  height={30}
                  alt='decorative icon'
                />
              </div>
              <div>
                <h4 className='font-medium'>Enhanced Security</h4>
                <p className='text-sm text-gray-400'>
                  Your data is stored on a secure blockchain network, not on
                  centralized servers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sm:w-[80vw] flex flex-col lg:flex-row-reverse items-center gap-4 lg:w-full max-w-6xl mx-auto px-5'>
        <div className='w-[80%] lg:w-full basis-1/2'>
          <Image
            src='/individual.jpg'
            width={500}
            height={500}
            className='ml-auto'
            alt='manage data across platforms'
          />
        </div>
        <div className='basis-1/2'>
          <h2 className='font-bold text-2xl lg:text-4xl lg:leading-tight mb-5'>
            For <span className='text-dogwood-rose'>Individuals</span>
          </h2>
          <div className='space-y-3'>
            <div className='flex gap-3 items-center'>
              <div className='border rounded-full p-3'>
                <Image
                  src={"/footprint.svg"}
                  width={30}
                  height={30}
                  alt='decorative icon'
                />
              </div>
              <div>
                <h4 className='font-medium'>
                  Take control of your online presence
                </h4>
                <p className='text-sm text-gray-400'>
                  Manage your digital footprint and decide what information is
                  shared online.
                </p>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='border rounded-full p-3'>
                <Image
                  src={"/secure.svg"}
                  width={30}
                  height={30}
                  alt='decorative icon'
                />
              </div>
              <div>
                <h4 className='font-medium'>Protect your privacy</h4>
                <p className='text-sm text-gray-400'>
                  Secure your sensitive data from unauthorized access and
                  breaches.
                </p>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='border rounded-full p-3'>
                <Image
                  src={"/manage-data.svg"}
                  width={30}
                  height={30}
                  alt='decorative icon'
                />
              </div>
              <div>
                <h4 className='font-medium'>Simplify your digital life</h4>
                <p className='text-sm text-gray-400'>
                  Manage all your data in one place, eliminating the need for
                  multiple accounts and passwords.
                </p>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='border rounded-full p-3'>
                <Image
                  src={"/id.svg"}
                  width={30}
                  height={30}
                  alt='decorative icon'
                />
              </div>
              <div>
                <h4 className='font-medium'>Unlock new possibilities</h4>
                <p className='text-sm text-gray-400'>
                  Use your decentralized identity to access services and
                  applications that require verified identities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sm:w-[80vw] flex flex-col lg:flex-row items-center gap-4 lg:w-full max-w-6xl mx-auto px-5'>
        <div className='w-[80%] lg:w-full basis-1/2'>
          <Image
            src='/business.jpg'
            width={600}
            height={400}
            alt='manage data across platforms'
          />
        </div>
        <div className='basis-1/2'>
          <h2 className='font-bold text-2xl lg:text-4xl lg:leading-tight mb-5'>
            For <span className='text-dogwood-rose'>Businesses</span>
          </h2>
          <div className='space-y-3'>
            <div className='flex gap-3 items-center'>
              <div className='border rounded-full p-3'>
                <Image
                  src={"/secure-company.svg"}
                  width={30}
                  height={30}
                  alt='decorative icon'
                />
              </div>
              <div>
                <h4 className='font-medium'>Empower your employees</h4>
                <p className='text-sm text-gray-400'>
                  Provide your team with secure access to the resources they
                  need while protecting company data.
                </p>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='border rounded-full p-3'>
                <Image
                  src={"/compliance.svg"}
                  width={30}
                  height={30}
                  alt='decorative icon'
                />
              </div>
              <div>
                <h4 className='font-medium'>Ensure data compliance</h4>
                <p className='text-sm text-gray-400'>
                  Streamline data management processes and comply with industry
                  regulations with ease.
                </p>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='border rounded-full p-3'>
                <Image
                  src={"/risk.svg"}
                  width={30}
                  height={30}
                  alt='decorative icon'
                />
              </div>
              <div>
                <h4 className='font-medium'>Reduce security risks</h4>
                <p className='text-sm text-gray-400'>
                  Minimize the risk of data breaches and cyberattacks with
                  decentralized data storage.
                </p>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='border rounded-full p-3'>
                <Image
                  src={"/collaboration.svg"}
                  width={30}
                  height={30}
                  alt='decorative icon'
                />
              </div>
              <div>
                <h4 className='font-medium'>Improve collaboration</h4>
                <p className='text-sm text-gray-400'>
                  Facilitate secure and efficient data sharing between employees
                  and partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
