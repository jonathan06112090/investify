import MaxWidthWrapper from "@/compoents/MaxWidthWrapper";
import { PLANS } from "@/config/stripe";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/compoents/ui/tooltip";
import React from "react";
import { Check, HelpCircle, Minus } from "lucide-react";
/*https://www.youtube.com/watch?v=ucX2zXAZ1I0 9:06:45 and stripe config  https://docs.stripe.com/cli/config
             
             */

const pricingItems = [
  {
    plan: 'Gratis',
    tagline: 'Til små sideprojekter.',
    features: [
      {
        text: 'Aktiekurser',
        footnote: 'Kan se aktiekurser',
      },
      {
        text: 'Afkastberegner',
        footnote: 'adgang til afkastberegner',
      },
      {
        text: 'portefølje oversigt/hjælper',
        footnote: 'ok',
        negative: true,
      },
      {
        text: 'AI-forslag',
        footnote: 'AI-forslag baseret på præference',
        negative: true,
      },
      {
        text: 'Live nyhedsopdateringer',
        footnote: 'Live nyhedsopdateringer releterede til aktier',
        negative: true,
      },
    ],
  },
  {
    plan: 'Pro',
    tagline: 'Til en investor ',
    quota: PLANS.find((p) => p.slug === 'pro')!,
    features: [
      {
        text: 'Aktiekurser',
        footnote: 'Kan se aktiekurser',
      },
      {
        text: 'Afkastberegner',
        footnote: 'adgang til afkastberegner',
      },
      {
        text: 'portefølje oversigt/hjælper',
        footnote: 'ok',
      },
      {
        text: 'AI-forslag',
        footnote: 'AI-forslag baseret på præference',
      },
      {
        text: 'Live nyhedsopdateringer',
        footnote: 'Live nyhedsopdateringer releterede til aktier',
        negative: true,
      },
    ],
  },
  {
    plan: 'Pro News+',
    tagline: 'Til den erfarne investor',
    quota: PLANS.find((p) => p.slug === 'pro')!,
    features: [
      {
        text: 'Aktiekurser',
        footnote: 'Kan se aktiekurser',
      },
      {
        text: 'Afkastberegner',
        footnote: 'adgang til afkastberegner',
      },
      {
        text: 'portefølje oversigt/hjælper',
        footnote: 'ok',
      },
      {
        text: 'AI-forslag',
        footnote: 'AI-forslag baseret på præference',
      },
      {
        text: 'Live nyhedsopdateringer',
        footnote: 'Live nyhedsopdateringer releterede til aktier',
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
                  "border-2 border-green-600 shadow-blue-200": plan === "Pro News+",
                }
              )}> 
                {plan === "Pro" && ( //if plan = Pre
                  <div className='absolute -top-5 left-0 right-0 mx-auto w32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white'>
                    Opgrader nu
                  </div>
                )} 
                {plan === "Pro News+" && ( //if plan = Pro News+
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
                        Et Examplegit 
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                <ul className="my-10 space-y-5 px-8">
                  {features.map(({text, footnote, negative}) => (
                    <li key={text} className="flex space-x-5">
                      <div className="flex-shrink-0">
                          {negative ? (
                            <Minus className="h-6 w-6 text-gray-300"/>
                          ) : (
                            <Check className="h-6 w-6 text-gray-500"/>
                          )}
                      </div>
                      {footnote ? (
                        <div className="flex items-center space-x-1">
                          <p className={cn("text-gray-400",{"text-gray-600":negative,})}>
                            {text}
                            <Tooltip delayDuration={300}>
                              <TooltipTrigger className="cursor-default ml-1.5"> 
                        
                                <HelpCircle className="h-4 w-4 text-zinc-500"/>
                              </TooltipTrigger>
                      
                              <TooltipContent className="w-80 p-2">
                                {footnote}
                              </TooltipContent>
                            </Tooltip>
                          </p>
                        </div>
                      ) : <p>
                        <p className={cn("text-gray-400",{"text-gray-600":negative,})}></p>
                        </p>}
                    </li>
                  ))}


                </ul>




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
