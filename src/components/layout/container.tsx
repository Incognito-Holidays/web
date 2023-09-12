import type { PropsWithChildren } from 'react';

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='mx-auto w-full max-w-6.5xl'>{children}</div>;
};

export default Container;
