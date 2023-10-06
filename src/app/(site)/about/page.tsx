/* eslint-disable react/no-unescaped-entities */
import Whychose from '@components/whychose';

const About: React.FC = () => {
  return (
    <div>
      <div className="flex h-96 items-end bg-[url('/assets/p2.png')] bg-cover">
        <h1 className='text-bold w-full bg-neutral-800 bg-opacity-70 p-8 text-center text-6xl text-white'>
          About Us
        </h1>
      </div>
      <p className='max-w-6.5xl mx-auto px-4 py-8 text-justify'>
        In the travel and leisure sector, Incognito Leisure Holiday Private
        Limited is a reputable organization. The business has made a name for
        itself in the market with a team of 26 devoted workers. Incognito
        Leisure Holiday, which has offices in Kolkata, Bangalore, and Chennai,
        provides a variety of travel services and packages to meet the different
        demands of its clients.
        <br />
        <br />
        The company's personalized approach and attention to detail demonstrate
        its dedication to offering top-notch travel experiences. Incognito
        Leisure Holiday makes sure that every detail of the journey is
        painstakingly planned to meet and surpass customer expectations, whether
        it's preparing a calm beach holiday, an adventurous trekking excursion,
        or a cultural exploration.
        <br />
        <br />
        The organization, which is supported by a group of seasoned
        professionals, takes pride in its in-depth familiarity with a variety of
        locations and its capacity to craft distinctive travel itineraries.
        Incognito Leisure Holiday stands apart from rivalry due to the team's
        passion for travel and commitment to customer satisfaction.
        <br />
        <br />
        Incognito Leisure Holiday has succeeded in carving out a position for
        itself in a market that is continually expanding by regularly providing
        exceptional travel experiences. With a rising presence in different
        cities, the organization is well-positioned to continue its mission of
        offering top-notch leisure and vacation services to visitors from all
        across the nation.
      </p>
      <Whychose />
    </div>
  );
};

export default About;
