import ProgressBar from "react-bootstrap/ProgressBar";

function Progress({ now }) {
  console.log(now);
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default Progress;
