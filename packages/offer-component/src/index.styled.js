import styled from  'styled-components';

export const Container = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

export const Section  = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ isCustomer }) => isCustomer ? 'red' : 'blue'};
  flex-grow: 1;
`;

export const BankLogo = styled.img`
  border: 1px solid blue;
  height: 50px;
  width: auto;
`;
