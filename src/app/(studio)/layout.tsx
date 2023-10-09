import type { PropsWithChildren } from 'react';

const StudioRootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang='en'>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
};

export default StudioRootLayout;
