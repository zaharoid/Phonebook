import { useState } from 'react';
import Phonebook from 'components/Phonebook';
import Modal from 'components/Modal';
import { CloseIcon } from 'components/Modal/Modal.styled';
import { ModalTitle, CloseModalBtn } from 'components/Modal/Modal.styled';
import { AddButton, AddIcon } from 'components/IconButton/IconButton.styled';

export const AddContactModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <AddButton onClick={toggleModal} aria-label="open modal">
        <AddIcon fill="#fff" width="32" height="32"></AddIcon>
      </AddButton>
      {showModal && (
        <Modal onClose={toggleModal} showModal={showModal}>
          <ModalTitle>Add contact</ModalTitle>
          <Phonebook onCloseModal={toggleModal} />
          <CloseModalBtn type="button" onClick={toggleModal}>
            <CloseIcon />
          </CloseModalBtn>
        </Modal>
      )}
    </>
  );
};
