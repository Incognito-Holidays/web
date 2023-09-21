'use client';

import { useState } from 'react';
import Form from '@components/form';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    // <Form
    //   title='Contact Us'
    //   description='Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.'
    //   name={name}
    //   setName={setName}
    //   phone={phone}
    //   setPhone={setPhone}
    //   email={email}
    //   setEmail={setEmail}
    //   showMessageBox
    //   messageBoxLabel='Your message'
    //   message={message}
    //   setMessage={setMessage}
    // >
    //   <div>
    //     <label
    //       htmlFor='subject'
    //       className='mb-2 block text-sm font-medium text-gray-900'
    //     >
    //       Subject
    //     </label>
    //     <input
    //       id='subject'
    //       type='text'
    //       value={subject}
    //       onChange={(e): void => setSubject(e.target.value)}
    //       placeholder='Let us know your Enquiry'
    //       className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm'
    //     />
    //   </div>
    // </Form>
    <></>
  );
};

export default ContactPage;
