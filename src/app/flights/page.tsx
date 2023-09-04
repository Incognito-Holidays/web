'use client';

import { useState } from 'react';
import Form from '@components/form';

const TrainsPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [originPlace, setOriginPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Form
      title='Contact For Flight Booking'
      description='Contact us for booking flights'
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
            placeholder='Kolkata'
            required
            className='focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm'
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
            placeholder='Bangkok'
            required
            className='focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm'
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
            className='focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm'
          />
        </div>
      </div>
    </Form>
  );
};

export default TrainsPage;
