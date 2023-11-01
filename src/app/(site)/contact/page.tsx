'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { LuChevronRight } from 'react-icons/lu';
import Link from 'next/link';
import { GrFacebook, GrLinkedin, GrInstagram } from 'react-icons/gr';
import Container from '@components/layout/container';
import Form from '@components/form';
import Whychose from '@components/whychose';
import NextBreadcrumb from '@components/breadcrumbs';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
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
        subject: 'Enquiry',
        message,
        data: {
          contact: {
            subject
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
      setSubject('');
      setMessage('');
    } else {
      toast.error('Something went wrong! Please try again');
    }
  };

  return (
    <main className='px-4'>
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
        <div className='my-6 grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <div>
            <h1 className='text-4xl font-bold'>Contact us</h1>
            <p className='mt-3 text-justify'>
              We appreciate you choosing Incognito Leisure Holidays Private
              Limited to handle your vacation arrangements. Any questions or
              requests you may have will be answered by us. Please don&apos;t
              hesitate to contact us using the information listed below:
            </p>
            <div className='mt-6 grid grid-cols-1 gap-y-2 lg:grid-cols-2'>
              <div className=' w-full rounded-lg border border-gray-200 p-4 shadow dark:border-gray-700 dark:bg-gray-800 lg:w-72'>
                <h2 className='text-xl font-semibold text-red-500'>Chennai</h2>
                <p className='mr-2 mt-2 '>
                  New no 15 Old no 149, Montieth Road, Alsa Mall Complex, Shop
                  No. T5, 3rd Floor, Egmore, Chennai-600008, Tamil Nadu.
                </p>
                <p className='mt-1'>
                  <span className='font-semibold'>Email:</span>{' '}
                  chennai@incognitoholidays.com
                </p>
              </div>
              <div className='w-full rounded-lg border border-gray-200 p-4 shadow dark:border-gray-700 dark:bg-gray-800 lg:w-72'>
                <h2 className='text-xl font-semibold text-red-500'>Kolkata</h2>
                <p className='mr-2 mt-2'>
                  8 Ho Chi Minh Sarani, 3rd Floor, Suit no 28/6, Opposite to US
                  Consulate, Kolkata.
                </p>
                <p className='mt-1 lg:mt-7'>
                  <span className='font-semibold'>Email:</span>{' '}
                  kolkata@incognitoholidays.com
                </p>
              </div>
            </div>
            <div className=' mt-4 w-full rounded-lg border border-gray-200 p-4 shadow dark:border-gray-700 dark:bg-gray-800'>
              <h2 className='text-lg font-semibold text-blue-500'>
                Feedback and Suggestions:
              </h2>
              <p className=''>
                We appreciate your comments and ideas about how we may make our
                services better. Please contact us at
                kolkata@incognitoholidays.com with your ideas.
              </p>
            </div>
            <div className=' mt-4 w-full rounded-lg border border-gray-200 p-4 shadow dark:border-gray-700 dark:bg-gray-800'>
              <h2 className='text-lg font-semibold text-amber-500'>
                Visit Us:
              </h2>
              <p className='text-justify'>
                If you&apos;re nearby Kolkata, you&apos;re welcome to stop by
                our office during business hours. Our staff will be happy to
                help you in person. Our goal at Incognito Leisure Holidays
                Private Limited is to make your trip unforgettable. Reach out to
                us right away, and let&apos;s start planning your next journey
              </p>
            </div>
            <div className=' mt-4 w-full rounded-lg border border-gray-200 p-4 shadow dark:border-gray-700 dark:bg-gray-800'>
              <h2 className='text-lg font-semibold text-green-500'>
                Connect With Us:
              </h2>
              <div className='text-justify'>
                By following us on social media, you can stay up to date with
                our most recent travel deals and offers.
                <div className='mb-6 mt-6 flex cursor-pointer gap-5 lg:mb-0'>
                  <Link
                    href='https://www.facebook.com/IncognitoHolidays'
                    target='blank'
                  >
                    <GrFacebook size='1.6rem' color='blue' />
                  </Link>
                  <Link
                    href='https://www.linkedin.com/in/incognito-holidays-2a6769296/'
                    target='blank'
                  >
                    <GrLinkedin size='1.6rem' color='blue' />
                  </Link>
                  <Link
                    href='https://www.instagram.com/incognitoholidays/'
                    target='_blank'
                  >
                    <GrInstagram size='1.6rem' color='red' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800'>
              <Form
                title='Enquiry Form'
                description='Fill the form to here from us!'
                name={name}
                setName={setName}
                phone={phone}
                setPhone={setPhone}
                email={email}
                setEmail={setEmail}
                showMessageBox
                messageBoxLabel='Your message'
                message={message}
                setMessage={setMessage}
                onFormSubmit={handleFormSubmit}
                loading={loading}
              >
                <div>
                  <label
                    htmlFor='subject'
                    className='mb-2 block text-sm font-medium text-gray-900'
                  >
                    Subject
                  </label>
                  <input
                    id='subject'
                    type='text'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder='Let us know your Enquiry'
                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm'
                  />
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Container>
      <Whychose />
    </main>
  );
};

export default ContactPage;
