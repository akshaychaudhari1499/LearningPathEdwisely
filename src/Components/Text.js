import React, { useState, useEffect } from "react";
import "./Text.css";
function Text() {
  const [text, setText] = useState(
    `Making yourlearning simple Tomorrow’s Indian Engineers need us Today to build a better tomorrow We are Edwisely, Indian Engineering Student Learning and Career Platform`
  );
  const textOptions = [
    "Merging learning  and career Its time for us to reflect upon and adapt to new ways of merging our engineering education system with the industry requirements. Edwisely is taking that bold step to bridge that gap by understanding the needs of the industry and helping students realise their ",
    "It is all about being the best,not a mediocre  We don’t want the future engineers to stumble upon their career opportunities. We want them to discover, choose and realise their dream jobs and be the best at it",
    "Careers that are passionate A zillion opportunities await us to build a whole new world. Edwisely will not only help these engineering graduates discover them but also will help them plan and strategize their future careers",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (textOptions.indexOf(text) + 1) % textOptions.length;
      setText(textOptions[newIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, [text, textOptions]);

  return <div className="left-text2 box">{text}</div>;
}
export default Text;
