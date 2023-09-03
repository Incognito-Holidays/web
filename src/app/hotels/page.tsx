import FormCard from '@components/form-card';
const Page: React.FC = () => {
  return (
    <div>
      <FormCard
        title='Contact For Hotel Booking'
        description='Contact us for booking hotel'
        name='Name'
        phone_number='Phone Number'
        email_id='Email Id'
        subject='Region, City, Area'
        your_message='Your Message'
      />
    </div>
  );
};

export default Page;
