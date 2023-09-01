'use client';

import Image from 'next/image';
import { Tab } from '@headlessui/react';
import vietnam1 from '@public/assets/package.jpeg';

const Page: React.FC = () => {
  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <section className='max-w-6xl'>
      {/* Heading */}
      <h1 className='text-center text-3xl font-bold text-cyan-600'>
        VIETNAM - LAOS - COMBODIA
      </h1>

      {/* Banner image */}
      <Image
        src={vietnam1}
        alt='vietnam_laos_cambodia'
        quality={95}
        className='mt-6 h-96 w-full rounded-lg object-cover object-bottom'
      />
      <div className='mt-12 flex flex-col gap-x-10 md:flex-row'>
        <div className='space-y-8'>
          {/* Tour overview/summary */}
          <h2 className='text-2xl font-bold'>Tour Overview</h2>
          <p className='text-justify'></p>

          <Tab.Group>
            <Tab.List className='flex space-x-1 rounded-xl bg-blue-950 p-1'>
              {/* Itinerary heading */}
              <Tab
                className={({ selected }): string =>
                  classNames(
                    'w-full rounded-lg py-1 text-sm font-medium leading-5 sm:py-2.5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-blue-900 shadow'
                      : 'text-white hover:bg-white/[0.12]'
                  )
                }
              >
                Itinerary
              </Tab>

              {/* Inclusions & Exclusions heading
              <Tab
                className={({ selected }): string =>
                  classNames(
                    'w-full rounded-lg py-1 text-sm font-medium leading-5 sm:py-2.5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-blue-900 shadow'
                      : 'text-white hover:bg-white/[0.12]'
                  )
                }
              >
                Inclusions & Exclusions
              </Tab> */}

              {/* Terms & Conditions heading */}
              <Tab
                className={({ selected }): string =>
                  classNames(
                    'w-full rounded-lg py-1 text-sm font-medium leading-5 sm:py-2.5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-blue-900 shadow'
                      : 'text-white hover:bg-white/[0.12]'
                  )
                }
              >
                Terms & Conditions
              </Tab>
            </Tab.List>
            <Tab.Panels className='!mt-4 rounded-2xl border-2 border-gray-300'>
              {/* Itinerary details */}
              <Tab.Panel
                className={classNames(
                  'space-y-4 rounded-xl bg-white p-3',
                  'focus:outline-none'
                )}
              >
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Vietnam – Laos - Cambodia
                  </h1>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 1: Vientiane
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      Upon your arrival at Wattay International Airport, you are
                      warmly welcomed by our local guide and we start visiting
                      the major sights of the capital, including the oldest
                      Sisaket with thousands of miniature of Budhha statues and
                      the formar royal temple of Wat Prakeo previously housed
                      the famous Emerald Buddha image. On the way to the famous
                      and sacred structure of That Luang Stupas, we stop to take
                      some pictures of the imposing Patuxai which is well known
                      as Vientiane’s own Arc de Triomphe before doing shopping
                      at Morning market/Lao textile then we head out to the
                      Mekong riverside for the sunset. Have welcome dinner at
                      local restaurant. Overnight stay at hotel at Vientiane.
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 2: Vientiane – Luang Prabang:
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      After brk fst check out from hotel and proceed to Luang
                      Prabang by road. It is 343 km. and takes around 5 hrs.
                      drive. Check in hotel on arrival at Luang Prabang. Have
                      dinner at local restaurant and night stay at hotel.
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 3: Luang Prabang:
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      Set between the Nam Khan and Nam Ou rivers, Luang Prabang
                      is an enchanting town filled with historic temples and
                      colonial style buildings. The entire town was declared a
                      UNESCO World Heritage site in 1995. Start the day at Wat
                      Visoun (Wat Wisunalat). The oldest living in Luang
                      Prabang, Wat Visoun dates back to 1513 and contains a
                      collection of antique wooden Buddhas. Visit the nearby Wat
                      Aham before continuing the Wat Xieng Thong, the crowning
                      jewel of all the monasteries and temples in the city. Its
                      many ornate buildings feature exquisite mosaic and gold
                      stenciled murals. From there, stroll down the main street
                      of Luang Prabang. Stopping at some of the many temples
                      that line its sides, including Wat Sibounheuang, Wat Si
                      Moungkoun, Wat Sop and Wat Sene. Continue to the National
                      Museum (Royal Palace), a modest but graceful building
                      which combines traditional Lao and French beaux-arts
                      motifs. This turn-of-the century royal residence has been
                      preserved as it was when the royal family last lived here
                      and provides unique insights into the history of Laos.
                      (Closed on Tuesdays). Afterwards, visit Wat Mai. Visit
                      Mount Phousi for sunset. Climb the hillside stairs to the
                      small temples atop Phou Si, the 100 m high hill which sits
                      in the middle of the town, offering beautiful views over
                      the temples and river. Overnight at Luang Prabang.
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 4: Luang Prabang – Pak Ou Caves – Hanoi:
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      Excursion by boat to the Pak Ou caves. Travel down the
                      Mekong River to the steep limestone cliffs overlooking the
                      Mekong and Nam Ou rivers, home to the Pak Ou Caves. These
                      extraordinary caves are filled with images of Budhha, of
                      every style and material imaginable. On the return
                      journey, stop at Ban Xang Hai, a local village famous for
                      production of lao lao, the local rice wine whisky. Visit
                      Bang Xang Khong, a village near Luang Prabang famous for
                      its hand-woven cotton and silk, as well as production of
                      the local Mulberry paper. Then transfer to the airport to
                      take onwards flights to Hanoi. Picked up on arrival and
                      transfer to the hotel to check-in. overnight stay at Hanoi
                      hotel.
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 5: Hanoi - Halong Bay - Hanoi:
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      After brk fst the local guide will pick up you at the
                      hotel and proceed to Halong Bay. We go through the scenic
                      countryside. The wondours Halong Bay is truly one of
                      Vietnam’s impressive scenic sights. Heading out of the
                      town we take a cruise on Halong Bay about 4 hrs. to
                      explore the majestic Halong Bay – World Heritage site
                      recognized by UNESCO in 1994. An area of immense beauty
                      dotted with thousand of island rising from the sea.
                      Explore Dau Go natural cave, Thien Cung grotto, dog
                      island, Dinh Huong island… have seafood lunch on boat.
                      Afternoon transfer to Hanoi. Diner at local restaurant.
                      Overnight stay at Hanoi.
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 6: Hanoi City Tour - Ho Chi Minh:
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      After brk fst at hotel, get on bus and drive to the
                      historic complex of Ba Dinh. Visit Ba Dinh square, where
                      the late president Ho Chi Minh declared Vietnam’s
                      Independence on 2nd September 1945, Ho Chi Minh Mausoleum
                      and continue to the one pillar pagoda, the must see
                      monument in Hanoi – it is an ancient Buddhist pagoda,
                      built in the early 11th century in the reign of King Ly
                      Thai Tong, all construction supported by only one pillar,
                      resembling a Buddhist lotus. Tran Quoc Pagoda, Quan Thanh
                      Temple. Visit Van Mieu – Quoc Tu Giam (Temple of
                      Literature – the first imperial school in Vietnam) built
                      in 1070 during the dynasty of king Ly. Visit a complex of
                      the Hoan Kiem lake, Ngoc Son Temple (Jade Mountain
                      temple), But tower (pen shaped tower), Dai Nghien(Ink
                      stand), the Red - painted wooden the Huc bridge…….have a
                      cyclo (pedicab) trip around with 36 streets of Hanoi old
                      quarter. Enjoy the special Vietnam traditional water
                      puppet show. Then transfer to the airport onward flight
                      BL-798 (19h35 – 21h40) to Ho Chi Minh city. You are picked
                      up on arrival and transfer to hotel for check in.
                      Overnight stay at Ho Chi Minh city.
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 7: Ho Chi Minh - Mekong Delta - Ho Chi Minh:
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      Brk fast at hotel and transfer to tourist boat station in
                      My Tho. Cruising Tho. Cruising on Tien river and seeing
                      four island, Dragon, Unicorn, tortoise, phoenix. Enjoy
                      fresh coconut juice. Boat runs along fish farm for
                      traveler to learn about local people how to feed fishes.
                      Stop at Thoi Son temple, go walking around country lane
                      and seeing orchards, enjoy tropical fruits, listen to
                      traditional music. Boat will take you to come to Phoenix
                      island, visit Coconut Monk temple, Crocodile farm,
                      Ostrich……To sail up Tien River, boat you to Chua Canal,
                      belong to Ben Tre province, take a rowing boat or small
                      canal with beautiful scenery of countryside. To visit
                      honey-bee farm, enjoy honey tea. After that ride a horse
                      drawn carriages along country lane in Quoi Son village to
                      seeing orchards and local people’s life. To Tan Thach
                      village to visit Coconut Candy workshop, come back to boat
                      and return to My Tho. Get in the car in about 15h00 to
                      drive back to Ho Chi Minh city.
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 8: Ho Chi Minh City Tour - Phnom Penh:
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      After brk fst you will take half day Sai Gon city tour
                      with Opera House, a three storied classical theatre built
                      to entrain the French colonists (outdoor visit); the
                      former hotel de Ville constructed for the French
                      Bureaucrats of Indochina in 1901, now the People’s
                      Committee building with no public access; the Notre Dame
                      Cathedral, a stunningly massive red brick edifice with
                      twin spires, a clear reminder that French one ruled that
                      city (open only 3-4 pm everyday, otherwise just an outdoor
                      visit); the Central Post Office influenced by Renaissance
                      architecture; and the former presidential palace,
                      headquarters of the Sai Gon government during the American
                      war. Then we will visit the War Remnants Museum, which
                      primarily contains exhibits relating to the American phase
                      of the Vietnam War. Then transfer to the Moc Bai border
                      gate Cambodia. Our tour guide and driver from Cambodia
                      will take you at Bevet border gate and transfer to Phnom
                      Penh. Have dinner at local restaurant and overnight stay
                      at Phnom Penh hotel.
                    </p>
                  </h2>
                </div>

                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 9: Phnom Penh City Tour - Siem Reap:
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      Brk fst at hotel. This morning we visit to the national
                      museum, also called Musee des Beaux-Arts. A French
                      archaeologist and painter, Georges Groslier, designed it
                      in Khmer style in 1917, we will visit the Royal Place. The
                      palace was opened in 1870 under king Norodom, and now
                      contains the Royal Residence, the Throne Hall, the Silver
                      Pagoda, and other buildings. The Silver Pagoda (Wat Preah
                      Keo Morokat) is one of the city’s most visited sites and
                      offers a display of priceless Buddhist and historical
                      objects. The pagoda draws its name with more than 5,000
                      silver tiles, which cover a floor in the temple. The
                      building serves less as a functioning shrine, no monks
                      currently reside here, than a repository of cultural
                      treasures such as the famous Emerald Buddha and many other
                      valuable statues. Then we visit the Toul Sleng Prison
                      Museum and the Killing Fields of Choeung Ek-both grime
                      reminders of Combodia’s bloody past under Pol Pot. It is
                      almost inconceivable to confront the nature of true evil
                      here in this gentle land, but the Buddhist Memorial at
                      Choeung Ek, commemorates the 1.7 million victims of the
                      1975-79 Pol Pot regime. This excursion may prove
                      distressing for some. It is however, an important piece of
                      this country’s historical and cultural puzzle. Transfer to
                      Siem Reap by road trip. It is 320 km and takes around 5.5
                      hrs. drive. Check in hotel in arrival and have dinner at
                      local restaurant. Overnight stay at Siem Reap.
                    </p>
                  </h2>
                </div>

                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 10: Siem Reap - Angkor Wat Tour :
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      Today we start with the most famous of all the temples on
                      the plains of Angkor: Angkor Wat. Angkor wat is one of the
                      world’s most stunning buildings. Angkor was the capital of
                      Khmer that existed from 802 to 1431. Its distinctive five
                      towers are emblazoned on the Cambodian flag and the 12th
                      century masterpiece is considered by art historians to be
                      the prime example of classical Khmer art and architecture.
                      Angkor Wat’s five towers symbolized Meru’s five peak – the
                      enclosed wall represents the mountains at the edge of the
                      world and the surrounding moat, the ocean beyond. After
                      lunch, visit the ancient capital of Angkor Thom (12th
                      century). Visit Prasat Kravan with its unique brick
                      sculptures and Ta Prohm. One of the area’s most beautiful
                      temples, Ta Prohm has been relatively untouched since it
                      was discovered and retains much of its mystery. Its appeal
                      lies in the fact that, unlike the other monuments of
                      Angkor, it was abandoned and swallowed by the jungle,
                      looking very much the ways most of the Angkor temples
                      appeared when European explorers first stumbled upon them.
                      The sightseeing tour of Angkor area we spend a full day
                      exploring wondrous ancient ruins with the south gate of
                      Angkor Thom, which is famous for its series of colossal
                      human faces carved in stone, the impressive Bayon Temple,
                      the Royal Enclosure, phimeanakas, the Elephant Terrace,
                      The terrace of the Leper King and the largest as well as
                      the most complete temple of the Angkor Wat.In the evening,
                      we enjoy the beautiful sunset at Phnom Bakeng hill top.
                      Overnight stop at Siem Reap.
                    </p>
                  </h2>
                </div>

                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 11: Siem Reap - Tonle Sap Lake Tour :
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      Brk fast at hotel. This morning, by car to pouk district
                      about 15 km west of Siem Reap town you visit the silk
                      farm, a fascinating farm/workshop where you can see the
                      entire silk creation process including growing the food
                      for the silk worms, breeding the worms, silk extraction
                      and refinement, traditional kit dying pattern creation and
                      looming. Retail silk and souvenir shop. On the way back,
                      visit the Western Baray’s (Baray occidental) measuring 8
                      km by 2.3 km which provided water for the intensive
                      cultivation of lands around Angkor. Afternoon visiting the
                      floating village of Chong Khneas, located 13 km south of
                      Siem Reap. Take a traditional wooden boat for a ride on
                      the Tonle Sap Lake, the Great Lake of Combodia, one of the
                      largest lake in Asia, where you can find schools,
                      hospitals and restaurants and much more in the great lake
                      of Tonle Sap. Return to the town for some shopping and
                      dinner at local restaurant. Overnight stay at Siem Reap.
                    </p>
                  </h2>
                </div>

                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 12: Siem Reap - Departure :
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      Brkfst at the hotel. You are free at your leisure for
                      shopping until check out and transfer to the airport to
                      take your departure flight back to your home. End of
                      services.{' '}
                    </p>
                  </h2>
                </div>
              </Tab.Panel>

              <Tab.Panel
                className={classNames(
                  'space-y-4 rounded-xl bg-white p-3',
                  'focus:outline-none'
                )}
              >
                Terms and Conditions apply
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className='space-y-8'>
          {/* Price details */}
          <div className='mt-8 md:mt-0'>
            <h1 className='text-lg font-semibold'>Price Details:</h1>
            <div className='relative mt-4 overflow-x-auto'>
              <table className='w-full border-2 border-gray-300 text-center text-sm text-gray-800'>
                <thead className='bg-gray-50 text-xs uppercase text-gray-800'>
                  <tr>
                    <th scope='col' className='px-6 py-3'>
                      Economy/Standard
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Deluxe
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Luxury
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b bg-white'>
                    <td className='px-6 py-4'>-</td>
                    <td className='px-6 py-4'>Rs. 95600/- per person</td>
                    <td className='px-6 py-4'>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Book button */}
          <button className='w-full rounded-md bg-cyan-600 p-3 text-white'>
            Book now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page;
