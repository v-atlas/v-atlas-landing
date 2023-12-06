interface ContactModalProps {
  handleModalToggle: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ handleModalToggle }) => {
  return (
    <div className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center w-full md:inset-0 h-screen max-h-full bg-black bg-opacity-70'>
      <div className='relative p-4 w-full max-w-md max-h-full'>
        <div className='relative bg-antiflash-white rounded-lg shadow '>
          <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
            <h3 className='text-xl font-semibold text-gray-900 '>
              Contact Us
            </h3>
            <button
              type='button'
              className='end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center '
              data-modal-hide='authentication-modal' onClick={handleModalToggle}>
              <svg
                className='w-3 h-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 14'>
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                />
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
          </div>
          <div className='p-4 md:p-5'>
            <form className='space-y-4' action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <div>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900 '>
                  Your name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-honolulu-blue focus:border-honolulu-blue block w-full p-2.5 outline-none '
                  placeholder='Austin Butler'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900'>
                  Your email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-honolulu-blue focus:border-honolulu-blue block w-full p-2.5 outline-none'
                  placeholder='name@company.com'
                  required
                />
              </div>
              {/* message */}
              <div>
                <label
                  htmlFor='message'
                  className='block mb-2 text-sm font-medium text-gray-900'>
                  Message
                </label>
                <textarea
                  name='message'
                  id='message'
                  rows={4}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-honolulu-blue focus:border-honolulu-blue block w-full p-2.5 outline-none'
                  placeholder='Your message here'
                  required></textarea>
              </div>

              <button
                type='submit'
                className='w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-honolulu-blue hover:bg-honolulu-blue hover:bg-opacity-75 focus:ring-blue-800'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
