import { useState } from 'react';
import Toast from './Toast';

function Course() {
  const [toastMessage, setToastMessage] = useState('');

  function handleEnrol() {
    // Show toast
    setToastMessage("You have enrolled in the course!");

    setTimeout(() => {
      // Hide toast
      setToastMessage('');
    }, 3000);
  }

  return (
    <>
      <div id="app">
        <article>
          <h2>React Course</h2>
          <p>
            A course that teaches you React from the ground up and in great depth!
          </p>
          <button onClick={handleEnrol}>Enrol</button>
        </article>
      </div>
      {toastMessage && <Toast message={toastMessage} />}
    </>
  );
}

export default Course;
