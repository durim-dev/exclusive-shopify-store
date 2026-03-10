import {
  Banknote,
  CircleDollarSign,
  Headset,
  Instagram,
  Linkedin,
  ShieldCheck,
  Store,
  TruckElectric,
  Twitter,
  UsersRound,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen">
      <main className="flex flex-col gap-18 md:gap-20 lg:gap-40 px-4 md:px-8 lg:px-10 py-8 md:py-12 lg:py-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full md:max-w-1/2">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              Our Story
            </h1>
            <p className="text-sm md:text-base lg:text-lg">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>

            <p className="text-sm md:text-base lg:text-lg">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-125">
            <Image
              src="/images/about-us/side-image.png"
              alt="About Us"
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full">
          <div className="flex items-center justify-between flex-col gap-4 border rounded p-8">
            <div className="bg-black w-fit p-2.5 rounded-full text-white ring-8 ring-stone-300">
              <Store />
            </div>
            <div className="flex flex-col items-center ">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                10.5K
              </h2>
              <p className="text-sm md:text-base lg:text-lg">Active Sellers</p>
            </div>
          </div>

          <div className="flex items-center justify-between flex-col gap-6 w-full border rounded p-8 bg-primary text-white">
            <div className="bg-primary w-fit p-2.5 rounded-full text-white ring-8 ring-white">
              <CircleDollarSign />
            </div>
            <div className="flex flex-col items-center ">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                10.5K
              </h2>
              <p className="text-sm md:text-base lg:text-lg">Monthly Sales</p>
            </div>
          </div>

          <div className="flex items-center justify-evenly flex-col gap-6 border rounded p-8">
            <div className="bg-black w-fit p-2.5 rounded-full text-white ring-8 ring-stone-300">
              <UsersRound />
            </div>
            <div className="flex flex-col items-center ">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                45K
              </h2>
              <p className="text-sm md:text-base lg:text-lg w-full text-center">
                Customers
              </p>
            </div>
          </div>

          <div className="flex items-center justify-evenly flex-col gap-6 border rounded p-8">
            <div className="bg-black w-fit p-2.5 rounded-full text-white ring-8 ring-stone-300">
              <Banknote />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                25K
              </h2>
              <p className="text-sm md:text-base lg:text-lg">Active Sellers</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
          <div className="flex flex-col gap-4">
            <div className="w-full relative h-64 sm:h-80 md:h-96 lg:h-125">
              <Image
                src="/images/about-us/Tom.png"
                alt="About Us"
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={75}
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Tom Johnson
              </h2>
              <p className="text-sm md:text-base lg:text-lg">
                Founder & Chairman
              </p>
              <div className="flex gap-2 mt-2.5">
                <Twitter />
                <Instagram />
                <Linkedin />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-full relative h-64 sm:h-80 md:h-96 lg:h-125">
              <Image
                src="/images/about-us/Emma.png"
                alt="About Us"
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={75}
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Emma Watson
              </h2>
              <p className="text-sm md:text-base lg:text-lg">
                Managing Director
              </p>
              <div className="flex gap-2 mt-2.5">
                <Twitter />
                <Instagram />
                <Linkedin />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-full relative h-64 sm:h-80 md:h-96 lg:h-125">
              <Image
                src="/images/about-us/Will.png"
                alt="About Us"
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={75}
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Archer Medwort
              </h2>
              <p className="text-sm md:text-base lg:text-lg">
                Product Designer
              </p>
              <div className="flex gap-2 mt-2.5">
                <Twitter />
                <Instagram />
                <Linkedin />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center w-full ">
          <div className="flex items-center justify-between flex-col gap-4">
            <div className="bg-black w-fit p-2.5 rounded-full text-white ring-8 ring-stone-300">
              <TruckElectric />
            </div>
            <div className="flex flex-col items-center ">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                FREE AND FAST DELIVERY
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Free delivery for all orders over $140
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 text-center">
            <div className="bg-black w-fit p-2.5 rounded-full text-white ring-6 ring-stone-300">
              <Headset />
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                24/7 CUSTOMER SERVICE
              </h2>

              <p className="text-sm md:text-base text-gray-600">
                24/7 customer support available
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 text-center">
            <div className="bg-black w-fit p-2.5 rounded-full text-white ring-6 ring-stone-300">
              <ShieldCheck />
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                MONEY BACK GUARANTEE
              </h2>

              <p className="text-sm md:text-base text-gray-600">
                We return money within 30 days of receiving your order
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
