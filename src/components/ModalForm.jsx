import Modal from 'react-modal';
import styled from 'styled-components';
import { Button } from './Button';

export function ModalForm({ display, setDisplay, confirmText, confirmColor, onSubmit, title, children }) {
  return (
    <Modal
      isOpen={!!display}
      style={modalStyle}
    >
      <ModalFormStyle onSubmit={onSubmit} confirmcolor={confirmColor}>
        <h3>{title}</h3>
        <div className='content'>
          {children}
        </div>
        <div className="buttons">
          <Button className='cancel' onClick={() => setDisplay(false)}>Cancel</Button>
          <Button className='submit' type='submit'>{confirmText}</Button>
        </div>
      </ModalFormStyle>
    </Modal>
  );
}

export const ModalFormStyle = styled.form`
  max-width: 40rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  padding: 1.5em;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  h3 {
    font-size: 1.33em;
    font-weight: 600;
  }

  .buttons {
    display: flex;
    gap: 1em;
    align-self: flex-end;
  }

  .cancel {
    color: black;
    background-color: white;
    outline: 1px solid var(--border-mid);
    outline-offset: -1px;
  }

  .submit {
    color: white;
    background-color: ${props => props.confirmcolor};
  }
`;

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    border: 'none'
  }
};
