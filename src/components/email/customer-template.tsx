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

type CustomerEmailTemplateProps = {
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
      hotelName: string;
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

const CustomerEmailTemplate = ({
  name,
  phone,
  email,
  message,
  data
}: CustomerEmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message</Preview>
      <Body>
        <Container align='center'>
          <Section>
            <Text>Dear {name},</Text>
            <Text>
              Greeting from <strong>Incognito Holidays</strong>
            </Text>
            <Text>
              Thanks for visiting our website{' '}
              <Link href='https://incognitoholidays.com'>
                incognitoholidays.com
              </Link>
              . We have received your query and shortly one of our tour experts
              will revert to your enquiry.
            </Text>
            <Text>
              <strong>Important: </strong> In case you do not receive our reply
              or acknowledgement within the next 2 business days, it means we
              have not received your communication and request you to resend
              your query at enquiry@incognitoholidays.com
            </Text>
          </Section>
          <Section>
            <Text>Below are the details provided by you: </Text>
            {/* common */}
            <Text>
              <strong>Name:</strong> {name}
            </Text>
            <Text>
              <strong>Phone:</strong> {phone}
            </Text>
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            {/* holiday */}
            {data.holiday && (
              <Text>
                <strong>Selected Package:</strong>{' '}
                <Link href={data.holiday.selectedPackageUrl} target='_blank'>
                  {data.holiday.selectedPackage}
                </Link>
              </Text>
            )}
            {/* flight */}
            {data.flight && (
              <div>
                <Text>
                  <strong>Origin:</strong> {data.flight.originPlace}
                </Text>
                <Text>
                  <strong>Destination:</strong> {data.flight.destinationPlace}
                </Text>
                <Text>
                  <strong>Date:</strong> {data.flight.travelDate}
                </Text>
              </div>
            )}
            {/* train */}
            {data.train && (
              <div>
                <Text>
                  <strong>Origin:</strong> {data.train.originPlace}
                </Text>
                <Text>
                  <strong>Destination:</strong> {data.train.destinationPlace}
                </Text>
                <Text>
                  <strong>Date:</strong> {data.train.travelDate}
                </Text>
              </div>
            )}
            {/* hotel */}
            {data.hotel && (
              <div>
                <Text>
                  <strong>Place:</strong> {data.hotel.place}
                </Text>
                <Text>
                  <strong>Hotel Name:</strong> {data.hotel.hotelName}
                </Text>
                <Text>
                  <strong>Check-In date:</strong> {data.hotel.checkIn}
                </Text>
                <Text>
                  <strong>Check-Out date:</strong> {data.hotel.checkOut}
                </Text>
                <Text>
                  <strong>Number of rooms:</strong> {data.hotel.rooms}
                </Text>
                <Text>
                  <strong>Adults count:</strong> {data.hotel.adults}
                </Text>
                <Text>
                  <strong>Children count:</strong> {data.hotel.children}
                </Text>
              </div>
            )}
            {/* contact */}
            {data.contact && (
              <Text>
                <strong>Subject:</strong> {data.contact.subject}
              </Text>
            )}
            {/* common */}
            <Text>
              <strong>Message:</strong> {message}
            </Text>
          </Section>
          <Section>
            <Text>We look forward to serve you!</Text>
            <Text>Thanks & Regards,</Text>
            <Text>
              <strong>Team Leisure Holidays Private Limited</strong>
            </Text>
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

export default CustomerEmailTemplate;
