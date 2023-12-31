import { RewriteModalTitle } from './RewriteContact.styled';
import { useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { Notify } from 'notiflix';
import { FormWrapper, Label, Input, Button } from 'components/Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactOperations } from 'redux/operations';

import { selectors } from 'redux/selectors';

export default function RewriteContact({ contactData, onClose }) {
  const { name, number, id } = contactData;

  const [contactName, setContactName] = useState(name);
  const [contactNumber, setContactNumber] = useState(number);

  const contacts = useSelector(selectors.selectContacts);

  const isLoading = useSelector(selectors.selectLoading);
  const dispatch = useDispatch();

  const onChangeInput = e => {
    switch (e.target.name) {
      case 'name':
        setContactName(e.target.value);
        break;
      case 'number':
        setContactNumber(e.target.value);
        break;

      default:
        return;
    }
  };

  const onFormSubmit = async e => {
    e.preventDefault();

    for (let contact of contacts) {
      if (contact.name === contactName) {
        return Notify.warning(
          `You didn't change the contact with the name "${contact.name}"`
        );
      }
    }

    await dispatch(
      contactOperations.editContact({ contactName, contactNumber, id })
    );
    Notify.success('Contact successfully modified');

    onClose();
    e.target.reset();
  };

  return (
    <>
      <RewriteModalTitle>Edit contact</RewriteModalTitle>
      <form autoComplete="off" onSubmit={onFormSubmit}>
        <FormWrapper>
          <Label>
            <span>Name</span>
            <Input
              type="text"
              name="name"
              value={contactName}
              onChange={onChangeInput}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>

          <Label>
            <span>Phone number</span>
            <Input
              type="tel"
              name="number"
              value={contactNumber}
              onChange={onChangeInput}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>

          <Button type="submit">
            Edit
            {isLoading && (
              <Oval
                height="25"
                width="25"
                radius="9"
                color="#000000"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                visible={true}
                strokeWidth={6}
              />
            )}
          </Button>
        </FormWrapper>
      </form>
    </>
  );
}
