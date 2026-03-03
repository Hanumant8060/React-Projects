import { useState } from 'react';
import {styled} from 'styled-components';
import Button from './Button';
import CustomInput from './CustomInput';
import SuccessModal from './SuccessModal';


const ControlComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem; 
`

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLabelVisible, setIsLabelVisible] = useState(true);

  let labelColor = 'white';
  if(!enteredEmail.includes('@') || enteredPassword.trim().length < 6) {
    labelColor = 'red';
  }

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
        <>
    <div id="auth-inputs" className='p-5 flex flex-col w-full max-w-sm mx-auto bg-gradient-to-b from-stone-800 from-50 to-stone-800 to-100 rounded-lg'>
      <div className="flex flex-col gap-2 mb-6">
          <CustomInput
            label="Email"
            type="email"
            invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
          <CustomInput            label="Password"
            type="password"
            invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
      </div>
      <div className="flex items-center justify-between">
        <button type="button" className="text-sm text-white hover:text-gray-300  ">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
{submitted && <SuccessModal message="Login successful!" onClose={() => setSubmitted(false)} />}
    </>
  );
}
