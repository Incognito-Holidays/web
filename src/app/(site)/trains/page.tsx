'use client';

import { useState } from 'react';
import Image from 'next/image';
import { LuChevronRight } from 'react-icons/lu';
import { toast } from 'react-hot-toast';
import NextBreadcrumb from '@components/breadcrumbs';
import Whychose from '@components/whychose';
import Form from '@components/form';
import pic1 from '@public/assets/bg-train.jpg';

const TrainsPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [originPlace, setOriginPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');
  const [travelDate, setTravelDate] = useState('');
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
        subject: 'Train Booking Request',
        message,
        data: {
          train: {
            originPlace,
            destinationPlace,
            travelDate
          }
        }
      })
    });
    setLoading(false);
    if (response.status === 200) {
      toast.success('Request Submitted Successfully!');
    } else {
      toast.error('Something went wrong! Please try again');
    }
  };

  return (
    <main>
      <NextBreadcrumb
        homeElement={'Home'}
        separator={
          <span className='flex items-center'>
            <LuChevronRight />
          </span>
        }
        activeClasses='text-amber-500'
        containerClasses='flex py-1'
        listClasses='hover:underline mx-2 font-bold text-sm'
        capitalizeLinks
      />
      <div>
        <Image
          src={pic1}
          alt='banner'
          quality={95}
          width={1200}
          height={500}
          className='h-[30rem] w-full object-cover object-center'
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
          onFormSubmit={handleFormSubmit}
          loading={loading}
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
                onChange={(e) => setOriginPlace(e.target.value)}
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
                onChange={(e) => setDestinationPlace(e.target.value)}
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
                onChange={(e) => setTravelDate(e.target.value)}
                required
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm'
              />
            </div>
          </div>
        </Form>
      </div>
      <Whychose />
    </main>
  );
};

export default TrainsPage;
