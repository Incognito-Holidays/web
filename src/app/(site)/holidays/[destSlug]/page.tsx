import { LuChevronRight } from 'react-icons/lu';
import { AiOutlineLine } from 'react-icons/ai';
import {
  getPackagesByDestination,
  getPackagesCountByDestination
} from '@lib/functions/holidays';
import Container from '@components/layout/container';
import PackageDetailsCard from '@components/package-details-card';
import NextBreadcrumb from '@components/breadcrumbs';

const PackagesPage = async ({ params }: { params: { destSlug: string } }) => {
  const [count, data] = await Promise.all([
    getPackagesCountByDestination(params.destSlug),
    getPackagesByDestination(params.destSlug)
  ]);

  return (
    <div>
      <NextBreadcrumb
        homeElement={'Home'}
        separator={
          <span className='flex items-center'>
            <LuChevronRight />
          </span>
        }
        activeClasses='text-amber-500'
        containerClasses='flex py-1'
        listClasses='hover:underline mx-2 font-bold text-sm'
        capitalizeLinks
      />
      <main className='p-4 md:py-6'>
        <Container>
          <section className='items-center space-y-1 md:flex md:space-x-4'>
            <h1 className='text-xl font-semibold capitalize text-gray-700 md:text-2xl'>
              Tour Packages
            </h1>
            <AiOutlineLine className='hidden h-5 w-5 rotate-90 text-gray-700 md:block' />
            <h3 className='text-sm'>{count} Packages</h3>
          </section>

          <section className='mt-8 flex flex-col gap-y-8'>
            {data.map((item) => (
              <PackageDetailsCard
                key={item._id}
                title={item.title}
                description={item.description}
                startingPrice={item.startingPrice}
                coverImage={item.coverImage}
                destSlug={params.destSlug}
                slug={item.slug}
              />
            ))}
          </section>
        </Container>
      </main>
    </div>
  );
};

export default PackagesPage;
