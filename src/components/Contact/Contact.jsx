import { Notify } from 'notiflix';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Oval } from 'react-loader-spinner';
import { ReactComponent as DeleteIcon } from 'icons/delete.svg';
import { ReactComponent as EditIcon } from 'icons/edit.svg';
import { Item, ContactInfo } from './Contact.styled';
import {
  DeleteButton,
  EditButton,
  ButtonContainer,
} from 'components/IconButton/IconButton.styled';
import { contactOperations } from 'redux/operations';
import { selectError } from 'redux/selectors/selectors';
import RewriteContact from 'components/RewriteContact';
import Modal from 'components/Modal/Modal';
import { CloseModalBtn, CloseIcon } from 'components/Modal/Modal.styled';

const Contact = ({ id, name, number }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const isError = useSelector(selectError);

  const onDeleteContact = async () => {
    setLoading(true);
    try {
      await dispatch(contactOperations.deleteContact(id));

      Notify.success(`Contact ${name} was successfully deleted :)`);
    } catch (error) {
      Notify.failure('Oops, something went wrong, try again)');
    } finally {
      setLoading(false);
    }
  };

  const onCloseModal = () => {
    setModalIsOpen(false);
  };

  const onStartRewriting = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <Item>
        <ContactInfo>
          <p>Name: {name}</p>
          <p>Number: {number}</p>
        </ContactInfo>
        {loading && !isError && (
          <Oval
            height="30"
            width="30"
            radius="9"
            color="#20aee3"
            secondaryColor="#20aee3"
            strokeWidth={6}
          />
        )}
        <ButtonContainer>
          <DeleteButton
            disabled={loading}
            onClick={onDeleteContact}
            aria-label="delete contact"
          >
            <DeleteIcon fill="#991a1c" width="22" height="22"></DeleteIcon>
          </DeleteButton>
          <EditButton onClick={onStartRewriting} aria-label="edit contact">
            <EditIcon width="22" height="22" />
          </EditButton>
        </ButtonContainer>
      </Item>
      {modalIsOpen && (
        <Modal onClose={onCloseModal}>
          <RewriteContact
            contactData={{ name, number, id }}
            onClose={onCloseModal}
          />
          <CloseModalBtn onClick={onCloseModal} aria-label="close modal">
            <CloseIcon />
          </CloseModalBtn>
        </Modal>
      )}
    </>
  );
};

export default Contact;
