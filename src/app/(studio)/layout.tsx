import type { PropsWithChildren } from 'react';

const StudioRootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en'>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
};

export default StudioRootLayout;
