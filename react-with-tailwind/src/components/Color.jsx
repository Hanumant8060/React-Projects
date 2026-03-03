import React from 'react';
import { useRef } from 'react';

export default function Color() {
    const [isClicked,setIsClicked] = React.useState(false);
    const fileName = useRef(null);

    const clickHandler = () => {
        console.log('Clicked!');
    };

    function handleClick() {
        // guard against null; the ref will be attached to the file input below
        if (fileName.current) {
            fileName.current.click();
        }
    }

    return (
        // <div>
        //     <p style={{color: isClicked ? 'red': 'white'}}>Style me!</p>
        //     <button onClick ={() => setIsClicked(!isClicked)}>Toggle style</button>
        // </div>
        // <div>
        //   <h2>You're logged in!</h2>
        //   <p>Welcome to your user profile!</p>
        //   <button onClick={clickHandler}>Click me!</button>
        // </div>
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input
          ref={fileName}
          data-testid="file-picker"
          type="file"
          accept="image/*"
        />
        <button onClick={handleClick}>Pick Image</button>
      </p>
    </div>
  );
}