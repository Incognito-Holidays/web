import FormCard from '@components/form-card';
const Page: React.FC = () => {
  return (
    <div>
      <FormCard
        title='Contact'
        description='Contact form'
        name='Name'
        phone_number='Phone Number'
        email_id='Email Id'
        subject='Subject'
        your_message='Your Message'
      />
    </div>
  );
};

export default Page;
