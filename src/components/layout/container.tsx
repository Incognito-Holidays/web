import type { PropsWithChildren } from 'react';

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='mx-auto w-full max-w-7xl'>{children}</div>;
};

export default Container;
