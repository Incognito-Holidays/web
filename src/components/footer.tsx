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
            <div className='mb-6 mt-6 flex gap-5 lg:mb-0'>
              {/* <Link href={'/'}>
                <ImFacebook color='#ffff' />
              </Link>
              <Link href={'/'}>
                <ImTwitter color='#ffff' />
              </Link>
              <Link href={'/'}>
                <ImYoutube color='#ffff' />
              </Link> */}
              <a href='/contact' className='font-bold hover:text-red-600'>
                Contact Us
              </a>
            </div>
          </div>
          <div className='w-full px-3 lg:w-6/12'>
            <div className='items-top mb-3 flex flex-wrap'>
              <div className='mb-4 ml-auto w-full px-4 lg:w-5/12'>
                <span className='mb-2 block text-sm font-semibold uppercase'>
                  Address (Main branch)
                </span>
                <p className='text-sm font-semibold'>
                  New no 15 Old no 149, Montieth Road, Alsa Mall Complex, Shop
                  No. T5, 3rd Floor, Egmore, Chennai-600008, Tamil Nadu.
                </p>
              </div>
              <div className='ml-auto w-full px-4 lg:w-5/12'>
                <span className='mb-2 block text-sm font-semibold uppercase'>
                  Address (Kolkata Branch)
                </span>
                <p className='text-sm font-semibold'>
                  8 Ho Chi Minh Sarani, 3rd Floor, Suit no 28/6, Opposite to US
                  Consulate, Kolkata
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
              <span>
                <a
                  href='https://www.instagram.com/sigma3labs/'
                  target='blank'
                  className='cursor-pointer hover:text-red-600'
                >
                  {' '}
                  Sigma 3 Labs.
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
