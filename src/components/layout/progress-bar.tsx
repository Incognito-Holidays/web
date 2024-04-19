'use client';

import { AppProgressBar } from 'next-nprogress-bar';

export default function ProgressBar({ children }: React.PropsWithChildren) {
  return (
    <>
      {children}
      <AppProgressBar
        height='4px'
        color='#3b82f6'
        options={{ showSpinner: false }}
      />
    </>
  );
}
