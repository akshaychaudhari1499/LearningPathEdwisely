import React, { useState, useEffect } from 'react';

function AboutText() {
  const [text, setText] = useState( `Welcome back Akshay !`);
  const textOptions = ['Thank you for choosing Edwisely :)','Want to check your progress ?','Cool ! You can check it in the About Section ','Study Well , All the very Best :)'];

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (textOptions.indexOf(text) + 1) % textOptions.length;
      setText(textOptions[newIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, [text, textOptions]);

  return (
    <div className='welcome'>
      {text}
    </div>
  );
}
export default AboutText;