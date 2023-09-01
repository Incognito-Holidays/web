import PackagesCard from '@components/packages-card';
import g1 from '@public/assets/bali2.jpg';
import g2 from '@public/assets/g2.jpg';
import g3 from '@public/assets/thailand2.jpg';
import g4 from '@public/assets/g4.jpg';

const HolidaysPage: React.FC = () => {
  return (
    <>
      <h1 className='my-4 text-center text-xl font-semibold text-cyan-700 md:text-2xl'>
        Packages for your next vacation
      </h1>
      <div className='mt-8 grid place-items-center gap-4 gap-y-7 md:grid-cols-3 md:gap-y-10'>
        <PackagesCard title='Bali' img={g1} slug='bali' />
        <PackagesCard title='Sri Lanka' img={g2} slug='srilanka' />
        <PackagesCard title='Thailand' img={g3} slug='thailand' />
        <PackagesCard title='Vietnam' img={g4} slug='vietnam' />
      </div>
    </>
  );
};

export default HolidaysPage;
