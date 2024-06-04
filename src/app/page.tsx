import Image from 'next/image'
import Link from 'next/link';
import MaxWidthWrapper from '@/compoents/MaxWidthWrapper';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/compoents/ui/button';
import { SparklesCore } from "@/compoents/ui/sparkles";
import { EvervaultCard, Icon } from "@/compoents/ui/evervault-card";

export default function Home() {

 
  return (
    
  <>
 <div className="h-[20rem] w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
  
      <h1 className="md:text-7xl text-6xl lg:text-9xl font-bold text-center relative z-20">
        Investify
      </h1>
      <div className="lg:w-[60rem] w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.5}
          maxSize={1.2}
          particleDensity={2000}
          className="w-full h-full"
          particleColor="#05cffc"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
    

    
  <MaxWidthWrapper className=' flex flex-col items-center justify-center text-center'>
  <Image
                    src='/pixelcut-export.jpg'
                    alt='LOGO'
                    width={540}
                    height={500}
                    className='object-none rounded-3xl '
                 />
    <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
        <p className='text-sm font-semibold text-gray-700'>
            Investify i pre-beta-stadiet
        </p>
    </div>
    
    <h1 className='max-w-3xl text-4xl font-bold md:text-5xl lg:text-6xl'>
            Få overblik over din{' '}
          <span className='text-green-600'>Portefølje</span>{' '}
          og få AI forbedringer
    </h1>
    <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
        Vi giver dig mulighed for et detaljeret og tilpasset overblik over din portefølje. Og at AI forbedringer så den passer til dig.
        Du skal blot uploade din portefølje og starte /besvar spørgsmål med det samme/.
      </p>
    <div>
    
    </div>
    <Link className={buttonVariants()} href='/porfolio' target='_blank'>
        Kom igang  <ArrowRight className='ml-2 h-5 w-5'/> {/*lucide-react */}
    </Link>
 
  </MaxWidthWrapper>
  <div>
        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>

          <div>
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='mt-16 flow-root sm:mt-24'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <Image
                    src='/Udklip2.PNG'
                    alt='product preview'
                    width={2283}
                    height={1006}
                    quality={100}
                    className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/>

      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[35rem]">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
 
        <EvervaultCard text="AIPortfolioHjælper" />
 
        <h2 className="dark:text-white text-black mt-4 text-sm font-light">
          Hos Investify har vi designet en AI, der giver overblik over din porfolio og forslag så den er optimerat til dig og din risiko
        </h2>
        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
          AI Portfolio Hjælper
        </p>
      </div>

      {/* Feature section */}
      <div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>             
              Kom i gang på få minutter
            </h2>
            <p className='mt-4 text-lg text-gray-600'>
              Det har aldrig været nemmere at få et detaljeret optimering og overblik over din portefølje
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-green-600'>
                Step 1
              </span>
              <span className='text-xl font-semibold'>
                Opretter dig en konto
              </span>
              <span className='mt-2 text-zinc-700'>
                start med tre måneder gratis 
                og vælg derefter vores{' '}
                <Link
                  href='/pricing'
                  className='text-blue-700 underline underline-offset-2'>
                  pro plan
                </Link>
                .
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-green-600'>
                Step 2
              </span>
              <span className='text-xl font-semibold'>
                Upload din Portefølje
              </span>
              <span className='mt-2 text-zinc-700'>
                Vi behanddler din portefølje og gør den klar til dig.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-green-600'>
                Step 3
              </span>
              <span className='text-xl font-semibold'>
                Begynd 
              </span>
              <span className='mt-2 text-zinc-700'>
                Så enkelt er det. Prøv Investify i dag – det tager virkelig eun et par minutter.
              </span>
            </div>
          </li>
        </ol>

        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <Image
                    src='/aktierMidlerTidigt.jpg'
                    alt='Aktier Midler Tidigt'
                    width={1526}
                    height={1341}
                    className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
                  />
            </div>
          </div>
        </div>
      </div>

      </>
     
 
  )
}
