/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable curly */

'use server';

import { createElement } from 'react';
import { Resend } from 'resend';

import EmailTemplate from '@components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData, subject, selectedPackageUrl) => {
  const name = formData.get('name');
  const phone = formData.get('phone');
  const email = formData.get('email');
  const selectedPackage = formData.get('selectedPackage');
  const message = formData.get('message');

  try {
    await resend.emails.send({
      from: 'Incognito Holidays <noreply@incognitoholidays.com>',
      to: 'enquiry@incognitoholidays.com',
      reply_to: email,
      subject: subject,
      react: createElement(EmailTemplate, {
        name,
        phone,
        email,
        selectedPackage,
        selectedPackageUrl,
        message
      })
    });
  } catch (err) {
    return {
      error: 'Something went wrong!. Please try again'
    };
  }
};
