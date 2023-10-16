import { Button } from './ui/button';
import type {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  SyntheticEvent
} from 'react';

type FormPropsBase = PropsWithChildren & {
  title: string;
  description?: string;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  onFormSubmit: (e: SyntheticEvent) => Promise<void>;
  loading: boolean;
};

type FormPropsWithMessage = FormPropsBase & {
  showMessageBox: true;
  messageBoxLabel: string;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
};

type FormPropsWithoutMessage = FormPropsBase & {
  showMessageBox?: false;
  messageBoxLabel?: string;
  message?: string;
  setMessage?: Dispatch<SetStateAction<string>>;
};

type FormProps = FormPropsWithMessage | FormPropsWithoutMessage;

const Form = ({
  children,
  title,
  description,
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  showMessageBox,
  messageBoxLabel,
  message,
  setMessage,
  onFormSubmit,
  loading
}: FormProps) => {
  return (
    <section className='bg-white'>
      <div className='mx-auto mb-6 mt-4 max-w-screen-md lg:mb-8'>
        <h2 className='mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900'>
          {title}
        </h2>
        <p className='mb-8 text-center font-light text-gray-500 sm:text-xl lg:mb-16'>
          {description}
        </p>
        <form onSubmit={onFormSubmit} className='space-y-8'>
          <div>
            <label
              htmlFor='name'
              className='mb-2 block text-sm font-medium text-gray-900'
            >
              Name
            </label>
            <input
              id='name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='John Doe'
              required
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm'
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
              onChange={(e) => setPhone(e.target.value)}
              placeholder='+91 XXXXX XXXXX'
              required
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm'
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
              onChange={(e) => setEmail(e.target.value)}
              placeholder='name@example.com'
              required
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm'
            />
          </div>
          {children}
          {showMessageBox && (
            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='mb-2 block text-sm font-medium text-gray-900'
              >
                {messageBoxLabel}
              </label>
              <textarea
                id='message'
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Your message'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm'
              />
            </div>
          )}
          <Button type='submit' size='lg' disabled={loading}>
            {loading ? (
              <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white' />
            ) : (
              'Submit'
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Form;
