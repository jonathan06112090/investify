import MaxWidthWrapper from "@/compoents/MaxWidthWrapper";
import { PLANS } from "@/config/stripe";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/compoents/ui/tooltip";
import React from "react";
import { HelpCircle } from "lucide-react";
/*https://www.youtube.com/watch?v=ucX2zXAZ1I0 9:06:45 and stripe config  https://docs.stripe.com/cli/config
             
             */

const pricingItems = [
  {
    plan: 'Gratis',
    tagline: 'For small side projects.',
    quota: 10,
    features: [
      {
        text: '5 pages per PDF',
        footnote: 'The maximum amount of pages per PDF-file.',
      },
      {
        text: '4MB file size limit',
        footnote: 'The maximum file size of a single PDF file.',
      },
      {
        text: 'Mobile-friendly interface',
      },
      {
        text: 'Higher-quality responses',
        footnote: 'Better algorithmic responses for enhanced content quality',
        negative: true,
      },
      {
        text: 'Priority support',
        negative: true,
      },
    ],
  },
  {
    plan: 'Pro',
    tagline: 'For larger projects with higher needs.',
    quota: PLANS.find((p) => p.slug === 'pro')!,
    features: [
      {
        text: '25 pages per PDF',
        footnote: 'The maximum amount of pages per PDF-file.',
      },
      {
        text: '16MB file size limit',
        footnote: 'The maximum file size of a single PDF file.',
      },
      {
        text: 'Mobile-friendly interface',
      },
      {
        text: 'Higher-quality responses',
        footnote: 'Better algorithmic responses for enhanced content quality',
      },
      {
        text: 'Priority support',
      },
    ],
  },
  {
    plan: 'Pro+',
    tagline: 'For larger projects with higher needs.',
    quota: PLANS.find((p) => p.slug === 'pro')!,
    features: [
      {
        text: '25 pages per PDF',
        footnote: 'The maximum amount of pages per PDF-file.',
      },
      {
        text: '16MB file size limit',
        footnote: 'The maximum file size of a single PDF file.',
      },
      {
        text: 'Mobile-friendly interface',
      },
      {
        text: 'Higher-quality responses',
        footnote: 'Better algorithmic responses for enhanced content quality',
      },
      {
        text: 'Priority support',
      },
    ],
  },
  
]

 
export default function Page() {
  return (

    <>
      <MaxWidthWrapper className="mb-8 mt-24 text-center max-w-5xl">
        <div className="mx-auto mb-10 sm:max-w-lg">
          <h1 className="text-6xl font-bold sm:text-7xl">Pricing</h1>
          <p className="mt-5 text-gray-600 sm-600 sm:text-lg">
            Uanset om du bare prøver vores service eller har brug for mere, har vi dig dækket.
          </p>
        </div>

        <div className="pt-12 grid grid-cols-1 gap-10 lg:grid-cols-2"> {/*(npx shadcn-ui@latest add tooltip) tooltips for the pricing points shadcn-ui@latest*/ }
            <TooltipProvider>
             {pricingItems.map(({plan, tagline, quota, features}) => {
              const price = PLANS.find((p) => p.slug === plan.toLowerCase())?.price.amount || 0

              return (
              <div 
              key={plan} 
              className={cn(
                "relative rounded-2xl bg-white shadow-lg", {
                  "border-2 border-blue-600 shadow-blue-200": plan === "Pro",//if plan = Pre
                  "border border-gray-200": plan !== "Pro",//if plan not Pre
                  "border-2 border-green-600 shadow-blue-200": plan === "Pro+",
                }
              )}> 
                {plan === "Pro" && ( //if plan = Pre
                  <div className='absolute -top-5 left-0 right-0 mx-auto w32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white'>
                    Opgrader nu
                  </div>
                )} 
                {plan === "Pro+" && ( //if plan = Pre
                  <div className='absolute -top-5 left-0 right-0 mx-auto w32 rounded-full bg-gradient-to-r from-green-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white'>
                    Opgrader nu
                  </div>
                )} 

                <div className="p-5">
                  <h3 className="my-3 text-center font-display text-3xl font-bold">
                    {plan}
                  </h3>
                  <p className="text-gray-500">{tagline}</p>
                  <p className="text-6xl my-5 font-display font-semibold">
                    {price}kr
                  </p>
                  <p className="text-gray-500">om måneden</p>
                </div>

                <div className="flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50 rounded-b-xl ">
                  <div className="flex items-center space-x-1">
                   {/*converting the number to the local formatting */}

                    <Tooltip delayDuration={300}>
                      <TooltipTrigger className="cursor-default ml-1.5"> 
                        <HelpCircle className="h-4 w-4 text-zinc-500"/>
                      </TooltipTrigger>
                      <TooltipContent className="w-80 p-2">
                        ijfij fojfijf oijofij ojofjx 
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>
              )
             }
             
             )}

             
             </TooltipProvider>
        </div>

      </MaxWidthWrapper>

    </>

  );
}