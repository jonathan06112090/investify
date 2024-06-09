import MaxWidthWrapper from '@/compoents/MaxWidthWrapper';
import React from 'react';

const FAQ = () => {
  return (
    <MaxWidthWrapper className="mb-8 mt-24 text-center max-w-5xl">
      <h1 className="text-4xl mb-8">Ofte Stillede Spørgsmål</h1>
      
      <div className="text-left">
        <h2 className="text-2xl mb-4">Hvad er Investify?</h2>
        <p className="mb-8">
          Investify giver dig et detaljeret og tilpasset overblik over din portefølje. Vores AI-teknologi hjælper dig med at forbedre din portefølje, så den passer til dine behov. Du skal blot uploade din portefølje og besvare spørgsmål med det samme.
        </p>

        <h2 className="text-2xl mb-4">Hvordan uploader jeg min portefølje?</h2>
        <p className="mb-8">
          For at uploade din portefølje, skal du logge ind på din konto, gå til Portefølje sektionen og følge vejledningen.
        </p>

        <h2 className="text-2xl mb-4">Hvordan fungerer AI forbedringer?</h2>
        <p className="mb-8">
          Vores AI analyserer din portefølje baseret på aktuelle markedsdata og dine investeringsmål. AI en giver derefter anbefalinger til, hvordan du kan optimere din portefølje for bedre afkast og risikostyring.
        </p>

        <h2 className="text-2xl mb-4">Kan jeg bruge Investify gratis?</h2>
        <p className="mb-8">
          Vi tilbyder en gratis prøveperiode, så du kan opleve fordelene ved Investify. Efter prøveperioden kan du vælge mellem forskellige abonnementer, der passer til dine behov.
        </p>

        <h2 className="text-2xl mb-4">Hvordan kontakter jeg kundesupport?</h2>
        <p className="mb-8">
          Du kan kontakte vores kundesupport via e-mail på support@investify.com. Vores supportteam er klar til at hjælpe dig med alle dine spørgsmål.
        </p>
      </div>
    </MaxWidthWrapper>
  );
};

export default FAQ;

