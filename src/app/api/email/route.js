/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import EmailTemplate from '@components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, phone, email, subject, message, data } = await req.json();

  try {
    await resend.emails.send({
      from: 'Incognito Holidays <noreply@incognitoholidays.com>',
      to: 'enquiry@incognitoholidays.com',
      subject: subject,
      react: EmailTemplate({
        name,
        phone,
        email,
        message,
        data
      })
    });

    return NextResponse.json(
      { message: 'Email Sent Successfully!' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong! Please try again' },
      { status: 500 }
    );
  }
}
