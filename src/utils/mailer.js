import { ServiceBroker } from 'moleculer';
import moleculer from 'moleculer-mail';

const broker = new ServiceBroker(moleculer, {
  settings: {
    from: 'borhan.testnode@gmail.com',
    transport: {
      service:'gmail',
      auth: {
        user:'borhan.testnode@gmail.com',pass:'66043322Ab-'
      }
    }
  }
});

const sendMail = ({message}) => {
  broker
    .call('mail.send', {
      to: 'john.doe@example.org',
      subject: 'Hello Friends!',
      html: 'This is the <b>content</b>!',
      text:message
    })
    .then(console.log);
}


export default sendMail