import Link from 'next/link';
import { GrFacebook, GrLinkedin, GrInstagram } from 'react-icons/gr';

const Footer: React.FC = () => {
  return (
    <footer className='relative bg-blue-950 pb-5 pt-8 text-white'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap text-left lg:text-left'>
          <div className='w-full px-6 lg:w-6/12'>
            <h4 className='text-3xl font-semibold'>
              Let&apos;s keep in touch!
            </h4>
            <h5 className='mb-2 mt-0 text-lg'>
              Find us on these platforms, we respond within 1-2 business days.
            </h5>
            <div className='mb-6 mt-6 flex cursor-pointer gap-5 lg:mb-0'>
              <Link
                href='https://www.facebook.com/IncognitoHolidays'
                target='blank'
              >
                <GrFacebook size='1.6rem' />
              </Link>
              <Link
                href='https://www.linkedin.com/in/incognito-holidays-2a6769296/'
                target='blank'
              >
                <GrLinkedin size='1.6rem' />
              </Link>
              <Link
                href='https://www.instagram.com/incognitoholidays/'
                target='_blank'
              >
                <GrInstagram size='1.6rem' />
              </Link>
            </div>
            {/* <div className='mt-6 text-lg'>
              <a href='/contact' className='font-bold hover:text-red-600'>
                Contact Us
              </a>
            </div>
            <div className='mb-6 mt-2 text-lg'>
              <a
                href='/admin'
                target='_blank'
                className='font-bold hover:text-red-600'
              >
                Admin
              </a>
            </div> */}
          </div>
          <div className='w-full px-3 lg:w-6/12'>
            <div className='items-top flex flex-wrap'>
              <div className='mb-4 ml-auto w-full px-4 lg:w-5/12'>
                <span className='mb-2 block text-sm font-semibold uppercase'>
                  Address (Main branch)
                </span>
                <p className='text-sm font-semibold'>Chennai, Tamil Nadu.</p>
                <p className='mt-4 text-sm font-semibold'>
                  Email: chennai@incognitoholidays.com
                </p>
              </div>
              <div className='ml-auto w-full px-4 lg:w-5/12'>
                <span className='mb-2 block text-sm font-semibold uppercase'>
                  Address (Kolkata Branch)
                </span>
                <p className='text-sm font-semibold'>
                  Ho Chi Minh Sarani, Kolkata.
                </p>
                <p className='mt-4 text-sm font-semibold'>
                  Email: kolkata@incognitoholidays.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className='border-blueGray-300 my-6' />
        <div className='flex flex-wrap items-center justify-center md:justify-between'>
          <div className='mx-auto flex flex-col text-center'>
            <h1>
              Copyright ©<span id='get-current-year'>2023</span> Incognito
              Holidays Private Limited. Site Developed & Maintained by
              <span className='font-semibold'>
                <a
                  href='https://linktr.ee/sigma3labs'
                  target='blank'
                  className='cursor-pointer hover:text-red-600'
                >
                  {' '}
                  Sigma3Labs.
                </a>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
