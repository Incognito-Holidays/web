const Formcard = ({
  title,
  description,
  name,
  phone_number,
  email_id,
  subject,
  your_message
}) => {
  return (
    <div>
      <section className='bg-white '>
        <div className='mx-auto max-w-screen-md px-4 py-8 lg:py-16'>
          <h2 className='mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900'>
            {title}
          </h2>
          <p className='mb-8 text-center font-light text-gray-500  sm:text-xl lg:mb-16'>
            {description}
          </p>
          <form action='#' className='space-y-8'>
            <div>
              <label
                htmlFor='email'
                className='mb-2 block text-sm font-medium text-gray-900 '
              >
                {name}
              </label>
              <input
                type='text'
                id='name'
                className='focus:ring-primary-500 focus:border-primary-500    block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm    '
                placeholder='John Doe'
                required
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='mb-2 block text-sm font-medium text-gray-900 '
              >
                {phone_number}
              </label>
              <input
                type='number'
                id='phone_number'
                className='focus:ring-primary-500 focus:border-primary-500    block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm    '
                placeholder='+91 00000-00000'
                required
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='mb-2 block text-sm font-medium text-gray-900 '
              >
                {email_id}
              </label>
              <input
                type='email'
                id='email'
                className='focus:ring-primary-500 focus:border-primary-500    block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm    '
                placeholder='name@flowbite.com'
              />
            </div>
            <div>
              <label
                htmlFor='subject'
                className='mb-2 block text-sm font-medium text-gray-900 '
              >
                {subject}
              </label>
              <input
                type='text'
                id='subject'
                className='focus:ring-primary-500 focus:border-primary-500  block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm '
                placeholder='Let us know your Enquery'
              />
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='mb-2 block text-sm font-medium text-gray-900 '
              >
                {your_message}
              </label>
              <textarea
                id='message'
                rows={6}
                className='focus:ring-primary-500 focus:border-primary-500  block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm '
                placeholder='Leave a comment...'
              ></textarea>
            </div>
            <button
              type='submit'
              className='hover:bg-primary-800 focus:ring-primary-300 rounded-lg  bg-cyan-600 px-5 py-3 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-fit'
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Formcard;
