import ContactsList from 'components/ContactsList';

import { AddContactModal } from 'components/CreateContactModal/AddContactModal';
import Loader from 'components/Loader/Loader';

const Contacts = () => {
  return (
    <>
      <AddContactModal />
      <ContactsList />
    </>
  );
};

export default Contacts;
