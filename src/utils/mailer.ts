// import mailer from 'nodemailer';

// const sendMail = async ({
//   from,
//   message,
//   email,
//   phone,
//   name
// }: {
//   from: string;
//   message: string;
//   email: string;
//   phone: string;
//   name: string;
// }) => {
//   try {
//     const testAccount = await mailer.createTestAccount();

//     const transport = mailer.createTransport({
//       host: 'inst.bornoit.com',
//       port: 465,
//       secure: true,
//       auth: {
//         user: 'contact@inst.bornoit.com',
//         pass: 'Pass@#1234@#'
//       }
//     });

//     const info = await transport.sendMail({
//       from,
//       to: 'borhan.dev@gmail.com',
//       subject: 'Contact Mail From Borno IT',
//       text: message,
//       html: `
//       <p>Name : ${name}</p>
//       <p>Email: ${email}</p>
//       <p>Phone: ${phone}</p>

//       `
//     });

//     console.log(`Message From ${info.messageId}`);
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default sendMail;
// //

export default function () {}
