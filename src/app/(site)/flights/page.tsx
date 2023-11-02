'use client';

import { useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { LuChevronRight } from 'react-icons/lu';
import NextBreadcrumb from '@components/breadcrumbs';
import Container from '@components/layout/container';
import Form from '@components/form';
import Whychose from '@components/whychose';
import pic1 from '@public/assets/f1.jpg';

const FlightsPage = () => {
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
        subject: 'Flight Booking Request',
        message,
        data: {
          flight: {
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
      setName('');
      setPhone('');
      setEmail('');
      setOriginPlace('');
      setDestinationPlace('');
      setTravelDate('');
      setMessage('');
    } else {
      toast.error('Something went wrong! Please try again');
    }
  };

  return (
    <main>
      <Container>
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
            className=' h-[20rem] w-full object-cover  object-center md:h-[30rem]'
          />
        </div>
        <div className='-top-14 z-10 rounded-2xl border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 md:relative md:-bottom-16 md:-top-24 md:left-1/2 md:w-[55rem] md:-translate-x-1/2'>
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
                  placeholder='Kolkata'
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
                  placeholder='Bangkok'
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
      </Container>
    </main>
  );
};

export default FlightsPage;
