'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiXMark } from 'react-icons/hi2';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent
} from '@components/ui/alert-dialog';

const Popup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className='p-1'>
        <div className='relative'>
          <Link href='/contact'>
            <Image
              src='/assets/darjeeling_popup.jpg'
              alt='popup img'
              width={1080}
              height={1080}
              onClick={() => setOpen(false)}
              priority
            />
          </Link>
          <AlertDialogCancel className='absolute right-0 top-0 p-1'>
            <HiXMark className='h-6 w-6' />
          </AlertDialogCancel>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Popup;
