import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1rem;
  min-width: 120px;
  width: fit-content;
  align-self: flex-end;
  border-radius: 0.5em;
  padding: 0.5em 2em;
  background-color: var(--primary);
  color: white;
  border: none;
  font-weight: 500;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

  &:disabled {
    background-color: #CCCCCC;
  }

  &:enabled:hover {
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));
  }
`;
