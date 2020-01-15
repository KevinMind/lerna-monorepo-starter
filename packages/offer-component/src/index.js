import React from 'react';
import * as Styled from './index.styled';

const OfferCard = ({ isCustomer, ...props }) => (
  <Styled.Container>
    <Styled.Section isCustomer={isCustomer}>
      hello offer {props.id} in state: {props.state}
    </Styled.Section>
    <Styled.Section>
      <Styled.BankLogo src={`https://static.smava.de/banklogos/${props.brokerageBank.name}.svg`} alt="offer"/>
    </Styled.Section>
    <Styled.Section>
    <pre>
      {JSON.stringify(props, 0, 2)}
    </pre>
    </Styled.Section>
  </Styled.Container>
);

export default OfferCard;
