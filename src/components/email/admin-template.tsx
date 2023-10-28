import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Link,
  Hr
} from '@react-email/components';

type AdminEmailTemplateProps = {
  name: string;
  phone: string;
  email: string;
  message: string;
  data: {
    holiday?: {
      selectedPackage: string;
      selectedPackageUrl: string;
    };
    flight?: {
      originPlace: string;
      destinationPlace: string;
      travelDate: string;
    };
    train?: {
      originPlace: string;
      destinationPlace: string;
      travelDate: string;
    };
    hotel?: {
      place: string;
      checkIn: string;
      checkOut: string;
      rooms: string;
      adults: string;
      children: string;
    };
    contact?: {
      subject: string;
    };
  };
};

const AdminEmailTemplate = ({
  name,
  phone,
  email,
  message,
  data
}: AdminEmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message</Preview>
      <Body>
        <Container align='center'>
          <Section>
            <Text>Request details: -</Text>
            {/* common */}
            <Text>Name: {name}</Text>
            <Text>Phone: {phone}</Text>
            <Text>Email: {email}</Text>
            {/* holiday */}
            {data.holiday && (
              <Text>
                Selected Package:{' '}
                <Link href={data.holiday.selectedPackageUrl} target='_blank'>
                  {data.holiday.selectedPackage}
                </Link>
              </Text>
            )}
            {/* flight */}
            {data.flight && (
              <div>
                <Text>Origin: {data.flight.originPlace}</Text>
                <Text>Destination: {data.flight.destinationPlace}</Text>
                <Text>Date: {data.flight.travelDate}</Text>
              </div>
            )}
            {/* train */}
            {data.train && (
              <div>
                <Text>Origin: {data.train.originPlace}</Text>
                <Text>Destination: {data.train.destinationPlace}</Text>
                <Text>Date: {data.train.travelDate}</Text>
              </div>
            )}
            {/* hotel */}
            {data.hotel && (
              <div>
                <Text>Place: {data.hotel.place}</Text>
                <Text>Check-In date: {data.hotel.checkIn}</Text>
                <Text>Check-Out date: {data.hotel.checkOut}</Text>
                <Text>Number of rooms: {data.hotel.rooms}</Text>
                <Text>Adults count: {data.hotel.adults}</Text>
                <Text>Children count: {data.hotel.children}</Text>
              </div>
            )}
            {/* contact */}
            {data.contact && <Text>Subject: {data.contact.subject}</Text>}
            {/* common */}
            <Text>Message: {message}</Text>
          </Section>
          <Hr />
          <Section>
            <Text>
              This is an auto generated mail. Please do not reply to this
              message or on this email address.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default AdminEmailTemplate;
