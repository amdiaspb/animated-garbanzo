import styled from 'styled-components';

export function InputText({ name, label, value, onChange, placeholder }) {
  return (
    <InputTextStyle>
      <label htmlFor={name}>{label}</label>
      <input 
        type="text" name={name} id={name}
        value={value} onChange={onChange}
        placeholder={placeholder} required
      />
    </InputTextStyle>
  );
}

export const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  label {
    font-weight: 500;
  }
`;

const InputTextStyle = styled(InputStyle)`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  label {
    font-weight: 500;
  }

  input {
    border-radius: 0.5rem;
    padding: 0.5em 0.75em;
    border: 1px solid var(--border);
    margin-top: 0.75em;
  }

  input::placeholder {
    color: #CCCCCC;
  }
`;
