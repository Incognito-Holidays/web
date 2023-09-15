/* eslint-disable react/no-unescaped-entities */

import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Link,
  Hr
} from '@react-email/components';

type EmailTemplateProps = {
  name: string;
  phone: string;
  email: string;
  selectedPackage: string;
  selectedPackageUrl: string;
  message: string;
};

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  phone,
  email,
  selectedPackage,
  selectedPackageUrl,
  message
}) => {
  return (
    <Html>
      <Head />
      <Preview>New message</Preview>
      <Body>
        <Container align='left'>
          <Section>
            <Heading as='h2'>A new booking request was received</Heading>
          </Section>
          <Section>
            <Text>Request details: -</Text>
            <Text>Name: {name}</Text>
            <Text>Phone: {phone}</Text>
            <Text>Email: {email}</Text>
            <Text>
              Selected Package:{' '}
              <Link href={selectedPackageUrl} target='_blank'>
                {selectedPackage}
              </Link>
            </Text>
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

export default EmailTemplate;
