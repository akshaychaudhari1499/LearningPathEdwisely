import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';

function Progress({now}) { 
 console.log(now)
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default Progress;