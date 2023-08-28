import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className='bg-blue-950'>
      <div className='container mx-auto flex justify-center py-4 md:px-6'>
        <div className='py-1'>
          <div className='flex justify-center gap-6'>
            <Link href={'/'}>
              <ImFacebook color='#ffff' />
            </Link>
            <Link href={'/'}>
              <ImTwitter color='#ffff' />
            </Link>
            <Link href={'/'}>
              <ImYoutube color='#ffff' />
            </Link>
          </div>
          <div className='flex flex-col items-center justify-center p-5  text-center'>
            <h1 className='font-semibold text-white'>
              Copyright ©2023 Incognito Holidays Private Limited. All rights
              reserved.
            </h1>
          </div>
          <h1 className='text-center text-white'>Terms & Condition</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
