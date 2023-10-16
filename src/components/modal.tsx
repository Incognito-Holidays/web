import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { toast } from 'react-hot-toast';
import { Button } from './ui/button';
import type { Dispatch, SetStateAction } from 'react';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selectedPackage: string;
};

const Modal = ({ isOpen, setIsOpen, selectedPackage }: ModalProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    setLoading(true);
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        subject: 'Holiday Booking Request',
        message,
        data: {
          holiday: {
            selectedPackage,
            selectedPackageUrl: window.location.href
          }
        }
      })
    });
    setLoading(false);
    if (response.status === 200) {
      toast.success('Request Submitted Successfully!');
      setIsOpen(false);
    } else {
      toast.error('Something went wrong! Please try again');
    }
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog onClose={setIsOpen} as='div' className='relative z-10'>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg'>
                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                  <div className='mt-3 sm:mt-0'>
                    <Dialog.Title
                      as='h3'
                      className='text-center text-lg font-semibold leading-6 text-gray-900 sm:text-xl'
                    >
                      Welcome, let&apos;s get started
                    </Dialog.Title>
                    <div className='mt-6'>
                      <form onSubmit={handleFormSubmit} className='space-y-4'>
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
                            onChange={(e): void => setName(e.target.value)}
                            placeholder='John Doe'
                            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm'
                            required
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
                            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm'
                            required
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
                            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm'
                          />
                        </div>
                        <div>
                          <label
                            htmlFor='selectedPackage'
                            className='mb-2 block text-sm font-medium text-gray-900'
                          >
                            Selected Package
                          </label>
                          <input
                            id='selectedPackage'
                            type='text'
                            value={selectedPackage}
                            readOnly
                            className='block w-full cursor-not-allowed rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm'
                          />
                        </div>
                        <div>
                          <label
                            htmlFor='message'
                            className='mb-2 block text-sm font-medium text-gray-900'
                          >
                            Want to share something more?
                          </label>
                          <textarea
                            id='message'
                            rows={3}
                            value={message}
                            onChange={(e): void => setMessage(e.target.value)}
                            placeholder='Your message...'
                            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm'
                          />
                        </div>
                        <div className='flex flex-col gap-4 md:flex-row-reverse'>
                          <Button type='submit' disabled={loading}>
                            {loading ? (
                              <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white' />
                            ) : (
                              'Submit'
                            )}
                          </Button>
                          <Button
                            variant='outline'
                            onClick={() => setIsOpen(false)}
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
