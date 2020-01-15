import React from 'react';
import { action } from '@storybook/addon-actions';
import Offer from './index';

export default {
  title: 'Offer',
  component: Offer,
};

const mockData = {
  "id":4633059143,
  "bankingApplicationNumber":4633059123,
  "state":"APPLICATION_FILTERED",
  "creationDate":"2020-01-14T09:08:19.000+0000",
  "simplifiedProcessing":false,
  "newSchemaId":4633059144,
  "loanApplicationId":4633058981,
  "brokerageBank":{
    "id":30253,
    "name":"swk",
    "valid":true,
  },
  "loanApplicationTO":{
    "id":4633058981,
    "category":"Freie Verwendung",
    "initiatorType":"SYSTEM",
    "visible":true,
  },
};

export const OfferDefault = () => <Offer {...mockData} />;
