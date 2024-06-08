import MaxWidthWrapper from '@/compoents/MaxWidthWrapper'
import Image from 'next/image'

// pages/index.js
//https://rapidapi.com/letscrape-6bRBa3QguO5/api/real-time-finance-data/pricing

{/* 

foraktier data fra api er dog begrænset 
async function getData() {
 
  const res = await fetch('https://real-time-finance-data.p.rapidapi.com/search')
  // 
  if (!res.ok) {
    
   
    

  }
 
 
}
*/}
 
export default async function Page() {
  {/* const data = await getData() */}
 
  
  return (<>
    <main></main>
  
      <div>
        <h1 className='text-center text-7xl'>
          Aktier
        </h1>
      </div>
      <div>
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='mt-16 flow-root sm:mt-24'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                <Image
                    src='/aktierMidlerTidigt.JPG'
                    alt='LOGO'
                    width={1526}
                    height={1341}
                    className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
                  />
                </div>
              </div>
            </div>
          </div>
      
            
              
  
    </>)

}
