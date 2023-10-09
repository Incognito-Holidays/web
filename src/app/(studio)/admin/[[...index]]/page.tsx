import Studio from './studio';

export { metadata } from 'next-sanity/studio/metadata';

export const dynamic = 'force-static';

const StudioPage = () => {
  return <Studio />;
};

export default StudioPage;
