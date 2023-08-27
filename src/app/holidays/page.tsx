import Card from '@components/card';
const HolidaysPage: React.FC = () => {
  return (
    <>
      <h1 className=' p-8 text-center text-3xl font-bold text-cyan-700'>
        Packages for your next vacation
      </h1>
      <div className='grid place-items-center gap-4 gap-y-7 p-5 md:grid-cols-3 md:gap-y-10'>
        <Card title='Bali' body='Hello Bali' slug='bali' />
        <Card title='Bali' body='Hello Bali' slug='/holidays/bali' />
        <Card title='Bali' body='Hello Bali' slug='/holidays/bali' />
        <Card title='Bali' body='Hello Bali' slug='/holidays/bali' />
      </div>
    </>
  );
};

export default HolidaysPage;
