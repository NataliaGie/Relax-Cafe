import React from 'react';
import { ContactSection,
         ContactForm,
         ContactItemsColumn,
         ContactItemsRow,
         ContactItem,
         ContactMessage } from './ContactElements';
import { PrimaryButton } from '../PrimaryButton';
import Title from '../Title';

const ContactPage = () => (
    <ContactSection>
        <Title fixed>Get In Touch!</Title>
        <ContactForm>
            <ContactItemsColumn>
                <ContactItemsRow>
                    <ContactItem type="text" placeholder="Name" />
                    <ContactItem type="email" placeholder="e-mail" required />
                </ContactItemsRow>
                <ContactMessage placeholder="Your message" required />
                <PrimaryButton>Submit</PrimaryButton>
            </ContactItemsColumn>
        </ContactForm>
    </ContactSection>
);

export default ContactPage;