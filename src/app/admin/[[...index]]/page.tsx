import Studio from './studio';

export const dynamic = 'force-static';

export { metadata } from 'next-sanity/studio/metadata';

const StudioPage = () => {
  return <Studio />;
};

export default StudioPage;
