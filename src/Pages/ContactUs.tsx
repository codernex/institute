import { useForm } from 'react-hook-form';
import { FaEnvelopeOpen, FaLocationArrow, FaPhone } from 'react-icons/fa';

export const ContactUs = () => {
  const { handleSubmit, register } = useForm<IForm>();

  const onSubmit = handleSubmit(
    ({ email, firstName, lastName, message, phone }) => {
      alert('Thank For Contacting Us!');
    }
  );

  return (
    <div className='contact container p-5'>
      <h2 className='title'>Contact Us</h2>

      <div className='address'>
        <p>
          <FaLocationArrow /> MT Building, Level#8, Sheik Hasina Software &
          Technology Park, Jashore
        </p>
        <p>
          <FaPhone /> +8801958305010, +8801958305015
        </p>
        <p>
          <FaEnvelopeOpen /> contact@inst.bornoit.com
        </p>
      </div>

      <form onSubmit={() => onSubmit()} className='contact__form'>
        <div className='input__group'>
          <input
            {...register('firstName')}
            type='text'
            placeholder='First Name *'
            required
          />
          <input
            {...register('lastName')}
            type='text'
            placeholder='Last Name *'
            required
          />
        </div>
        <div className='input__group'>
          <input
            {...register('email')}
            type='email'
            placeholder='Email *'
            required
          />
          <input type='tel' {...register('phone')} placeholder='Phone' />
        </div>
        <textarea
          {...register('message')}
          placeholder='Message *'
          required
        ></textarea>
        <button type='submit'>Send Message</button>
      </form>
    </div>
  );
};
