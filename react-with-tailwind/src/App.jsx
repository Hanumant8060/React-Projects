import AuthInputs from './components/AuthInputs.jsx';
import Color from './components/Color.jsx';
import Header from './components/Header.jsx';
import { useState } from 'react';

export default function App() {
   const [isYes,setIsYes] = useState('');
  return (
    <>
      <Header />
      <AuthInputs />
      <Color />
      {/* <div>
        <h1 className={`white ${isYes ? 'green' : 'red'}`}>CSS is great!</h1>
        <ul>
          <li>
            <button onClick={() => setIsYes(true)}>Yes</button>
        </li>
        <li>
          <button onClick={() => setIsYes(false)}>No</button>
      </li>
    </ul >
    </div > */}
    </>
  );
}
