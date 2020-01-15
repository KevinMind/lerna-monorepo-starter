import React, { useEffect, useState } from 'react';

import OfferCard from '@smava-packages/offer-component';

const Offer = OfferCard.default;

const getOffers = route => {
  return fetch(`http://localhost:3051/${route}`)
    .then(resp => resp.json())
    .then(({ data }) => data)
};

const Advisors = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    getOffers('advisors').then(setOffers)
  }, [])
  return (
    <div>
      hello advisors you have {offers.length} offers
      {offers.length  && offers.map(offer =>  (
        <Offer {...offer} />
      ))}
    </div>
  );
};

export default Advisors;
