import buildFragment from './buildFragment';

const baseUrl = 'http://localhost';

export const Header = buildFragment({ baseUrl, port: 9090 });
export const Footer = buildFragment({ baseUrl, port: 8080 });
export const Reviews = buildFragment({ baseUrl, port: 6060 });
export const MessageBus = buildFragment({ baseUrl, port: 5050 });
export const Offers = buildFragment({ baseUrl, port: 2020 });
