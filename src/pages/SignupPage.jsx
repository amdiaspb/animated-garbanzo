import styled from 'styled-components';
import { Button } from '../components/Button';
import { useValue } from '../hooks/useValue';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../components/UserContext';
import { InputText } from '../components/InputText';

export function SignupPage() {
  const [username, updateUsername] = useValue();
  const { setName } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setName(username);
    navigate("/");
  }

  return (
    <SignupStyle>
      <h1>Welcome to CodeLeap network!</h1>
      <form onSubmit={handleSubmit}>
        <InputText
          name="username" label="Please enter your username"
          value={username} onChange={updateUsername}
          placeholder='John doe' required
        />
        <Button type="submit" disabled={!username}>ENTER</Button>
      </form>
    </SignupStyle>
  );
}

const SignupStyle = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 32em;
  width: 100%;
  padding: 1.5em;
  margin: auto;
  border-radius: 1em;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  h1 {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 1em;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
