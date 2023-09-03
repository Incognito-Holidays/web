import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';

type FormProps = PropsWithChildren & {
  title: string;
  description?: string;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
};

const Form: React.FC<FormProps> = ({
  children,
  title,
  description,
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail
}) => {
  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-screen-md px-4 py-8 lg:py-16'>
        <h2 className='mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900'>
          {title}
        </h2>
        <p className='mb-8 text-center font-light text-gray-500 sm:text-xl lg:mb-16'>
          {description}
        </p>
        <form className='space-y-8'>
          <div>
            <label
              htmlFor='email'
              className='mb-2 block text-sm font-medium text-gray-900'
            >
              Name
            </label>
            <input
              id='name'
              type='text'
              value={name}
              onChange={(e): void => setName(e.target.value)}
              placeholder='John Doe'
              required
              className='focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm'
            />
          </div>
          <div>
            <label
              htmlFor='phone'
              className='mb-2 block text-sm font-medium text-gray-900'
            >
              Phone Number
            </label>
            <input
              id='phone'
              type='number'
              value={phone}
              onChange={(e): void => setPhone(e.target.value)}
              placeholder='+91 XXXXX XXXXX'
              required
              className='focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm'
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='mb-2 block text-sm font-medium text-gray-900'
            >
              Email
            </label>
            <input
              id='email'
              type='email'
              value={email}
              onChange={(e): void => setEmail(e.target.value)}
              placeholder='name@example.com'
              className='focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm'
            />
          </div>
          {children}
          <button
            type='submit'
            className='hover:bg-primary-800 focus:ring-primary-300 rounded-lg bg-cyan-600 px-5 py-3 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-fit'
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
