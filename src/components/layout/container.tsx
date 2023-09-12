import type { PropsWithChildren } from 'react';

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='mx-auto w-full max-w-6.5xl px-4'>{children}</div>;
};

export default Container;
