/* eslint-disable react/jsx-key */
import { getAllCards, getHomePageSearch } from '@lib/functions/home';
import Hero from '@components/hero';
import Search from '@components/search';
import Container from '@components/layout/container';
import TravelBlogs from '@components/travel-blogs';
import Whychose from '@components/whychose';
import Popup from '@components/popup';
import PackageSwiper from '@components/PackageSwiper';
import PackageSwiperDomestic from '@components/PackageSwiperDomestic';

const HomePage = async () => {
  const [data, search] = await Promise.all([
    getAllCards(),
    getHomePageSearch()
  ]);
  // console.log(data);

  return (
    <main>
      <section className='relative'>
        <Hero />
        <Search data={search} />
      </section>
      <Container>
        <div className='mt-12 px-4 md:mt-36'>
          <h1 className='text-center text-3xl font-bold text-blue-950'>
            International Holiday Packages
          </h1>
          <PackageSwiper data={data} />
          <h1 className='text-center text-3xl font-bold text-blue-950'>
            India and Around Holiday Packages
          </h1>
          <PackageSwiperDomestic data={data} />
        </div>
        <TravelBlogs />
        <Whychose />
      </Container>
      <Popup />
    </main>
  );
};

export default HomePage;
