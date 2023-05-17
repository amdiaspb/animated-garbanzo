import styled from 'styled-components';
import { InputStyle } from './InputText';

export function Textarea({ name, label, value, onChange, placeholder }) {
  return (
    <TextareaStyle>
      <label htmlFor={name}>{label}</label>
      <div>
        <textarea 
          name={name} id={name}
          value={value} onChange={onChange}
          placeholder={placeholder} required
        />
      </div>
    </TextareaStyle>
  );
}

const TextareaStyle = styled(InputStyle)`

  div {
    border-radius: 0.5rem;
    border: 1px solid var(--border);
    margin-top: 0.75em;
    overflow: hidden;
    height: 74px;
  }

  textarea {
    width: 100%;
    height: 100%;
    padding: 0.75em;
    border-radius: 0.5rem;

    resize: none;
    border: none;
  }

  textarea::placeholder {
    color: #CCCCCC;
  }
`;
