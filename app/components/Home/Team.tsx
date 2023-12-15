import Image from "next/image";

const Team = () => {
  return (
    <section className=''>
      <div className='w-[80vw] sm:w-full py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
        <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold '>
            Our <span className='text-dogwood-rose'>Team</span>
          </h2>
          <p className='font-light lg:mb-16 sm:text-lg text-gray-400'>
            A team of experienced professionals dedicated to building innovative
            and secure data management solutions.
          </p>
        </div>
        <div className='grid gap-8 mb-6 lg:mb-16 md:grid-cols-2'>
          <div className='items-center bg-black rounded-lg shadow sm:flex '>
            <div className='basis-1/2'>
              <Image
                width={500}
                height={500}
                className='w-full rounded-lg sm:rounded-none sm:rounded-l-lg'
                src='/emeka.jpeg'
                alt='Emeka Avatar'
              />
            </div>

            <div className='p-5 basis-1/2'>
              <h3 className='text-xl font-bold tracking-tight text-antiflash-white'>
                <a href='#'>Emeka Allison</a>
              </h3>
              <span className='text-gray-400'>Software Engineer</span>

              <ul className='flex space-x-4 mt-5'>
                <li>
                  <a
                    href='https://twitter.com/alliemeka'
                    className='text-gray-500 hover:text-white'
                  >
                    <svg
                      className='w-5 h-5'
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      width='100'
                      height='100'
                      viewBox='0 0 50 50'
                      fill='currentColor'
                    >
                      <path d='M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z'></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href='https://github.com/Aliemeka'
                    className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='items-center bg-black rounded-lg shadow sm:flex '>
            <div className='basis-1/2'>
              <Image
                width={500}
                height={500}
                className='w-full rounded-lg sm:rounded-none sm:rounded-l-lg'
                src='/adaeze.jpg'
                alt='Adaeze Avatar'
              />
            </div>

            <div className='p-5 basis-1/2'>
              <h3 className='text-xl font-bold tracking-tight text-antiflash-white'>
                <a href='#'>Adaeze Ndupu</a>
              </h3>
              <span className='text-gray-400'>Frontend Developer</span>

              <ul className='flex space-x-4 mt-5'>
                <li>
                  <a
                    href='https://twitter.com/what_is_a_swat'
                    className='text-gray-500 hover:text-white'
                  >
                    <svg
                      className='w-5 h-5'
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      width='100'
                      height='100'
                      viewBox='0 0 50 50'
                      fill='currentColor'
                    >
                      <path d='M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z'></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href='https://github.com/vermilion4'
                    className='text-gray-500 hover:text-white'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='items-center bg-black rounded-lg shadow sm:flex '>
            <div className='basis-1/2'>
              <Image
                width={500}
                height={500}
                className='w-full rounded-lg sm:rounded-none sm:rounded-l-lg object-cover aspect-square object-top'
                src='/david.jpeg'
                alt='David Avatar'
              />
            </div>

            <div className='p-5 basis-1/2'>
              <h3 className='text-xl font-bold tracking-tight text-antiflash-white'>
                <a href='#'>David Ibia</a>
              </h3>
              <span className='text-gray-400'>Engineering Manager</span>

              <ul className='flex space-x-4 mt-5'>
                <li>
                  <a
                    href='https://twitter.com/boxpositron'
                    className='text-gray-500 hover:text-white'
                  >
                    <svg
                      className='w-5 h-5'
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      width='100'
                      height='100'
                      viewBox='0 0 50 50'
                      fill='currentColor'
                    >
                      <path d='M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z'></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href='https://github.com/boxpositron'
                    className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='items-center bg-black rounded-lg shadow sm:flex '>
            <div className='basis-1/2 text-antiflash-white text-center'>
              <Image
                width={500}
                height={500}
                className='w-full rounded-lg sm:rounded-none sm:rounded-l-lg object-cover aspect-square'
                src='/clinton.jpeg'
                alt='Clinton Avatar'
              />
            </div>

            <div className='p-5 basis-1/2'>
              <h3 className='text-xl font-bold tracking-tight text-antiflash-white'>
                <a href='#'>Clinton Dike</a>
              </h3>
              <span className='text-gray-400'>Product Manager</span>

              <ul className='flex space-x-4 mt-5'>
                <li>
                  <a
                    href='https://twitter.com/ClintondikeDL'
                    className='text-gray-500 hover:text-white'
                  >
                    <svg
                      className='w-5 h-5'
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      width='100'
                      height='100'
                      viewBox='0 0 50 50'
                      fill='currentColor'
                    >
                      <path d='M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z'></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
