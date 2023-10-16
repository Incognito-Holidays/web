'use client';

import { useState } from 'react';
import Image from 'next/image';
import { LuChevronRight } from 'react-icons/lu';
import { toast } from 'react-hot-toast';
import NextBreadcrumb from '@components/breadcrumbs';
import Whychose from '@components/whychose';
import Form from '@components/form';
import pic1 from '@public/assets/bg-hotel.jpg';

const HotelsPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [place, setPlace] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rooms, setRooms] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
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
        subject: 'Hotel Booking Request',
        message,
        data: {
          hotel: {
            place,
            checkIn,
            checkOut,
            rooms,
            adults,
            children
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
          className=' h-[30rem] w-full  object-cover object-center'
        />
      </div>
      <div
        className='relative -bottom-16 -top-24 left-1/2 z-10 w-[55rem] -translate-x-1/2
      rounded-2xl border bg-white p-2 shadow-lg '
      >
        <Form
          title='Contact For Hotel Booking'
          description='Contact us for booking hotel'
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
            <div className='grow'>
              <label
                htmlFor='place'
                className='mb-2 block text-sm font-medium text-gray-900'
              >
                Region, City, Area (Worldwide)
              </label>
              <input
                id='place'
                type='text'
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder='Select destination'
                required
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm'
              />
            </div>
            <div>
              <label
                htmlFor='checkIn'
                className='mb-2 block text-sm font-medium text-gray-900'
              >
                Check In
              </label>
              <input
                id='checkIn'
                type='date'
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm'
              />
            </div>
            <div>
              <label
                htmlFor='checkOut'
                className='mb-2 block text-sm font-medium text-gray-900'
              >
                Check Out
              </label>
              <input
                id='checkOut'
                type='date'
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm'
              />
            </div>
          </div>
          <div className='flex flex-col gap-8 min-[450px]:flex-row min-[450px]:items-center'>
            <div>
              <label
                htmlFor='rooms'
                className='mb-2 block text-sm font-medium text-gray-900'
              >
                Number of rooms
              </label>
              <input
                id='rooms'
                type='number'
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                placeholder='1'
                required
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm'
              />
            </div>
            <div className='grow'>
              <label
                htmlFor='adults'
                className='mb-2 block text-sm font-medium text-gray-900'
              >
                Adults
              </label>
              <input
                id='adults'
                type='number'
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                placeholder='1'
                required
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm'
              />
            </div>
            <div>
              <label
                htmlFor='children'
                className='mb-2 block text-sm font-medium text-gray-900'
              >
                Children
              </label>
              <input
                id='children'
                type='number'
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                placeholder='0'
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

export default HotelsPage;
