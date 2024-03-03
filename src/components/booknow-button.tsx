'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import Modal from './modal';
import type { Package } from '@lib/types';

const BookNowButton = ({ title }: Pick<Package, 'title'>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={(): void => setIsModalOpen(true)}
        className='w-full rounded-full'
      >
        Enquiry Now
      </Button>

      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        selectedPackage={title}
      />
    </>
  );
};

export default BookNowButton;
