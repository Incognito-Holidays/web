import { useState } from 'react';
import Formcard from '@components/form-card';

const Trains: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div>
      <Formcard
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
      />
    </div>
  );
};

export default Trains;
