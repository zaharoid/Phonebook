import { useDispatch, useSelector } from 'react-redux';
import {
  List,
  TotalCount,
  ListContainer,
  InfoContainer,
  Title2,
  ContactsContainer,
} from './ContactsList.styled';
import { selectors } from 'redux/selectors';
import Contact from 'components/Contact';
import { useEffect, useMemo } from 'react';
import { contactOperations } from 'redux/operations';
import Filter from 'components/Filter';
import Error from 'components/Error';

function ContactsList() {
  const contacts = useSelector(selectors.selectContacts);
  const dispatch = useDispatch();
  const filterString = useSelector(selectors.selectFilter);
  const error = useSelector(selectors.selectError);

  const contactsCount = contacts.length;

  useEffect(() => {
    dispatch(contactOperations.fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = useMemo(() => {
    const normalizedFilter = filterString.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filterString]);

  const filteredContactsCount = getFilteredContacts.length;

  return (
    <ContactsContainer>
      <Title2>Contacts</Title2>
      <Filter />

      <ListContainer>
        <InfoContainer>
          <TotalCount>quantity: {contacts && contactsCount}</TotalCount>
          {filterString && (
            <TotalCount>Found contacts: {filteredContactsCount}</TotalCount>
          )}
        </InfoContainer>

        {error ? (
          <Error />
        ) : (
          <List>
            {contacts &&
              getFilteredContacts.map(contact => {
                return <Contact key={contact.id} {...contact} />;
              })}
          </List>
        )}
      </ListContainer>
    </ContactsContainer>
  );
}

export default ContactsList;
