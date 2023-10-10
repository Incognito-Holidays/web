import { getAllCards, getHomePageSearch } from '@lib/functions/home';
import Hero from '@components/hero';
import Search from '@components/search';
import Container from '@components/layout/container';
import Card from '@components/card';
import TravelBlogs from '@components/travel-blogs';
import Whychose from '@components/whychose';

const HomePage = async () => {
  const [data, search] = await Promise.all([
    getAllCards(),
    getHomePageSearch()
  ]);

  return (
    <main>
      <section className='relative'>
        <Hero />
        <Search data={search} />
      </section>
      <Container>
        <div className='mt-12 px-4 md:mt-36'>
          <h1 className='text-center text-3xl font-bold text-blue-950'>
            Guides for your next vacation
          </h1>
          <div className='mt-10 grid place-items-center gap-8 pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {data.map((item) => (
              <Card
                key={item._id}
                title={item.title}
                coverImage={item.coverImage}
                description={item.description}
                destinationSlug={item.destinationSlug}
                packageSlug={item.packageSlug}
              />
            ))}
          </div>
        </div>
        <TravelBlogs />
        <Whychose />
      </Container>
    </main>
  );
};

export default HomePage;
