import ContactsList from 'components/ContactsList';
import { AddContactModal } from 'components/CreateContactModal/AddContactModal';

const Contacts = () => {
  return (
    <>
      <AddContactModal />
      <ContactsList />
    </>
  );
};

export default Contacts;
