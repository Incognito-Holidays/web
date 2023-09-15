/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/no-unescaped-entities */

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import ToastMsg from 'react-hot-toast';

import { sendEmail } from '@lib/actions/send-email';
import SubmitBtn from './submit-btn';

import type { Dispatch, SetStateAction } from 'react';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selectedPackage: string;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  selectedPackage
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
                      Welcome, let's get started
                    </Dialog.Title>
                    <div className='mt-6'>
                      <form
                        action={async (formData) => {
                          const error = await sendEmail(
                            formData,
                            'Holiday Booking Request',
                            window.location.href
                          );
                          if (error) {
                            ToastMsg.error(error.error, {
                              position: 'bottom-center'
                            });
                            return;
                          }
                          ToastMsg.success('Request sent successfully', {
                            position: 'bottom-center'
                          });
                        }}
                        className='space-y-4'
                      >
                        <div>
                          <label
                            htmlFor='name'
                            className='mb-2 block text-sm font-medium text-gray-900'
                          >
                            Name
                          </label>
                          <input
                            id='name'
                            name='name'
                            type='text'
                            value={name}
                            onChange={(e): void => setName(e.target.value)}
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
                            name='phone'
                            type='number'
                            value={phone}
                            onChange={(e): void => setPhone(e.target.value)}
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
                            name='email'
                            type='email'
                            value={email}
                            onChange={(e): void => setEmail(e.target.value)}
                            placeholder='name@example.com'
                            required
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
                            name='selectedPackage'
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
                            name='message'
                            rows={3}
                            value={message}
                            onChange={(e): void => setMessage(e.target.value)}
                            placeholder='Your message...'
                            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm'
                          />
                        </div>
                        <div className='flex flex-col gap-4 sm:flex-row-reverse'>
                          <SubmitBtn />
                          <button
                            type='button'
                            onClick={(): void => setIsOpen(false)}
                            className='w-full rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-auto'
                          >
                            Cancel
                          </button>
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
