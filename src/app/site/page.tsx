import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { pricingCards } from '@/lib/constants';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="h-full w-full pt-16 sm:pt-24 md:pt-32 lg:pt-44 relative flex items-center justify-center flex-col">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl">
          Run your agency, in one place
        </p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center sm:text-[100px] md:text-[150px] lg:text-[200px]">
            WebTech
          </h1>
        </div>
        <div className="flex justify-center items-center relative sm:mt-[-20px] md:mt-[-40px] lg:mt-[-70px]">
          <Image
            src="/assets/preview.png"
            alt="banner image"
            height={800}
            width={800}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted w-full max-w-[95%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%]"
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col pt-20 sm:pt-24 md:pt-28 lg:pt-32 gap-4 mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6 md:px-8 lg:px-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
          Choose what fits you right
        </h2>
        <p className="text-muted-foreground text-center text-sm sm:text-base md:text-lg lg:text-xl max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not ready to commit you can get started for free.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 flex-wrap mt-6 w-full">
          {pricingCards.map((card) => (
            <Card
              key={card.title}
              className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[300px] flex flex-col"
            >
              <CardHeader className="flex-grow">
                <CardTitle className="text-muted-foreground">
                  {card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className='text-2xl sm:text-3xl md:text-4xl font-bold'>{card.price}</span>
                <span className='text-muted-foreground'>
                  <span>/ {card.duration}</span>
                </span>
              </CardContent>
              <CardFooter className='flex flex-col items-start gap-4 mt-auto'>
                 <div className='flex gap-2'>
                    <Check />
                    <p>{card.features}</p>
                 </div>
                 <Link
                  href="/agency"
                  className='w-full text-center bg-primary p-2 rounded-md'
                 >
                  Get Started
                 </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}