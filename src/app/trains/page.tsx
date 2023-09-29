'use client';

import Image from 'next/image';
import { useState } from 'react';
import Whychose from '@components/whychose';
import Form from '@components/form';
import pic1 from '@public/assets/bg-train.jpg';

const TrainsPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [originPlace, setOriginPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div>
      <div>
        <Image
          src={pic1}
          alt='banner'
          quality={95}
          width={1200}
          height={500}
          className=' h-[30rem] w-full  object-cover object-center'
        />
      </div>
      <div
        className='relative -bottom-16 -top-24 left-1/2 z-10 w-[55rem] -translate-x-1/2
      rounded-2xl border bg-white p-2 shadow-lg '
      >
        <Form
          title='Contact For Train Booking'
          description='Contact us for booking trains'
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          showMessageBox
          messageBoxLabel='Want to share something more? Let us know your Enquiry'
          message={message}
          setMessage={setMessage}
        >
          <div className='flex flex-col gap-8 sm:flex-row sm:items-center'>
            <div>
              <label
                htmlFor='originPlace'
                className='mb-2 block text-sm font-medium text-gray-900'
              >
                From
              </label>
              <input
                id='originPlace'
                type='text'
                value={originPlace}
                onChange={(e): void => setOriginPlace(e.target.value)}
                placeholder='Delhi'
                required
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm'
              />
            </div>
            <div>
              <label
                htmlFor='destinationPlace'
                className='mb-2 block text-sm font-medium text-gray-900'
              >
                To
              </label>
              <input
                id='destinationPlace'
                type='text'
                value={destinationPlace}
                onChange={(e): void => setDestinationPlace(e.target.value)}
                placeholder='Kashmir'
                required
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm'
              />
            </div>
            <div className='grow'>
              <label
                htmlFor='travelDate'
                className='mb-2 block text-sm font-medium text-gray-900'
              >
                Travel Date
              </label>
              <input
                id='travelDate'
                type='date'
                value={travelDate}
                onChange={(e): void => setTravelDate(e.target.value)}
                required
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm'
              />
            </div>
          </div>
        </Form>
      </div>
      <Whychose />
    </div>
  );
};

export default TrainsPage;
