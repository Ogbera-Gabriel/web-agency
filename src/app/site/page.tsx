import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="h-full w-full pt-20 md:pt-32 lg:pt-44 relative flex items-center justify-center flex-col">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <p className="text-center text-sm md:text-base lg:text-lg">Run your agency, in one place</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold text-center md:text-[150px] lg:text-[200px]">
            WebTech
          </h1>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-40px] lg:mt-[-70px]">
          <Image
            src="/assets/preview.png"
            alt="banner image"
            height={800}
            width={800}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted w-full max-w-[95%] md:max-w-[90%] lg:max-w-full"
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col pt-32 gap-4 mt-8 md:mt-12 lg:mt-20 px-4 md:px-8 lg:px-0">
        <h2 className="text-xl md:text-3xl lg:text-4xl text-center">Choose what fits you right</h2>
        <p className="text-muted-foreground text-center text-sm md:text-base lg:text-lg max-w-2xl">
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not ready to commit you can get started for free.
        </p>
        <div className='flex items-center gap-4 flex-wrap mt-6'>

        </div>
      </section>
    </>
  );
}