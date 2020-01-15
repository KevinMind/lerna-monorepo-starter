import React, { useEffect, useState } from 'react';

import OfferCard from '@smava-packages/offer-component';

const Offer = OfferCard.default;

const getOffers = route => {
  return fetch(`http://localhost:3051/${route}`)
    .then(resp => resp.json())
    .then(({ data }) => data)
};

const Customers = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    getOffers('customers').then(setOffers)
  }, [])
  return (
    <div>
      hello customers you have {offers.length} offers
      {offers.length  && offers.map(offer =>  (
        <Offer {...offer} isCustomer />
      ))}
    </div>
  );
};

export default Customers;
