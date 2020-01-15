import styles from '../assets/styles.css';
import { Footer, Header, Reviews, MessageBus, Offers } from "../clients";

export default () => `
<!DOCTYPE html>
<html>
<head>
<style>
${styles}
</style>
</head>
<body>
${MessageBus({
  isAsync: true,
  fragmentId: 'message-bus'
})}
<div class="header flex">
${Header({
  isAsync: false,
  isPublic: false,
  fragmentId: 'header'
})}
</div>
<div class="body flex">
  <div class="left">
  ${Offers({
    isAsync: true,
    isPublic: true,
    fragmentId: 'offers'
  })}
  </div>
  <div class="middle">
  ${Reviews({
    isAsync: true,
    isPublic: false,
    fragmentId: 'reviews'
  })}
  </div>
  <div class="right">right</div>
</div>
<div class="footer flex">
${Footer({
  isAsync: false,
  isPublic: false,
  fragmentId: 'footer'
})}
</div>
</body>
</html>
`;
